const mongoose = require("mongoose");
//const { Meal } = require("./Meal");

const FoodSchema = mongoose.Schema({
    foodName: {type: String, required: true},
    group: {type: String, required: true},
    serving: {type: Number, required: true},
    //meal: {type: Meal, required: true},
});

exports.Food = mongoose.model('Food', FoodSchema);