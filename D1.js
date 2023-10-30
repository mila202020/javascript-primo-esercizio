/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.


*/

/* SCRIVI QUI LA TUA RISPOSTA 
i principali dataype sono numeri (decimali o interi)
Stringa (parole, insieme di lettere che vengono rinchiuse in doppi apici )
 Booleano (valori che indicano solo vero o falso)
 null 
 undefined*/

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA 
 ;*/var name = "mila"

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA 

*/var numero1= 5;
var numero2= 10 ;
var somma = numero1 + numero2;
console.log (somma);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA 
*/var x = 12;


/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA 

*/var name = "mila";
name = "bustamante"; // Riassegno il cognome alla variabile "name".
console.log(name); // Stampo il cognome in console.

/*qui tento di riassegnare un valore ad una costante
const COSTANTE = "Sono una costante";
COSTANTE = "Tento di riassegnare"; / Questa riga generA un errore.*/




/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/


/* SCRIVI QUI LA TUA RISPOSTA */
var x = 12; // Dichiaro e assegno il valore 12 a "x".
var risultatoSottrazione = 4 - x; // Eseguo la sottrazione tra 4 e "x".

console.log(risultatoSottrazione); // Stampo il risultato della sottrazione nella console.


/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).

 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

var name1 = "john";
var name2 = "John";
console.log( "la diversita senza lowercase è" + (name1 === name2) );

console.log("la diversita con lowercase è " + (name1 === name2.toLowerCase()) ); //stampo e la diversita è true cioe vera 
