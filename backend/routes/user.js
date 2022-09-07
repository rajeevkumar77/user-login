import express from "express";
import userController from "../controllers/user.controllers.js";
const router = express.Router();

router.post("/login", userController.login);

router.post("/signup", userController.signup);

router.get("/alluser", userController.allUsers);
export default router;
