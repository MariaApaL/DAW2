package org.iessoterohernandez.model.dao;

import org.iessoterohernandez.Laboral.Empleado;
import org.iessoterohernandez.Laboral.Nomina;
import org.iessoterohernandez.exceptions.DatosNoCorrectosException;
import org.iessoterohernandez.model.connector.MySQLConnector;

import java.io.*;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;
/**
 * Clase para crear métodos para manipular la bbdd
 */

public class EmpleadoBBDD {
    /**
     *
     * @return
     * @throws SQLException
     * @throws ClassNotFoundException
     */
    public static List<Empleado> showEmpleados () throws SQLException, ClassNotFoundException {
        Connection con = MySQLConnector.getConnection();
        Empleado e;

        List<Empleado> empleados = new ArrayList<Empleado>();


        try {
            Statement st = con.createStatement();
            ResultSet rs = st.executeQuery(
                    "SELECT NOMBRE, DNI, SEXO, ANYOS, CATEGORIA FROM EMPLEADO");


            while (rs.next()) {
                e = new Empleado(rs.getString(1), rs.getString(2), rs.getString(3), rs.getInt(4), rs.getInt(5));
                e.imprime();
                empleados.add(e);
            }
        } catch (SQLException err) {
            err.printStackTrace();
        } catch (DatosNoCorrectosException err) {
            err.printStackTrace();
        }

        return empleados;

    }


    /**
     *
     * @param e
     * @throws SQLException
     * @throws ClassNotFoundException
     */
    public static void updateEmpleado(Empleado e) throws SQLException, ClassNotFoundException {
        Connection con = MySQLConnector.getConnection();

        try {
            int numUpd;
            String sql = "UPDATE EMPLEADO SET NOMBRE = ?, SEXO = ?, ANYOS = ?, CATEGORIA = ? WHERE DNI = ?";
            PreparedStatement ps = con.prepareStatement(sql);
            ps.setString(1, e.nombre);
            ps.setString(2, e.sexo);
            ps.setInt(3, e.anyos);
            ps.setInt(4, e.getCategoria());
            ps.setString(5, e.dni);
            numUpd = ps.executeUpdate();
            ps.close();

        }catch (SQLException ex) {
            ex.printStackTrace();
        }
    }

    /**
     *
     * @param dni
     * @throws SQLException
     * @throws ClassNotFoundException
     */
    public static void updateNomina(String dni) throws SQLException, ClassNotFoundException {

        Connection con = MySQLConnector.getConnection();
        int numUpd =0;
        int sueldo =Nomina.sueldo(EmpleadoBBDD.showEmpleado(dni));
        try {

            PreparedStatement ps = con.prepareStatement("UPDATE NOMINA SET SUELDO= ? WHERE DNI=? ");
            ps.setInt(1, sueldo);
            ps.setString(2, dni);

            numUpd = ps.executeUpdate();
            ps.close();

        } catch (SQLException ex) {
            ex.printStackTrace();
        }
    }

    /**
     *
     * @param e
     * @throws SQLException
     * @throws ClassNotFoundException
     */
    public static void altaEmpleado(Empleado e) throws SQLException, ClassNotFoundException {

        Connection con = MySQLConnector.getConnection();

        try {
            Statement st=con.createStatement();

            st.execute("INSERT INTO EMPLEADO (nombre,dni,sexo,anyos,categoria) VALUES ('"+e.nombre+"','"+e.dni+"','"+e.sexo+"','"+e.getCategoria()+"','"+e.anyos+"')");
            st.execute("INSERT INTO NOMINA (dni, sueldo) VALUES ('"+e.dni+"','"+Nomina.sueldo(e)+"')");

            backup(e);

        }catch (SQLException ex) {
            ex.printStackTrace();
        }
    }

    /**
     *
     * @param nombre
     * @param dni
     * @param sexo
     * @param anyos
     * @param categoria
     */
    public static void altaEmpleado(String nombre, String dni, String sexo,  int anyos,int categoria) {
        try {
            Empleado e =new Empleado(nombre, dni, sexo, anyos, categoria);
            altaEmpleado(e);

        }catch (DatosNoCorrectosException | SQLException | ClassNotFoundException e) {

            e.printStackTrace();
        }
    }

    /**
     *
     * @param dni
     * @return
     * @throws SQLException
     * @throws ClassNotFoundException
     */
    public static void findSueldo(String dni) throws SQLException, ClassNotFoundException {

        Connection con = MySQLConnector.getConnection();
        String sql = "SELECT SUELDO FROM NOMINA WHERE DNI = '"+dni+"'";
        Statement st = null;
        ResultSet rs = null;
        int sueldo = 0;

        try {
            st = con.createStatement();
            rs = st.executeQuery(sql);

            while (rs.next()) {
                sueldo = rs.getInt(1);
            }

            if (sueldo == 0) {
                System.out.println("No encontramos el empleado que usted busca");
            } else {
                System.out.println("El salario del empleado " + dni + " es de: " + sueldo + "€");
            }
        } catch (SQLException err) {
            err.printStackTrace();
        }

    }

    /**
     *
     * @param dni
     * @return
     * @throws SQLException
     * @throws ClassNotFoundException
     */
    public static Empleado showEmpleado(String dni) throws SQLException, ClassNotFoundException {
        Connection con = MySQLConnector.getConnection();
        Statement st = null;
        ResultSet res = null;
        Empleado e = null;

        try {

            st = con.createStatement();
            res = st.executeQuery(
                    "SELECT NOMBRE, DNI, SEXO, ANYOS , CATEGORIA FROM EMPLEADO WHERE DNI='" + dni + "'");

            while (res.next()) {
                e = new Empleado(res.getString(1), res.getString(2), res.getString(3), res.getInt(4),
                        res.getInt(5));
            }

        } catch (SQLException err) {
            err.printStackTrace();

        } catch (DatosNoCorrectosException err) {
            err.printStackTrace();

        }

        return e;
    }

    /**
     *
     * @param dni
     * @return
     * @throws SQLException
     * @throws ClassNotFoundException
     */

    public static boolean findEmpleado (String dni) throws SQLException, ClassNotFoundException {
        Connection con = MySQLConnector.getConnection();
        String sql = "SELECT * FROM EMPLEADO where DNI = ?";


        try (PreparedStatement stmt = con.prepareStatement(sql)) {

            stmt.setString(1, dni);
            ResultSet result = stmt.executeQuery();
            result.beforeFirst();

            return result.next();

        } catch (SQLException e) {
            e.printStackTrace();
            return false;
        }
    }

    /**
     *
     * @param e
     */
    public static void backup(Empleado e) {

        File f = new File("empleadosBackUp.txt");
        try {
            FileWriter fw = new FileWriter(f,true);
            BufferedWriter bw = new BufferedWriter(fw);

            bw.write(e.nombre+" "+e.dni+" "+e.sexo+" "+e.getCategoria()+" "+e.anyos+" "+Nomina.sueldo(e)+'\n');

            bw.close();
            fw.close();
        }catch (FileNotFoundException ex) {
            ex.printStackTrace();
        }catch (IOException ex) {
            ex.printStackTrace();
        }
    }

}