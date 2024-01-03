/* Escribe un programa que muestre cómo transcurre un juego de tenis y quién lo ha ganado.
 * El programa recibirá una secuencia formada por "P1" (Player 1) o "P2" (Player 2), según quien
 * gane cada punto del juego.
 * 
 * - Las puntuaciones de un juego son "Love" (cero), 15, 30, 40, "Deuce" (empate), ventaja.
 * - Ante la secuencia [P1, P1, P2, P2, P1, P2, P1, P1], el programa mostraría lo siguiente:
 *   15 - Love
 *   30 - Love
 *   30 - 15
 *   30 - 30
 *   40 - 30
 *   Deuce
 *   Ventaja P1
 *   Ha ganado el P1
 * - Si quieres, puedes controlar errores en la entrada de datos.   
 */

let pointP1 = 0;
let pointP2 = 0;

const secuencia = ["P1", "P1", "P2", "P2", "P1", "P2", "P1", "P1"];

function pointResult(P1,P2){
    const point = ["Love",15,30,40];

    if(P1 >= 3 && P2 >= 3){
        if(P1 === P2){
            return("Deuce");
        }else if(P1 > P2){
            return("Ventaja P1");
        }else{
            return("Ventaja P2");
        }
    }else{
        return(`${point[P1]}-${point[P2]}`);
    }
}


for(const ganador of secuencia){
    const puntajeActual = pointResult(pointP1, pointP2);

    console.log(puntajeActual)

    if (puntajeActual === "Deuce" || puntajeActual === "Ventaja P1" || puntajeActual === "Ventaja P2") {
        console.log(`Ha ganado el ${ganador}`);
        break;
    }
    
    if(ganador === "P1"){
        pointP1 += 1;
    }
    else{
        pointP2 += 1;
    }
}



