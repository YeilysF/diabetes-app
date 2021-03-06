const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    fullname: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    image: {type: String, required: true, default:
    "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",},
    diabetesType: {type: String, required: true},
    weight: {type: Number, required: true},
    country: {type: String, required: true},
    isAdmin: {type: Boolean, default: false},
    dateCreated: {type: Date, default: Date.now}
});

exports.User = mongoose.model('User', UserSchema);

