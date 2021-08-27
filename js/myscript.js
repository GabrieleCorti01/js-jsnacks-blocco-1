
// SNACK 1
/*
 * L'utente inserisce due parole in successione, con due prompt. 
 * Il software stampa prima la parola più corta, poi la parola più lunga.
 */

// const primaParola = prompt("Inserisci una parola!");
// const secondaParola = prompt ("Inserisci una parola!");

// if (primaParola.length == secondaParola.length){
//     alert("Le due parole hanno la medesima lunghezza");
// } else if (primaParola.length < secondaParola.length) {
//     console.log(primaParola + ", " + secondaParola);
// } else {
//     console.log(secondaParola + ", " + primaParola);
// }


// SNACK 2
/*
 * Il software deve chiedere per 10 volte all'utente di inserire un numero.
 * Il programma stampa la somma di tutti i numeri inseriti. 
 */

// var somma = 0;

// for (let i = 0; i < 10; i++){
//     var numeroUtente = parseInt(prompt("Inserisci un numero!!"))
//     somma = somma + numeroUtente;
// }
// console.log(somma);


// SNACK 3
/**
 *   In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, 
 *   chiedi all'utente il suo nome e comunicagli se può partecipare o no alla festa.
 */

// const invitatiEvento = ["Gabriele", "Martina", "Luca", "Nicole", "Claudia"];

// var nomeUtente = prompt("Inserisci il tuo Nome per la conferma!");

// let verificaInvitato = false;

// for (let i = 0; i < invitatiEvento.length ; i++){
//     let invitatoCorrente = invitatiEvento[i];
//     if (invitatoCorrente == nomeUtente){
//         verificaInvitato = true;
//     }
// }

// if (verificaInvitato == true) {
//     console.log("Sei stato invitato!")
// } else {
//     console.log("Non sei stato invitato.")
// }


// SNACK 4
/**
 * Crea un array vuoto.
 * Chiedi per 6 volte all'utente di inserire un numero,
 * se è dispari inseriscilo nell'array.
 */

// var contenitoreNumeri = [];

// for (let i = 0; i < 6; i++){
//     let sceltaUtente = parseInt(prompt("Inserisci un numero!"));
//     if (( sceltaUtente % 2 != 0 )){
//         contenitoreNumeri.push(sceltaUtente)
//     }
// }
// console.log(contenitoreNumeri)


// SNACK 5