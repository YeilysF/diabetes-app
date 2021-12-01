const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    fullname: {type: String, required: true},
    username: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    diabetesType: {type: Number, required: true},
    weight: {type: Number, required: true},
    country: {type: String, required: true},
    isAdmin: {type: Boolean, default: false},
});

/*const registerUser = async (req, res) =>{
    const{fullname, username, email,password,diabetesType,weight,country,isAdmin} = req.body;
    res.json(
        {
            fullname,email,
        }
    );
    res.status(4500);
};
module.exports = {registerUser};*/

exports.User = mongoose.model('User', UserSchema);
