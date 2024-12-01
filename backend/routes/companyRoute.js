import express from 'express'
import isAuthenticated from '../middlewares/isAuthenticated.js';
import { getCompany, getCompanyById, registerCompany, updateCompany } from '../controller/companyController.js';
const router = express.Router();
router.post("/register",isAuthenticated,registerCompany);

router.get("/get",isAuthenticated,getCompany)
router.get("/get/:id",isAuthenticated, getCompanyById)
router.post("/update/:id",isAuthenticated,updateCompany);

export default router