const express = require('express');
const router = express.Router();
const { AssociateProfile } = require("../models");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../models');
const path = require('path');
const expressFileUpload = require('express-fileupload')
router.use(expressFileUpload())

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
    const image = req.files.myuploadimage
    const imagepath = path.join(__dirname, '..', 'client', 'public', 'images')
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
        const { firstname, lastname, email, country, city, address, state, phonenumber, dob,
            postalcode, university, college, passedoutyear, degree, cgpa, qualification,
            sslcboard, sslcyearpassedout, sslcschoolname, sslcmark, hscboard, hscschoolname,
            hscyearpassedout, hscmark, educationinputlist, company, designation,
            currentsalary, expectsalary, yearsofexp, expcertificate, companyaddress, institutename,
            coursename, duration, coursecertificate, instituteaddress, project, gender,
            qualify, primaryskill, secondaryskill, projectduration } = req.body;
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
                dob: dob,
                postalcode: postalcode,
                university: university,
                college: college,
                passedoutyear: passedoutyear,
                degree: degree,
                cgpa: cgpa,
                qualification: qualification,
                sslcboard: sslcboard,
                sslcyearpassedout: sslcyearpassedout,
                sslcschoolname: sslcschoolname,
                sslcmark: sslcmark,
                hscboard: hscboard,
                hscyearpassedout: hscyearpassedout,
                hscschoolname: hscschoolname,
                hscmark: hscmark,
                educationinputlist: educationinputlist,
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
                projectduration: projectduration,
                gender: gender,
                qualify: qualify,
                secondaryskill: secondaryskill,
                primaryskill: primaryskill
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
        const { newFirstname, newLastname, newEmail, newCountry, newCity, newAddress, newState, newPhonenumber, newDob,
            newPostalcode, newSslcboard, newSslcyearpassedout, newSslcschoolname, newSslcmark, newHscboard, newHscschoolname, newHscyearpassedout, newHscmark, newUniversity, newCollege, newPassedoutyear, newDegree, newCgpa, newQualification, newCompany, newDesignation,
            newCurrentsalary, newExpectsalary, newYearsofexp, newExpcertificate, newCompanyaddress, newInstitutename,
            newCoursename, newDuration, newCoursecertificate, newInstituteaddress, newProject, newProjectDuration,
            newGender, newQualify, newPrimaryskill, newSecondaryskill } = req.body;
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
                dob: newDob,
                postalcode: newPostalcode,
                sslcboard: newSslcboard,
                sslcschoolname: newSslcschoolname,
                sslcyearpassedout: newSslcyearpassedout,
                sslcmark: newSslcmark,
                hscboard: newHscboard,
                hscschoolname: newHscschoolname,
                hscyearpassedout: newHscyearpassedout,
                hscmark: newHscmark,
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
                projectduration: newProjectDuration,
                gender: newGender,
                qualify: newQualify,
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

router.get('/count', (req, res) => {
    Associateprofile.findAndCountAll({})
        .then(result => {
            res.json(result.count);
        });
});

module.exports = router;