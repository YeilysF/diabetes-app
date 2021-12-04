const { Insulin } = require('../models/Insulin');
const express = require('express');
const router = express.Router();

router.post(`/`, async (req, res) => {
    let insulin = new Insulin({
        username: req.body.username,
        units: req.body.units,
        insulinName: req.body.insulinName,
        timeOfDay: req.body.timeOfDay,
        dateCreated: Date.now(), 
        description: req.body.description
    })
    insulin = await insulin.save();

    if(!insulin)
    return res.status(404).send('the insulin cannot be added');

    res.send(insulin);
});

router.get(`/`, async (req, res) => {
    const insulinList = await Insulin.find();
    if(!insulinList){
        res.status(500).json({success: false})
    }
    res.status(200).send(insulinList);
})


module.exports = router;