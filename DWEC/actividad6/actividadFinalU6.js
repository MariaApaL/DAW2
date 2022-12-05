// 1. Crear objeto Vehículo.
// a. Crear constructor.
// b. Crear propiedades: marca, modelo, color y año fabricación.
// c. Instanciar dos objetos.
// d. Mostrar por pantalla una propiedad con notación por puntos. Objeto 1 - marca.
// e. Mostrar por pantalla una propiedad con notación por corchetes. Objeto 2 - color.
// f. Crear el método mostrarDatos.
// g. Crear un método que tenga argumentos acelerar(velocidad). Mostrará por pantalla que el coche ha
// acelerado a la velocidad pasada.
// h. Crear un método con función interna arrancar. Mostrará por pantalla que el coche de marca _,
// modelo_, de color_ ha arrancado.
// i. Asignar una nueva propiedad cilindrada.
// j. Asignar un nuevo método frenar. Mostrará por pantalla que el coche de marca_, modelo_, color_
// ha parado).
// k. Realizar las siguientes modificaciones en el Objeto 1 : la propiedad marca no podrá ser eliminadas,
// la propiedad modelo tendrá como valor por defecto ‘xx’ y no podrá ser modificado y los métodos
// no serán enumerables.
// l. Borrar la propiedad marca, modificar la propiedad modelo y volver a mostrar los datos de Objeto
// 1.ç
// m. Muestra todas las propiedades de Objeto1 utilizando: for in , Object.hasOwnPropertyNames(),
// Object.keys().


// function Vehiculo(marca, modelo, color, anioFabrica) {
//    this.marca = marca;
//    this.modelo = modelo;
//    this.color = color;
//    this.anioFabrica = anioFabrica;
// }

// c.
// let Coche1 = new Vehiculo("chevrolet", "lacetti", "azul", 2007);
//  let Coche2 = new Vehiculo("Seat", "leon", "negro", 2001);

// //d 
// // console.log(Coche1.modelo);

// //e
// // console.log(Coche1[color]);

// //f Crear el método mostrarDatos.
// Vehiculo.prototype.mostrarDatos = function (obj) {

//   console.log(JSON.stringify(obj));
// }

// //g
// Vehiculo.prototype.acelerar = function (velocidad) {

//    console.log(`Este coche va a ${velocidad}km/h`);

// }

// //h
// Vehiculo.prototype.arrancar = function () {

//    console.log(`El vehiculo de la marca ${this.marca}, ${this.modelo}, ${this.color} ha arrancado`);
// }

// //i
// // Vehiculo.prototype.cilindrada=null;  NO FUNCIONA

// Object.defineProperty(Vehiculo, "cilindrada", {
//    writable: false,
//    configurable: false
// })

// //j
// Vehiculo.prototype.arrancar = function () {
//    console.log(`El vehiculo de la marca ${this.marca}, ${this.modelo}, ${this.color} ha parado`);
// }

// //k 

// Object.defineProperty(Coche1,'marca',{

//    writable:false,
//    configurable:false
// });

// Object.defineProperty(Coche1,'modelo',{
//    value:'xx',
//    writable:false,
//    configurable:false

// });

// Object.defineProperties(Coche1, {
//    "mostarDatos": {
//      enumerable: false
//    },
//    "frenar": {
//       enumerable: false
//    },
//    "arrancar":{
//       enumerable: false
//    }
// });


// // l

// delete Coche1.marca;
// Coche1.modelo="cochechulo";
// console.log(Coche1.marca);
// console.log(Coche1.modelo);

// // m
// console.log("Object.keys");
// Object.keys(Coche1);
// console.log("For in");
// for (const prop in Coche1) {
//    console.log(`Coche1.${prop} = ${Coche1[prop]}`);
//  };
//  console.log("hasOwnProperty");
// for (const prop in Coche1) {
//    if (Object.hasOwnProperty.call(Coche1, prop)) {
//        const element = Coche1[prop];
//        console.log(element);
//    }
// }

 
// 1.b. Utilice el código empleado para la generación de las instancias del objeto Vehículo, y modifíquelo para que
// los valores de cada una de sus propiedades se impriman en una tabla HTML. Utilice la generación de código
// HTML desde código JavaScript. Cada instancia del objeto debe ocupar una línea y el valor de cada propiedad
// debe ocupar una celda de dicha línea.


// let table;
// let element;
// let createMarca;
// let createModelo;
// let createColor;
// let createAnio;


// function Vehiculo(marca, modelo, color, anioFabrica) {

//    this.marca = marca;
//    this.modelo = modelo;
//    this.color = color; 
//    this.anioFabrica = anioFabrica;

//    table=document.getElementById("tabla");
//    element= document.createElement('tr');
//    createMarca  = document.createElement('th');
//    createMarca.textContent = this.marca
//    element.append(createMarca)

   
//    createModelo= document.createElement('th')
//    createModelo.textContent = this.modelo
//    element.append(createModelo)


   
//    createColor= document.createElement('th')
//    createColor.textContent = this.color
//    element.append(createColor)

   

//    createAnio= document.createElement('th')
//    createAnio.textContent = this.anioFabrica
//    element.append(createAnio)

//    tabla.append(element)
// }


// let coche1 = new Vehiculo("Chevrolet", "Lacetti", "Azul", 2007)
// let coche2 = new Vehiculo("Seat", "Ibiza", "Plata", 2001)
// let coche3 = new Vehiculo("Toyota", "modelochulo", "negro", 2005)
// let coche4 = new Vehiculo("BMW", "modelochulo2", "blanco", 2005)
// let coche5 = new Vehiculo("Kia", "modelochulo3", "negro", 2005)
// let body= document.getElementById("main").innerHTML


// 2.

// function Producto_alimenticio(codigo,nombre, precio) {

//     this.codigo = codigo;
//     this.nombre = nombre;
//     this.precio = precio  
//     this.imprimeDatos = function (obj) {

//         console.log(JSON.stringify(obj));
        
//     }
// }


// let p1 = new Producto_alimenticio(9876,"Muñeco",20);
// let p2 = new Producto_alimenticio(543,"Coche",21);
// let p3 = new Producto_alimenticio(321,"Pinzas",22);


// let compra = []

// compra.push(p1);
// compra.push(p2);
// compra.push(p3);

// console.log(compra[0].imprimeDatos(p1));
// console.log(compra[1].imprimeDatos(p2));
// console.log(compra[2].imprimeDatos(p3));


// 3. Añadir al objeto Array un método que permita eliminar de un array un determinado valor.
// Array.prototype.delete = function (arrg, value) {
//     let i = arrg.indexOf(value);
//     if (i>-1) {
//       arrg.splice(index, 1);
//     }
//     return arrg;
//   }

// 4. 

// function Elemento(descripcion,cantidad,precio){
//     this.descripcion=descripcion;
//     this.cantidad = cantidad;
//     this.precio = precio;
// };

// let info ={
//     base_imponible: 0,
//     iva: 21,
//     total:0,
//     forma_pago:"contado"
// }

// console.log(info.iva);

// function Factura(cliente,elementos,info){
//     this.cliente = cliente;
//     this.elementos = elementos;
//     this.info = info;
// }


// function Factura(cliente,elementos,info){
//     this.cliente = cliente;
//     this.elementos = [...elementos];
//     this.info = info;   
// } NO FUNCIONA

// function Cliente(nombre, direccion, telefono, nif) {

//     this.nombre = nombre;
//     this.direccion = direccion;
//     this.telefono = telefono;
//     this.nif = nif;

// }

// function Empresa(nombre,direccion,telefono,cif){
//     this.nombre=nombre;
//     this.direccion=direccion;
//     this.telefono=telefono;
//     this.cif=cif;
// }



// let item1 = new Elemento("coche",1,5);
// let item2 = new Elemento("helado",1,4);

// console.log(item1);
// console.log(item2);


// let cliente = new Cliente("Apa","pinoLoko","123456","12345678A");
// console.log(cliente);
// let factura = new Factura(cliente,[item1,item2],info);
// console.log(factura);
// let empresa = new Empresa("LaPapa","pinoBien","1234567","B1234567");
// console.log(empresa);

// Factura.prototype.precioIva= function precioIva(){
//     let precio=0;

//     for(let i=0;i<this.elementos.lenght;i++){
//       let elemento = this.elementos[i].precio;
//         precio+=elemento;
//     }
    
//     let iva = info.iva /100;

//     let calculaIva= precio*iva + precio;

//     console.log(calculaIva);


// }


// Factura.prototype.precioTotal = function precioTotal(){
//     let precio=0;

//     for(let i=0;i<this.elementos.lenght;i++){
//        let elemento =this.elementos[i].precio;
//         precio+=elemento;
//     }
    
//     let iva = info.iva /100;

//     let calculaIva= precio*iva + precio;
//     console.log(`el precio total con iva es ${calculaIva}`);

// }

// factura.precioIva();
// factura.precioTotal();


// 5.

// function Vehiculo (){
//     this.numRuedas=4;
//     this.plazas=5;
// }

// function Todoterreno(){
//     Vehiculo.call(this);
//     this.muestraDatos= function(obj){
//       console.log(JSON.stringify(obj));
//     }
// }

// function Furgoneta (){
//     Vehiculo.call(this);
//     this.muestraDatos= function(obj){
//         console.log(JSON.stringify(obj));
//       }
// }

// Furgoneta.prototype.numPasajeros=7;
// Todoterreno.prototype.traccion=true;

// let furgo = new Furgoneta();
// console.log(`numero de pasajeros ${furgo.numPasajeros}`);
// let todoterreno = new Todoterreno();
// console.log(`tiene traccion? ${todoterreno.traccion}`);

// furgo.muestraDatos(furgo);
// todoterreno.muestraDatos(todoterreno);

// 6.


// function Persona(nombre, edad, genero){
//     this.nombre=nombre;
//     this.edad=edad;
//     this.genero=genero;
//     this.obtDetalles=function(obj){
//         console.log(JSON.stringify(obj));
//     }

// }
// function Estudiante (nombre, edad, genero, curso, grupo){
//     Persona.call(this,nombre,edad,genero);
//     this.curso=curso;
//     this.grupo=grupo;
//     this.registrar= function (){
//         console.log(`el alumno ${this.nombre} se ha registrado`);
//     }
// }

// function Profesor (nombre, edad, genero, asignatura, nivel, ){
//     Persona.call(this,nombre,edad,genero);
//     this.asignatura=asignatura;
//     this.nivel=nivel;
//     this.asignar= function (){
//         console.log(`el profesor esta asignado a esta asignatura ${this.asignatura}`);
//     }
// }

// let person = new Persona("Apa",25,"F");
// let person2= new Persona("Ledo",30,"M");
// let alumno = new Estudiante("Apa",25,"F",2,"A");
// let profe = new Profesor ("Ledo",30,"M","Gatologia","Avanzado");

// person.obtDetalles(person);
// person2.obtDetalles(person2);
// person.obtDetalles(alumno);
// alumno.registrar();
// profe.asignar();

// 7. 

function Empleado (){
    this.nombre='';
    this.departamento='General';
}

function Director(){
    Empleado.call(this);
    this.informes= [];
}

function Trabajador(){
    Empleado.call(this);
    this.proyectos= [];
}

function Ingeniero(){
    Trabajador.call(this);
    this.maquina= '';
    this.departamento='Ingenieria';
}

empleado = new Empleado ();
empleado.nombre='Maria';
console.log(empleado);

director = new Director();
director.nombre='Ledo';
director.informes=['calidad','contabilidad'];
console.log(director);

trabajador = new Trabajador();
trabajador.nombre='Pupi';
trabajador.informes=['calidad','contabilidad'];
trabajador.proyectos=["proyect1","proyedct2"];
console.log(trabajador);

ingeniero = new Ingeniero();
ingeniero.nombre='Apa';
ingeniero.informes=['calidad2','contabilidad2'];
ingeniero.proyectos=["proyect2","proyedct3"];
ingeniero.maquina='tractor';
ingeniero.departamento;
console.log(ingeniero);