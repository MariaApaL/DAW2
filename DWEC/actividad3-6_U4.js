//Tarea 3

let cambiaCadena = function (cadena) {

    let concat = "";
    for (let i = 0; i < cadena.length; i++) {
        if (i % 2 == 0) {
            concat += cadena[i].toUpperCase();
        } else {
            concat += cadena[i].toLowerCase();
        }
    }
    return concat;
}

alert(cambiaCadena("CAMBIATE"));

//Tarea 4
let buscaPalabra = function(texto,...palabras){
    texto.toLowerCase();
    
    
    for(let palabra of palabras){
        
    if(texto.indexOf(palabra,0)>=0){
        alert("Encontrada");
    }else{
        alert("No encontrada");
    }
    
    }

}

buscaPalabra("buenas tardes, como esta", "buenas","tardes","no");

//Tarea 5


// function truncar(texto,longitudMax){
//     let length=texto.length;
//     let final="...";
//     let max=longitudMax-3;
  
//     if(length>longitudMax){ 
    
//     texto=texto.substring(0,max);
//     alert(texto+final);
//     }else{
//         alert(texto);
//     }
    
// }


function truncar(texto,longitudMax){
    
    let arrg= texto.split(" ");
    let final="... ";
    let text="";
    let cadena="";
   
    
    for(let i=0;i<arrg.length;i++){
        text=arrg[i];
        
    if(text.length>longitudMax){ 
       
        text=text.substring(0,longitudMax);
        text+=final;
        
    }
    cadena+=text+" ";
}

alert(cadena);
}

truncar("HOLA BUENOS DIAS HOY ME SIENTO BIEN",4);

//Tarea 6

function extraerValor(str){

    let length=str.length;
    let cadena='';

    for(let i=0;i<length;i++){
        let aux=str[i];
        if(!isNaN(aux)){
            cadena+=str[i];
        }
    }
    alert(cadena);
}

extraerValor("€120.");





















