const express = require('express');
const router = express.Router();
const { Users } = require("../models");
const bcrypt = require('bcrypt');
const saltRounds = 10
const db = require('../models');

router.get("/", async (req , res) =>{
    const listOfUsers = await Users.findAll();
    res.json(listOfUsers);
});

// router.post("/", async (req,res)=>{
//     const user=req.body;
//     await Users.create(user);
//     res.json(user);
// });

router.post('/', async (req,res) => {
    const {username , password , email ,role } = req.body;
    // bcrypt.hash(password).then((hash) =>{
        Users.create({
            username:username,
            password:bcrypt.hashSync(password,10),
            email:email,
            role:role,
        });
        res.json("Success");
    // });
});

// router.post("/",(req,res) =>{
//     const username = req.body.username;
//     const password = req.body.password;

    
// })
module.exports = router;