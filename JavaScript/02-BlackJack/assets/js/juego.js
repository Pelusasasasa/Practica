(() => {
    let deck = [];

    const tipos = ['C', 'D', 'H', 'S',],
        especiales = ['A', 'J', 'Q', 'K',];

    let puntosJugadores = [];

    const divCartasJugadores = document.querySelectorAll('.divCartas'),
        btnNuevo = document.querySelector('#btnNuevo'),
        btnPedir = document.querySelector('#btnPedir'),
        btnDetener = document.querySelector('#btnDetener'),
        puntosHTML =  document.querySelectorAll('small');

    const inicializarJuego = ( numJugadores = 1) => {
        deck = crearDeck();
        puntosJugadores = [];

        for (let i = 0; i < numJugadores; i++) {
            puntosJugadores.push(0);
            puntosHTML[i].innerText = 0;
            divCartasJugadores[i].innerHTML = '';
        };

        btnPedir.disabled = false;
        btnDetener.disabled = false;

        console.log(puntosJugadores)
    };
    const crearDeck = () => {
        deck = [];

        for(let i = 2; i <= 10; i++){
            for(const tipo of tipos){
                deck.push(i + tipo)
            };
        };

        for(const tipo of tipos){
            for(const especial of especiales){
                deck.push(especial + tipo)
            };
        };

        return _.shuffle(deck);
    };

    //Esta funcion permite pedir una carta del deck
    const pedirCarta = () => {

        if(deck.length === 0){
            throw 'No hay cartas en el deck'
        };

        const carta = deck.pop();

        return carta;
    };

    const valorCarta = (carta) => {
        const valor = carta.substring(0, carta.length - 1);
        return (valor === 'A') 
            ? 11 
            : isNaN(valor) 
                ? 10 
                : valor * 1;
    };

    const acumularPuntos = (carta, turno) => {
        puntosJugadores[turno] += valorCarta(carta);
        puntosHTML[turno].innerText = puntosJugadores[turno];
        return puntosJugadores[turno];
    };

    const crearCarta = (carta, turno) => {
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${carta}.png`;
        imgCarta.classList.add('carta');

        divCartasJugadores[turno].append(imgCarta);
    };

    const turnoComputadora = (puntosMinimos) => {
        let puntosComputadora = 0;
        do {
            const carta = pedirCarta();
            puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1);
            crearCarta(carta, puntosJugadores.length - 1);

            if(puntosMinimos > 21){
                break;
            }

        } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

        setTimeout(() => {
            quienGano();
        }, 10);
        
    };

    const quienGano = () => {

        const [puntosMinimos, puntosComputadora] = puntosJugadores;
        
        if(puntosComputadora === puntosMinimos){
            alert('Nadie Gana');
        }else if(puntosMinimos > 21){
            alert('Computadora Gana')
        }else if(puntosMinimos <= 21){
            if(puntosComputadora > 21){
                alert('Ganaste');
            }else{
                alert('Computadora Gana');
            } 
        }
    }

    //Eventos
    btnPedir.addEventListener('click', () => {

        const carta = pedirCarta();
        const puntosJugador = acumularPuntos(carta, 0);
        crearCarta(carta, 0);

        if(puntosJugador > 21){
            console.warn('Lo siento mucho, perdiste');
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(puntosJugador);
        }else if(puntosJugador === 21){
            console.warn('Felicidades, llegaste a 21');
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(puntosJugador);
        };

        
    });

    btnDetener.addEventListener('click', () => {
        btnPedir.disabled = true;
        btnDetener.disabled = true;

        turnoComputadora(puntosJugadores[0]);
    });

    btnNuevo.addEventListener('click', () => {
        inicializarJuego(2);
    });


    return {
        inicializarJuego
    }
})()