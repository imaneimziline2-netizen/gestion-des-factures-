import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import userRoute from "./routes/authRouter.js";
import forniseureRoute from "./routes/forniseureRout.js";
import factureRouter from "./routes/factureRoute.js";
import paimentreRoute from "./routes/paimentRout.js";
import dashboardRouter from "./routes/dashbaordRoute.js";
import adminRouter from "./routes/adminRoute.js";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use("/api/auth", userRoute);
app.use("/api/suppliers", forniseureRoute);
app.use("/api/invoices", factureRouter);
app.use("/api/paiment", paimentreRoute);
app.use("/api/dashboard", dashboardRouter);
app.use("/api/dashboard/admin",adminRouter );

app.listen(3000, () => {
    console.log("Server running");
});
