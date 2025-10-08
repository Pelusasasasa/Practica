(() => {
    let avenger: any = 123;
    let exists;
    let power;

    avenger = 'DR Strange';
    console.log((avenger as string).charAt(0));

    avenger = 150.123456;
    console.log((<number>avenger).toFixed(2));

})();