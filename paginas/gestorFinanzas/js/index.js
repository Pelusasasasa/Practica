const desde = document.getElementById('desde');
const hasta = document.getElementById('hasta');

const cargarPagina = () => {
    desde.value = new Date().toISOString().split('T')[0];
    hasta.value = new Date().toISOString().split('T')[0];
};

window.addEventListener('load', cargarPagina);