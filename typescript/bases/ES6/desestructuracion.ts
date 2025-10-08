(() => {

    type Avengers = {
        nick: string;
        ironman: string;
        vision: string;
        activo: boolean;
        poder: number;
    };

    const avengers: Avengers   = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey Jr',
        vision: 'Paul Bettany',
        activo: true,
        poder: 1500
    };

    const printAvenger = ({ironman, ...resto}: Avengers) => {(
        console.log(ironman, resto)
    )}

    printAvenger(avengers)


    const avengersARr: string[] = ['Cap. America', 'Iroman', 'Hulk'];
    const [capi, ironman, ] = avengersARr;
    console.log({capi, ironman});

    const numero:number = 10;
    if(numero > 10){
        const numero: number = 10;
    }
})