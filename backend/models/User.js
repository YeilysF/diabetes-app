const mongoose = require("mongoose");
const bcrypt = require('bcryptjs')

const UserSchema = mongoose.Schema(
    {
        name: {type: String, required: true},
        email: {type: String, unique: true, required: true},
        password: {type: String, required: true},
        diabetesType: {type: Number, required: true},
        weight: {type: Number, required: true},
        country: {type: String, required: true},
        isAdmin: {type: Boolean, required: true, default: false},
        pic: {type: String, required: true, default: "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"},
    },
    {
    timestamps:true,
    }
);

UserSchema.pre('save', async function (next) {
    if (!this.isModified('password')){
        next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
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
