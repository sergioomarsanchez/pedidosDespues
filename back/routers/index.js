import { Router } from "express";


//Se importan todas las rutas
import userRouter from "./user.router.js";


const router = Router();

//Se definen las rutas base
router.use("/user", userRouter);



//Por si se ingresa una ruta no definida previamente
router.use("*/*", (req, res, next) => {
  try {
    res.status(404).send(`This page doesn't exists`);
  } catch (error) {
    next(error);
  }
});

export default router
