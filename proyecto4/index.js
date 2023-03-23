const conversor = document.getElementById('conversor');
const convertido = document.getElementById('convertido');

const valor = document.getElementById('valor');
const respuesta = document.getElementById('respuesta');

let resultado = 0;

let km = 1;
let m = 1000;
let cm = 100000;

valor.addEventListener('keyup',e=>{
    
    if (conversor.value === "kilometro") {
        if (convertido.value === "kilometro") {
            resultado = parseFloat(valor.value);
        }else if(convertido.value === "metro"){
            resultado = parseFloat(valor.value) * m; 
        }else{
            resultado = parseFloat(valor.value) * cm;
        }
    }else if(conversor.value === "metro"){
        if (convertido.value === "kilometro") {
            resultado = parseFloat(valor.value) / 1000;
        }else if(convertido.value === "metro"){
            resultado = parseFloat(valor.value); 
        }else{
            resultado = parseFloat(valor.value) * 100;
        }
    }else{
        if (convertido.value === "kilometro") {
            resultado = parseFloat(valor.value) / 100000;
        }else if(convertido.value === "metro"){
            resultado = parseFloat(valor.value) / 100; 
        }else{
            resultado = parseFloat(valor.value);
        }
    }

    if(!resultado){
        resultado = 0;
    }

    respuesta.innerText = `${valor.value} ${conversor.value}/s equivalen a ${resultado} ${convertido.value}/s`;
});