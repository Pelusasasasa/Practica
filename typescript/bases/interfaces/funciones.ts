(() => {

    interface addTwoNumbers {
        (a: number, b: number): number;
    };

    let sumar: addTwoNumbers;

    sumar = (a: number, b:number) => {
        return a + b;
    };

})();