const express = require('express');
const router = express.Router();
const { Mentors } = require("../models");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
// const saltRounds = 10
const db = require('../models');
const Promise = require('promise');

const {body,validationResult} = require('express-validator');


router.get('/viewmentors', async (req, res) => {
    try {
        const mentor = await Mentors.findAll();
        if (mentor) {

            res.send(mentor);
        }
    } catch (error) {
        res.send(error);
    }

});

// const validUser = (req, res, next) => {
//     var token = req.header('auth');
//     req.token = token;
//     next();
// }

// router.get("/viewmentors",validUser, async (req , res) =>{
//     jwt.verify(req.token,'try to get someting happen',async (err,data) =>{
//         if(err){
//             res.json("not viewewd")
//         }else{
//             const listOfMentors = await Mentors.findAll({});
//             res.json(listOfMentors);
//             console.log("success");
//         }
//     })

//     });



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

router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const deleteMentor = await Mentors.findByPk(id);
        // const deleteMentor = await Mentors.findOne({ id: req.body.id }, {
        //     headers: {
        //         "Content-type": "application/json"
        //     }
        // });
        deleteMentor.destroy();
    } catch (error) {
        res.send(error)
    }
});

router.post('/create',
body('username').isLength({min:2}),
body('email').isEmail(),
body('firstname').isLength({min:2}),
body('lastname').isLength({min:2}),
body('password').isLength({min:5}),

async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
    return res.status(400).json({errors:errors.array()});
    }
    try {
        const { postalcode, phonenumber, username, password, role, email, firstname, lastname, country, city, address, state } = req.body;
        const userAlreadyExist = await Mentors.findOne({ where: { username: username } });
        const passwordHash = await bcrypt.hash(password, 10);
        if (!userAlreadyExist) {
            await Mentors.create({
                username: username,
                password: passwordHash,
                role: role,
                email: email,
                phonenumber: phonenumber,
                firstname: firstname,
                lastname: lastname,
                country: country,
                postalcode: postalcode,
                city: city,
                address: address,
                state: state
            });
            res.json("success");

        } else {
            res.json("user already exists");
        }

    } catch (error) {
        res.json(error)
    }
});
router.put('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const { newPostalcode, newPhonenumber, username, password, role, newEmail, newFirstname, newLastname, newCountry, newCity, newAddress, newState } = req.body;
        const user = await Mentors.findByPk(id);
        if (user) {
            await Mentors.update({
                username: username,
                password: passwordHash,
               // role: role,
                email: newEmail,
                phonenumber: newPhonenumber,
                firstname: newFirstname,
                lastname: newLastname,
                country: newCountry,
                postalcode: newPostalcode,
                city: newCity,
                address: newAddress,
                state: newState
            });
            res.json("success");

        } else {
            res.json("user not there");
        }

    } catch (error) {
        res.json(error)
    }
});
router.get('/:id', async (req, res) => {
    try {
        // const id = req.params.id;
        // const profile = await Mentors.findByPk(id);
        // res.send(profile);
        // console.log(profile);
        const id = req.params.id;
        let data = []
        let vals = {}
        const mentors = await Mentors.findByPk(id);
        console.log(mentors)
        if (mentors) {
            data.push(mentors)
            vals.data = data
            res.send(data);
        } else {
            res.send("no data");
        }

    } catch (error) {
        res.send(error);
    }
});

module.exports = router;