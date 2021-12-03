const mongoose = require("mongoose");

const GlucoseSchema = mongoose.Schema({
    
    username: {type: String, required: true},
    level: {type: String, required: true},
    time: {type: Date, required: true},
});

exports.Glucose = mongoose.model('Glucose', GlucoseSchema);