(() => {
    let avengers: number = 10;

    const villians: number = 20;

    if(avengers < villians){
        console.log('Estamos en problemas')
    }else{
        console.log('Nos salvamos')
    };


    avengers = Number('123');

    console.log({avengers});

})()