const mongoose = require("mongoose");

const NutritionSchema = mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    mealName: {type: String, required: true},
    timeOfDay: {type: String},
    dateTime: {type: Date, required: true},
    dateCreated: {type: Date, default: Date.now},
    description: {type: String},
   // foodList: {type: mongoose.Schema.Types.ObjectId, ref: 'Food'},
});

exports.Nutrition = mongoose.model('Nutrition', NutritionSchema);