import express from "express"
import { registerController ,loginController,myProfileController} from "../controllers/authController.js";
import { validateMiddleware } from "../middlewares/validatMiddleware.js";
import {authMiddleware,emaiExiste} from "../middlewares/authMiddleware.js";

const userRoute=express.Router();

userRoute.post("/register",validateMiddleware,emaiExiste,registerController)
userRoute.post("/login",loginController)
userRoute.get("/me",authMiddleware,myProfileController)

userRoute.get("/test",(req,res)=>{
    res.status(200).json({
        message:"user is created"
    })
})
export default userRoute