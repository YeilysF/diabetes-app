const { Glucose } = require('../models/Glucose');
const express = require('express');
const router = express.Router();

router.post(`/add`, async (req, res) => {
    let glucose = new Glucose({
       // username: req.body.username,
        glucoseLevel: req.body.glucoseLevel,
        timeOfDay: req.body.timeOfDay,
        dateTime: req.body.dateTime,
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

//delete glucose
router.delete('/:id', (req, res)=>{
    Glucose.findByIdAndRemove(req.params.id).then(glucose =>{
        if(glucose) {
            return res.status(200).json({success: true, message: 'The glucose was deleted!'})
        } else {
            return res.status(404).json({success: false , message: "The glucose was NOT found!"})
        }
    }).catch(err=>{
       return res.status(500).json({success: false, error: err}) 
    })
})



module.exports = router;