const express = require('express');
const router = express.Router();
const { Courses } = require("../models");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../models');
const Promise = require('promise');



router.post('/create',
async (req, res) => {
    try {
        const { courseid, coursename, coursedescription, status} = req.body;
        
            await Courses.create({
                
            courseid:courseid , 
            coursename:coursename, 
            coursedescription:coursedescription,
            status:status,
            });
            res.json("success");
    } catch (error) {
        res.json(error)
    }
});
//
module.exports = router;