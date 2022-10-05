import * as fs from 'fs';
//let fs = require('fs');
let origen: string =process.argv[2];
let destino: string =process.argv[3];

fs.readFile(origen, 'utf8', function(err, datos) {
    if (err) {
      return console.log(err.message);
    }
    let copiadireccion=origen;
    let indice = copiadireccion.indexOf(".");
    let extraida = copiadireccion.substring(0, indice);


    if (destino== undefined)
    { 
        fs.writeFile(extraida+"-Copy.txt", datos ,function(err) {
        if (err) {
           return console.log(err);
       }

       console.log("El archivo fue copiado");
   });
    

    }
    else{

        //HACER LA COPIA

        fs.writeFile(destino, datos ,function(err) {
             if (err) {
                return console.log(err);
            }

            console.log("El archivo fue copiado");
        });

    }
});
// usar con : npm start direccionArchivo1 direccionArchivo2
//ejemplo npm start nuevo.txt nuevo2.txt