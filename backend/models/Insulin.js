const mongoose = require("mongoose");
//const { Meal } = require("./Meal");

const InsulinSchema = mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    units: {type: Number, required: true},
    insulinName: {type: String, required: true},
    timeOfDay: {type: String},
    dateCreated: {type: Date, default: Date.now, required: true},
    description: {type: String}
});

exports.Insulin = mongoose.model('Insulin', InsulinSchema);