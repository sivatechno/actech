const express = require('express');
const router = express.Router();
//import mysql from 'mysql';
const { AddExam,Courses } = require("../models");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../models');
const Promise = require('promise');

// const examcoursename = db.AddExam.coursename
// const coursename = db.Courses.coursename
// if(examcoursename == coursename){
//     db.AddExam.courseid = db.Courses.courseid
// }
// Courses.findByPk({ where: { coursename: AddExam.coursename } }).then(function(Courses) {
//     // projects will be an array of Projects having the id 1, 2 or 3
//     // this is actually doing an IN query
//   })

// async function joinUserProject(userId, projectId) {
//     // find the user & project
//     const courses = await Courses.findOne({ where: { id: coursename } });
//     const exam = await AddExam.findOne({ where: { id: coursename } });
//     // add project and user to the join table with the custom method:
//     project.addUser(user);
//   }

router.post('/create',
async (req, res) => {
    try {
        const { coursename, courseid, examdesc, examduration, examstartdate,examenddate,status} = req.body;
        // AddExam.belongsTo(Courses ,{foreignKey: 'courseid', targetKey: 'coursename'});
        
        // let examcoursename = db.AddExam.coursename
        // let coursename = db.Courses.coursename
        // if(examcoursename == coursename){
        //     db.AddExam.courseid = db.Courses.courseid
        // }

      
            await AddExam.create({
                coursename:coursename, 
                courseid: courseid, 
                examdesc:examdesc,
                examduration:examduration, 
                examstartdate:examstartdate,
                examenddate,examenddate,
                status:status
            });
            res.json("success");
    } catch (error) {
        res.json(error)
    }
});
//
module.exports = router;