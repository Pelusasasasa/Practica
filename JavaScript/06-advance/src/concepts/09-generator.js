export const generetorFuctionsComponent = (element) => {
    const genId = idGenerator();
    const button = document.createElement('button');
    button.innerText = 'Click me';
    element.append(button);
    
    const renderButton = () => {
        const { value } = genId.next();
        button.innerText = `Click me ${value}`;
    };

    button.addEventListener('click', renderButton);
};


function* idGenerator(){
    let id = 0;
    while(true){
        id++;
        yield id;
    }
}

function* myFirstGeneratorFuction() {
    yield 'Primer valor';
    yield 'Segundo valor';
    yield 'Tercer valor';
    return 'No hya valores'
}