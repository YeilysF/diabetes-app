const { Medication } = require('../models/Medication');
const express = require('express');
const router = express.Router();

router.post(`/`, async (req, res) => {
    let medication = new Medication({
        username: req.body.username,
        medicationName: req.body.medicationName,
        medicationType: req.body.medicationType,
        quantity: req.body.quantity,
        timeOfDay: req.body.timeOfDay,
        dateCreated: Date.now(), 
        description: req.body.description
    })
    medication = await medication.save();

    if(!medication)
    return res.status(404).send('the medication cannot be added');

    res.send(medication);
});

//update user info
router.put('/:id',async (req, res)=> {
    const medication = await Medication.findByIdAndUpdate(
        req.params.id,
        {
            username: req.body.username,
            medicationName: req.body.medicationName,
            medicationType: req.body.medicationType,
            quantity: req.body.quantity,
            timeOfDay: req.body.timeOfDay,
            dateCreated: Date.now(), 
            description: req.body.description
        },
        {returnOriginal: false}
    )

    if(!medication)
    return res.status(400).send('The medication record could NOT be created')

    res.send(user);
})

router.get(`/`, async (req, res) => {
    const medicationList = await Medication.find();
    if(!medicationList){
        res.status(500).json({success: false})
    }
    res.status(200).send(medicationList);
})


module.exports = router;