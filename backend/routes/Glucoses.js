const { Glucose } = require('../models/Glucose');
const express = require('express');
const router = express.Router();

router.post(`/add`, async (req, res) => {
    let glucose = new Glucose({
        user: req.body.user,
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

router.get('/:id', async(req,res)=>{
    const glucose = await Glucose.findById(req.params.id);

    if(!glucose) {
        res.status(500).json({message: 'The glucose with the given ID was NOT found.'})
    } 
    res.status(200).send(glucose);
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

router.put('/:id',async (req, res)=> {

    const glucose = await Glucose.findByIdAndUpdate(
        req.params.id,
        {
            user: req.body.user,
            glucoseLevel: req.body.glucoseLevel,
            timeOfDay: req.body.timeOfDay,
            dateTime: req.body.dateTime,
            dateCreated: Date.now(), 
            description: req.body.description
        },
        { new: true}
    )

    if(!glucose)
    return res.status(400).send('the glucose cannot be created!')

    res.send(glucose);
})

module.exports = router;