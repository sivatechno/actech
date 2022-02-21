const express = require('express');
const router = express.Router();
const {AssociateEducation } = require('../models');

router.post('/createeducation', async (req, res) => {
    try {
        const{ university,college,passedoutyear,degree,cgpa,qualification} = req.body;
         if(true) {
            await AssociateEducation.create({                
                university : university,
                college:college,
                passedoutyear:passedoutyear,
                degree:degree,
                cgpa:cgpa,
                qualification:qualification,
            });
            res.json("success");

        } else {
            res.json("user not there");
        }

    } catch (error) {
        res.json(error)
    }

})

module.exports = router;