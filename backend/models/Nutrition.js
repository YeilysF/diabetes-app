const mongoose = require("mongoose");

const NutritionSchema = mongoose.Schema({
    calories: {type: Number, required: true},
    protein: {type: Number, required: true},
    carbs: {type: Number, required: true},
    fat: {type: Number, required: true},
   // foodName: {type: String, required: true},  //link
    sugar: {type: Number, required: true},
});

exports.Nutrition = mongoose.model('Nutrition', NutritionSchema);