package org.iessoterohernandez;


import org.iessoterohernandez.exceptions.DatosNoCorrectosException;
import org.iessoterohernandez.Laboral.Empleado;
import org.iessoterohernandez.Laboral.Nomina;

/**
 * Main para crear empleados
 */
public class CalculaNominas {

//Imprime datos y calcula sueldo

    /**
     *
     * @param e
     */
    private static void escribe (Empleado e){
        System.out.println("Empleado");
        e.imprime();
        System.out.println(Nomina.sueldo(e));


    }

    /**
     *
     * @param args
     * @throws DatosNoCorrectosException
     */
    public static void main(String[] args) throws DatosNoCorrectosException {

        try {

            Empleado e1 = new Empleado("James Cosling", "32000032G", "M", 4, 7);
            Empleado e2 = new Empleado("Ada Lovelace", "32000031R", "F");

            escribe(e1);
            escribe(e2);

            System.out.println("-------------------------");

            e1.setCategoria(9);
            e2.incrAnyo(3);
            escribe(e1);
            escribe(e2);
        }catch(DatosNoCorrectosException e){
            System.out.println(e);
            e.printStackTrace();
        }
    }
    }