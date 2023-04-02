import Details from "../models/Details.js";
import User from "../models/User.js";
import Jwt from "jsonwebtoken";

const jwt = Jwt;
const JWT_SECRET = "hi$hi";

// make a new user
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

    // creating payload of user
    const data = {
      user: {
        id: user.id,
      },
    };

    const authToken = jwt.sign(data, JWT_SECRET);

    console.log("User created successfully...");
    res.status(200).json({ username: user.name, authToken: authToken });
  } catch (error) {
    console.log("Something went wrong", error);
    return res
      .status(500)
      .send({ error: "Internal server error occured", error });
  }
};

// check for login
export const loginUser = async (request, response) => {
  try {
    let user = await User.findOne({
      email: request.body.email,
      password: request.body.password,
    });

    if (user) {
      // creating payload of user
      const data = {
        user: {
          id: user.id,
        },
      };

      const authToken = jwt.sign(data, JWT_SECRET);
      return response.status(200).json({ successfulLogin: true, authToken: authToken });
    } else {
      return response
        .status(401)
        .json({ message: "Invalid Login", successfulLogin: false });
    }
  } catch (error) {
    console.log("Something went wrong", error);
  }
};

// add user details to DB
export const userDetails = async (req, res) => {
  try {
    const details = new Details({
      name: req.body.name,
      phone: req.body.phone,
      email: req.body.email,
      bloodgroup: req.body.bloodgroup,
      user: req.user.id, 
    });
    const saved = await details.save();
    return res.status(200).json(saved);
  } catch (error) {
    console.log("Some error log here", error);
  }
};

// to get user details using middleware
export const getUserDetails = async(req, res) => {
   try {
      const userDetails = await Details.find({user: req.user.id});
      // console.log("User data", userDetails[0].name);
      return res.json(userDetails);
   } catch (error) {
    res.status(500).send("Internal server error while fetching user details..");
   }
}