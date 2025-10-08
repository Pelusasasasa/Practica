class Rectangular {
    #area = 0;

    constructor(base = 0, altura = 0){
        this.base = base;
        this.altura = altura;

        this.#area = base * altura;
    };

    getArea(){
        return this.#area;
    }
};

const rectangulo = new Rectangular(10, 15);
console.log(rectangulo.getArea())