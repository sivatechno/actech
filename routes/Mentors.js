const express = require('express');
const router = express.Router();
const { Mentors} = require("../models");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const saltRounds = 10
const db = require('../models');
const Promise = require('promise');

// router.get('/viewmentors',async (req,res) =>{
//     try{
//         const listofMentors = Mentors.findAll([]);
//         res.json(listofMentors);   
        
//     }catch(err){
//         res.json(err);
//     }
// });

const validUser = (req,res,next) => {
    var token = req.header('auth');
    req.token=token;
    next();
}

router.get("/viewmentors",validUser, async (req , res) =>{
    jwt.verify(req.token,'try to get someting happen',async (err,data) =>{
        if(err){
            res.json("not viewewd")
        }else{
            const listOfMentors = await Mentors.findAll({ limit: 10 });
            res.json(listOfMentors);
        }
    })
    
    });



// router.post("/",async (req,res)=>{
//     const {username ,password, role , email , first_name, last_name , country , city , address ,state} = req.body;
//                 await Mentors.create({
//                 username:username,
//                 role:role,
//                 email:email,
//                 first_name:first_name,
//                 last_name:last_name,
//                 country:country,
//                 city:city,
//                 address:address,
//                 state:state
//             });
//             res.json("success");
// });

router.delete('/delete' , async(req,res) =>{
    const deleteMentor = await Mentors.findOne({id:req.body.id},{headers: {
        "Content-type": "application/json"}
      });
    deleteMentor.destroy();
});

router.post('/create',validUser,async (req,res) =>{
        jwt.verify(req.token,'try to get someting happen',async (err,data) =>{
        if(err){
            res.json("not viewewd")
        }else{
            try {
                const {postalcode,phonenumber,username ,password, role , email , first_name, last_name , country , city , address ,state} = req.body;
                const userAlreadyExist = await Mentors.findOne({username:req.body.username});
                const passwordHash = await bcrypt.hash(password,10);
                if(!userAlreadyExist)
                {
                    await Mentors.create({
                    username:username,
                    password:passwordHash,
                    role:role,
                    email:email,
                    phonenumber:phonenumber,
                    first_name:first_name,
                    last_name:last_name,
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
        }
    })
    
});
// router.post('/:id', async(req,res) =>{
//     const id=req.params.id;
//     const mentors = await Mentors.findByPk(id);
//     res.json(mentors);
// });
// router.post("/create",(req,res)=>{
//     res.json(req.body)
// })

module.exports = router;