import { Vehicule } from "../models/Vehicule";
import vehiculeRepository from "../repositories/vehicule.repository";
import { Request, Response } from "express";

const getAllVehicule = async (): Promise<Vehicule[]> => {
  return await vehiculeRepository.getAll();
};

const createVehicule = async ({
  type_vehicule,
  color,
  patente,
  brand,
}: Vehicule) => {
  const newVehicule: Vehicule = {
    type_vehicule,
    color,
    patente,
    brand,
  };

  return await vehiculeRepository.create(newVehicule);
};

export = {
  getAllVehicule,
  createVehicule,
};
