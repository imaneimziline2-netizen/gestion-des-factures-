import express from "express"
import connectDB from "./config/db.js";
import dotenv from'dotenv';



dotenv.config();
connectDB ();

const app = express();
app.use(express.json());


app.get("/", (req, res) => {
    res.send("Server + DB OK");
});

app.listen(3000, () => {
    console.log("Server running");
    connectDB();
});
