const express = require('express');
const request = require('request');
const dotenv = require('dotenv').config();

const app = express();
const port = process.env.PORT;

app.listen(port, ()=>{ console.log(`Servidor iniciado: http://localhost:${port}`); });

app.use(express.json());

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type');
    next();
});


app.use('/characters', async (req, res)=>{ 
    let result = await sw_api_calls('people', false);
    result = list_sort(result, 'name', 1);
    console.log('Personagens em ordem alfabética:');
    console.log(result);
    res.status(200).json(result);
});

app.use('/planets', async (req, res)=>{
    let result = await sw_api_calls('planets', false);
    result = list_sort(result, 'diameter', -1);
    console.log('Planetas ordenados do maior diâmetro para o menor (diâmetro desconhecido ao final da lista):');
    console.log(result);
    res.status(200).json(result);
});

app.use('/starships', async (req, res)=>{
    let result = await sw_api_calls('starships', false);
    result = list_sort(result, 'name', 1);
    console.log('Naves em ordem alfabética:');
    console.log(result);
    res.status(200).json(result);
});

app.use('/films', async (req, res)=>{
    let data = req.body;
    if (!data){ data = {}; }
    let result = await sw_api_calls('films', (data.search) ? data.search : false);
    //console.log(data);
    result = list_sort(result, 'episode_id', 1);
    console.log((data.search) ? 'Resultado da busca dentro de filmes (ordem cronológica):' : 'Filmes em ordem cronológica:');
    console.log(result);
    res.status(200).json(result);
});


async function sw_api_calls(dir, search){ //api call
    console.log(search)
    return new Promise(function (resolve, reject) {
        request.get({ url: (search) ? `https://swapi.dev/api/${dir}/?search=${search}` : `https://swapi.dev/api/${dir}/` }, 
        async (error, response, body)=>{
            //console.log(JSON.parse(body));
            let data = JSON.parse(body);
            let total_results = (data.count) ? data.count : 0; //Número total de resultados da requisição
            let page_length = (data.results) ? data.results.length : 0; //Número de páginas da requisução
            let pages = 1;
            let result = [];

            if ( total_results > 0 && page_length > 0 ){ 
                pages = Math.ceil(total_results / page_length);
            }else{
                resolve([]); //Nenhum resultado foi encontrado 
            }
            if (pages == 1){ 
                result = JSON.parse(body).results; 
                resolve(result); }
            if (pages > 1){
                var page_array = [];
                for(let i = 1; i <= pages; i++){
                    page_array[i - 1] = new Promise(function (resolve, reject) { 
                        request.get({ url: `https://swapi.dev/api/${dir}/?page=${i}`}, (err, res, body)=>{ resolve(JSON.parse(body).results); }); 
                    });
                }
                let page_list = await Promise.all(page_array);
                result = page_list.flat();
                resolve(result);
            }
        });
    });
}
function list_sort(list, attribute, order){
    return list.sort((a, b)=>{
        if (/^\d+$/.test(a[attribute]) && /^\d+$/.test(a[attribute])){ //Separa as integers das strings e as compara como número
            if (parseInt(a[attribute]) > parseInt(b[attribute])){ return 1 * order; }
            if (parseInt(a[attribute]) < parseInt(b[attribute])){ return -1 * order; }
            return 0;  
        }
        if (a[attribute] == 'unknown'){ return 1; } //Agrupa os com atributo desconhecidos no final da lista
        if (a[attribute] > b[attribute]){ return 1 * order; } // order alterá o sentido da ordenação
        if (a[attribute] < b[attribute]){ return -1 * order; }
        return 0;  
    });
}

//list_builder('people');
//console.log(character_list);
