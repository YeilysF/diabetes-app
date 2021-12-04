const { Glucose } = require('../models/Glucose');
const express = require('express');
const router = express.Router();

router.post(`/`, async (req, res) => {
    let glucose = new Glucose({
        username: req.body.username,
        glucoseLevel: req.body.glucoseLevel,
        timeOfDay: req.body.timeOfDay,
        dateCreated: Date.now(), 
        description: req.body.description
    })
    glucose = await glucose.save();

    if(!glucose)
    return res.status(404).send('the glucose cannot be added');

    res.send(glucose);
});

router.get(`/`, async (req, res) => {
    const glucoseList = await Glucose.find();
    if(!glucoseList){
        res.status(500).json({success: false})
    }
    res.status(200).send(glucoseList);
})


module.exports = router;