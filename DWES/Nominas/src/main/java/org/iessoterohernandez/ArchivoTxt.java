package org.iessoterohernandez;

import org.iessoterohernandez.exceptions.DatosNoCorrectosException;
import org.iessoterohernandez.Laboral.Empleado;
import org.iessoterohernandez.Laboral.Nomina;

import java.io.*;

/**
 * Main para crear archivos
 */

public class ArchivoTxt {

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
     */
    public static void main(String[] args) {


        try {

            //Empleados
            Empleado e1 = new Empleado("James Cosling", "32000032G", "M", 4, 7);
            Empleado e2 = new Empleado("Ada Lovelace", "32000031R", "F");


            //Primer fichero( de entrada)
            File f = new File("empleado.txt");
            FileReader fr = new FileReader(f);
            BufferedReader br = new BufferedReader(fr);
            FileWriter fw = new FileWriter(f);
            BufferedWriter bw = new BufferedWriter(fw);


            //Segundo fichero binario (de salida)
            File binary = new File("salarios.dat");
	        FileOutputStream fsalida = new FileOutputStream(binary);
	        BufferedOutputStream bsalida = new BufferedOutputStream(fsalida);


            //Escribimos en el fichero empleados.txt
            bw.write(e1.nombre + " DNI: "+e1.dni+", AÑOS: "+e1.anyos+", CATEGORÍA: "+e1.getCategoria()+", SEXO: "+e1.sexo);
            bw.write('\n');
            bw.write(e2.nombre + " DNI: "+e2.dni+" , SEXO: "+e2.sexo);
            bw.flush();

            //leemos el fichero empleados.txt
            while (br.ready()) {
                String cadena = br.readLine();
                System.out.println(cadena);
            }


            //Actualizamos valores de empleados
            escribe(e1);
            escribe(e2);
            e1.setCategoria(9);
            e2.incrAnyo(3);
            escribe(e1);
            escribe(e2);

            //Añadimos el nuevo contenido
            bw.write('\n');
            bw.write(e1.nombre + " DNI: "+e1.dni+", AÑOS: "+e1.anyos+", CATEGORÍA: "+e1.getCategoria()+", SEXO: "+e1.sexo);
            bw.write('\n');
            bw.write(e2.nombre + " DNI: "+e2.dni+" , SEXO: "+e2.sexo+", AÑOS: "+e2.anyos);
            bw.flush();


            while (br.ready()) {
                String cadena = br.readLine();
                System.out.println(cadena);
            }

            //escribimos en salida.dat
            bsalida.write((" DNI: "+e1.dni + ", NOMINA" + Nomina.sueldo(e1)+'\n').getBytes());
    	    bsalida.write((" DNI: "+e2.dni + ", NOMINA" + Nomina.sueldo(e2)+'\n').getBytes());

          //Cerramos

            br.close();
            bsalida.close();
	        bw.close();


        }catch(FileNotFoundException e){
            e.printStackTrace();

        } catch (IOException e) {
            e.printStackTrace();
        } catch (DatosNoCorrectosException e) {
            e.printStackTrace();
        }
    }
}
