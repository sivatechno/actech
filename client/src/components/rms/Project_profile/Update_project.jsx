import React,{ useEffect, useState } from 'react'
import './Update_project.scss'
import * as AiIcons from 'react-icons/all'
import { Link,useParams} from 'react-router-dom';
import axios from 'axios';
import config from '../../config/config'

function Update_project() {

    const apiURL = config.API_URL;

    const [profiledata, setProfileData] = useState([]);

    const {id}   = useParams();

    useEffect(() => {
        axios.get(`http://localhost:5000/project/getid/${id}`).then((response) => {
            setProfileData(response.data);
            console.log(response)
        });
    }, 
    []);
    console.log(profiledata)
    

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

                <div className='update_proj_inner_div'>
                 {/* {profiledata.map((values, key) => {
                return (  */}
                    <div className='update_proj_inner_body'>
                        <div className='update_proj_content'>
                        <p className="update_project_text">Client Name*</p><br />
                        <div className="update_project_field_contain">
                        <div className="update_project_feild">
                            <AiIcons.FaRegUserCircle className="update_proj_icons"/>
                            <input type="text" className="update_proj_textfield" placeholder="Client Name" required Value={"Admin"}/>
                        </div>
                        </div>
                        </div>
                   
                        <div className='update_proj_content'>
                        <p className="update_project_text">Project Name*</p><br />
                        <div className="update_project_field_contain">
                        <div className="update_project_feild">
                            <AiIcons.AiOutlineFundProjectionScreen className="update_proj_icons"/>
                            <input type="text" className="update_proj_textfield" placeholder="Project Name" required Value={"Proj A"}  />
                        </div>
                        </div>
                        </div>
                     </div>
                    {/* )
                    })}     */}

                    <div className='update_proj_inner_body'>
                        <div className='update_proj_content'>
                        <p className="update_project_text">Start Date*</p><br />
                        <div className="update_project_field_contain">
                        <div className="update_project_feild">
                            <input type="text" className="update_proj_textfield"  Value={"01-02-2022"} placeholder='dd-mm-yyyy'  />
                        </div>
                        </div>
                        </div>
                   
                        <div className='update_proj_content'>
                        <p className="update_project_text">End Date*</p><br />
                        <div className="update_project_field_contain">
                        <div className="update_project_feild">
                            <input type="text" className="update_proj_textfield"  required  Value={"05-06-2022"} placeholder='dd-mm-yyyy'  />
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
                            <input type="email" className="update_proj_textfield" placeholder="Client E-Mail" required Value={"admin@gmail.com"}  />
                        </div>
                        </div>
                        </div>
                   
                        <div className="update_project_inner_radio_body">
                            <div className='update_proj_content'>
                                <p className="update_project_text">Project Status</p>
                                <div className='update_project_bill_radio_btn'>
                                     <input type="radio" value="status" name='status'  /> <p>Enable</p>
                                    <input type="radio" value="status" name='status' /> <p>Disable</p>
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

                <div className='update_proj_button_div'>
                    <div className="update_proj_button_inner_div">
                        <button className="update_btn">Update</button>
                    </div>
                </div>
            </div>
               
        </div>
    )
}

export default Update_project
