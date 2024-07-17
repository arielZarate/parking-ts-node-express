import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config(); //cors
import morgan from "morgan";
//express
const app: Application = express();

app.use(express.json());
app.use(morgan("dev"));

//routes api

import indexRouter from "./routes/index.route";
app.use("/api/", indexRouter);

//middleware routes ErrorHandler
app.use((req: Request, res: Response) => {
  res.status(404).send("<h1>404 Not Found</h1>");
});

export default app;
