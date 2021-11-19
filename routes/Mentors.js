const express = require('express');
const router = express.Router();
const { Mentors } = require("../models");
const bcrypt = require('bcrypt');
const saltRounds = 10
const db = require('../models');

router.get('/',async (req,res) =>{
    const listofMentors = await Mentors.findAll();
    res.json(listofMentors);
});
router.post('/',async (req,res) =>{
    const {username ,password, role , email , first_name, last_name , country , city , address ,state} = req.body;
    Mentors.create({
        username:username,
        role:role,
        email:email,
        first_name:first_name,
        last_name:last_name,
        country:country,
        city:city,
        address:address,
        state:state
    });
    res.json("success");
});

module.exports = router;