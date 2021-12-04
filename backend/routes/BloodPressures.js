const { BloodPressure } = require('../models/BloodPressure');
const express = require('express');
const router = express.Router();

router.post(`/`, async (req, res) => {
    let bloodPressure = new BloodPressure({
        username: req.body.username,
        heartRate: req.body.heartRate,
        timeOfDay: req.body.timeOfDay,
        dateCreated:  Date.now(),
        description: req.body.description
    })
    bloodPressure = await bloodPressure.save();

    if(!bloodPressure)
    return res.status(404).send('the blood pressure cannot be added');

    res.send(bloodPressure);
});

router.get(`/`, async (req, res) => {
    const bloodPressureList = await BloodPressure.find();
    if(!bloodPressureList){
        res.status(500).json({success: false})
    }
    res.status(200).send(bloodPressureList);
})

module.exports = router;