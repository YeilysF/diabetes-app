const { User } = require('../models/User');
const express = require('express');
const router = express.Router();
jwt = require('jsonwebtoken');

//get users list
router.get('/', async (req, res) =>{
    const userList = await User.find();

    if(!userList) {
        res.status(500).json({success: false})
    } 
    res.send(userList);
})

//find specific user
router.get('/:id', async(req,res)=>{
    const user = await User.findById(req.params.id);

    if(!user) {
        res.status(500).json({message: 'The user with the given ID was NOT found.'})
    } 
    res.status(200).send(user);
})

//create a new user
router.post(`/`, async (req, res) => {
    let user = new User({
        fullname: req.body.fullname,
        email: req.body.email,
        password: req.body.password,
        image: req.body.image,
        diabetesType: req.body.diabetesType,
        weight: req.body.weight,
        country: req.body.country,
        isAdmin: req.body.isAdmin
    })

    user = await user.save();

    if(!user)
    return res.status(400).send('The user cannot be created!')

    res.send(user);
});

//update user password
router.put('/:id',async (req, res)=> {
    const userExist = await User.findById(req.params.id);
    let newPassword
    if(req.body.password) {
        newPassword = req.body.password;
    } else {
        newPassword = userExist.passwordHash;
    }

    const user = await User.findByIdAndUpdate(
        req.params.id,
        {
            fullname: req.body.fullname,
            email: req.body.email,
            password: newPassword,
            image: req.body.image,
            diabetesType: req.body.diabetesType,
            weight: req.body.weight,
            country: req.body.country,
            isAdmin: req.body.isAdmin
        },
        { new: true}
    )

    if(!user)
    return res.status(400).send('The user cannot be created!')

    res.send(user);
})

//login a user
router.post('/login', async (req,res) => {
    const user = await User.findOne({email: req.body.email})
    const secret = process.env.secret;
    if(!user) {
        return res.status(400).send('The user was NOT found');
    }
    //user.password is stored in database
    if(user && (await req.body.password == user.password)) {
        const token = jwt.sign(
            {
                userId: user.id,
                isAdmin: user.isAdmin
            },
            secret,
        )
        res.status(200).send({user: user.email, token: token}) 

    } else {
       res.status(400).send('The password is WRONG!');
    }

    
})

//update user info
router.put('/:id',async (req, res)=> {
    const user = await User.findByIdAndUpdate(
        req.params.id,
        {
            fullname: req.body.fullname,
            email: req.body.email,
            password: req.body.password,
            image: req.body.image,
            diabetesType: req.body.diabetesType,
            weight: req.body.weight,
            country: req.body.country,
            isAdmin: req.body.isAdmin
        },
        {returnOriginal: false}
    )

    if(!user)
    return res.status(400).send('The user cannot be created')

    res.send(user);
})

//register a user
router.post('/register', async (req,res)=>{
    //const userExist = await User.findOne({email: req.body.email})
/*
    if(userExist){
        return res.status(400).send('The user already exists!')
    }
    else {*/
    let user = new User({
        fullname: req.body.fullname,
        email: req.body.email,
        password: req.body.password,
        image: req.body.image,
        diabetesType: req.body.diabetesType,
        weight: req.body.weight,
        country: req.body.country,
        isAdmin: req.body.isAdmin
    })
    user = await user.save();

    if(!user)
    return res.status(400).send('The user cannot be created!')

    res.send(user);
    //}
})

//delete a user
router.delete('/:id', (req, res)=>{
    User.findByIdAndRemove(req.params.id).then(user =>{
        if(user) {
            return res.status(200).json({success: true, message: 'The user was deleted!'})
        } else {
            return res.status(404).json({success: false , message: "The user was NOT found!"})
        }
    }).catch(err=>{
       return res.status(500).json({success: false, error: err}) 
    })
})

/*
//get count of users in the app
router.get('/count', async (req, res) =>{
    const userCount = await User.countDocuments((count) => count)

    if(!userCount) {
        res.status(500).json({success: false})
    } 
    res.send({
        userCount: userCount
    });
})*/

module.exports = router;