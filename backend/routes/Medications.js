const { Medication } = require('../models/Medication');
const express = require('express');
const router = express.Router();

router.post(`/add`, async (req, res) => {
    let medication = new Medication({
        user: req.body.user,
        medicationName: req.body.medicationName,
        quantity: req.body.quantity,
        timeOfDay: req.body.timeOfDay,
        dateTime: req.body.dateTime,
        dateCreated: Date.now(), 
        description: req.body.description
    })
    medication = await medication.save();

    if(!medication)
    return res.status(404).send('the medication cannot be added');

    res.send(medication);
});

router.get(`/`, async (req, res) => {
    const medicationList = await Medication.find();
    if(!medicationList){
        res.status(500).json({success: false})
    }
    res.status(200).send(medicationList);
})

router.get('/:id', async(req,res)=>{
    const medication = await Medication.findById(req.params.id);

    if(!medication) {
        res.status(500).json({message: 'The medication with the given ID was NOT found.'})
    } 
    res.status(200).send(medication);
})

//delete medication
router.delete('/:id', (req, res)=>{
    Medication.findByIdAndRemove(req.params.id).then(medication =>{
        if(medication) {
            return res.status(200).json({success: true, message: 'The medication was deleted!'})
        } else {
            return res.status(404).json({success: false , message: "The medication was NOT found!"})
        }
    }).catch(err=>{
       return res.status(500).json({success: false, error: err}) 
    })
})


router.put('/:id',async (req, res)=> {

    const medication = await Medication.findByIdAndUpdate(
        req.params.id,
        {
            user: req.body.user,
            medicationName: req.body.medicationName,
            quantity: req.body.quantity,
            timeOfDay: req.body.timeOfDay,
            dateTime: req.body.dateTime,
            dateCreated: Date.now(), 
            description: req.body.description
        },
        { new: true}
    )

    if(!medication)
    return res.status(400).send('the medication cannot be created!')

    res.send(medication);
})



module.exports = router;