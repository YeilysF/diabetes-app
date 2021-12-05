const { BloodPressure } = require('../models/BloodPressure');
const express = require('express');
const router = express.Router();

router.post(`/add`, async (req, res) => {
    let bloodPressure = new BloodPressure({
        user: req.body.user,
        heartRate: req.body.heartRate,
        systolic: req.body.systolic,
        diastolic: req.body.diastolic,
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

//delete blood pressure
router.delete('/:id', (req, res)=>{
    BloodPressure.findByIdAndRemove(req.params.id).then(bloodPressure =>{
        if(bloodPressure) {
            return res.status(200).json({success: true, message: 'The blood pressure record was deleted!'})
        } else {
            return res.status(404).json({success: false , message: "The blood pressure record was NOT found!"})
        }
    }).catch(err=>{
       return res.status(500).json({success: false, error: err}) 
    })
})

module.exports = router;