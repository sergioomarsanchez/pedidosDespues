import { Router } from "express";
import { logInUser, createNewUser, getAllUsers } from "../controller/user.controller.js";

const router = Router();

router.post("/logIn", logInUser);
router.post("/createUser", createNewUser);
router.get("/getUsers", getAllUsers);

export default router;
