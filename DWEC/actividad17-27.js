//Tarea 17

let age = 100;

if (!(age >= 14 || age <= 90)) {

    alert("No está incluido");

}


if (age <= 14 || age >= 90) {
    alert("No está incluido")
}

//Tarea 19

let inicio = prompt("Inicia sesión");
let password;

if (inicio=="Admin") {
    password = prompt("Contraseña");
    if (password=="TheMaster") {
        alert("Bienvenido!");
    } else if (password==null||password=="") {
        alert("Cancelado");
    } else {
        alert("Contraseña incorrecta");
    }
} else if (inicio==null||inicio=="") {
    alert("Cancelado");
} else {
    alert("No te conozco");
}



//Tarea 20
let aux;
let max;
let min;
let num=prompt("Dime un número");
let num2=prompt("Dime otro número");

max=(num>num2)? num:num2;
min=(num<num2)? num:num2;

while(min<max){
    if(min%8==0){
        aux=min;
    }
    min++;
}

alert(aux);

//Tarea 21
let a=prompt("Dime un número");
let b=prompt("Dime otro número");

do{
console.log("Calculadora");
console.log("1- Suma");
console.log("2- Resta");
console.log("3- Multiplíca");
console.log("4- Divide");
console.log("5- Módulo");
console.log("6- Fin");


let op;
op=prompt("Elige un número");

switch(+op){
    case 1: console.log(a+b);
    break;
    case 2: console.log(a-b);
    break;
    case 3: console.log(a*b);
    break;
    case 4: console.log(a/b);
    break;
    case 5: console.log(a%b);
    break;
    default: console.log("Adiós");

}
}while(op!=6);

//Tarea 22
for(let i=1;i<=10;i++){
    if(i%2==0){
        alert(i);
    }
}

//Tarea 23
let i;
while(i<=10){
    if(i%2==0){
        alert(i);
    }
    i++;
}

//Tarea 24




//Tarea 25
let op;
do {

   op = prompt("Dime un numero mayor que 100") 
   

} while (op < 100 && op != null && op != "");

//Tarea 26

let num = prompt("Dime un numero");
let primo=true;
let acumulado=0;
let n=2;

while(acumulado<num){
    for(let i=2;i<n;i++){
        if(n%i===0){
            primo=false;
        }
    }
    
    if(primo==true){
        alert(n);
        acumulado++;
    }
    n+=1;
    primo=true;
}


//Tarea 27

let b = +prompt('a?', '');

switch (b) {

    case 0:
        alert(0)
        break;
    case 1:
        alert(1)
        break;
    case 2:
        
    case 3:
        alert("2,3")
        break;

    default:
        break;
}
