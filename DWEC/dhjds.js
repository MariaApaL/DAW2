function Vehiculo(marca, modelo, color, anioFabrica) {
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.anioFabrica = anioFabrica;
 }
 
 //c. Los comento porque si no no se integran las nuevas propiedades
 // let Coche1 = new Vehiculo("chevrolet", "lacetti", "azul", 2007);
 // let Coche2 = new Vehiculo("Seat", "leon", "negro", 2001);
 
 //d Mostra
 // console.log(Coche1.modelo);
 
 //e
 // console.log(Coche1[color]);
 
 //f Crear el método mostrarDatos.
 Vehiculo.prototype.mostrarDatos = function () {
 
    console.log(this.marca);
    console.log(this.modelo);
    console.log(this.color);
    console.log(this.anio);
 }
 
 //g
 Vehiculo.prototype.acelerar = function (velocidad) {
 
    console.log(`Este coche va a ${velocidad}km/h`);
 
 }
 
 //h
 Vehiculo.prototype.arrancar = function () {
 
    console.log(`El vehiculo de la marca ${this.marca}, ${this.modelo}, ${this.color} ha arrancado`);
 }
 
 //i
 // Vehiculo.prototype.cilindrada=null;  NO FUNCIONA
 
 Object.defineProperty(Vehiculo, "cilindrada", {
    writable: false,
    configurable: false
 })
 
 //j
 Vehiculo.prototype.arrancar = function () {
    console.log(`El vehiculo de la marca ${this.marca}, ${this.modelo}, ${this.color} ha parado`);
 }
 
 //k 
 
 Object.defineProperty(Coche1,'marca',{

    writable:false,
    configurable:false
 });
 
 Object.defineProperty(Coche1,'modelo',{
    value:'xx',
    writable:false,
    configurable:false
 
 });
 
 Object.defineProperties(Coche1, {
    "mostarDatos": {
      enumerable: false
    },
    "frenar": {
       enumerable: false
    },
    "arrancar":{
       enumerable: false
    }
 });
 
 
 // l
 
 delete Coche1.marca;
 Coche1.modelo="cochechulo";
 console.log(Coche1.marca);
 console.log(Coche1.modelo);
 
 // m
 console.log("Object.keys");
 Object.keys(Coche1);
 console.log("For in");
 for (const prop in Coche1) {
    console.log(`coche1.${prop} = ${Coche1[prop]}`);
  };
  console.log("hasOwnProperty");
 for (const prop in Coche1) {
    if (Object.hasOwnProperty.call(Coche1, prop)) {
        const element = Coche1[prop];
        console.log(element);
    }
 }
 