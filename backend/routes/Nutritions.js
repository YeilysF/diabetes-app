const { Nutrition } = require('../models/Nutrition');
const express = require('express');
const router = express.Router();

router.post(`/`, async (req, res) => {
    const nutrition = new Nutrition({
        calories: req.body.calories,
        protein: req.body.protein,
        carbs: req.body.carbs,
        fat: req.body.fat,
        sugar: req.body.sugar
    })
    nutrition = await nutrition.save();

    if(!nutrition)
    return res.status(404).send('the nutrition cannot be added');

    res.send(nutrition);
});

router.get(`/`, async (req, res) => {
    const nutritionList = await Nutrition.find();
    if(!nutritionList){
        res.status(500).json({success: false})
    }
    res.status(200).send(nutritionList);
})

module.exports = router;