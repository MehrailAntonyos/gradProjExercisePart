const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router()
const User = require('../models/User');
const bcrypt = require('bcrypt')
const dotenv = require('dotenv').config()

// -------------------------------- user register api ---------------------------------
router.post('/register', async function (req, res) {
    console.log(req.body);
    const body = req.body;
    if (!(body.email && body.password)) {
        return res.status(400).send({ error: "Data not formatted properly" });
    }
    // this line sets the number of hashing times.
    const salt = await bcrypt.genSalt(10);
    // now we set user password to hashed password
    const hashedPassword = await bcrypt.hash(body.password, salt);
    User.create({ ...body, password: hashedPassword }, function (err, data) {
        if (err) {
            console.log(err);
            res.status(401).send({ message: "User is already registered, Please login" });
        }
        else {
            console.log(data)
            let jwtSecretKey = process.env.JWT_SECRET_KEY;
            const token = jwt.sign(data.email, jwtSecretKey);
            console.log(token)
            res.setHeader("authorization", token)
            res.send("User registered successfully");
        }
    });
})


// -------------------------------- user login api ---------------------------------
router.post("/login", async (req, res) => {
    if (!req.headers.authorization) {
        const body = req.body;
        const user = await User.findOne({ email: body.email });
        console.log(user);
        if (user) {
            // check user password with hashed password stored in the database
            const validPassword = await bcrypt.compare(body.password, user.password);
            if (validPassword) {
                let jwtSecretKey = process.env.JWT_SECRET_KEY;
                const token = jwt.sign(user.email, jwtSecretKey);
                console.log(token)
                res.setHeader("authorization", token)
                res.status(200).json({ message: "Valid password" });
            } else {
                res.status(400).json({ error: "Invalid Password" });
            }
        } else {
            res.status(401).json({ error: "User does not exist" });
        }
    } else {

        const body = req.body;
        let jwtSecretKey = process.env.JWT_SECRET_KEY;
        decryptedToken = jwt.verify(req.headers.authorization, jwtSecretKey)
        if (decryptedToken == body.email) {
            res.status(200).send('Valid password and logged in successfully')
        } else {
            res.status(401).send('Invlaid Token')
        }
    }
});

// -------------------------------- user profile update api ---------------------------------
router.patch('/update', function (req, res) {
    User.findOneAndUpdate({ email: req.body.email }, { firstName: req.body.firstName, lastName: req.body.lastName }, function (err, data) {
        if (err) {
            res.send(err);
        } else {
            res.send(data);
        }
    });
});

// -------------------------------- user delete api ---------------------------------
router.delete("/delete", function (req, res) {
    User.deleteOne({ email: req.body.email }, function (err, res) {
        if (err) {
            res.send("An error has occured ! Please check the entered email and try again");
        } else {
            res.send(res);
        }
    });
});





router.patch('/add_exersice', function (req, res) {
    User.findOneAndUpdate({ email: req.body.email }, {
        exersiceHistory: [{ exBodyPart: req.body.exBodyPart, exAdditionNotes: req.body.exAdditionNotes }]
    }, function (err, data) {
        if (err) {
            res.send(err);
        } else {
            res.send(data);
        }
    });
});


module.exports = router;