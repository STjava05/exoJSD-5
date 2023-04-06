/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/
;
 function area (l1,l2){
    return l1*l2;
  }
  console.log(area(5,6));



/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/
// function crazySum (a,b){
//   return a + b
// }
//  console.log(crazySum(7,8));
 

//  function somma() {
//   var z = 11 + 5;
//   return z;
//   }
//   var risultato = somma();




  function crazySum(num1, num2) {
    if (num1 === num2) {
      return (num1 + num2) * 3;
    } else {
      return num1 + num2;
    }
  }
  console.log(crazySum(5,6));

 /* ESERCIZIO 3
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

function crazyDiff(num) {
  let diff = Math.abs(num - 19);
  return diff > 19 ? diff * 3 : diff;
}
console.log(crazyDiff(40));
/* ESERCIZIO 4
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/
function boundary(num) {
  return (num >= 20 && num <= 100) || num === 400;
}
console.log(boundary(40));



/* ESERCIZIO 5
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/
function codify(stringa) {
  if (stringa.startsWith("code")) {
    return stringa;
  } else {
    return "code" + stringa;
  }
}
console.log(codify(stringa));

/* ESERCIZIO 6
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

function check3and7(num) {
  if (num % 3 == 0 || num % 7 == 0) {
      return true;
  } else {
      return false;
  }
}
console.log(check3and7(-20));
/* ESERCIZIO 7
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/
function reverseString (mioString){
  let splitString = mioString.split("");
  let revert =splitString.reverse();
  let reverseString= revert.join("");
  return reverseString
}
console.log(reverseString("familiari"));

/* ESERCIZIO 8
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

/*
La funzione prende una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola. 
Ad esempio, se la stringa passata è “ciao mondo”, la funzione restituirà “Ciao Mondo”.
*/
// function upperFirst(str) {
//   return str.toLowerCase().replace(/(^|\s)\S/g, function (letter) {
//     return letter.toUpperCase();
//   });
// }
//  console.log (upperFirst("ciao mondo"));
/*
La funzione divide la stringa in parole, poi itera su ogni parola e rende maiuscola la prima lettera di ogni parola usando il metodo toUpperCase() 
e l’operatore di concatenazione +. Infine, unisce le parole in una stringa usando il metodo join().
*/
function upperFirst(str) {
  let words = str.split(' ');

  for (let i = 0; i < words.length; i++) {
    let word = words[i];

    words[i] = word[0].toUpperCase() + word.slice(1);
  }

  return words.join(' ');
}

console.log(upperFirst("ciao mondo!")); // Ciao Mondo!


/* ESERCIZIO 9
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

//La funzione prende una stringa come parametro e la ritorna senza il primo e l’ultimo carattere.
function cutString(str) {
  return str.slice(1, -1);
}
console.log(cutString("EPICODE"));

/* ESERCIZIO 10
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/
/*
La funzione utilizza il metodo Math.random() per generare numeri casuali tra 0 e 1, poi moltiplica il risultato per 11 
e arrotonda il valore ottenuto verso il basso con Math.floor() per ottenere numeri interi tra 0 e 10.

*/
// function giveMeRandom(n) {
//   let arr = [];
//   for (let i = 0; i < n; i++) {
//     arr.push(Math.floor(Math.random() * 11));
//   }
//   return arr;
// }

let giveMeRandom = [];

for (let n = 0; n < 10; n++) {
  let numeroCasuale = Math.floor(Math.random() * 11); //genera un numero casuale tra 0 e 10
  giveMeRandom.push(numeroCasuale);
}
console.log(giveMeRandom);









