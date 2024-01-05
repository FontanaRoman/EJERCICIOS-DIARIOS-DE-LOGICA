/* Escribe un programa que sea capaz de generar contraseñas de forma aleatoria.
* Podrás configurar generar contraseñas con los siguientes parámetros:
* - Longitud: Entre 8 y 16.
* - Con o sin letras mayúsculas.
* - Con o sin números.
* - Con o sin símbolos.
* (Pudiendo combinar todos estos parámetros entre ellos)
*/


function generarContraseña(longitud, incluirMayusculas, incluirNumeros, incluirSimbolos){
    let caracteres = 'abcdefghijklmnopqrstuvwxyz';
if (incluirMayusculas) caracteres += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
if (incluirNumeros) caracteres += '0123456789';
if (incluirSimbolos) caracteres += '!@#$%^&*()-_+=<>?';

let contrase = "";

if(longitud >= 8 && longitud <= 16){
    for(let i = 0; i < longitud; i++){

        let indice = Math.floor(Math.random()*caracteres.length);
    
        contrase += caracteres[indice];
    }
    return contrase
}else{
    return ("La contraseña no debe tener una logitud entre 8 y 16")
}
}

let nuevaContraseña = generarContraseña(16, true, true, true);
console.log(nuevaContraseña);