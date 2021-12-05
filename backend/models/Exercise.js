const mongoose = require("mongoose");
//const { Meal } = require("./Meal");

const ExerciseSchema = mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    exerciseType: {type: String},
   // duration: {type: Number},
    timeOfDay: {type: String},
    dateCreated: {type: Date, default: Date.now, required: true},
    description: {type: String}
});

exports.Exercise = mongoose.model('Exercise', ExerciseSchema);