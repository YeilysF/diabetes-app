const { Meal } = require('../models/Meal');
const express = require('express');
const router = express.Router();

router.get(`/`, async (req, res) => {
    const mealList = await mealList.find();
    if(!mealList){
        res.status(500).json({success: false})
    }
    res.send(mealList);
})

router.post(`/`, async (req, res) => {
    const meal = new Meal({
        foodName: req.body.foodName,
        group: req.body.group,
        serving: req.body.serving
    })
    meal = await meal.save();

    if(!meal)
    return res.status(404).send('the meal cannot be added');

    res.send(meal);
});

module.exports = router;