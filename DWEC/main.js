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