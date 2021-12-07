const mongoose = require("mongoose");
//const { Meal } = require("./Meal");

const FoodSchema = mongoose.Schema({
    foodName: {type: String, required: true},
    group: {type: String, required: true},
    serving: {type: Number, required: true},
    calories: {type: Number, required: true},
    protein: {type: Number, required: true},
    carbs: {type: Number, required: true},
    fat: {type: Number, required: true},
    sugar: {type: Number, required: true},
});

exports.Food = mongoose.model('Food', FoodSchema);