import express from "express";
import { showStudentData, getStudentData,updateStudentData,deleteStudentById } from "../controllers/studentData.js";

const router = express.Router();

router.post("/student", showStudentData);
router.get("/student", getStudentData);
router.put("/student/:id",updateStudentData);
router.delete("/student/:id",deleteStudentById)

export default router;
