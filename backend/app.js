import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import user from "./routes/user.js";
const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
mongoose.connect("mongodb://localhost:27017/myLoginSignUpDB", () =>
  console.log("DB connected")
);

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  password: { type: String, required: true, trim: true },
});

export const User = new mongoose.model("User", userSchema);

app.use("/", user);

app.listen(5000, () => {
  console.log("Be started at port 5000");
});
