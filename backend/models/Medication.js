const mongoose = require("mongoose");

const MedicationSchema = mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    medicationName: {type: String, required: true},
    medicationType: {type: String, required: true},
    quantity: {type: Number, required: true},
    timeOfDay: {type: String},
    dateCreated: {type: Date, default: Date.now, required: true},
    description: {type: String}
});

exports.Medication = mongoose.model('Medication', MedicationSchema);