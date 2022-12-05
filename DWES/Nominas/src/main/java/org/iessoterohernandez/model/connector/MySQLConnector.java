package org.iessoterohernandez.model.connector;



import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

/**
 * Clase para conectarse a la bbdd
 */
public class MySQLConnector {

    /**
     *
     * @return
     * @throws SQLException
     * @throws ClassNotFoundException
     */
    public static Connection getConnection() throws SQLException, ClassNotFoundException {
        final String USER = "root";
        final String PASS = "123456";
        final String DB_NAME = "ejercicionominas";
        final String CONN_URL = "jdbc:mysql://localhost:3306/" + DB_NAME;
        Connection conn = null;
        Class.forName("com.mysql.cj.jdbc.Driver");
        conn = DriverManager.getConnection(CONN_URL, USER, PASS);
        return conn;

    }

    /**
     *
     * @param conn
     * @throws SQLException
     */
    public static void close(Connection conn) throws SQLException {
        if (conn != null)
            conn.close();
    }
}

