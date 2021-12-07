const { Exercise } = require('../models/Exercise');
const express = require('express');
const router = express.Router();

router.post(`/add`, async (req, res) => {
    let exercise = new Exercise({
        user: req.body.user,
        exerciseType: req.body.exerciseType,
        timeOfDay: req.body.timeOfDay,
       // duration: req.body.duration,
        //dateTime: req.body.dateTime,
        dateCreated:  Date.now(),
        description: req.body.description
    })
    exercise = await exercise.save();

    if(!exercise)
    return res.status(404).send('the exercise cannot be added');

    res.send(exercise);
});


router.get(`/`, async (req, res) => {
    const exerciseList = await Exercise.find();
    if(!exerciseList){
        res.status(500).json({success: false})
    }
    res.status(200).send(exerciseList);
})

router.get('/:id', async(req,res)=>{
    const exercise = await Exercise.findById(req.params.id);

    if(!exercise) {
        res.status(500).json({message: 'The exercise with the given ID was NOT found.'})
    } 
    res.status(200).send(exercise);
})

//delete exercise
router.delete('/:id', (req, res)=>{
    Exercise.findByIdAndRemove(req.params.id).then(exercise =>{
        if(exercise) {
            return res.status(200).json({success: true, message: 'The exercise was deleted!'})
        } else {
            return res.status(404).json({success: false , message: "The exercise was NOT found!"})
        }
    }).catch(err=>{
       return res.status(500).json({success: false, error: err}) 
    })
})

router.put('/:id',async (req, res)=> {

    const exercise = await Exercise.findByIdAndUpdate(
        req.params.id,
        {
            user: req.body.user,
            exerciseType: req.body.exerciseType,
            timeOfDay: req.body.timeOfDay,
            dateCreated:  Date.now(),
            description: req.body.description
        },
        { new: true}
    )

    if(!exercise)
    return res.status(400).send('the exercise cannot be created!')

    res.send(exercise);
})

module.exports = router;