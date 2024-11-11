//ESERCIZIO NUMERI 

function stampaFizzBuzz(N) {
    for (let i = 1; i <= N; i++) {
        // Se il numero è un multiplo di 15, stampa 'fizzBuzz'
        if (i % 15 === 0) {
            console.log('fizzBuzz');
        }
        // Se il numero è un multiplo di 3, stampa 'Fizz'
        else if (i % 3 === 0) {
            console.log('Fizz');
        }
        // Se il numero è un multiplo di 5, stampa 'Buzz'
        else if (i % 5 === 0) {
            console.log('Buzz');
        }
        // Altrimenti, stampa il numero
        else {
            console.log(i);
        }
    }
}

//Invocazione
stampaFizzBuzz(30);
