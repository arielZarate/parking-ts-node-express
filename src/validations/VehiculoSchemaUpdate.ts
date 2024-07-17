import { z } from "zod";

const VehiculeSchema = z.object({
  id: z.number().int().positive().optional(),
  type_vehicule: z
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
  brand: z
    .string()
    .min(1, "Brand is required")
    .max(30, "Brand cannot be more than 30 characters"),
  createdAt: z.preprocess((arg) => {
    if (typeof arg == "string" || arg instanceof Date) return new Date(arg);
  }, z.date().optional()),
  updatedAt: z.preprocess((arg) => {
    if (typeof arg == "string" || arg instanceof Date) return new Date(arg);
  }, z.date().optional()),
});

// Para creación
const CreateVehiculeSchema = VehiculeSchema;

// Para actualización
const UpdateVehiculeSchema = VehiculeSchema.partial();

// Ejemplo de cómo usar el esquema para validar datos de actualización
const updateResult = UpdateVehiculeSchema.safeParse({
  color: "blue",
});

if (!updateResult.success) {
  console.error(updateResult.error.errors);
} else {
  console.log(updateResult.data);
}

export { CreateVehiculeSchema, UpdateVehiculeSchema };
