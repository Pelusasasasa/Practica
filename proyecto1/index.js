const corregir = document.getElementById('corregir');
const cantidad = document.getElementById('cantidad');

const inputs = document.querySelectorAll('input[type=radio]');

let contador = 0;

corregir.addEventListener('click',e=>{
    for(let input of inputs){
        if (input.checked && input.value === "true") {
            contador++;
        }
    }

    cantidad.innerHTML = contador;
});zzzz