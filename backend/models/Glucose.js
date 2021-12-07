const mongoose = require("mongoose");

const GlucoseSchema = mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    glucoseLevel: {type: Number, required: true},
    timeOfDay: {type: String},
    dateTime: {type: Date, required: true},
    dateCreated: {type: Date, default: Date.now, required: true},
    description: {type: String}
});

exports.Glucose = mongoose.model('Glucose', GlucoseSchema);