import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import userRoute from "../src/routers/userRoute";
import adminRoute from "../src/routers/adminRoute";
import { connectDB } from "./db/conn";

const app = express();
dotenv.config();
const PORT = 3000;

app.use(bodyParser.json());
connectDB();
app.use("/user", userRoute);
app.use("/admin", adminRoute);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
