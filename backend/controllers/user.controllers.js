import { User } from "../app.js";
class userController {
  static login = (req, res) => {
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
  };

  static signup = async (req, res) => {
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
  };

  static allUsers = async (req, res) => {
    const data = await User.find();
    res.send(data);
  };
}

export default userController;
