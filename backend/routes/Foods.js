const { Food } = require('../models/Food');
const express = require('express');
const router = express.Router();

router.get(`/`, async (req, res) => {
    const foodList = await Food.find();
    if(!foodList){
        res.status(500).json({success: false})
    }
    res.send(foodList);
})

router.post(`/`, async (req, res) => {
    const food = new Food({
        foodName: req.body.foodName,
        group: req.body.group,
        serving: req.body.serving
    })
    food = await food.save();

    if(!food)
    return res.status(404).send('the food cannot be added');

    res.send(food);
});

module.exports = router;