import { Router } from "express";
import { 
    getCompaniesByUserIdCtrl, 
    getCompanyByIdCtrl, 
    createCompanyCtrl, 
    modifyCompanyCtrl,
    deleteCompanyCtrl,
    getAllCompanyCtrl
} from "../controller/company.controller.js";

const router = Router();

router.get("/byUserId", getCompaniesByUserIdCtrl);
router.get("/getAll", getAllCompanyCtrl);
router.get("/byId", getCompanyByIdCtrl);
router.post("/create", createCompanyCtrl);
router.put("/modify", modifyCompanyCtrl);
router.patch("/delete", deleteCompanyCtrl);

export default router;
