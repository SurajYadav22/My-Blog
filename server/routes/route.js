import express from "express";
import { uploadImage } from "../controller/image-controller.js";
import {
  authenticateToken,
  createNewToken,
} from "../controller/jwt-controller.js";
import { createPost } from "../controller/post-controller.js";
import { signupUser, loginUser } from "../controller/user-controller.js";

import upload from "../utils/upload.js";

const router = express.Router();

router.post("/signup", signupUser);
router.post("/login", loginUser);
router.post("file/upload", upload.single("file"), uploadImage);
router.post("/token", createNewToken);

router.post("/create", authenticateToken, createPost);

export default router;
