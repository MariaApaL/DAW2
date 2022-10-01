let sumaTotal = 0;
let numero;

/**
 * The function takes a number as an argument and adds it to the sumaTotal variable
 * @param numero - The number to be added to the sum.
 */
function suma(numero) {
    
    sumaTotal = +numero + sumaTotal;
    console.log(`Sumatorio = ${sumaTotal}`);

}

/**
 * If the number is not divisible by any number between 2 and the number itself, then it is a prime
 * number.
 * @param numero - the number to be checked
 * @returns the number if it is prime.
 */
function esPrimo(numero) {

    for (let i = 2; i < numero; i++) {

        if (numero % i === 0) {
            return false;
        }

    }

    if (numero === 1) {
        console.log("1 NO es un numero primo");
    } else {
        return numero;
    }

}

/* Taking a number and dividing it by all the numbers that are divisible by it. */
function descomponer(numero) {
    
    let auxiliar = numero;
    for (let i = 2; i <= numero; i++) {
        if(auxiliar % i == 0){
            auxiliar = auxiliar / i;
            alert(i);
            i--;
        }
    }
}

// Main 

do {

    numero = +prompt("Dame un numero");
    // isNaN nos devuelve true si detecta que es un NaN
    while(isNaN(numero) || (numero % 1 != 0) || numero < 0){
        alert("Dame un numero entero positivo");
        numero = +prompt("Dame un numero positivo, no una cadena o un decimal");

    }
    if(numero == ""){
        break;
    }

    console.log(numero);
    suma(numero);

} while (numero != null);

if (esPrimo(sumaTotal)) {
    console.log("Es primo");
} else {
    descomponer(sumaTotal);
}