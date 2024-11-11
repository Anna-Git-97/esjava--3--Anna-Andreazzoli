//ESERCIZIO CIFRE NUMERO INTERO

function contaCifre(numero) {
    // Trasformiamo il numero in stringa e poi contiamo la sua lunghezza (visto da internet)
    let numeroStringa = numero.toString();
    let numeroCifre = numeroStringa.length;


    if (numeroCifre == 1) {
        console.log(`${numeroCifre} cifra`);
    } else {
        console.log(`${numeroCifre} cifre`);
    }
}

// Invocazione
contaCifre(9);   // Output: 1 cifra
contaCifre(99);  // Output: 2 cifre
contaCifre(100); // Output: 3 cifre
contaCifre(9999);// Output: 4 cifre
