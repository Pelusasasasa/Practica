import { shuffle } from 'underscore';

const tipos      = ['C','D','H','S'];
const especiales = ['A','J','Q','K'];

/**
 * @param { array<string> } tipos
 * @param { array<string> } especiales
 * @returns {array} regras un nuevo deck de cartas
 */
export const crearDeck = () => {
    let deck = [];
    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tipos ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tipos ) {
        for( let esp of especiales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = shuffle( deck );
    console.log( deck );
    return deck;
}
