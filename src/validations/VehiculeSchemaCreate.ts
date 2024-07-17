// src/schemas/vehicule.schema.ts
import { z } from "zod";

const VehiculeSchema = z.object({
  id: z.number().int().positive().optional(),
  type_vehicule: z

    /*

z.enum([...]): Define el enumerado con los valores permitidos.
refine: Utiliza refine para agregar una validación adicional y
 proporcionar un mensaje de error personalizado si el valor no está en el enumerado
        */
    .enum(["CAR", "BIKE", "MOTORCYCLE", "BUS", "OTHER"])

    .refine(
      (val) => ["CAR", "BIKE", "MOTORCYCLE", "BUS", "OTHER"].includes(val),
      {
        message:
          "Invalid type_vehicule. Allowed values are CAR, BIKE, MOTORCYCLE, BUS, OTHER.",
      }
    ),
  color: z
    .string()
    .min(1, "Color is required")
    .max(20, "Color cannot be more than 20 characters"),
  patente: z
    .string()
    .min(1, "Patente is required")
    .max(10, "Patente cannot be more than 10 characters")
    .regex(
      /^[A-Z0-9-]+$/,
      "Patente must be alphanumeric and can include dashes"
    ),
  brand: z.string().min(1, "Brand is required"),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export { VehiculeSchema };

/*

   .max(30, "Brand cannot be more than 30 characters"),
  id: z.number().optional(),
  type_vehicule: z.enum(["CAR", "BIKE", "MOTORCYCLE", "BUS", "OTHER"]),
  color: z.string().min(1, "Color is required"),
  patente: z.string().min(1, "Patente is required"),
  brand: z.string().min(1, "Brand is required"),
*/
