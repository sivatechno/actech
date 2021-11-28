const express = require('express');
const router = express.Router();
const { Users,AccessToken } = require("../models");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../models');
const cookie = require('cookie-parser');

const validUser = (req,res,next) => {
    var token = req.header('auth');
    req.token=token;
    next();
}

router.get("/viewuser",validUser, async (req , res) =>{
    jwt.verify(req.token,'try to get someting happen',async (err,data) =>{
        if(err){
            res.json("not viewewd")
        }else{
            const listOfUsers = await Users.findAll({ limit: 10 });
            res.json(listOfUsers);
        }
    })
    
    });
    


router.post("/login",async(req,res) =>{
    try {
        const {username , password} = req.body;

        const user = await Users.findOne({where:{username: username}});
    
        if(!user) res.json({error: "User donsen't exist"});
    
        bcrypt.compare(password, user.password).then(async(match) =>{
            if(!match) {
               res.json({error:"Wrong username and password combination"});
            }else{
            var userToken =await jwt.sign({id:user.id},'try to get someting happen');
            res.json(userToken);
            // update({
            //     accesstoken:userToken
            // });
            // await Users.up({
            //     accesstoken:res.userToken
            // });
            // res.setHeader('auth',userToken).send(userToken);
            }
            
        });

        
    } catch (error) {
        res.json(error);
    }
});


router.post("/register", async (req,res)=>{
    try {
        const {username,password,email,role}=req.body;
        const user = await Users.findOne({where:{username: username}});
        const passwordHash = await bcrypt.hash(password,10);
        if(!user){
            Users.create({
                username:username,
                password:passwordHash,
                email:email,
                role:role,
            });
            res.json("Success");
        }
        else{
            res.json("username already exists");
        }
    } catch (error) {
        res.json(error)
    }
    
});

module.exports = router;