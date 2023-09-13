import { Router } from "express";


//Se importan todas las rutas
import userRouter from "./user.router.js";
import companyRouter from './company.router.js';


const router = Router();

//Se definen las rutas base
router.use("/user", userRouter);
router.use("/company", companyRouter)



//Por si se ingresa una ruta no definida previamente
router.use("*/*", (req, res, next) => {
  try {
    res.status(404).send(`This page doesn't exists`);
  } catch (error) {
    next(error);
  }
});

export default router
