const express = require('express');
const router = express.Router();
const {Project} = require('../models');
router.get('/viewproject',async(req,res)=>{
    try {
        const project=await Project.findAll();
        if (project) {
            
            res.send(project);

        }
        
    } catch (error) {

        res.send(error);

    }
});

router.post('/addproject',async(req,res)=>{

  try {

    const {clientname,projectname,clientemail,startdate,enddate}=req.body;
    const projectAlreadyExists=await Project.findOne({where:{Client_Name:clientname}});
    if (!projectAlreadyExists) {

        await Project.create({
            Client_Name:clientname,
            Project_Name:projectname,
            Client_email:clientemail,
            Start_Date:startdate,
            End_Date:enddate,
        });
        res.json("success")
        
    }

      
  } catch (error) {

    res.send(error);
      
  }
});

router.put('/editproject/:id', async (req, res) => {
  try {
      const id = req.params.id;
      const { clientname,projectname,clientemail,startdate,enddate } = req.body;
      const user = await Project.findByPk(id);
      if(user){

          await Project.update({
            Client_Name:clientname,
            Project_Name:projectname,
            Client_email:clientemail,
            Start_Date:startdate,
            End_Date:enddate,
         });
         res.json("success");
        } else {
          res.json("user not there");

      }
    } catch (error) {
      res.json(error)
    }
    });




router.delete('/deleteproject/:id', async (req, res) => {
  try {
      const id = req.params.id;
      const deleteProject = await Project.findByPk(id);
      deleteProject.destroy();
  } catch (error) {
      res.send(error)
  }
});


module.exports=router;