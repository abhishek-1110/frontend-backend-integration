// import DefaultData from "./default";
import connectTOMongo from "./db.js";
import express from "express";
import cors from "cors";
import { signupUser, userDetails, loginUser, getUserDetails } from "./controller/user-controller.js";
import { fetchuser } from "./middleware/fetchUser.js";

connectTOMongo();

const app = express();
const port = 5000;
const router = express.Router();

app.use(express.json());
app.use(cors());

// app.use(express.urlencoded({ extended: true }));

// DefaultData();
app.listen(port, () => {
  console.log("Successfully running on", port);
});

// router.post (/createuser) acts as route for signup

app.use("/signup", router.post("/createuser"), signupUser);

app.use("/auth", router.post("/login"), loginUser);

app.use("/saveuser", router.post("/details", fetchuser, userDetails));

app.use("/getuser", router.get("/details", fetchuser, getUserDetails));




// no requirement now to insert data from backend
// DefaultData();
