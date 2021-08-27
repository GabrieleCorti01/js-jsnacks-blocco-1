
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
/**
 * Calcola la somma e la media dei primi 10 numeri
 */

// let somma = 0;
// let numeri = 0;

// while ( numeri < 10 ) {
//     somma = somma + numeri;
//     numeri++;
// }
// console.log(somma);
// console.log(somma / 10);


// SNACK 6  
/*
 *	Crea un array vuoto.
 * 	Chiedi all'utente di inserire cinque parole.
 *	Quando una parola è scritta con tutti i caratteri in maiuscolo stampa un alert,
 *	altrimenti inseriscila nell'array.
 *
 */

// var paroleMinuscole = [];

// for ( let i = 0; i < 5; i++){
//     let parolaUtente = prompt("Inserisci una Parola!!");
//     if (parolaUtente = parolaUtente.toUpperCase){
//         alert("Non urlare, grazie!!")
//     }  if (parolaUtente != parolaUtente.toUpperCase) {
//         paroleMinuscole.push(parolaUtente)
//     }
// }
// console.log(paroleMinuscole)


// SNACK 7
/**
 *  Il software deve chiedere per 5 volte all'utente di inserire un numero.
 *  Il programma stampa la somma di tutti i numeri inseriti.
 *  Esegui questo programma in due versioni, con il for e con il while.
 */

// ESECUZIONE CON IL FOR
// var somma = 0;

// for ( let i = 0; i < 5; i++){
//     var numeroUtente = parseInt(prompt("Inserisci un numero!"));
//     somma = somma + numeroUtente;
// }
// console.log(somma)

// ESECUZIONE CON IL WHILE
// var somma = 0;

// var j = 0;

// while ( j < 5){
//     somma += parseInt(prompt("Inserisci un numero!"))
//     j++
// }
// console.log(somma)


// SNACK 8
/**
 * 
 * Generatore di "nomi cognomi" casuali: prendendo una lista di nomi e 
 * una lista di cognomi, Gatsby vuole generare una falsa lista di 8 invitati.
 * Stampiamo la lista in modo ordinato in html come elementi <li> figli di un unico <ul>.
 * 
 */

// listaNomi = ["Adam", "Alex", "Aaron", "Ben", "Carly", "Dan", "David", "Edward", "Fred", "Frank", "George", "Hal", "Hank", "Ike", "John", "Jack", "Joe", "Larry", "Monte", "Matthew", "Mark", "Nathan", "Otto", "Paul", "Peter", "Roger", "Roger", "Steve", "Thomas", "Tim", "Ty", "Victor", "Walter"];
// listaCognomi = ["Anderson", "Ashwoon", "Aikin", "Bateman", "Bongard", "Bowers", "Boyd", "Cannon", "Cast", "Deitz", "Dewalt", "Ebner", "Frick", "Hancock", "Haworth", "Hesch", "Hoffman", "Kassing", "Knutson", "Lawless", "Lawicki", "Mccord", "McCormack", "Miller", "Myers", "Nugent", "Ortiz", "Orwig", "Ory", "Paiser", "Pak", "Pettigrew", "Quinn", "Quizoz", "Ramachandran", "Resnick", "Sagar", "Schickowski", "Schiebel", "Sellon", "Severson", "Shaffer", "Solberg", "Soloman", "Sonderling", "Soukup", "Soulis", "Stahl", "Sweeney", "Tandy", "Trebil", "Trusela", "Trussel", "Turco", "Uddin", "Uflan", "Ulrich", "Upson", "Vader", "Vail", "Valente", "Van Zandt", "Vanderpoel", "Ventotla", "Vogal", "Wagle", "Wagner", "Wakefield", "Weinstein", "Weiss", "Woo", "Yang", "Yates", "Yocum", "Zeaser", "Zeller", "Ziegler", "Bauer", "Baxster", "Casal", "Cataldi", "Caswell", "Celedon", "Chambers", "Chapman", "Christensen", "Darnell", "Davidson", "Davis", "DeLorenzo", "Dinkins", "Doran", "Dugelman", "Dugan", "Duffman", "Eastman", "Ferro", "Ferry", "Fletcher", "Fietzer", "Hylan", "Hydinger", "Illingsworth", "Ingram", "Irwin", "Jagtap", "Jenson", "Johnson", "Johnsen", "Jones", "Jurgenson", "Kalleg", "Kaskel", "Keller", "Leisinger", "LePage", "Lewis", "Linde", "Lulloff", "Maki", "Martin", "McGinnis", "Mills", "Moody", "Moore", "Napier", "Nelson", "Norquist", "Nuttle", "Olson", "Ostrander", "Reamer", "Reardon", "Reyes", "Rice", "Ripka", "Roberts", "Rogers", "Root", "Sandstrom", "Sawyer", "Schlicht", "Schmitt", "Schwager", "Schutz", "Schuster", "Tapia", "Thompson", "Tiernan", "Tisler"];

// let listaInvitati = [];     
// let j = 0

// for ( let i = 0; i < 10 ; i++){ 

//     let indiceNomeRandomico = Math.floor(Math.random() * listaNomi.length); 

//     let indiceCognomeRandomico = Math.floor(Math.random() * listaCognomi.length);

//     let nomeInteroRandomico = listaNomi[indiceNomeRandomico] + ' '  
//                             + listaCognomi[indiceCognomeRandomico]; 

//     listaInvitati.push(nomeInteroRandomico);   
//     document.getElementById("lista-invitati").innerHTML += '<li>' + nomeInteroRandomico + '</li>';
// }


// SNACK 9
/**
 *  A)
 *   Crea due array che hanno un numero di elementi diversi (di almeno 6 elementi).
 *   Aggiungi elementi casuali all'array che ha meno elementi, fino a quando ne avrà 
 *   tanti quanti l'altro.
 * 
 *  B)
 *  Mostriamo in HTML le due liste in parallelo
 */

 let listaRock = ["Guns", "Van Halen", "AC/DC", "Aerosmith", "Queens of the...", "Queen" , "Rolling Stones", "Pink Floyd", "Not Available", "Cugini di Campagna"];
 let listaSoul = ["Otis Redding", "Aretha Franklin", "Ray Charles", "Stevie Wonder", "Prince", "Pink"];
 
 if ( listaRock.length > listaSoul.length) {
     while ( listaSoul.length < listaRock.length ) {
         listaSoul.push(Math.random() * 1240);
     }
 } else if (( listaRock.length < listaSoul.length)) {
     while ( listaRock.length < listaSoul.length ) {
         listaRock.push(Math.random() * 6613);
     }
 } else {
     alert("Non aggiungo altro!");
 }
 
 document.getElementById("lista-nomi").innerHTML = listaRock;
 document.getElementById("lista-cognomi").innerHTML = listaSoul;