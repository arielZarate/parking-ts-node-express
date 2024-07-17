# NODE - TYPESCRIPT

## Dependencies

- `npm i express morgan dotenv mysql2 cors`
- `npm i ts-node nodemon -D`
- ` npm i zod`
- Tipos `npm i @types/express @types/morgan  @types/dotenv types/mysql2 @types/cors -D`

### typescript ts-node nodemon

- typescript: El compilador de TypeScript. `npm i -g typescript` sino lo tenes instalado
- ts-node : Herramienta para ejecutar TypeScript directamente y recargar automáticamente los
  cambios.
- @types/node: Tipos para Node.js.

```javascript
{
  "name": "api-node-ts",
  "version": "1.0.0",
  "description": "api con ts",
  "main": "dist/index.js",
  "scripts": {
    "build": "tsc",
    "dev": "nodemon --exec ts-node src/index.ts"
  },
  "author": "arielZarate",
  "license": "ISC",
  "devDependencies": {
    "@types/cors": "^2.8.17",
    "@types/express": "^4.17.21",
    "@types/morgan": "^1.9.9",
    "@types/mysql2": "github:types/mysql2",
    "nodemon": "^3.1.4",
    "ts-node": "^10.9.2"
  },
  "dependencies": {
    "cors": "^2.8.5",
    "dotenv": "^16.4.5",
    "express": "^4.19.2",
    "morgan": "^1.10.0",
    "mysql2": "^3.10.3",
    "zod": "^3.23.8"
  }
}


```

## Estructura

Esta estructura es un modo ejemplo , puede variar pero seria una idealizacion

```bash
- src/
  - config/
    - dbConfig.ts
    - dotenvConfig.ts
  - controllers/
    - userController.ts
  - models/
    - user.ts
  - repository/
    - userRepository.ts
  - routes/
    - userRoutes.ts
  - services/
    - userService.ts
  - utils/
    - validator.ts
  - app.ts
- .env
- package.json
- tsconfig.json

```

## INITIALIZATION

- npm run dev
- npm run build. Transpilar el codigo de ts a js

## validaciones zod

`npm install zod`

Creación de un esquema de validación con Zod

- En tu directorio src, crea una nueva carpeta llamada schemas y dentro de ella un archivo  
   llamado vehicule.schema.ts. Aquí definiremos el esquema de validación para los vehículos.

```javascript
// src/schemas/vehicule.schema.ts
import { z } from "zod";

const VehiculeSchema = z.object({
  id: z.number().optional(),
  type_vehicule: z.enum(["CAR", "BIKE", "MOTORCYCLE", "BUS", "OTHER"]),
  color: z.string().min(1, "Color is required"),
  patente: z.string().min(1, "Patente is required"),
  brand: z.string().min(1, "Brand is required"),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export { VehiculeSchema };
```

Middleware

```javascript
// src/middlewares/validationMiddleware.ts
import { Request, Response, NextFunction } from "express";
import { AnyZodObject, ZodError } from "zod";

const validate =
  (schema: AnyZodObject) =>
  //una funcion dentro de otra
  (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body);
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({ errors: error.errors });
      }
      next(error);
    }
  };

export { validate };
```

Como se configura el middleware en las routes

```javascript
import express, { Request, Response } from "express";
const router = express.Router();
import controllers from "../controllers/vehicule.controller";

//=========middlware podemos validar aca en las rutas=======================

import { validate } from "../middleware/validationMiddleware";
import { VehiculeSchema } from "../validations/VehiculeSchemaCreate";
router.get("/", controllers.GetVehicules);
router.post("/", validate(VehiculeSchema), controllers.CreateVehicules);

export default router;
```
