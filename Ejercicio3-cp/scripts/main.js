"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
//let fs = require('fs');
let origen = process.argv[2];
let destino = process.argv[3];
fs.readFile(origen, 'utf8', function (err, datos) {
    if (err) {
        return console.log(err.message);
    }
    let copiadireccion = origen;
    let indice = copiadireccion.indexOf(".");
    let extraida = copiadireccion.substring(0, indice);
    if (destino == undefined) {
        fs.writeFile(extraida + "-Copy.txt", datos, function (err) {
            if (err) {
                return console.log(err);
            }
            console.log("El archivo fue copiado");
        });
    }
    else {
        //HACER LA COPIA
        fs.writeFile(destino, datos, function (err) {
            if (err) {
                return console.log(err);
            }
            console.log("El archivo fue copiado");
        });
    }
});
// usar con : npm start direccionArchivo1 direccionArchivo2
//ejemplo npm start nuevo.txt nuevo2.txt
