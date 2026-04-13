import getAdminDashboardStatsController from "../controllers/admineController.js";
import isAdmin from "../middlewares/adminMiddleware.js"; 
import { authMiddleware} from "../middlewares/authMiddleware.js";
import { Router } from "express";

const adminRouter = Router();

adminRouter.get("/", authMiddleware, isAdmin, getAdminDashboardStatsController);

export default adminRouter;