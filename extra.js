// Esercizi aggiuntivi

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray", che riceve come parametro un array di numeri random (creati con giveMeRandom)
 e stampa in console, per ogni oggetto, true/false a seconda che il numero sia più grande di 5 o no.
 La funzione deve infine tornare la somma di solamente i numeri che sono risultati maggiori di 5.
*/
// function checkArray(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//       let num = arr[i];
//       let sup = num > 5;
//       console.log(sup);
//       if (sup) {
//         sum += num;
//       }
//     }
//     return sum;
//   }
// console.log(checkArray());

let arr = giveMeRandom(3);
function checkArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    console.log(num > 5);
    if (num > 5) {
      sum += num;
    }
  }
  return sum;
}
console.log(arr);
console.log(checkArray(arr));


/* EXTRA 2
 Nel tuo sito e-commerce hai un array di oggetti chiamato shoppingCart. Ognuno di questi oggetti ha un prezzo, un nome, un id e la quantità da spedire.
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio.
*/

function shoppingCartTotal(cart) {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      total += cart[i].price * cart[i].quantity;
    }
    return total;
  }
   console.log(shoppingCartTotal(cart));
/* EXTRA 3
 Nel tuo sito e-commerce hai un array di oggetti chiamato shoppingCart. Ognuno di questi oggetti ha un prezzo, un nome, un id e la quantità da spedire.
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto, lo aggiunge allo shoppingCart e ritorna il numero totale degli oggetti in esso contenuti.
*/

// let shoppingCart = [
//   {id: 1,
//     nome:"Paul",
//     prezzo:50,
//     quantita:5,
//   }
// ]

let newElement={id:4,name:"Zac",prezzo:25,quantita:8};
  
function addToShoppingCart(newElement){
  
  shoppingCart.push(newElement);
 return shoppingCart.length
}
let totalObject=addToShoppingCart(shoppingCart,newElement);

console.log(totalObject)

/* EXTRA 4
 Nel tuo sito e-commerce hai un array di oggetti chiamato shoppingCart. Ognuno di questi oggetti ha un prezzo, un nome, un id e la quantità da spedire.
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array shoppingCart e ritorna l'oggetto più costoso in esso contenuto.
*/

// let shoppingCarts = [
//   { nome: 'prodotto1', prezzo: 10 },
//   { nome: 'prodotto2', prezzo: 20 },
//   { nome: 'prodotto3', prezzo: 30 },
// ];

function maxShoppingCart(shoppingCart){
  let max = shoppingCarts[0];
  for(let i =0; i<shoppingCarts.length;i++){
    if(shoppingCarts[i].prezzo > max.prezzo){
      max= shoppingCarts[i]
    }
  }
  return max
}
let objectPuiCostoso = maxShoppingCart(shoppingCarts)
console.log(objectPuiCostoso);

/* EXTRA 5
 Nel tuo sito e-commerce hai un array di oggetti chiamato shoppingCart. Ognuno di questi oggetti ha un prezzo, un nome, un id e la quantità da spedire.
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array shoppingCart e ritorna l'ultimo oggetto in esso contenuto.
*/

let shoppingCart = [
  { id: 1, name: 'product1', price: 10, quantity: 2 },
  { id: 2, name: 'product2', price: 20, quantity: 3 },
  { id: 3, name: 'product3', price: 30, quantity: 4 },
];

function latestShoppingCart(shoppingCart) {
  return shoppingCart[shoppingCart.length - 1];
}
console.log(latestShoppingCart(shoppingCart));

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve come parametro un intero "x" compreso tra 0 e 9.
 La funzione mostra in console un numero casuale tra 0 e 9 finchè il numero estratto è maggiore di x per 3 volte di fila.
*/

function loopUntil(x) {
  let count = 0;
  while (count < 3) {
    let random = Math.floor(Math.random() * 10);
    console.log(random);
    if (random > x) {
      count++;
    } else {
      count = 0;
    }
  }
}
console.log(loopUntil(5));
/* EXTRA 7
 Crea una funzione chiamata "average" che riceve un array come parametro e ritorna la media aritmetica dei numeri in esso contenuti.
 La funzione salta automaticamente qualsiasi valore non numerico all'interno dell'array.
*/

function average(arr) {
  let sum = 0;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      sum += arr[i];
      count++;
    }
  }
  let avg = sum / count;
  console.log(avg);
}
console.log(average([1, "ouz",2, "zeus",3]));

/* EXTRA 8
 Scrivi una funzione chiamata "longest" che ricerca la stringa più lunga all'interno del parametro ricevuto (un array di stringhe).
*/

// let array =["jules", "pedros","gianluca","fernando"];

function longest(array) {
  let longestString = "";
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > longestString.length) {
      longestString = array[i];
    }
  }
  console.log(longestString);
}
console.log(longest(array));

/* EXTRA 9
 Scrivi una funzione per creare un filtro anti spam molto semplice per una casella email. La funzione riceve una stringa come parametro, "emailContent", e ritorna un boolean.
 La funzione deve tornare true se emailContent NON contiene le parole "SPAM" o "SCAM".
*/

function antiSpamFilter(emailContent) {
  if (emailContent.includes("SPAM") || emailContent.includes("SCAM")) {
    console.log(false);
    return false;
  }
  console.log(true);
  return true;
}
console.log(antiSpamFilter(" "))
/* EXTRA 10
 Scrivi una funzione che riceve come parametro una data e ritorna il numero di giorni passati ad oggi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due interi, "x" e "y".
 La funzione deve tornare una matrice di x volte y, e ogni valore deve rappresentare l'indice dell'elemento.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

function matrixGenerator(x, y) {
  let matrix = [];
  let counter = 0;
  for (let i = 0; i < x; i++) {
    matrix[i] = [];
    for (let j = 0; j < y; j++) {
      matrix[i][j] = counter++;
    }
  }
  return matrix;
}

console.log(matrixGenerator(3, 4));
