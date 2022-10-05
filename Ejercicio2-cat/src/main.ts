import * as fs from 'fs';

//let fs= require('fs');
let parametro: string= process.argv[2];

fs.readFile(parametro, "utf-8", (error,data)=>{
    if (error){
        console.log(error.message);

    }
    console.log(data);

});

//usar con npm start ruta
// ejemplo npm start ./Hola.txt


