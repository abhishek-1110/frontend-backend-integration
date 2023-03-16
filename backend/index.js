// import DefaultData from "./default";
import connectTOMongo from "./db.js";
import express from "express";
import DefaultData from "./default.js";
const router = express.Router();
import { body } from "express-validator";
import User from "./models/User.js";
import cors from "cors";

connectTOMongo();

const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

// app.use(express.urlencoded({ extended: true }));

// DefaultData();
app.listen(port, () => {
  console.log("Successfully running on", port);
});

// router.post (/createuser) acts as route for auth
app.use(
  "/signup",
  router.post(
    "/createuser",
    [
      body("name", "Enter a valid Name."),
      body("email", "Enter a valid Email."),
      body("password", "Enter a valid Password of at least 5 characters."),
      body("confirmpassword"),
    ],
    async (req, res) => {
      try {
        let user = await User.findOne({ email: req.body.email });

        if (user) {
          console.log("Already exists");
          return res.status(400).json({
            error: "Sorry a user with this email address exists already..",
          });
        }

        user = await User.create({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
          confirmpassword: req.body.confirmpassword,
        });

        console.log("User created successfully...");
        // console.log(user);
        // console.log(user.email);
        res.status(200).json("Success");
      } catch (error) {
        console.log("Something went wrong", error);
      }
    }
  )
);

// no requirement now to insert data from backend
DefaultData();
