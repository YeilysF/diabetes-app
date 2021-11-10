const mongoose = require("mongoose");
//const { Nutrition } = require("./Nutrition");

const MealSchema = mongoose.Schema({
    mealName: {type: String, required: true},
    //nutrition: {type: mongoose.Schema.Types.ObjectId, ref: 'Nutrition', required: true},
});

exports.Meal = mongoose.model('Meal', MealSchema);