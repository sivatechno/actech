const express = require('express');
const router = express.Router();
const {Project} = require('../models');
const {body , validationResult}=require ('express-validator');




router.get('/viewproject',async(req,res)=>{
    try {
      // const id = req.params.id;
        const project=await Project.findAll();
        if (project) {
            
            res.send(project);

        }
        
    } catch (error) {

        res.send(error);

    }
});

router.get('/getid/:id',async(req,res)=>{
  try {
     const id = req.params.id;
      const project=await Project.findByPk(id);
      if (project) {

        console.log(id)
          
          res.send(project);

      }
      
  } catch (error) {

      res.send({error:error.message})

  }
});

//coounting of data
router.get('/count', (req, res) => {
  Project.findAndCountAll({})
.then(result => {
  res.json(result.count);
});
});




router.post('/addproject',

body('clientemail').isEmail(),
body('projectname').isLength({min : 1}),
body('clientname').isLength({min : 1}),
body('startdate').isDate(),
body('enddate').isDate(),

// body('check').isIn(['blue','white']),


async(req,res)=>{

  const errors = validationResult(req);
  if(!errors.isEmpty()){
    return res.status(400).json({errors:errors.array()});
  }

  

  try {

    const {clientname,projectname,clientemail,startdate,enddate,status,billing}=req.body;
    const projectAlreadyExists=await Project.findOne({where:{Project_Name:projectname}});

    if (!projectAlreadyExists) {

        await Project.create({
            Client_Name:clientname,
            Project_Name:projectname,
            Client_email:clientemail,
            Start_Date:startdate,
            End_Date:enddate,
            Project_Status:status,
            Billing_Status:billing,
        });
        res.json("success")
        
    }

      
  } catch (error) {

    res.send(error);
      
  }
});

router.put('/update/:id', async (req, res) => {
  try {
      const id = req.params.id;
      // console.log(id);
      // res.send(id);
      const { clientname,projectname,clientemail,startdate,enddate } = req.body;
      const user = await Project.findByPk(id);
      if(user){
        //res.send(id);
          await Project.update({
            Client_Name:clientname,
            Project_Name:projectname,
            Client_email:clientemail,
            Start_Date:startdate,
            End_Date:enddate,
            
         });
         res.send("success");
        } else {
          res.send("user not there");

      }
    } catch (error) {
      res.send({error:error.message})
    }
    });

    router.get('/:id', async (req, res) => {
      try {
          
          const id = req.params.id;
          let data = []
          let vals = {}
          const update = await Project.findByPk(id);
          console.log(update)
          if (update) {
              data.push(update)
              vals.data = data
              res.send(data);
          } else {
              res.send("no data");
          }
  
      } catch (error) {
          res.send({error:error.message});
      }
  });


router.delete('/deleteproject/:id', async (req, res) => {
  try {
       const id = req.params.id;
      const deleteProject = await Project.findByPk(id);
      deleteProject.destroy();
      //res.status(200).json(deleteProject);
  } catch (error) {
      res.send({error:error.message})
  }
});


module.exports=router;