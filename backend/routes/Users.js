const { User } = require('../models/User');
const { registerUser } = require('../models/User');
const express = require('express');
const router = express.Router();

var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })
//router.route("/").post(registerUser);

//get users list
router.get(`/`, async (req, res) => {
    const userList = await User.find();
    if(!userList){
        res.status(500).json({success: false})
    }
    res.status(200).send(userList);
})

//find specific user
router.get('/:id', async(req,res)=>{
    const user = await User.findById(req.params.id);

    if(!user) {
        res.status(500).json({message: 'The user with the given ID was not found.'})
    } 
    res.status(200).send(user);
})

//create a new user
router.post(`/`, async (req, res) => {
    let user = new User({
        fullname: req.body.fullname,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        diabetesType: req.body.diabetesType,
        weight: req.body.weight,
        country: req.body.country,
        isAdmin: req.body.isAdmin
    })
    const userExists = await User.findOne({username:req.body.username}); 

    if(userExists){
        return res.status(404).send('user Already Exists');
    }else{
        user = await user.save();
    }
     
    if(!user)
    return res.status(404).send('the user cannot be created');

    res.send(user);
});

//login a user
router.post(`/login`, async (req, res) => {

    const {username, password} = req.body;
    const user = await User.findOne({username:username});
    console.log(username)
    if(user && (await user.password == password)){
        res.json({
        fullname: user.fullname,
        username: user.username,
        email: user.email,
        password: user.password,
        diabetesType: user.diabetesType,
        weight: user.weight,
        country: user.country,
        isAdmin: user.isAdmin
        })
    }else{
        //console.log(user.password)
        //console.log(password)
        //console.log(username)
        return res.status(404).send('Invalid username or password');
    }
});

//update user info
router.put('/:id',async (req, res)=> {
    const user = await User.findByIdAndUpdate(
        req.params.id,
        {
            fullname: req.body.fullname,
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            diabetesType: req.body.diabetesType,
            weight: req.body.weight,
            isAdmin: req.body.isAdmin
        },
        {returnOriginal:false}
    )

    if(!user)
    return res.status(400).send('the user cannot be created')

    res.send(user);
})

//update user password
router.post('/UpdatePassword',async (req, res)=> {

    const {username, newPassword} = req.body;
    console.log(username,newPassword+"!!!!!!")
    const user = await User.findOneAndUpdate(
        {
            username:username
        },
        { 
             password: newPassword
        }
    )

    if(!user)
    return res.status(400).send('The user was not found')

    res.send(user);
})

//delete a user
router.delete('/:id', (req, res)=>{
    User.findByIdAndRemove(req.params.id).then(user =>{
        if(user) {
            return res.status(200).json({success: true, message: 'the user is deleted'})
        } else {
            return res.status(404).json({success: false , message: "user not found"})
        }
    }).catch(err=>{
       return res.status(500).json({success: false, error: err}) 
    })
});

module.exports = router;