import { validateFournisseurMiddleware, validateMiddleware } from "../middlewares/validatMiddleware.js";
import {forniseureController ,grtAllFornisseurController,grtByIdFornisseurController }from "../controllers/forniseureController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { Router } from "express";

const forniseureRoute = Router();

forniseureRoute.post(
    "/",
    validateFournisseurMiddleware,
    authMiddleware,
    forniseureController,
);
forniseureRoute.get(
    "/",authMiddleware,grtAllFornisseurController
);
forniseureRoute.get(
    "/:id",authMiddleware,grtByIdFornisseurController
);

export default forniseureRoute;
