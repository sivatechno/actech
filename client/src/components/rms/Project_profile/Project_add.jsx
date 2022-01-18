import React from 'react'
import './Project_add.scss'
import * as AiIcons from 'react-icons/all'
import {useState} from 'react';
import Validate from './Validate';
import axios from 'axios';
import config from '../../config/config'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
toast.configure()
// import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from 'yup';

// const schema = yup.object().shape({
//     client_name:yup.string().required,
// });

// export default function Project_add() {
    function  Project_add ({closeModel}) {
        const apiURL = config.API_URL;
        const[errors,setErrors]=useState({});

        const [clientname,setClientName] = useState("");

        const [projectname,setProjectName] = useState("");
      
        const [clientemail,setClientEmail] = useState("");
      
        const [startdate,setStartDate] = useState("");
      
        const [enddate,setEndDate] = useState("");

        const [check,setcheck] = useState("");

        const addproject = (event) =>{

            event.preventDefault();
            setErrors(Validate(values));

                

            axios.post("http://localhost:5000/project/addproject",
            {
                
              clientname:clientname,
              projectname:projectname,
              clientemail:clientemail,
              startdate:startdate,
              enddate:enddate,
              checkbox:check,
            }).then((response) =>{ 
                notify(true); 
                //alert('hai')     
            })

           
           
            
          }
      

        const [values,setValues]=useState({
            client_name:"",
            project_name:"",
            client_email:"",
            password:"",
            start_date:"",
            end_date:"",
            

        });

        
        // console.log(values);
          const handleChangeCapture = (event) =>{
              setValues({
                  ...values,
                  [event.target.name]: event.target.value,
              });
            //   console.log(values);
          };

          const notify = ()=>{toast.success('Success',{position: toast.POSITION.BOTTOM_CENTER})}
        
        // const addproject=(event) =>{
        //     event.preventDefault();
        //     setErrors(Validate(values));
        // };

        // const {add , handleSubmit ,errors} =useForm({
        //     resolver:yupResolver(schema),
        // });
        // const message=('please')

        // const onSubmit=(data) => console.log(data);
        // console.log(errors);

    return (
        <div>
        <div className='addprof_overall_div'>
        <div className="add_project_overall"> 
            <div className="add_project_inner">
                <div className="add_project_head">
                <p className="add_project_header">ADD PROJECT</p>
                     < AiIcons.CgClose className="close" onClick={()=>closeModel(false)} />
                     </div>
                     <form>
                 <div className="add_project_inner_body">
                 <div className="add_project_content" >
                          <p className="add_project_text">Client_name*</p><br />
                          <div className="add_project_field_contain">
                      <div className="add_project_feild">
                          <i><AiIcons.FaRegUserCircle className="icons"/></i>
                          <input type="name" className="textfield" placeholder="Client_name" required name='clientname'  values={setValues.client_name} onChange={(e)=>{setClientName(e.target.value);}}   onChangeCapture={handleChangeCapture}  />
                    
                      </div>
                      </div>
                      {/* <p role="alert">haai</p> */}
                      {/* <p>{errors.message}</p> */}
                      {errors.clientname && <p className='errormsg'>{errors.clientname}</p>}
                      </div>
                      
                      <div className="add_project_content" >
                          <p className="add_project_text">Project_name*</p><br />
                          <div className="add_project_field_contain">
                      <div className="add_project_feild">
                          <i><AiIcons.AiOutlineFundProjectionScreen className="icons"/></i>
                          <input type="name" className="textfield" placeholder="Project_name" required name='projectname' values={setValues.project_name} onChange={(e)=>{setProjectName(e.target.value);}} onChangeCapture={handleChangeCapture}  />
                      </div>
                      </div>
                      {errors.projectname && <p className='errormsg'>{errors.projectname}</p>}
                      </div>

                 </div>
                 
                 <div className="add_project_inner_body">
                 <div className="add_project_content" >
                         <label > <p className="add_project_text">Start_Date*</p> </label><br />
                          <div className="add_project_field_contain">
                      <div className="add_project_feild">
                          {/* <i><AiIcons.FaUser className="icons"/></i> */}
                          <input type="date" className="textfield" placeholder='enter date' required name='startdate' values={setValues.start_date}  onChange={(e)=>{setStartDate(e.target.value);}} onChangeCapture={handleChangeCapture}   />
                      </div>
                      </div>
                      {errors.startdate && <p className='errormsg'>{errors.startdate}</p>}
                      </div>
                      <div className="add_project_content" >
                         <label > <p className="add_project_text">End_Date*</p></label><br />
                          <div className="add_project_field_contain">
                      <div className="add_project_feild">
                          {/* <i><AiIcons.FaUser className="icons"/></i> */}
                          <input type="date" className="textfield" placeholder='enter date' required  name='enddate' values={setValues.end_date} onChange={(e)=>{setEndDate(e.target.value);}} onChangeCapture={handleChangeCapture}  />
                      </div>
                      </div>
                      {errors.enddate && <p className='errormsg'>{errors.enddate}</p>}
                      </div>
                </div>
                <div className="add_project_inner_body">
                 <div className="add_project_content" >
                          <p className="add_project_text">Client_E-Mail*</p><br />
                          <div className="add_project_field_contain">
                      <div className="add_project_feild">
                          <i><AiIcons.SiGmail className="icons"/></i>
                          <input type="email" className="textfield" placeholder="E-Mail" required name='clientemail' values={setValues.client_email} onChange={(e)=>{setClientEmail(e.target.value)}} onChangeCapture={handleChangeCapture}  />
                      </div>
                      </div>
                      {errors.clientemail && <p className='errormsg'>{errors.clientemail}</p>}
                      </div>
                     <div className='proj_add_checkbox_contain'>
                     <p className="add_project_checkbox_text">Project_Status</p>
                        <input type="checkbox" />
                        <label htmlFor="Enable">Enable</label>
                     </div>
                    

                 </div>
                 <div className="add_project_buttons">
                     <div className="cncl_bttn">
                     <button className="cancel_btn" onClick={()=>closeModel(false)}>Cancel</button>
                     </div>
                     <div className="add_bttn">
                    <button className="add_btn" onClick={addproject}  >Add_Project</button>
                    </div>

                 </div>
                 </form>
                
            </div>
        </div>
        </div>
        </div>
    )
    };
    export default Project_add;
// }