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
