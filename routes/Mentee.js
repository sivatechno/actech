const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const saltRounds = 10
const db = require('../models');
const Promise = require('promise');
const Mentee = require('../models/Mentee');

router.get('/viewmentee',async (req,res,next) =>{
    const listOfMentees = await Mentee.findAll({});
    res.json(listOfMentees);
    
});

router.post('/create',async (req,res) =>{
    try {
        const {postalcode,phonenumber,username ,password, company,technology , email , firstname, lastname , country , city , address ,state} = req.body;
        const userAlreadyExist = await Mentee.findOne({where:{username: username}});
        const passwordHash = await bcrypt.hash(password,10);
        if(!userAlreadyExist)
        {
            await Mentee.create({
            username:username,
            password:passwordHash,
            company:company,
            technology:technology,
            email:email,
            phonenumber:phonenumber,
            firstname:firstname,
            lastname:lastname,
            country:country,
            postalcode:postalcode,
            city:city,
            address:address,
            state:state
            });
            res.json("success");
        
        }else{
            res.json("user already exists");
        }
        
    } catch (error) {
        res.json(error)
    }
    });
module.exports = router;