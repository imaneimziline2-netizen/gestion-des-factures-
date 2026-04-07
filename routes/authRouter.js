import {
    registerController,
    loginController,
    myProfileController,
} from "../controllers/authController.js";
import { validateMiddleware } from "../middlewares/validatMiddleware.js";
import { authMiddleware, emaiExiste } from "../middlewares/authMiddleware.js";
import createUser from "../validator/userValidator.js";
import { Router } from "express";

const userRouter = Router();

userRouter.post(
    "/register",
    validateMiddleware,
    emaiExiste,
    registerController,
);
userRouter.post("/login", loginController);
userRouter.get("/me", authMiddleware, myProfileController);

userRouter.get("/test", (req, res) => {
    res.status(200).json({
        message: "user is created",
    });
});
export default userRouter;
