const { Food } = require('../models/Food');
const express = require('express');
const router = express.Router();

router.post(`/`, async (req, res) => {
    let food = new Food({
        foodName: req.body.foodName,
        group: req.body.group,
        serving: req.body.serving,
        calories: req.body.calories,
        protein: req.body.protein,
        carbs: req.body.carbs,
        fat: req.body.fat,
        sugar: {type: Number, required: true},
    })
    food = await food.save();

    if(!food)
    return res.status(404).send('the food cannot be added');

    res.send(food);
});

router.get(`/`, async (req, res) => {
    const foodList = await Food.find();
    if(!foodList){
        res.status(500).json({success: false})
    }
    res.status(200).send(foodList);
})

router.get('/:id', async(req,res)=>{
    const food = await Food.findById(req.params.id);

    if(!food) {
        res.status(500).json({message: 'The food with the given ID was NOT found.'})
    } 
    res.status(200).send(food);
})


module.exports = router;