/*
 * Reto #0
 * Enunciado: Escribe un programa que muestre por consola los números de 1 a 100 (ambos incluidos y con un salto de línea entre cada impresión), sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 *
*/

function fizzBuzz() {
    for (i = 0; i <= 100; i++) {
        let multTree = i % 3 == 0;
        let multFive = i % 5 == 0;
        if (multTree && multFive) {
            console.log("FizzBuzz");
        } else if (multTree) {
            console.log("Fizz")
        }
        else if (multFive) {
            console.log("Buzz")
        }
        else {
            console.log(i);
        }
    }
}

fizzBuzz()