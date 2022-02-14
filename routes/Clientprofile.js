const express = require('express');
const router = express.Router();
const {Clientprofile} =require('../models');
const {body , validationResult}=require('express-validator');



router.get('/viewclient',async(req,res)=>{
    try{
        
       const clientprofile=await Clientprofile.findAll();
       if (clientprofile){
           res.send(clientprofile);
       }

    } catch (error) {
        res.send(error);
    }

});


router.get('/getid/:id',async(req,res)=>{
    try{
        const id = req.paramas.id;
        const Clientprofile=await Clientprofile.findBypk(id);
        if(Clientprofile){
            console.log(id)

            res.send(Clientprofile)
        }
    }catch (error) {
        res.send({error:error.message})
    }
});

router.get('/count', (req,res)=> {
  Clientprofile.findAndCountAll({})
  .then(result =>{
      res.json(result.count);
  });
});



router.post('/addclient',async(req,res)=>{

    
   

    try{

        const{clientname,companyname,clientemail,contact,country,state,city,address,startdate,enddate,pincode}=req.body;
        //const clientprofileAlreadyExists=await Clientprofile.findOne({where:{Client_Name:clientname}});

        //if (!clientprofileAlreadyExists) {

            await Clientprofile.create({
                  Client_Name:clientname,
                  Company_Name:companyname,
                  Client_email:clientemail,
                  Contact:contact,
                  Country:country,
                  state:state,
                  city:city,
                  Address:address,
                  Start_Date:startdate,
                  End_Date:enddate,
                  Pin_Code:pincode,

            });
            res.json("success")
       // }
    }catch (error) {
        res.send({error:error.message});
    }
});

router.put('/update/:id', async (req,res)=>{
    try{
        const id=req.paramas.id;
        const { clientname,companyname,clientemail,country,state,city,address,startdate,enddate,pincode}=req.body;
        const user = await Clientprofile.findBypk(id);
        if(user){

            await Clientprofile.update({
                Client_Name:clientname,
                Company_Name:companyname,
                Client_email:clientemail,
                Contact:contact,
                Country:country,
                state:state,
                city:city,
                Address:address,
                Start_Date:startdate,
                End_Date:enddate,
                Pin_Code:pincode,
              
            });
            res.send("success")
        }else{
            res.send("user not ther");
        }
    }catch (error) {
        res.send({error:error.message})
    }
});


router.get('/:id', async (req, res) => {
    try {
        
        const id = req.params.id;
        let data = []
        let vals = {}
        const update = await Clientprofile.findByPk(id);
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


router.delete('/deleteclientProfile/:id', async (req, res) => {
try {
     const id = req.params.id;
    const delectclientprofile = await Clientprofile.findByPk(id);
    delectclientprofile.destroy();
    //res.status(200).json(deleteProject);
} catch (error) {
    res.send({error:error.message})
}
});


module.exports=router;