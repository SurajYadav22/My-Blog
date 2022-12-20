import express from "express";
import { signupUser } from "../controller/user-controller.js";

const router = express.Router();

router.post("/signup", signupUser);

export default router;
