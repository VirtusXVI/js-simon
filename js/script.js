// Visualizzare in un alert 5 numeri casuali.
// 30 secondi dopo la chiusura dell'alert, l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// array
const numbers = generateNumbers(5, 1, 10);
// alert che mostra i 5 numeri casuali chiamando la funzione
alert(numbers);
// funzione timeout di 30 secondi
let clock = setTimeout(gameEnd, 3000);
// dopo 30 secondi il prompt si chiude e viene visualizzato un messaggio che mostra quanti numeri sono stati indovinati,quali numeri sono stati indovinati e l'array originale che contiene tutti i numeri



// funzione che verrà eseguita durante i 30 secondi
function game(numbers){
    let guessedNumbers = [];
    for(let i = 0;i < 5;i++){
        let userNumber = parseInt(prompt("inserisci uno dei numeri tra 1 e 10 che hai visualizzato prima"))
        if(numbers.includes(userNumber)){
            guessedNumbers.push(userNumber);
        }
    }
    return guessedNumbers;
}

// funzione che verrà eseguita dopo 30 secondi dalla chiusura dell'alert
function gameEnd() {
    let guessedNumbers = game(numbers);
    alert(`Complimenti hai indovinato${guessedNumbers.length} numeri su 5, i numeri generati erano:${numbers}`);
}

// funzione che genera 5 numeri casuali,non duplicati e li inserisce nell'array
function generateNumbers(n, min, max){
    let generatedNumbers = [];
    while(generatedNumbers.length < n){
        let number = getRndInteger(min, max);
        if(!generatedNumbers.includes(number)){
            generatedNumbers.push(number);
        }
    }
    return generatedNumbers;
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }