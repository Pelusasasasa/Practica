import { heroes } from "../data/heroes";

export const generetorAsyncComponent = async(element) => {
    const heroGeneretor = getHeroGenerator();
    let isFinished = false;

    do{
        const { value, done } = await heroGeneretor.next();
        isFinished = done;
        if (isFinished ) break;
        element.innerHTML = value;
    }while(!isFinished)
    
};

async function* getHeroGenerator(){
    for (const hero of heroes){
        await sleep();
        yield hero.name;
    }
}

const sleep = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 1000);
    });
}