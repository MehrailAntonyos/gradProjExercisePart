const mongoose = require("mongoose");
const express = require('express');
const healthyFood = require('../models/HealthyFood');
const router = express.Router();

router.get("/", function (req, res) {
    healthyFood.find().then((data) => {
        console.log(data);
        res.status(200).send(data);
    })
});

router.post("/add", function (req, res) {
    healthyFood.create(req.body, function (err, data) {
        if (err) {
            res.status(402).send("not valid");
        } else {
            res.status(200).send(data);
        }
    });
});

router.patch('/update', function (req, res) {
    healthyFood.updateOne({ foodName: req.body.foodName }, { foodName: req.body.foodName, quantity: req.body.quantity, ingredients: req.body.ingredients, imgFood: req.body.imgFood }).exec().then(data => {
        console.log(data)
        if (!data) {
            res.status(404).end()
        }
        else {
            res.status(200).send("Item was updated successfully")
        }
    })
})

router.delete('/delete', function (req, res) {
    healthyFood.deleteOne({ foodName: req.body.foodName }).exec().then(data => {
        console.log(data)
        if (!data) {
            res.status(400).send('an error has occured')
        }
        else {
            res.status(200).send("Item was deleted successfully")
        }
    })
})

module.exports = router;

//   const system=new healthyFood({foodName:req.body.foodName,quantity:req.body.quantity,ingredients:req.body.ingredients,imgFood:req.body.imgFood})
//     system.save()