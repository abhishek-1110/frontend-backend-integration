import Details from "../models/Details.js";
import User from "../models/User.js";
import  Jwt from "jsonwebtoken";

const jwt = Jwt;

export const userDetails = async (req, res) => {
  try {
    Details.insertMany({
      name: req.body.name,
      phone: req.body.phone,
      email: req.body.email,
      bloodgroup: req.body.bloodgroup,
    });
    return res.status(200).json("OK");
  } catch (error) {
    console.log("Some error log here", error);
  }
};

export const signupUser = async (req, res) => {
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
};


export const loginUser = async (request, response) => {
  try {
    let user = await User.findOne({
      email: request.body.email,
      password: request.body.password,
    });

    if (user) {
      return response
        .status(200)
        .json({ message: user.name, successfulLogin: true });
    } else {
      return response
        .status(401)
        .json({ message: "Invalid Login", successfulLogin: false });
    }
  } catch (error) {
    console.log("Something went wrong", error);
  }
};
