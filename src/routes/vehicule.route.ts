import express, { Request, Response } from "express";
const router = express.Router();
import controllers from "../controllers/vehicule.controller";

//=========middlware podemos validar aca en las rutas=======================

import { validate } from "../middleware/validationMiddleware";
import { VehiculeSchema } from "../validations/VehiculeSchemaCreate";
router.get("/", controllers.GetVehicules);
router.post("/", validate(VehiculeSchema), controllers.CreateVehicules);

export default router;
