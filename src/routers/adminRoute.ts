import express from "express";
const router = express.Router();
import { authenticateJwt } from "../middleware/auth";
import {
  CreateCourse,
  DeleteCourse,
  GetAllCourses,
  LogIn,
  SignUp,
  UpdateCourse,
} from "../controllers/AdminControllers";

//signup route
router.post("/signup", SignUp);

//login
router.post("/login", LogIn);

//create course
router.post("/courses", authenticateJwt, CreateCourse);

//get all courses
router.get("/courses", authenticateJwt, GetAllCourses);

//update course
router.put("/courses/:courseId", authenticateJwt, UpdateCourse);

//delete course
router.delete("/courses/:courseId", authenticateJwt, DeleteCourse);

export default router;
