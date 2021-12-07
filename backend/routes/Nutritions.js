const { Nutrition } = require('../models/Nutrition');
const express = require('express');
const router = express.Router();

router.post(`/add`, async (req, res) => {
    let nutrition = new Nutrition({
        user: req.body.user,
        mealName: req.body.mealName,
        timeOfDay: req.body.timeOfDay,
        dateTime: req.body.dateTime,
        dateCreated: Date.now(), 
        description: req.body.description,
       // foodList: req.body.foodList,
    })
    nutrition = await nutrition.save();

    if(!nutrition)
    return res.status(404).send('the nutrition facts cannot be added');

    res.send(nutrition);
});

router.get(`/`, async (req, res) => {
    const nutritionList = await Nutrition.find();
    if(!nutritionList){
        res.status(500).json({success: false})
    }
    res.status(200).send(nutritionList);
})

router.get('/:id', async(req,res)=>{
    const nutrition = await Nutrition.findById(req.params.id);

    if(!nutrition) {
        res.status(500).json({message: 'The nutrition with the given ID was NOT found.'})
    } 
    res.status(200).send(nutrition);
})

//delete meal
router.delete('/:id', (req, res)=>{
    Nutrition.findByIdAndRemove(req.params.id).then(nutrition =>{
        if(nutrition) {
            return res.status(200).json({success: true, message: 'The nutrition facts was deleted!'})
        } else {
            return res.status(404).json({success: false , message: "The nutrition facts was NOT found!"})
        }
    }).catch(err=>{
       return res.status(500).json({success: false, error: err}) 
    })
})


router.put('/:id',async (req, res)=> {

    const nutrition = await Nutrition.findByIdAndUpdate(
        req.params.id,
        {
            mealName: req.body.mealName,
            timeOfDay: req.body.timeOfDay,
            dateTime: req.body.dateTime,
            dateCreated: Date.now(), 
            description: req.body.description,
          //  foodList: req.body.foodList,
        },
        { new: true}
    )

    if(!nutrition)
    return res.status(400).send('the nutrition facts cannot be created!')

    res.send(nutrition);
})

module.exports = router;