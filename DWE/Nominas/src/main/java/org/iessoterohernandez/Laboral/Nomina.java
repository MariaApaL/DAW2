package org.iessoterohernandez.Laboral;

/**
 * Clase de nominas
 */
public class Nomina {

    private static final int SUELDO_BASE[] =
            {50000, 70000, 90000, 110000, 130000,
                    150000, 170000, 190000, 210000, 230000};

    /**
     *
     * @param e
     * @return
     */
    public static int sueldo(Empleado e){


        return SUELDO_BASE[e.getCategoria()]+(e.anyos*5000);
    }

}
