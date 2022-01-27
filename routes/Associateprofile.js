const express = require('express');
const router = express.Router();
const { Users, AssociateProfile } = require("../models");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../models');
const path = require('path');
//const expressFileUpload = require ('express-fileupload')
//const expressFileUpload = require('express-fileupload')
//router.use(expressFileUpload())

router.get('/viewassociateprofile', async (req, res) => {
    try {
        const associateProfile = await AssociateProfile.findAll();
        if (associateProfile) {

            res.send(associateProfile);
        }
    } catch (error) {
        res.send(error);
    }

});

router.post('/upload', (req, res) => {
    //console.log(req.uploadimage);
    const image = req.files.myuploadimage
    const imagepath = path.join(__dirname, '...', 'public', 'Storedimages')
    //console.log(imagepath)
    return image.mv(`${imagepath}/${image.name}`, (err) => {
        if (err) console.log('file was not uploaded')
        return res.send({ message: 'file was successfully uploaded' })
    })
});

router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const deleteAssociateProfile = await AssociateProfile.findByPk(id);
        deleteAssociateProfile.destroy();
    } catch (error) {
        res.send(error)
    }
});

router.post('/create', async (req, res) => {

    try {
        const { firstname, lastname, email, country, city, address, state, phonenumber,
            postalcode, university, college, passedoutyear, degree, cgpa, qualification, company, designation,
            currentsalary, expectsalary, yearsofexp, expcertificate, companyaddress, institutename,
            coursename, duration, coursecertificate, instituteaddress, project, female, male,
            experience, fresher, primaryskill, secondaryskill } = req.body;
        //const userAlreadyExist = await Associateprofile.findOne({ where: { firstname: firstname } });
        //const passwordHash = await bcrypt.hash(password, 10);
        if (true) {
            await AssociateProfile.create({
                firstname: firstname,
                lastname: lastname,
                email: email,
                country: country,
                city: city,
                address: address,
                state: state,
                phonenumber: phonenumber,
                postalcode: postalcode,
                university: university,
                college: college,
                passedoutyear: passedoutyear,
                degree: degree,
                cgpa: cgpa,
                qualification: qualification,
                company: company,
                designation: designation,
                currentsalary: currentsalary,
                expectsalary: expectsalary,
                yearsofexp: yearsofexp,
                expcertificate: expcertificate,
                companyaddress: companyaddress,
                institutename: institutename,
                coursename: coursename,
                duration: duration,
                coursecertificate: coursecertificate,
                instituteaddress: instituteaddress,
                project: project,
                female: female,
                male: male,
                experience: experience,
                fresher: fresher,
                secondaryskill: secondaryskill,
                primaryskill: primaryskill,
            });
            res.json("success");

        } else {
            res.json("user not there");
        }

    } catch (error) {
        res.json(error)
    }

})
router.put('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const { newFirstname, newLastname, newEmail, newCountry, newCity, newAddress, newState, newPhonenumber,
            newPostalcode, newUniversity, newCollege, newPassedoutyear, newDegree, newCgpa, newQualification, newCompany, newDesignation,
            newCurrentsalary, newExpectsalary, newYearsofexp, newExpcertificate, newCompanyaddress, newInstitutename,
            newCoursename, newDuration, newCoursecertificate, newInstituteaddress, newProject, newFemale, newMale,
            newExperience, newFresher, newPrimaryskill, newSecondaryskill } = req.body;
        const user = await AssociateProfile.findByPk(id);
        if (user) {
            await AssociateProfile.update({
                firstname: newFirstname,
                lastname: newLastname,
                email: newEmail,
                country: newCountry,
                city: newCity,
                address: newAddress,
                state: newState,
                phonenumber: newPhonenumber,
                postalcode: newPostalcode,
                university: newUniversity,
                college: newCollege,
                passedoutyear: newPassedoutyear,
                degree: newDegree,
                cgpa: newCgpa,
                qualification: newQualification,
                company: newCompany,
                designation: newDesignation,
                currentsalary: newCurrentsalary,
                expectsalary: newExpectsalary,
                yearsofexp: newYearsofexp,
                expcertificate: newExpcertificate,
                companyaddress: newCompanyaddress,
                institutename: newInstitutename,
                coursename: newCoursename,
                duration: newDuration,
                coursecertificate: newCoursecertificate,
                instituteaddress: newInstituteaddress,
                project: newProject,
                female: newFemale,
                male: newMale,
                experience: newExperience,
                fresher: newFresher,
                secondaryskill: newSecondaryskill,
                primaryskill: newPrimaryskill,
            });
            res.json("success");

        } else {
            res.json("user not there");
        }

    } catch (error) {
        res.json(error)
    }
});


router.get('/count', (req, res) => {
    AssociateProfile.findAndCountAll({})
        .then(result => {
            res.json(result.count);
        });
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
        const associateprofile = await AssociateProfile.findByPk(id);
        console.log(associateprofile)
        if (associateprofile) {
            data.push(associateprofile)
            vals.data = data
            res.send(data);
        } else {
            res.send("no data");
        }

    } catch (error) {
        res.send(error);
    }
});

//counting of data
router.get('/count', (req, res) => {
    Associateprofile.findAndCountAll({})
        .then(result => {
            res.json(result.count);
        });
});

module.exports = router;