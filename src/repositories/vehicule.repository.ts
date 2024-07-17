import { Vehicule } from "../models/Vehicule";
import { Pool } from "mysql2/promise";
import ConnectDB from "../config/db.config";

const getAll = async (): Promise<Vehicule[]> => {
  let pool: Pool = await ConnectDB();
  try {
    const [rows] = await pool.query("SELECT * FROM vehicules");

    console.log("repositorygetAll: ", rows);

    return rows as Vehicule[];
  } catch (error) {
    console.error("Error al obtener todos los vehículos:", error);
    throw error;
  } finally {
    if (pool) {
      pool.end();
    }
  }
};

/**
 * 
 type_vehicule: TypeVehicule;
  color: string;
  patente: string;
  brand: string; // marca
  createdAt: Date;
  updatedAt: Date;
 */

const create = async (vehicule: Vehicule) => {
  let pool: Pool = await ConnectDB();

  //console.log("pool created", pool);
  const { type_vehicule, color, patente, brand } = vehicule;
  try {
    // console.log("Repository: ", type_vehicule, color, patente, brand);

    const [result] = await pool.query(
      "INSERT INTO vehicules(type_vehicule,color,patente,brand) VALUES(?,?,?,?)",
      [type_vehicule, color, patente, brand]
    );

    /**
     el result devuelve un array 
     result respository:  [
     ResultSetHeader {
    fieldCount: 0,
    affectedRows: 1,
    insertId: 2,
    info: '',
    serverStatus: 2,
    warningStatus: 0,
    changedRows: 0
  },
  undefined
]
 
 entonces cuando se obtiene los datos se los guardo en un [result]
     */

    //el casting se hace porque typescript jode con el tipo de mysql
    const insertedVehiculeId = (result as any).insertId;

    //  ahora que tengo el id del elemento creado lo buco lo traigo y lo devuelvo
    const [createdVehicule] = await pool.query(
      "SELECT * FROM vehicules WHERE id = ?",
      [insertedVehiculeId]
    );

    //console.log("repository create: ", createdVehicule);

    return createdVehicule;
  } catch (error) {
    console.error("Error al obtener todos los vehiculos");
  } finally {
    if (pool) {
      pool.end();
    }
  }
};

export = {
  getAll,
  create,
};

//clase repository

/**
 * 
class VehiculeRepository {
  private pool: Pool | null = null;

  private async initialize() {
    try {
      this.pool = await ConnectDB();
    } catch (error) {
      console.error("Failed to initialize VehiculeRepository:", error);
      throw error; // Manejar el error según sea necesario
    }
  }
  constructor() {
    this.initialize();
  }

  async getAll(): Promise<Vehicule[]> {
    if (!this.pool) {
      //esto ayuda a verificar la conexion antes de hacer la consulta
      throw new Error("Database connection not initialized.");
    }

    const [rows] = await this.pool.query("SELECT * FROM vehicule");
    return rows as Vehicule[];
  }
}

export default VehiculeRepository;



 */
