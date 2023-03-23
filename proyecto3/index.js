const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');

const respuestas = document.querySelector('.respuestas');

const respuesta1 = document.getElementById('respuesta1');
const respuesta2 = document.getElementById('respuesta2');
const respuesta3 = document.getElementById('respuesta3');

const resultado = document.getElementById('resultado');
const resultado_texto = document.getElementById('resultadoTexto');

window.addEventListener('load',e=>{
    num1.innerText = Math.floor(Math.random() * (50 - 1 + 1) + 1);
    num2.innerText = Math.floor(Math.random() * (50 - 1 + 1) + 1);
    const respuestaCorrecta = Math.floor(Math.random() * (3 - 1 + 1) + 1);
    if (respuestaCorrecta === 1) {
        respuesta1.innerText = parseFloat(num1.innerHTML) + parseFloat(num2.innerHTML);
        respuesta1.classList.add('correcto');
        respuesta2.innerText = parseFloat(respuesta1.innerText) + Math.floor(Math.random() * (10 - 1 + 1) + 1) - Math.floor(Math.random() * (10 - 1 + 1) + 1);
        respuesta3.innerText = parseFloat(respuesta1.innerText) + Math.floor(Math.random() * (10 - 1 + 1) + 1) - Math.floor(Math.random() * (10 - 1 + 1) + 1);
    }else if(respuestaCorrecta === 2){
        respuesta2.innerText = parseFloat(num1.innerHTML) + parseFloat(num2.innerHTML);
        respuesta2.classList.add('correcto');
        respuesta1.innerText = parseFloat(respuesta2.innerText) + Math.floor(Math.random() * (10 - 1 + 1) + 1) - Math.floor(Math.random() * (10 - 1 + 1) + 1);
        respuesta3.innerText = parseFloat(respuesta2.innerText) + Math.floor(Math.random() * (10 - 1 + 1) + 1) - Math.floor(Math.random() * (10 - 1 + 1) + 1);
    }else{
        respuesta3.classList.add('correcto');
        respuesta3.innerText = parseFloat(num1.innerHTML) + parseFloat(num2.innerHTML);
        respuesta2.innerText = parseFloat(respuesta3.innerText) + Math.floor(Math.random() * (10 - 1 + 1) + 1) - Math.floor(Math.random() * (10 - 1 + 1) + 1);
        respuesta1.innerText = parseFloat(respuesta3.innerText) + Math.floor(Math.random() * (10 - 1 + 1) + 1) - Math.floor(Math.random() * (10 - 1 + 1) + 1);
    }
});

respuestas.addEventListener('click',e=>{
    resultado.innerHTML = e.target.innerText
    if (e.target.nodeName === "P" && e.target.classList.contains('correcto')) {
        resultado_texto.classList.remove('incorrecto');
        resultado_texto.classList.add('correcto');
        resultado_texto.innerText = "Excelente!!";
    }else{
        resultado_texto.classList.add('incorrecto');
        resultado_texto.classList.remove('correcto');
        resultado_texto.innerText = "Incorrecto";
    }
})