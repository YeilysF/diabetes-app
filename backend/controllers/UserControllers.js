const { response } = require('express');
const asyncHandler = require('express-async-handler')
const User = require('../models/User');
const { default: generateToken } = require('../util/generateToken');

const registerUser = asyncHandler(async (req, res) => {
    const {fullname, email, password, pic} = req.body;

    const userExists = await User.findOne({ email });

    if(userExists) {
        res.status(400);
        throw new Error("User alrady exists");
    }

    const user = await User.create({
        fullname,
        email,
        password,
        pic,
    });

    if(user) {
        response.status(201).json({
            id_:user._id,
            fullname:user.fullname,
            email:user.email,
            isAdmin:user.isAdmin,
            pic:user.pic,
            token:generateToken(user._id),
        })
    } else {
        res.status(400);
        throw new Error("Error Occured");
    }
});

const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email })

    if(user && (await user.matchPassword(password))) {
        res.json({
            id_: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            pic: user.pic,
            token:generateToken(user._id),
        })
    } else {
        res.status(400);
        throw new Error("Invalid email or password!");
    }
});

module.exports = { registerUser, authUser }