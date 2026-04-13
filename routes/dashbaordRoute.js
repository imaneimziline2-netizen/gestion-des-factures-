import getDashboardController from "../controllers/dashboardController.js";
import { authMiddleware} from "../middlewares/authMiddleware.js"; 
import { Router } from "express";

const dashboardRouter = Router();

dashboardRouter.get("/",authMiddleware,getDashboardController)

export default dashboardRouter;