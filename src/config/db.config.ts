import mysql, { Pool } from "mysql2/promise";

const ConnectDB = async (): Promise<Pool> => {
  try {
    const pool: Pool = mysql.createPool({
      host: "localhost",
      database: "parking",
      user: "root",
      password: "admin",
      connectionLimit: 10,
    });

    //opcional para probar la conexion
    await pool.getConnection();

    if (pool) {
      console.log("Connected to the database mysql successfully.");
    }

    return pool;
  } catch (error) {
    console.error("Failed to connect to the database:", error);
    throw error; // Rethrow the error after logging it
  }
};

export default ConnectDB;

/*

//ota forma con clases

import mysql, { Pool } from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

class ConnectDB {
  private static _instance: ConnectDB;
  private pool: Pool | null = null;

  private constructor() {}

  static async getInstance(): Promise<ConnectDB> {
    if (!ConnectDB._instance) {
      ConnectDB._instance = new ConnectDB();
      await ConnectDB._instance.initialize();
    }
    return ConnectDB._instance;
  }

  private async initialize() {
    try {
      this.pool = mysql.createPool({
        host: process.env.DB_HOST || "localhost",
        database: process.env.DB_NAME || "parking",
        user: process.env.DB_USER || "root",
        password: process.env.DB_PASS || "admin",
        connectionLimit: 10,
      });

      // Prueba de conexión (opcional)
      await this.pool.getConnection();
      console.log("Connected to the database successfully.");
      
    } catch (error) {
      console.error("Failed to connect to the database:", error);
      throw error; // Rethrow the error after logging it
    }
  }

  getPool(): Pool {
    if (!this.pool) {
      throw new Error("Database connection not initialized.");
    }
    return this.pool;
  }
}

export default ConnectDB;


*/
