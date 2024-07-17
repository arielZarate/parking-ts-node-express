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
