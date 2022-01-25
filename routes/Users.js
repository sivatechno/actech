const express = require('express');
const router = express.Router();
const { Users, Mentors, Mentee, AccessToken } = require("../models");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../models');
const cookie = require('cookie-parser');

// const validUser = (req,res,next) => {
//     var token = req.header('auth');
//     req.token=token;
//     next();
// }

router.get("/viewuser", async (req, res) => {
    jwt.verify(req.token, 'try to get someting happen', async (err, data) => {
        if (err) {
            res.json("not viewewd");
        } else {
            const listOfUsers = await Users.findAll({ limit: 10 });
            res.json(listOfUsers);
        }
    })
    // const listOfUsers = await Users.findAll({ limit: 10 });
    // res.json(listOfUsers);

});

router.delete("/logout", async (req, res) => {
    try {
        const { person_id } = await req.body;
        const person = await AccessToken.findByPk(person_id);
        if (!person) {
            person.destroy();
            res.json("deleted successfully");
        }
        else {
            res.send("nothing")
        }
    } catch (error) {
        res.send(error)

    }
})




router.post("/login", async (req, res) => {
    // console.log("test1");
    try {
        const { username, password } = await req.body;
        // console.log("test2");
        const user = await Users.findOne({ where: { username: username } });
        // console.log("test3");
        if (!user) {
            await res.json({ error: "User donsen't exist" });
        } else {
            await bcrypt.compare(password, user.password).then(async (match) => {
                if (match) {
                    // console.log("test4");
                    var userToken = await jwt.sign({ id: user.id }, 'try to get someting happen');
                    // console.log("test5");
                    await res.json({ token: userToken });
                    // console.log("test6");
                    console.log(user.id)
                    await AccessToken.create({
                        person_id: user.id,
                        accesstoken: userToken
                    }) 

                } else {

                    res.json({ error: "Wrong username and password combination" });
                }

            });
        }

    } catch (error) {
        res.json(error);
    }
});

// router.get('/count', async (req, res) => {
//     const counting = await Users.findAndCountAll();
//     res.send(counting);
//     console.log(counting)
// })
router.get('/count', (req, res) => {
    jwt.verify(req.token, 'try to get someting happen', async (err, data) => {
        if (err) {
            res.json("not viewewd");
        } else {
            Users.findAndCountAll({})
                .then(result => {
                    res.json(result.count);
                });
        }
    })
})


router.post("/register", async (req, res) => {
    try {
        const { username, password, email } = req.body;
        const user = await Users.findOne({ where: { username: username } });
        const mentor = await Mentors.findOne({ where: { username: username } })
        const mentee = await Mentee.findOne({ where: { username: username } })
        const passwordHash = await bcrypt.hash(password, 10);
        if (!user && !mentor && !mentee) {
            Users.create({
                username: username,
                password: passwordHash,
                email: email,

            });
            res.json("Success");
        }
        else {
            res.json("username already exists");
        }
    } catch (error) {
        res.json(error)
    }

});

module.exports = router;