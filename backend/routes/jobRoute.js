import express from 'express'
 
import isAuthenticated from '../middlewares/isAuthenticated.js';
import { getAdminJobs, getAllJobs, getJobById, postJob } from '../controller/jobController.js';
const router = express.Router();
router.post("/post",isAuthenticated,postJob);
router.get("/get",isAuthenticated,getAllJobs);
router.get("/getadminjobs",isAuthenticated,getAdminJobs);
router.get("/job/:id",isAuthenticated,getJobById);
 

export default router