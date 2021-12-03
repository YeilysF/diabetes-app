const { Glucose } = require('../models/Glucose');
const express = require('express');
const router = express.Router();


//add a new glucose level 
router.post(`/`, async (req, res) => {
    let glucose = new Glucose({
        username: req.body.username,
        level: req.body.level,
        time: Date.now(), 
    })
    glucose = await glucose.save();
    res.send(glucose);
});

//get list of glucose by username
router.get(`/`, async (req, res) => {
    const {username} = req.body;
    const glucoseList = await Glucose.find({username:username});
    if(!glucoseList){
        res.status(500).json({success: false})
    }
    res.status(200).send(glucoseList);
});



module.exports = router;