const express = require('express');
const router = express.Router();
const { AssociateProfile, HardBlock, DefaultProject } = require('../models');


router.get("/hardblockview", async (req, res) => {
    try {
        const listOfHardBlock = await AssociateProfile.findAll(
            { where: { isproject: true }, include: [HardBlock] }
        );
        if (listOfHardBlock) {
            res.send(listOfHardBlock);
        }
        else {
            res.send("nothin")
        }   
        // console.log(listOfHardBlock)
    } catch (error) {

    }
});

router.get('/getproject',async (req,res) => {
    try {
        const projects = await DefaultProject.findAll();
        res.json(projects)
    } catch (error) {
        
    }

})

router.post('/addproject', async (req, res) => {
    const { default_projects } = req.body;
    try {
        const project = await DefaultProject.findOrCreate({
            where: { default_projects: default_projects }
        })
        res.json(project)
    } catch (error) {
        res.json(error)

    }
})

router.post("/addhardblock", async (req, res) => {
    const { email,start_date,end_date,projects} = await req.body;
    const associate = await AssociateProfile.findOne({
        where:{email:email}
    });
    if (!associate) {
        res.json("not available")
    } else {
        const hardblock = await AssociateProfile.findOne(
            { where: { email: req.body.email } })
        // const timestamps = Date.now() + 3600 * 1000 * 7;
        await HardBlock.create({
            start_date: start_date,
            end_date: end_date,
            AssociateProfileId: hardblock.id,
            project:projects,
        })

        const project = await DefaultProject.findOrCreate({
            where:{default_projects:projects}})

        // res.json("success")
        res.json(hardblock)
    }
})

module.exports = router;