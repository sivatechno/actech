import React from 'react'
import * as AiIcons from 'react-icons/all'
import './Edit_project.scss'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react'
import config from '../../config/config'


function Edit_project({ Editclosepopup }) {
    const apiURL = config.API_URL;
    const [profiledata, setProfileData] = useState([]);

    const [clientname,setClientName] = useState("");

    const [projectname,setProjectName] = useState("");
  
    const [clientemail,setClientEmail] = useState("");
  
    const [startdate,setStartDate] = useState("");
  
    const [enddate,setEndDate] = useState("");

    const [newProfileData, setNewProfileData] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:5000/project/${id}`).then((response) => {
            setProfileData(response.data);
        })
    }, []);
    // const update = (e) => {
    //     axios.put(`http://localhost:5000/project/update/${id}`,
    //         {
    //           clientname:clientname,
    //           projectname:projectname,
    //           clientemail:clientemail,
    //           startdate:startdate,
    //           enddate:enddate
    //         }).then((response) => {
    //             setNewProfileData(response.data);
    //         });
    // };

    return(
           
        <div>
             {/* {profiledata&& profiledata.map((values, key) => {
                return ( */}
            <div className='editprof_overall_div'>
        <div className="edit_project_overall"> 
            <div className="edit_project_inner">
                <div className="edit_project_head">
                <p className="edit_project_header">EDIT PROJECT</p>
                     < AiIcons.CgClose className="edit_close" onClick={()=>Editclosepopup(false)} />
                     </div>
                     <div>
                         
                 <div className="edit_project_inner_body">
                 <div className="edit_project_content" >
                          <p className="edit_project_text">Client_name*</p><br />
                          <div className="edit_project_field_contain">
                      <div className="edit_project_feild">
                          <i><AiIcons.FaRegUserCircle className="icons"/></i>
                          <input type="text" className="textfield" placeholder="Client_name" required name="clientname"  />
                    
                      </div>
                      </div>
                      
                      </div>
                      
                      <div className="edit_project_content" >
                          <p className="edit_project_text">Project_name*</p><br />
                          <div className="edit_project_field_contain">
                      <div className="edit_project_feild">
                          <i><AiIcons.AiOutlineFundProjectionScreen className="icons"/></i>
                          <input type="text" className="textfield" placeholder="Project_name" required name='projectname'  />
                      </div>
                      </div>
                     
                      </div>

                 </div>
                 
                 <div className="edit_project_inner_body">
                 <div className="edit_project_content" >
                         <label > <p className="edit_project_text">Start_Date*</p> </label><br />
                          <div className="edit_project_field_contain">
                      <div className="edit_project_feild">
                          <input type="date" className="textfield" placeholder='enter date' required name='startdate'  />
                      </div>
                      </div>
    
                      </div>
                      <div className="edit_project_content" >
                         <label > <p className="edit_project_text">End_Date*</p></label><br />
                          <div className="edit_project_field_contain">
                      <div className="edit_project_feild">
                          <input type="date" className="textfield" placeholder='enter date' required  name='enddate'  />
                      </div>
                      </div>
        
                      </div>

                 </div>

                 <div className="edit_project_inner_body">
                 <div className="edit_project_content" >
                          <p className="edit_project_text">Client_E-Mail*</p><br />
                          <div className="edit_project_field_contain">
                      <div className="edit_project_feild">
                          <i><AiIcons.SiGmail className="icons"/></i>
                          <input type="email" className="textfield" placeholder="E-Mail" required name='clientemail'  />
                      </div>
                      </div>
                      
                      </div>
                      <div className='proj_add_checkbox_contain'>
                     <p className="add_project_checkbox_text">Project_Status</p>
                        <input type="checkbox" />
                        <label htmlFor="Enable">Enable</label>
                     </div>

                 </div>

                 <div className="edit_project_buttons">
                     <button className="cancel_btn" onClick={()=>Editclosepopup(false)}>Cancel</button>
                    <button className="confirm_btn"  >Confirm</button>
                 </div>
                         
                

                     </div>
                
            </div>
            
            
        </div>
        </div>
                {/* )
             })} */}
 
        </div>

    )

    

}

export default Edit_project
