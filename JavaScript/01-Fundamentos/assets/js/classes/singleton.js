class Singleton{
    static instancia;
    nombre = '';

    constructor(nombre = ''){
        if (!!Singleton.instancia){
            return Singleton.instancia
        };

        Singleton.instancia = this;
        Singleton.nombre = nombre;
    }
}