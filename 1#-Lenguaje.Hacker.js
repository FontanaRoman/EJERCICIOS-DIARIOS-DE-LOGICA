/*
 * Escribe un programa que reciba un texto y transforme lenguaje natural a
 * "lenguaje hacker" (conocido realmente como "leet" o "1337"). Este lenguaje
 *  se caracteriza por sustituir caracteres alfanuméricos.
 * - Utiliza esta tabla (https://www.gamehouse.com/blog/leet-speak-cheat-sheet/) 
 *   con el alfabeto y los números en "leet".
 */


// funcion
function l33t(string){
// guardamos en un objeto cada letra y su representante en el lenguaje l33t
    let textL33t = {
        "A": "4",
        "B": "13",
        "C": "[",
        "D": ")",
        "E": "3",
        "F": "|=",
        "G": "&",
        "H": "#",
        "I": "1",
        "J": ",_|",
        "K": ">|",
        "L": "1",
        "M": "/\\/\\",
        "N": "^/",
        "O": "0",
        "P": "|*",
        "Q": "(_,)",
        "R": "12",
        "S": "5",
        "T": "7",
        "U": "(_)",
        "V": "\\/",
        "W": "\\/\\/",
        "X": "><",
        "Y": "j",
        "Z": "2",
        "0": "O",
        "1": "L",
        "2": "R",
        "3": "E",
        "4": "A",
        "5": "S",
        "6": "b",
        "7": "T",
        "8": "B",
        "9": "g",
    };
// creamos una variable vacia para luego ir almacenando los caracteres del nuevo string
    let leetTexto = "";
// creamos un bucle para ir recorriendo el string y verificar si existe ese caracter dentro de la lista del objeto
    for(let i = 0; i < string.length; i++){
        let text = string[i].toUpperCase();
        leetTexto += textL33t[text] || text;
    }
    return leetTexto;
}

const textoOriginal = "Hola, este es un ejemplo de lenguaje hacker.";
const textoLeet = l33t(textoOriginal);
console.log(textoLeet);