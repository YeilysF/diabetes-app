const mongoose = require("mongoose");

const MedicationSchema = mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    medicationName: {type: String, required: true},
    quantity: {type: Number, required: true},
    timeOfDay: {type: String},
    dateTime: {type: Date, required: true},
    dateCreated: {type: Date, default: Date.now},
    description: {type: String}
});

exports.Medication = mongoose.model('Medication', MedicationSchema);