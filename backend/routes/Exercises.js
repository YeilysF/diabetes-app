const { Exercise } = require('../models/Exercise');
const express = require('express');
const router = express.Router();

router.post(`/`, async (req, res) => {
    let exercise = new Exercise({
        username: req.body.username,
        exerciseType: req.body.exerciseType,
        duration: req.body.duration,
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

module.exports = router;