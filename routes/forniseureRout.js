import { validateFournisseurMiddleware } from "../middlewares/validatMiddleware.js";
import {
    forniseureController,
    grtAllFornisseurController,
    grtByIdFornisseurController,
    updateFornisseureController,
    deletFornisseureController,
} from "../controllers/forniseureController.js";
import getStatsController from "../controllers/statsController.js"
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { Router } from "express";

const forniseureRoute = Router();

forniseureRoute.post(
    "/",
    authMiddleware,
    validateFournisseurMiddleware,
    forniseureController,
);
forniseureRoute.get("/", authMiddleware, grtAllFornisseurController);
forniseureRoute.get("/:id", authMiddleware, grtByIdFornisseurController);
forniseureRoute.put("/:id", authMiddleware, updateFornisseureController);
forniseureRoute.delete("/:id", authMiddleware, deletFornisseureController);
forniseureRoute.get("/:id/stats", authMiddleware, getStatsController);

export default forniseureRoute;
