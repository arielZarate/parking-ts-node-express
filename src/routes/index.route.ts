import express from "express";
const router = express.Router();

//routes

import vehiculeRouter from "./vehicule.route";

router.get("/", (req, res) => {
  return res.send("<h1 style='color:greenyellow'>Welcome to the Parking</h1>");
});

router.use("/vehicule", vehiculeRouter);

export default router;
