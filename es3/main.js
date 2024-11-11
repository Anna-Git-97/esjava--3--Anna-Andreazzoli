//ESERCIZIO NUMERO MAX E MIN

// Funzione x trovare maggiore
function findMax(numbers) {
    return Math.max(...numbers);
  }
  
  // Funzione x trovare minore
  function findMin(numbers) {
    return Math.min(...numbers);
  }
  
  let numbers = [10, 12, 78, -4, -20, 11];
  
  console.log("Il maggiore è:", findMax(numbers));  // Restituisce 78
  console.log("Il minore è:", findMin(numbers));    // Restituisce -20
  