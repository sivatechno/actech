const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const saltRounds = 10
const db = require('../models');
const Promise = require('promise');
const {Mentee} = require('../models');

router.get('/viewmentee', async (req, res, next) => {
    try {
        const list = await Mentee.findAll({});
        if(list) {
            res.send(list);
        }
    } catch (error) {
        res.send(error);
    }

});

router.post('/create', async (req, res) => {
    try {
        const { postalcode, phonenumber, username, password, company, technology, email, firstname, lastname, country, city, address, state } = req.body;
        const userAlreadyExist = await Mentee.findOne({ where: { username: username } });
        const passwordHash = await bcrypt.hash(password, 10);
        if (!userAlreadyExist) {
            await Mentee.create({
                username: username,
                password: passwordHash,
                company: company,
                technology: technology,
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

router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
    let data = []
    let vals = {}
    const mentees = await Mentee.findByPk(id);
    if (mentees) {
        data.push(mentees)
        vals.data = data
        res.send(data);
    }else{
        res.send("no data")
    }
    } catch (error) {
        res.send("error")
    }
    

});

router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const deleteMentee = await Mentee.findByPk(id);
        // const deleteMentor = await Mentors.findOne({ id: req.body.id }, {
        //     headers: {
        //         "Content-type": "application/json"
        //     }
        // });
        deleteMentee.destroy();
    } catch (error) {
        res.send(error)
    }
});
module.exports = router;