package org.iessoterohernandez.Laboral;

public class Persona {

    //Creamos los atributos nombre, dni y sexo.

    public String nombre, dni;
    public String sexo;

    //Constructor con los 3 atributos
    public Persona(String nombre, String dni, String sexo){
        this.nombre = nombre;
        this.dni = dni;
        this.sexo = sexo;
    }

    //Constructor con solo nombre y sexo
    public Persona(String nombre, String sexo) {
        this.nombre = nombre;
        this.sexo = sexo;
    }

    //Este método modifica el valor del dni

    public void setDni(String dni) {
        this.dni = dni;
    }

    //Este método presenta por pantalla nombre y dni
    public void imprime (){
        System.out.println("Nombre: "+nombre);
        System.out.println("Dni: "+dni);
    }


}
