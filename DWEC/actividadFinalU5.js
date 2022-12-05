
// EJERCICIO 1 
// function mueveVentanaIzquierda(){
//     let valor = window.opener.document.getElementById("pixel").value;
//     window.moveBy(-valor,0);
// }

// function mueveVentanaDerecha(){
//     let valor = window.opener.document.getElementById("pixel").value;

//     window.moveBy(valor,0);
// }

// EJERCICIO 2
// let num;

// function nuevaPagina() {
    
//     num = Math.floor(Math.random() * (2+1));
    
//     if (num == 0) {
//         window.location = "https://www.outlook.com";
//     }
//     if (num == 1) {
//         window.location = "https://www.gmail.com";
//     }
//     if (num == 2) {
//         window.location = "https://www.yahoo.com";
//     }
// }

//     EJERCICIO 3.1
// function calculaPotencia(){
//     let base=frames.ventana.document.getElementById("base").value;
//     let exp= frames.ventana.document.getElementById("exp").value;
//     let resultado= Math.pow(base,exp);
    
//     document.getElementById("result").setAttribute("placeholder",resultado);

//     return resultado;

// }

//  EJERCICIO 3.2
// function calculaPotencia(){
//     let base=window.parent.document.getElementById("base").value;
//     let exp= window.parent.document.getElementById("exp").value;
//     let resultado= Math.pow(base,exp);
    
//     document.getElementById("result").setAttribute("placeholder",resultado);

//     return resultado;

// }

//EJERCICIO 4

let arg=[];
let sum=0;
let cont=0;

function lanzarDado(){

    //Rellena un array con la suma de los dados en 10 tiradas.
    for(let i=0;i<10;i++){
    let dado1=Math.random()*7;
    let dado2=Math.random()*7;
    sum=dado1+dado2;
    arg.push(sum);
    }

    
}





















