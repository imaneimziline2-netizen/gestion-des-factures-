import { creatPaimentController,getfactureDetailsServiceController } from "../controllers/paimentContoller.js";
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
paimentreRoute.get(
    "/:id/invoice",
    authMiddleware,
    validatePaimentMiddleware,
    getfactureDetailsServiceController,
);

export default paimentreRoute;
