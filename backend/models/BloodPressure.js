const mongoose = require("mongoose");
//const { Meal } = require("./Meal");

const BloodPressureSchema = mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    heartRate: {type: Number},
    systolic: {type: Number, required: true},
    diastolic: {type: Number, required: true},
    timeOfDay: {type: String},
    dateCreated: {type: Date, default: Date.now, required: true},
    description: {type: String}
});

exports.BloodPressure = mongoose.model('Blood Pressure', BloodPressureSchema);