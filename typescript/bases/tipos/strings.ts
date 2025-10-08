(() => {

    const batman: string = 'Batman';
    const lintervaVerde: string = "Linterna's Verde";
    const volcanNegro: string = `Heroe Volcan Negro`;

    console.log(` I'm ${ batman }`)
    console.log(batman.toUpperCase());

    console.log(batman[10]?.toUpperCase() || 'No esta Prensete');

})();