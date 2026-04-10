import {
    creatFactureController,
    gatAllFactureController,
    getByIdFactureController,
    updatFactureController,
    deleteFactureContoller
} from "../controllers/factureController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { validateFactureMiddleware } from "../middlewares/validatMiddleware.js";
import { Router } from "express";

const factureRouter = Router();

factureRouter.post(
    "/",
    authMiddleware,
    validateFactureMiddleware,
    creatFactureController,
);
factureRouter.get(
    "/",
    authMiddleware,
    validateFactureMiddleware,
    gatAllFactureController,
);
factureRouter.get(
    "/:id",
    authMiddleware,
    validateFactureMiddleware,
    getByIdFactureController,
);
factureRouter.put(
    "/:id",
    authMiddleware,
    validateFactureMiddleware,
    updatFactureController,
);
factureRouter.delete(
    "/:id",
    authMiddleware,
    validateFactureMiddleware,
    deleteFactureContoller,
);

export default factureRouter;
