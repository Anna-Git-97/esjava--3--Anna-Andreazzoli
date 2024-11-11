//GIOCO DADI

function giocaDadi(numberOfShots) {
    // Funzione lancio del dado
    function lanciaDado() {
        return Math.floor(Math.random() * 6) + 1;
    }

    // Funzione punteggio un giocatore
    function calcolaPunteggio() {
        let punteggio = 0;
        for (let i = 0; i < numberOfShots; i++) {
            punteggio += lanciaDado();
        }
        return punteggio;
    }

    // Punteggi due giocatori
    let punteggioGiocatore1 = calcolaPunteggio();
    let punteggioGiocatore2 = calcolaPunteggio();

    // Stampiamo in console i punteggi
    console.log(`Giocatore 1: ${punteggioGiocatore1} punti`);
    console.log(`Giocatore 2: ${punteggioGiocatore2} punti`);

    // Vincitore tra i due giocatori
    if (punteggioGiocatore1 > punteggioGiocatore2) {
        console.log("Il Giocatore 1 ha vinto!");
    } else if (punteggioGiocatore2 > punteggioGiocatore1) {
        console.log("Il Giocatore 2 ha vinto!");
    } else {
        console.log("È un pareggio!");
    }
}

// Invocazione
giocaDadi(5);  // N volte lancio dadi da parte dei giocatori
