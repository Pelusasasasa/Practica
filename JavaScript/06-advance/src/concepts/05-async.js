import { heroes } from "../data/heroes";

export const asyncComponent = (element) => {
    const id1 = '5d86371f25a058e5b1c8a65e';
    console.log('Inicio del componente');

    findHero(id1).then(({name}) => console.log((name)));
}

const findHero = async(heroId) => {
    const hero = heroes.find(hero => hero.id == heroId);

    return hero;
};