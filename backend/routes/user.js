import express from "express";
import { User } from "../app.js";
const router = express.Router();

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      if (password === user.password) {
        res.send({ message: "login Successfully success", user });
      } else {
        res.send({ message: "password did't match" });
      }
    } else {
      res.send({ message: "User not found " });
    }
  });
});

//signup

router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  const user = await User.findOne({ email: email });
  if (user) {
    res.send({ message: "user already registered" });
  } else {
    const user = new User({
      name,
      email,
      password,
    });
    user.save((err) => {
      if (err) {
        res.send(err);
      } else {
        res.send({ message: "successfully created" });
      }
    });
  }
  console.log(req.body);
});
//app user api
router.get("/alluser", async (req, res) => {
  const data = await User.find();
  res.send(data);
});
export default router;
