let alumnos;
let afectados;
let temperatura;
let mensaje;

function alumnosAleatorio(min, max) {
    alumnos=Math.floor(Math.random() * (max - min) + min);
    return alumnos;
  }

function afectadosAleatorio(min,max){
    afectados=Math.floor(Math.random() * (max - min) + min);
    return afectados;
}

function temperaturaAleatorio(min,max){
    temperatura=Math.floor(Math.random() * (max - min) + min);
    return temperatura;
}

function mensaje(){
    alert(`El total de alumnos en el aula es ${alumnosAleatorio(31,20)}, de ellos están afectados ${afectadosAleatorio(12,5)} por la
    enfermedad, y la temperatura que están sufriendo es ${temperaturaAleatorio(41,38)} grados
    centígrados`);
}

mensaje();

