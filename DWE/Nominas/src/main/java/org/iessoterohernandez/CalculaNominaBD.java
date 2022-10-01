package org.iessoterohernandez;


import org.iessoterohernandez.Laboral.Empleado;
import org.iessoterohernandez.model.dao.EmpleadoBBDD;

import java.sql.SQLException;

import java.util.Scanner;

/**
 * Main para manipular la bbdd
 */

public class CalculaNominaBD {
    public static void main(String[] args) throws SQLException, ClassNotFoundException {


        Scanner sc = new Scanner(System.in);
        int op;
        String dni;
        System.out.println("Vamos a consultar la base de datos.");
        System.out.println("Elija la opción que desea consultar.");
        System.out.println("------------------------------");

        System.out.println("0 -Salir");
        System.out.println("1 - Mostrar empleados");
        System.out.println("2 - Seleccionar salario");
        System.out.println("3 - Modificar empleados");
        System.out.println("4 -Actualizar sueldo");
        System.out.println("5 -Actualizar los sueldos");
        System.out.println("6 -Realizar una copia de seguridad");
        do {
            op = sc.nextInt();
            System.out.println("0 -Salir");
            System.out.println("1 - Mostrar empleados");
            System.out.println("2 - Seleccionar salario");
            System.out.println("3 - Modificar empleados");
            System.out.println("4 - Actualizar sueldo");
            System.out.println("5 - Actualizar los sueldos");
            System.out.println("6 - Realizar una copia de seguridad");

            switch (op) {
                case 1:
                    EmpleadoBBDD.showEmpleados();

                    break;

                case 2:
                    System.out.println("Introduce el DNI del empleado a buscar");
                    sc.nextLine();
                    dni = sc.nextLine();
                    EmpleadoBBDD.findSueldo(dni);
                    break;
                case 3:

                    System.out.println("Introduce el DNI del empleado a modificar");
                    sc.nextLine();
                    dni = sc.nextLine();
                    if (EmpleadoBBDD.findEmpleado(dni)) {

                        System.out.println("¿Que campo deseas editar?");
                        System.out.println("1 -Nombre");
                        System.out.println("2 -Sexo");
                        System.out.println("3 -Categoria");
                        System.out.println("4 -Años");

                        Empleado e = EmpleadoBBDD.showEmpleado(dni);

                        String show = sc.nextLine();

                        switch (show) {
                            case "1":
                                System.out.println("Introduce un nuevo nombre");
                                e.nombre = sc.nextLine();

                                EmpleadoBBDD.updateEmpleado(e);
                                System.out.println("Actualizado con éxito");
                                break;

                            case "2":
                                System.out.println("Introduce el sexo correcto");
                                e.sexo = sc.nextLine();

                                EmpleadoBBDD.updateEmpleado(e);
                                System.out.println("Actualizado con éxito");
                                break;
                            case "3":
                                System.out.println("Introduce la categoría correcta");
                                sc.nextLine();
                                int categoria = e.getCategoria();
                                categoria = sc.nextInt();


                                EmpleadoBBDD.updateEmpleado(e);
                                System.out.println("Actualizado con éxito");
                                break;
                            case "4":
                                System.out.println("Introduce los años correctos");
                                e.anyos = sc.nextInt();


                                EmpleadoBBDD.updateEmpleado(e);
                                System.out.println("Actualizado con éxito");
                                break;

                            default:
                                break;
                        }

                    }

                    break;
                case 4:

                    System.out.println("Introduce DNI del empleado a modificar");
                    sc.nextLine();
                    dni = sc.nextLine();
                    if (EmpleadoBBDD.findEmpleado(dni)) {
                        EmpleadoBBDD.updateNomina(dni);
                        System.out.println("Sueldo actualizado");
                    } else {
                        System.out.println("El empleado no existe");
                    }
                    break;
                case 5:
                    for (Empleado e : EmpleadoBBDD.showEmpleados()) {
                        EmpleadoBBDD.updateNomina(e.dni);
                    }
                    System.out.println("Empleados actualizados");

                    break;
                case 6:

                    for (Empleado e : EmpleadoBBDD.showEmpleados()) {
                        EmpleadoBBDD.backup(e);
                    }
                    System.out.println("Copia realizada con exito");

                    break;

                default:
                    break;
            }

        } while (op != 0);
    }


    }


