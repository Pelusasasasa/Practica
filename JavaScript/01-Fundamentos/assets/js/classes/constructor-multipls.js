class Persona{

    static porObjeto({nombre, apellido, altura}){
        return new Persona(nombre, apellido, altura);
    };

    constructor(nombre, apellido, altura){
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }

    get info(){
        console.log(`Nombre: ${this.nombre}, Apellido: ${this.apellido}, altura: ${this.altura}`);
    }
};


const persona1 = new Persona('Juan', 'Perez', 1.80);
const persona2 = Persona.porObjeto({
    nombre: 'Agustin',
    apellido: 'Lorenzatto',
    altura: 1.70
});

persona1.info;
persona2.info;