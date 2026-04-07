import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import userRoute from "./routes/authRouter.js";
import forniseureRoute from "./routes/forniseureRout.js";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use("/api/auth", userRoute);
app.use("/api/suppliers", forniseureRoute);

app.listen(3000, () => {
    console.log("Server running");
    connectDB();
});
