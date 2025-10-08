import { crearCartaHtml } from "./crear-carta-html";
import { pedirCarta } from "./pedir-carta";
import { valorCarta } from "./valor-carta";

/**
 * 
 * @param {Number} puntosMinimos 
 * @param {HTMLElement} puntosHTML
 * @param {Array<string>} deck 
 * @param {HTMLElement} divCartasComputadora
 */

// turno de la computadora
export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora, deck = [] ) => {
    let puntosComputadora = 0;
    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
       const imgCarta = crearCartaHtml( carta);
       divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}
