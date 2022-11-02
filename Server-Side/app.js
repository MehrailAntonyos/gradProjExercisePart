const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const express = require('express');
const app = express()
// const app = express.Router()
const port = 8000;
const mongo = require('./config/mongoose');
const User = require('./models/User');
const cors = require('cors');
const Job = require('./models/Order');
const res = require('express/lib/response');
const userRouter = require('./routes/userRoute');
const exerciseRouter = require('./routes/exerciseRoute');
const productsRouter = require('./routes/productRoute');
const healthyFoodRouter = require('./routes/Health-System');
const multer = require("multer");

app.use(function (req, res, next) {

    // console.log("you in middleware");
    res.set({
        'Access-Control-Expose-Headers': '*',
    })
    next();

})

// app.use(bcrypt)
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api/v1/users', userRouter);
app.use('/api/v1/exercises', exerciseRouter);
app.use('/api/v1/products', productsRouter);
app.use('/api/v1/healthyfoods', healthyFoodRouter);
app.get('/', (req, res) => res.send('Hello World!'))
app.use("public", express.static("public"));
app.use("/public/exercises", express.static("public/exercises"));







app.listen(port, () => console.log(`Example app listening on port ${port}!`))