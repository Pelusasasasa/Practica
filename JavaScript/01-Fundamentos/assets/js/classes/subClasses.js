class Persona{

    static _conteo = 0;
    static get conteo(){
        return Persona._conteo;
    }
    
    nombre;
    codigo;
    frase;
    comida;

    

    constructor(codigo, nombre, frase){
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;

        Persona._conteo++;
    };

    set setComidaFavorita( comida ){
        this.comida = comida;
    };

    get getComidaFavorita(){
        return `La comida favorita de ${this.nombre} es ${this.comida}`
    }

    quiensoy(){
        console.log(`Hola soy ${this.nombre} y represento a ${this.codigo}`);
    }

    miFrase(){
        console.log(`${this.codigo} dice: ${this.frase}`);
    }
};

class Heroe extends Persona{
    clan;

    constructor(){
        super();
    };

    quiensoy(){
        console.log(`Hola soy ${this.nombre}: mi clan es ${this.clan}`);
        super.quiensoy();
    }
};


const spiderman = new Persona('SpiderMan', 'Peter Parker', 'soy tu vecino SpiderMan');
spiderman.setComidaFavorita = 'El pay de frsa de la tia May';
console.log(Persona._conteo);
console.log(spiderman.conteo);;