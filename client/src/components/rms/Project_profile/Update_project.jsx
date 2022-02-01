import React,{ useEffect, useState } from 'react'
import './Update_project.scss'
import * as AiIcons from 'react-icons/all'
import { Link} from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import config from '../../config/config'
import './Project_profile_view'


export default  function Update_project(props) {

    

    const apiURL = config.API_URL;

    const [data,setProfileData] = useState([]);

  const { id }=useParams();
 // const {id} = props.to
  //console.log(props.id)
    

    useEffect(() => {
        axios.get(`http://localhost:5000/project/${id}`).then((response) => {
            setProfileData(response.data);
           // console.log(response)
        });
    }, 
    []);
    console.log(data)
    

    return (
        <div>

                

            <div className="update_proj_over_all">
                <div className='update_proj_head_div'>
                    <div className='update_proj_head_inner_div'>
                        <Link to={'/Projectprofileview'}>
                            <AiIcons.MdOutlineKeyboardBackspace className="update_proj_head_icon"/>
                        </Link>
                        <p className='update_proj_head_text'>Update project</p>
                    </div>
                </div>
                {data.map((values, key) => {
                return (
                <div className='update_proj_inner_div'>
                   
                    <div className='update_proj_inner_body'>
                        <div className='update_proj_content'>
                        <p className="update_project_text">Client Name*</p><br />
                        <div className="update_project_field_contain">
                        <div className="update_project_feild">
                            <AiIcons.FaRegUserCircle className="update_proj_icons"/>
                            <input type="text" className="update_proj_textfield" placeholder="Client Name" required Value={values.Client_Name}/>
                        </div>
                        </div>
                        </div>
                   
                        <div className='update_proj_content'>
                        <p className="update_project_text">Project Name*</p><br />
                        <div className="update_project_field_contain">
                        <div className="update_project_feild">
                            <AiIcons.AiOutlineFundProjectionScreen className="update_proj_icons"/>
                            <input type="text" className="update_proj_textfield" placeholder="Project Name" required Value={values.Project_Name}  />
                        </div>
                        </div>
                        </div>
                     </div>
                          

                    <div className='update_proj_inner_body'>
                        <div className='update_proj_content'>
                        <p className="update_project_text">Start Date*</p><br />
                        <div className="update_project_field_contain">
                        <div className="update_project_feild">
                            <input type="date" className="update_proj_textfield"  Value={values.Start_Date} placeholder='dd-mm-yyyy'  />
                        </div>
                        </div>
                        </div>
                   
                        <div className='update_proj_content'>
                        <p className="update_project_text">End Date*</p><br />
                        <div className="update_project_field_contain">
                        <div className="update_project_feild">
                            <input type="date" className="update_proj_textfield"  required  Value={values.End_Date} placeholder='dd-mm-yyyy'  />
                        </div>
                        </div>
                        </div>
                    </div>

                    <div className='update_proj_inner_body'>
                        <div className='update_proj_content'>
                        <p className="update_project_text">Client Email*</p><br />
                        <div className="update_project_field_contain">
                        <div className="update_project_feild">
                            <AiIcons.SiGmail className="update_proj_icons"/>  
                            <input type="email" className="update_proj_textfield" placeholder="Client E-Mail" required Value={values.Client_email}  />
                        </div>
                        </div>
                        </div>
                   
                        <div className="update_project_inner_radio_body">
                            <div className='update_proj_content'>
                                <p className="update_project_text">Project Status</p>
                                <div className='update_project_bill_radio_btn'>
                                     <input type="radio" value="status" name='status' /> <p>Enable</p>
                                    <input type="radio" value="status" name='status'  /> <p>Disable</p>
                                </div>
                            </div>
                         </div>
                    </div>

                    <div className='update_proj_inner_body'>
                    <div className="update_project_inner_radio_body">
                            <div className='update_proj_content'>
                                <p className="update_project_text">Billing Status</p>
                                <div className='update_project_bill_radio_btn'>
                                     <input type="radio" /> <p>Billable</p>
                                    <input type="radio" /> <p>Non-Billable</p>
                                </div>
                            </div>
                         </div>
                    </div>
                    
                   

                </div>
                 )
                })}

                <div className='update_proj_button_div'>
                    <div className="update_proj_button_inner_div">
                        <button className="update_btn">Update</button>
                    </div>
                </div>
            </div>
               
        </div>
    )
}

