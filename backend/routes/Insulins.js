const { Insulin } = require('../models/Insulin');
const express = require('express');
const router = express.Router();

router.post(`/add`, async (req, res) => {
    let insulin = new Insulin({
        user: req.body.user,
        units: req.body.units,
        insulinName: req.body.insulinName,
        timeOfDay: req.body.timeOfDay,
        dateTime: req.body.dateTime,
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

router.get('/:id', async(req,res)=>{
    const insulin = await Insulin.findById(req.params.id);

    if(!insulin) {
        res.status(500).json({message: 'The insulin with the given ID was NOT found.'})
    } 
    res.status(200).send(insulin);
})

//delete insulin
router.delete('/:id', (req, res)=>{
    Insulin.findByIdAndRemove(req.params.id).then(insulin =>{
        if(insulin) {
            return res.status(200).json({success: true, message: 'The insulin was deleted!'})
        } else {
            return res.status(404).json({success: false , message: "The insulin was NOT found!"})
        }
    }).catch(err=>{
       return res.status(500).json({success: false, error: err}) 
    })
})

router.put('/:id',async (req, res)=> {

    const insulin = await Insulin.findByIdAndUpdate(
        req.params.id,
        {
            user: req.body.user,
            units: req.body.units,
            insulinName: req.body.insulinName,
            timeOfDay: req.body.timeOfDay,
            dateTime: req.body.dateTime,
            dateCreated: Date.now(), 
            description: req.body.description
        },
        { new: true}
    )

    if(!insulin)
    return res.status(400).send('the insulin cannot be created!')

    res.send(insulin);
})



module.exports = router;