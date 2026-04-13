import { creatPaimentController } from "../controllers/paimentContoller.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { validatePaimentMiddleware } from "../middlewares/validatMiddleware.js";
import { statMiddleware } from "../middlewares/statAutoMiddleware.js";
import { Router } from "express";

const paimentreRoute = Router();

paimentreRoute.post(
    "/:id",
    authMiddleware,
    validatePaimentMiddleware,
    statMiddleware,
    creatPaimentController,
);

export default paimentreRoute;
