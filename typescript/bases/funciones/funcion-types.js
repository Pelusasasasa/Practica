(() => {
    const addNumber = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const saveTheWorld = () => `El mundo esta salvado`;
    let myFunction;
    myFunction = addNumber;
    console.log(myFunction(1, 2));
    myFunction = greet;
    console.log(myFunction('Agustin'));
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
export {};
//# sourceMappingURL=funcion-types.js.map