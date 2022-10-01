
let num;
let suma = 0;

//Función que pide al usuario números
let dimeNum = function () {
    num = +prompt("Dime todos los números que quieras, para terminar introduce una cadena vacía");
}

//Función que comprueba si un número es entero
let esEntero = function (n) {

    if (n % 1 == 0) {
        return true;
    }

}

// Función que comprueba si un número es primo
let esPrimo = function(n) {
    if (n <= 1) {
    return false;
    }
    //Empezamos por 2 porque todo número es divisible por 1 y ponemos n-1 para que llegue hasta el número anterior a n, ya que n/n seria 0
    //Y eso podría confundir al programa pensando que es un número primo
    for (let i = 2; i <= n - 1; i++){
        if (n % i == 0){

            return false;
        } 
    }
    return true;
}

//Función que descompone el número
let descomponerNum= function (n) {
    
    let aux = n;
    //si da 0 se enseña el número por el cuál se ha dividido para que de 0
    for (let i = 2; i <= n; i++) {
        if(aux % i == 0){
            aux= aux / i;
            alert(i);
            i--;
        }
    }
}


//Hacemos un bucle para que nos de número infinitamente
do {
    dimeNum();
    //si en número es una cadena o es NaN da error
    if (!(typeof num == 'number') || isNaN(num)) {
        alert("No es un número");

        //Si el número no es entero da error
    } else if (!esEntero(num)) {
        alert("Debe ser entero");
        //si el número es negativo, da error
    } else if (num < 0) {
        alert("Error, debe ser positivo");

    } else {
        //se van sumando los números entre si
        suma += num;
    }

    //Cuando el usuario mete una cadena vacía, el bucle acaba
} while (!(num == ""));

//mostramos la suma
alert(suma);

//Hacemos comprobación de si es primo
if (esPrimo(suma)) {
    alert("es primo");
} else {
    alert("No es primo, este es el número descompuesto");
   descomponerNum(suma);
}
