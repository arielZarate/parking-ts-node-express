import { Request, Response } from "express";
import vehiculeService from "../services/vehicule.service";

//funciones
async function GetVehicules(req: Request, res: Response): Promise<Response> {
  //return res.send("cars in parking");
  try {
    const vehicules = await vehiculeService.getAllVehicule();
    return res.status(200).json(vehicules);
  } catch (error) {
    return res.status(400).json(error);
  }
}

async function CreateVehicules(req: Request, res: Response): Promise<Response> {
  try {
    // const { type_vehicule, color, patente, brand } = req.body;

    //======podria tenes las validaciones aca sino en el middleware============

    const createdVehicule = await vehiculeService.createVehicule(req.body);
    return res.status(201).json({
      message: "Vehículo creado correctamente",
      status: 201,
      data: createdVehicule,
    });
  } catch (err) {
    console.error(err);
    return res.status(404).send("Error creating vehicule");
  }
}

export = {
  GetVehicules,
  CreateVehicules,
};
