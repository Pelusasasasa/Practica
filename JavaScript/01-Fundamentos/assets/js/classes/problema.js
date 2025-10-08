function Persona(nombre, edad){
    this.nombre = nombre;
    this.edad = edad;
    this.saludar = function(){
        console.log('Hola, mi nombre es ' + this.nombre);
    };

    console.log('Se ejecuto');
};

const maria = new Persona('Marina', 30);

console.log(maria);
maria.saludar();