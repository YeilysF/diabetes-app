const { Category} = require('../models/Category');
const express = require('express');
const router = express.Router();

router.post(`/`, async (req, res) => {
    let category = new Category({
        name: req.body.name,
        image: req.body.image,
        color1: req.body.color1,
        color2: req.body.color2,
        width: req.body.width,
        height: req.body.height,
        screen: req.body.screen,
    })
    category = await category.save();

    if(!category)
    return res.status(404).send('the category cannot be added');

    res.send(category);
});

router.get(`/`, async (req, res) => {
    const categoryList = await Category.find();
    if(!categoryList){
        res.status(500).json({success: false})
    }
    res.status(200).send(categoryList);
})

module.exports = router;