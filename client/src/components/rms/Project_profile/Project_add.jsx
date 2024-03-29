import React from 'react'
import './Project_add.scss'
import * as AiIcons from 'react-icons/all'
import {useState} from 'react';
import Validate from './Validate';
import axios from 'axios';
import Modal from 'react-modal'
import Add_proj_popup from './Project_Popup/Add_project_popup';
import config from '../../config/config'
import {toast} from 'react-toastify'
import { Link} from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()


const customStyles = {
    content: {
        top: '56%',
        left: '58%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        height:'83%',
        width:'60%',
        background:'transparent',
        border:'1px solid transparent',
        outline:'none',
        overflow:'hidden',

    },
};



    function  Project_add ({closeModel}) {
        const apiURL = config.API_URL;
        const[errors,setErrors]=useState({});

        const [clientname,setClientName] = useState("");

        const [projectname,setProjectName] = useState("");
      
        const [clientemail,setClientEmail] = useState("");
      
        const [startdate,setStartDate] = useState("");
      
        const [enddate,setEndDate] = useState("");

        const [status,setstatus] = useState("");

        const [billing,setbilling] = useState("");

       

        const addproject = (event) =>{

            event.preventDefault();
            setErrors(Validate(values));

                

            axios.post(`${apiURL}/project/addproject`,
            {
                
              clientname:clientname,
              projectname:projectname,
              clientemail:clientemail,
              startdate:startdate, 
              enddate:enddate,
              status:status,
              billing:billing,
            }).then((response) =>{ 
                //notify(true); 
                setpopup(true);  
            })

           
           
            
          }
      

        const [values,setValues]=useState({
            client_name:"",
            project_name:"",
            client_email:"",
            password:"",
            start_date:"",
            end_date:"",
            status:"",
            

        });

        
        // console.log(values);
          const handleChangeCapture = (event) =>{
              setValues({
                  ...values,
                  [event.target.name]: event.target.value,
              });
            //   console.log(values);
          };

          //const notify = ()=>{toast.success('Success',{position: toast.POSITION.TOP_CENTER})}

          const [popup,setpopup] = useState(false);
        
        

    return (
        <div>

                <Modal 
                    isOpen={popup}
                    style={customStyles}
                    contentLabel="Example Modal">
                   {<Add_proj_popup close={setpopup}/>}
                </Modal>
        
        <div className="add_project_overall"> 
                <div className="add_project_head">
                <Link to={'/Projectprofileview'}>
                    <AiIcons.HiArrowNarrowLeft className='add_project_header_back_icon'/>
                    </Link>
                <p className="add_project_header">ADD PROJECT</p>
                     </div>
                 <div className="add_project_inner_body">
                 <div className="add_project_content" >
                          <p className="add_project_text">Client Name*</p><br />
                          <div className="add_project_field_contain">
                      <div className="add_project_feild">
                          <i><AiIcons.FaRegUserCircle className="icons"/></i>
                          <input type="name" className="textfield" placeholder="Client Name" required name='clientname'  values={setValues.client_name} onChange={(e)=>{setClientName(e.target.value);}}   onChangeCapture={handleChangeCapture} autoFocus = {true}  />
                    
                      </div>
                      </div>
                      {errors.clientname && <p className='errormsg'>{errors.clientname}</p>}
                      </div>
                      
                      <div className="add_project_content" >
                          <p className="add_project_text">Project Name*</p><br />
                          <div className="add_project_field_contain">
                      <div className="add_project_feild">
                          <i><AiIcons.AiOutlineFundProjectionScreen className="icons"/></i>
                          <input type="name" className="textfield" placeholder="Project Name" required name='projectname' values={setValues.project_name} onChange={(e)=>{setProjectName(e.target.value);}} onChangeCapture={handleChangeCapture}  />
                      </div>
                      </div>
                      {errors.projectname && <p className='errormsg'>{errors.projectname}</p>}
                      </div>

                 </div>
                 
                 <div className="add_project_inner_body">
                 <div className="add_project_content" >
                         <label > <p className="add_project_text">Start Date*</p> </label><br />
                          <div className="add_project_field_contain">
                      <div className="add_project_feild">
                          {/* <i><AiIcons.FaUser className="icons"/></i> */}
                          <input type="date" className="textfield" placeholder='enter date' required name='startdate' values={setValues.start_date}  onChange={(e)=>{setStartDate(e.target.value);}} onChangeCapture={handleChangeCapture}   />
                      </div>
                      </div>
                      {errors.startdate && <p className='errormsg'>{errors.startdate}</p>}
                      </div>
                      <div className="add_project_content" >
                         <label > <p className="add_project_text">End Date*</p></label><br />
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
                          <p className="add_project_text">Client E-Mail*</p><br />
                          <div className="add_project_field_contain">
                      <div className="add_project_feild">
                          <i><AiIcons.SiGmail className="icons"/></i>
                          <input type="email" className="textfield" placeholder="E-Mail" required name='clientemail' values={setValues.client_email} onChange={(e)=>{setClientEmail(e.target.value)}} onChangeCapture={handleChangeCapture}  />
                      </div>
                      </div>
                      {errors.clientemail && <p className='errormsg'>{errors.clientemail}</p>}
                      </div>
                     <div className='proj_add_status_contain'>
                     <p className="add_project_status_text">Project Status *</p>
                     <div className='add_project_status_radio_btn'>
                         <input type="radio" value={status} name='status' checked={status == "Active"} onClick={()=>{setstatus("Active");}} /> <p className='add_project_radio_text'>Active</p>
                         <input type="radio" value={status} name='status'  checked={status == "In-Active"} onClick={()=>{setstatus("In-Active");}} /> <p className='add_project_radio_text'>In-Active</p>
                     </div>
                     
                     </div>
                    

                 </div>

                <div className="add_project_inner_body">
                <div className='proj_add_bill_contain'>
                     <p className="add_project_bill_text">Billing Status *</p>
                     <div className='add_project_bill_radio_btn'>
                         <input type="radio" value={billing} name='billing' checked={billing == "Billable"} onClick={()=>{setbilling("Billable");}} /> <p className='add_project_radio_text'>Billable</p>
                         <input type="radio" value={billing} name='billing' checked={billing == "Non-Billable"} onClick={()=>{setbilling("Non-Billable");}}/> <p className='add_project_radio_text'>Non-Billable</p>
                     </div>
                     </div>
                </div>

                 <div className="add_project_buttons">
                     <div className="cncl_bttn">
                     <Link to={'/Projectprofileview'}>
                     <button className="cancel_btn">Cancel</button>
                     </Link>
                     </div>
                     <div className="add_bttn">
                    <button className="add_btn" onClick={addproject} >AddProject</button>
                    </div>

                 </div>
                
            </div>
        
        </div>
    )
    };
    export default Project_add;