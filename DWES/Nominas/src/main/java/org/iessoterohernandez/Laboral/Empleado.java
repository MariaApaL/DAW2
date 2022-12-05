package org.iessoterohernandez.Laboral;

import org.iessoterohernandez.exceptions.DatosNoCorrectosException;

import java.sql.ResultSet;

/**
 * Clase de Empleado
 */
public class Empleado extends Persona{

    private int categoria;
    public int anyos;


    /**
     *
     * @param nombre
     * @param dni
     * @param sexo
     * @param anyos
     * @param categoria
     * @throws DatosNoCorrectosException
     */
    public Empleado(String nombre, String dni, String sexo, int anyos, int categoria) throws DatosNoCorrectosException {
        super(nombre, dni, sexo);
        if(categoria<1||categoria>10){
            throw new DatosNoCorrectosException();
        }else {
            this.categoria = categoria;
        }

        if(anyos>0) {
            this.anyos = anyos;
        }else{
            throw new DatosNoCorrectosException();
        }
    }

    /**
     *
     * @param nombre
     * @param dni
     * @param sexo
     */
    public Empleado(String nombre, String dni, String sexo) {
        super(nombre, dni, sexo);

        this.categoria = 1;

        this.anyos =0;

    }


    /**
     *
     * @param categoria
     */
    public void setCategoria(int categoria) {
        if(categoria>=1||categoria<=10){
            this.categoria = categoria;
        }else{
            System.out.println("ERROR EN CATEGORIA");
        }

    }

    /**
     *
     * @return
     */
    public int getCategoria() {
        return categoria;
    }

    /**
     *
     * @param e
     */
    public void escribe (Empleado e){
        System.out.println("Empleado");
        e.imprime();
        System.out.println(Nomina.sueldo(e));


    }

    /**
     *
     * @param Anyos
     */
    public void incrAnyo(int Anyos){
        this.anyos++;
    }

    /**
     * Imprime empleados
     */
    public void imprime(){

        System.out.println("Empleado: "+ "nombre= "+super.nombre + " dni= "+super.dni+ " sexo= "+super.sexo+"  anyos= " + anyos + " categoria= "+ categoria+".");
    }

}
