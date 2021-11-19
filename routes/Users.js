const express = require('express');
const router = express.Router();
const { Users } = require("../models");
const bcrypt = require('bcrypt');

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
    const {username , password } = req.body;
    bcrypt.hash(password).then((hash) =>{
        Users.create({
            username:username,
            password:bcrypt.hashSync,
        });
        res.json("Success");
    });
});
module.exports = router;