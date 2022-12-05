let num;
let primo = [];
let noPrimo = [];
let arr = [];
let entero;
let array = [];
let contPrimo = 0;
let contNoPrimo = 0;

// pide un numero por consola
function dimeLargo() {
    num = +prompt("Dime como de largo quieres que sea tu array");
}

//Rellena el array con numeros aleatorios

function numRandom(nLength) {

    for (let i = 0; i < nLength; i++) {
        arr.push(Math.floor(Math.random() * (nLength + 1)));
    }
    console.log(arr);
}

//comprueba si es primo
function esPrimo(n) {
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    if (n === 1) {
    } else {
        return n;
    }
}

//comprueba el contenido del array y separa en primos y no primos y ordena
function ordenaNums(arg) {

    for (let element of arg) {
        if (esPrimo(element)) {
            primo.push(element);

        } else {
            noPrimo.push(element);
        }

        primo.sort((a, b) => {
            return a - b;
        })

        noPrimo.sort((a, b) => {
            return b - a;
        })

    }

}

//comprueba los numeros y los separa y ordena por primos y no primos
function compruebaNum(n) {
    if (esPrimo(n)) {
        primo.push(n);

    } else {
        noPrimo.push(n);
    }

    primo.sort((a, b) => {
        return a - b;
    })

    noPrimo.sort((a, b) => {
        return b - a;
    })
}

//Cuenta cuantos tipos de numeros hay en el array
function cuentaNum(arg) {

    for (let element of arg) {
        if (esPrimo(element)) {
            contPrimo++;

        } else {
            noPrimo.push(element);
            contNoPrimo++;
        }

    }
}

//Compara dos arrays usando JSON
function comparaArray(arg){
    arg= array.slice(arg);
    console.log(arg);

    if(JSON.stringify(array) === JSON.stringify(arg)){
        return true;
    }else{
        return false;
    }

}


do {
    dimeLargo();
    //si es número es una cadena o es NaN da error
    if (!(typeof num == 'number') || isNaN(num)) {
        alert("No es un número");

        //Si el número no es entero da error
    } else if (!(num % 1 == 0)) {
        alert("Debe ser entero");
        //si el número es negativo, da error
    } else if (num < 0) {
        alert("Error, debe ser positivo");
    }

    //Cuando el usuario mete un numero entero, sale
} while (num & 1 == 0);


numRandom(num);
ordenaNums(arr);
array = primo.concat(noPrimo);
alert("Estos son los numeros =" + array);

do {
    entero = +prompt("Dime un num para poner en el array");
    if (!(typeof entero == 'number') || isNaN(entero)) {
        alert("No es un número");

        //Si el número no es entero da error
    } else if (!(entero % 1 == 0)) {
        alert("Debe ser entero");
        //si el número es negativo, da error
    } else if (entero < 0) {
        alert("Error, debe ser positivo");
    }

    //Cuando el usuario mete un numero entero, sale
} while (entero & 1 == 0);

compruebaNum(entero);
array = primo.concat(noPrimo);
cuentaNum(array);
alert("Este es el total de números primos " + contPrimo);
alert("Este es el total de números no primos " + contNoPrimo);
let arg=[];
comparaArray(arg);
console.log(`Son iguales los arrays? ${comparaArray(arg)}`);