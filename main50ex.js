//es 21 Date le variabili x = "John" e y = "Doe", mostra in console "John <> Doe"

// let x = "John";
// let y = "Doe";
// console.log(x + " <> " + y);

//es 22 Crea un oggetto con le seguenti proprietà: name, surname, email
// let persona = {
//     name: "Massimo",
//     surname: "Cossu",
//     email: "max.cossu@hotmail.com"
// };

//es 23 Cancella la proprietà email dall'oggetto appena creato
// delete persona.email;

//es 24 Crea un array contenente 10 stringhe
// let arrayDiStringhe = ["ciao", "come", "stai", "oggi", "bene", "grazie", "e", "tu", "?", "Fine"];

//es 25 Mostra in console ogni stringa del precedente array
// for (let i = 0; i < arrayDiStringhe.length; i++) {
//     console.log(arrayDiStringhe[i]);
// }

//es 26 Crea un array contenente 100 numeri random
// let arrayDiNumeri = [];
// for (let i = 0; i < 100; i++) {
//   let numeroRandom = Math.floor(Math.random() * 100) + 1;
//   arrayDiNumeri.push(numeroRandom);
// }

// for (let j = 0; j < arrayDiNumeri.length; j++) {
//   console.log(arrayDiNumeri[j]);
// }

//es 27 Scrivi una funzione per trovare il valore massimo e il valore minimo dall'array appena creato
// function trovaMaxMin(array) {
//     let valoreMassimo = Math.max.apply(null, array);
//     let valoreMinimo = Math.min.apply(null, array);
//     console.log("Il valore massimo dell'array è " + valoreMassimo + " e il valore minimo è " + valoreMinimo);
// }

// trovaMaxMin(arrayDiNumeri);


//es 28 Crea un array di array, nel quale ogni array "figlio" ha 10 numeri random

// let arrayDiArray = []; 
// for (let i = 0; i < 1; i++) {
//   arrayDiArray[i] = [];
//   for (let j = 0; j < 10; j++) { 
//     arrayDiArray[i][j] = Math.floor(Math.random() * 10);
//   }
// }
// console.log("array con array figlio da 10 numeri random:");
// console.log(arrayDiArray);

// es 29 Crea una funzione che riceve 2 array come parametri e ritorni quello con più elementi


function getArrayWithMoreElements(arrayX1, arrayX2) {
  if (arrayX1.length >= arrayX2) {
    return arrayX1;
  } else {
    return arrayX2;
  }
}
let arr1 = [1, 2, 3];
let arr2 = ["mela", "banana", "arancia", "pera"];

let arrayWithMoreElements = getArrayWithMoreElements(arr1, arr2);
console.log(arrayWithMoreElements); 


//es 30 Crea una funzione che riceve 2 array numerici come parametri e ritorna quello con la somma totale degli elementi maggiore

// let x = [10,20,30,40,60]
// let y = [20,30,40,50]

// function arraySomma(array1, array2){
//     let somma1 = 0
//     for (let i = 0; i < array1.length; i++) {
//         somma1 += array1[i]
//     }
//     let somma2 = 0
//     for (let i = 0; i < array2.length; i++) {
//         somma2 += array2[i]
//     }
//     if (somma1 >= somma2 ) {
//         return [somma1,array1]
//     } else{
//         return [somma2,array2]
//     }
//     }

//     let risultato = arraySomma(x,y);

//     console.log(risultato);


// 31 Seleziona l'elemento con id "container1" nella pagina

// let container1 = document.getElementById("container1");


// 32 Seleziona tutti gli elementi di tipo <td> nella pagina

// let alltd = document.getElementsByTagName("td");



//es 33 Usa un ciclo per stampare in console il testo contenuto in ogni elemento <td> nella pagina

// let allTds = document.getElementsByTagName("td");
// for (let i = 0; i < allTds.length; i++) {
//   console.log(allTds[i].textContent);
// }

//es 34  Scrivi una funzione per cambiare il titolo della pagina

// function changePageTitle(newTitle) {
//   document.title = newTitle;
// }
// changePageTitle("Questo è il nuovo titolo!!!");
// console.log(document.title);

//es 35 Scrivi una funzione per aggiungere una nuova riga alla tabella nella pagina

// function addTable() {
//   let table = document.querySelector("table");
//   let row = table.insertRow(-1);
//   let cell = row.insertCell(0);
//   let cell2 = row.insertCell(1)

//   cell.innerHTML = "Nuova riga";
//   cell2.innerHTML = "Nuova riga 2";
// }

//es 36 Scrivi una funzione per aggiungere la classe "test" ad ogni riga nella tabella
// function addClassTest() {
//   let tr = document.querySelectorAll("tr");
//   for (let i = 0; i < tr.length; i++) {
//     tr[i].classList.add("test")
// }
// }

//es 37 Scrivi una funzione per aggiungere uno sfondo rosa( modificato da me) a ogni link presente nella pagina
// function addRedBackgroundToLinks() {
//   let links = document.getElementsByTagName("a");
//   for (let i = 0; i < links.length; i++) {
//     links[i].style.backgroundColor = "pink";
//   }
// }
// addRedBackgroundToLinks();



//es 38 Mostra in console "Page loaded" quando la pagina ha finito di caricarsi
window.onload = function() {
nuovoElmLista()
deleteList()
// addClassTest()
addTable()
console.log("Page loaded");}

//es 39 Scrivi una funzione per aggiungere nuovi elementi alla lista non ordinata nella pagina


function nuovoElmLista() {
let newLista = document.createElement("li")
newLista.innerText = "Nuovo elemento"
let lista = document.querySelector("ul")
lista.appendChild(newLista)
}

//es 40 Scrivi una funzione per svuotare una lista nella pagina

function deleteList() {
  let elemntDelete = document.querySelector("#lista");
  console.log("qui vedo ",elemntDelete);
for (let i = 0; i < elemntDelete.children.length; i++) {
elemntDelete.children[i].innerText = "";}
}

//crea una array composta da 9 numeri casuali in Js
let array = [];
for (let i = 0; i < 10; i++) {
  array.push(Math.floor(Math.random() * 100));
  }
  console.log(array);