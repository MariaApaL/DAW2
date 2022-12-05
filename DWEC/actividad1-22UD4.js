//Tarea 1

let numeros = [2, 22, 36, 350, 12, 500];

//numeros.sort(); No funciona por qué no entiende como los debe de ordenar, ya que ordena
//alfabeticamente por defecto.

//Añadiendo parámetros conseguimos que se ordene.

numeros.sort((a, b) => {
  return a - b;
});

//Tarea 2

let ciudades = ["Madrid", "Sevilla", "París", "Munich", "Berlin", "Roma"];
let capitales = ["Madrid", "Berlin", "Roma", "Otawa", "Atenas"];
//a
console.log(ciudades);

//b

function sonCapital(cities, capitals) {

  let result = "";
  for (let city of cities) {
    if (capitals.includes(city)) {
      result += city + " , ";
    }
  }
  alert("Estas son capitales: " + result);
}
sonCapital(ciudades, capitales);

//c

function sonCapital(cities, capitals) {

  let result = [];
  for (let city of cities) {
    if (capitals.includes(city)) {
      result.push(city);
    }
  }
  alert("Estas son capitales: " + result);
}
sonCapital(ciudades, capitales);

//d

function concatenaArrays(city, capi) {
  let newArray = city.concat(capi);
  alert(newArray);
}
concatenaArrays(ciudades, capitales);

//e

let noCapital = ((city, capi) => {
  let result = [];
  for (let city of cities) {
    if (!capitals.includes(city)) {
      result.push(city);
    }
  }
  alert("Estas no son capitales: " + result);

});
noCapital(ciudades, capitales);


//Tarea 3



//Tarea 5

function carameliza(str) {
  let cadena = str.split("-");
  let text = "";
  for (let i = 0; i < cadena.length; i++) {
    if (i !== 0) {
      cadena[i] = cadena[i][0].toUpperCase() + cadena[i].substr(1);
    }
  }

  text += cadena;
  alert(text);
}
carameliza("hola-como-estas");

//Tarea 6

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function filtrarRango(arr, a, b) {

  let array = arr.map((element) => {
    if (element >= a && element < b) {
      console.log(array);
    }
  })

}

console.log(filtrarRango(num, 6, 4));


//tarea 7
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function filtrarRango(arr, a, b) {

  let array = arr.filter((element) => {
    if (element >= a && element < b) {
      return element;
    }
  })
  console.log(array);
}

console.log(filtrarRango(num, 6, 4));


//tarea 8
let num = [1, 2, 3, 4, 5, 6, 7];

num.sort((a, b) => {
  return b - a
})

console.log(num);

//tarea 9

let num = [1, 2, 9, 4, 12, 6, 7];

function copiaOrdenada(arr) {
  let newArr;
  newArr = arr.sort((a, b) => {
    return a - b
  })

  console.log(newArr);

}

copiaOrdenada(num);
console.log(num);


//Tarea 10




//Tarea 11

let array = [1, 2, 3, 4, 5, 5, 6, 6, 7, 7, 4, 4,];

function unique(arr) {

  let result = [];

  for (let arg of arr) {
    if (!result.includes(arg)) {
      result.push(arg);
    }
  }
  alert(result);
}
unique(array);


// Tarea 12



let arr = [1, 2, 3, 3, 3, 5, 6, 6, 6, 6, 88, 88, 86, 5, 2];

function unico(arr) {
  let setArr = new Set(arr);
  let set = [...setArr];

  return set;
}


alert(unico(arr));

//Tarea 13
function aclean(arr) {
  let map = new Map();

  for (let word of arr) {

    let sorted = word.toLowerCase().split('').sort().join('');
    map.set(sorted, word);
  }

  return Array.from(map.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert(aclean(arr));

//Tarea 14

function fecha() {
  let date = new Date(2012, 2, 20, 3, 12);
  return date;

}

alert(fecha());

//Tarea 15

let fecha = new Date(2022, 9, 4, 17, 29);

function getWeekDay(fecha) {
  let dias = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];

  return dias[fecha.getDay()];
}


alert(getWeekDay(fecha));


//Tarea 16

let fecha = new Date(2022, 9, 2, 17, 29);

function getLocalDay(fecha) {
  let dias = ['LUNES', 'MARTES', 'MIERCOLES', 'JUEVES', 'VIERNES', 'SABADO', 'DOMINGO'];

  let dia = fecha.getDay();
  if (dia == 0) {
    dia == 7;
  }

  return dias[dia];
}


alert(getLocalDay(fecha));

//tarea 17
let date = new Date(2022, 9, 4);

function getDateAgo(date, days) {
  date.setDate(date.getDate() - days);
  console.log(date.getDate());
}


alert(getDateAgo(date, 7));

//tarea 18

function getLastDayOfMonth(anio, mes) {
  let date = new Date(anio, mes+ 1, 0);
  console.log(date.getDate());
}
alert(getLastDayOfMonth(2022, 6));

//Tarea 19
function getSecondsToday() {
  let d = new Date();
  return d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds();
}

alert(getSecondsToday());

//Tarea 20

function getSecondsToTomorrow() {
  let date = new Date();
  let hora = date.getHours();
  let minuto = date.getMinutes();
  let segundo = date.getSeconds();
  let segundosDia = (hora * 60 + minuto) * 60 + segundo;
  let totalSegundos = 86400;

  return totalSegundos - segundosDia;
}

//Tarea 21



//Tarea 22

let user2 = JSON.parse(JSON.stringify(user));








































