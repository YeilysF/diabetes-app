const mongoose = require("mongoose");
//const { Meal } = require("./Meal");

const CategorySchema = mongoose.Schema({
    name: {type: String, required: true},
    image: {type: String},
    color1: {type: String, required: true},
    color2: {type: String, required: true},
    width: {type: Number, required: true},
    height: {type: Number, required: true},
    screen: {type: String, required: true},
});

exports.Category = mongoose.model('Category', CategorySchema);
