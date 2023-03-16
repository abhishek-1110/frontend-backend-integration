const express = require("express");
const User = require("../models/User");
const router = express.Router();

router.post("/createuser", [
    body("name"),
    body("email"),
    body("password"),
    body("confirmpassword")
], async(req, res) => {
    try {
        // let user = User.findOne({email: req.body.email});

        // if (user) {
        //     console.log("already exists");
        // }

       let user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            confirmpassword: req.body.confirmpassword,
        });

        console.log("USer created successfully...");
        res.send("OK DONE");
        console.log(user);
    } catch(error) {
        console.log("Something went wrong", error);
    }
})