const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const respuesta1 = document.getElementById('respuesta1');
const respuesta2 = document.getElementById('respuesta2');
const respuesta3 = document.getElementById('respuesta3');

window.addEventListener('load',e=>{
    num1.innerText = Math.floor(Math.random() * (50 - 1 + 1) + 1);
    num2.innerText = Math.floor(Math.random() * (50 - 1 + 1) + 1);
    const respuestaCorrecta = Math.floor(Math.random() * (3 - 1 + 1) + 1);
    if (respuestaCorrecta === 1) {
        respuesta1.innerText = parseFloat(num1.innerHTML) + parseFloat(num2.innerHTML);
        respuesta2.innerText = parseFloat(resputa1.innerText) + Math.floor(Math.random() * (10 - 1 + 1) + 1);
        respuesta3.innerText = parseFloat(resputa1.innerText) + Math.floor(Math.random() * (10 - 1 + 1) + 1);
    }else if(respuestaCorrecta === 2){
        respuesta2.innerText = parseFloat(num1.innerHTML) + parseFloat(num2.innerHTML);
        respuesta1.innerText = parseFloat(resputa2.innerText) + Math.floor(Math.random() * (10 - 1 + 1) + 1);
        respuesta3.innerText = parseFloat(resputa2.innerText) + Math.floor(Math.random() * (10 - 1 + 1) + 1);
    }else{
        respuesta3.innerText = parseFloat(num1.innerHTML) + parseFloat(num2.innerHTML);
        respuesta2.innerText = parseFloat(resputa3.innerText) + Math.floor(Math.random() * (10 - 1 + 1) + 1);
        respuesta1.innerText = parseFloat(resputa3.innerText) + Math.floor(Math.random() * (10 - 1 + 1) + 1);
    }
});

