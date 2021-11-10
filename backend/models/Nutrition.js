const mongoose = require("mongoose");

const NutritionSchema = mongoose.Schema({
    calories: {type: Number, required: true},
    protein: {type: Number, required: true},
    carbs: {type: Number, required: true},
    fat: {type: Number, required: true},
    sugar: {type: Number, required: true},
});

exports.Nutrition = mongoose.model('Nutrition', NutritionSchema);