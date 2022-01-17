import React,{ useEffect, useState } from 'react'
import './Update_project.scss'
import * as AiIcons from 'react-icons/all'
import { Link,useParams} from 'react-router-dom';
import axios from 'axios';

function Update_project() {

    const [profiledata, setProfileData] = useState([]);

    const { id }  = useParams();

    useEffect(() => {
        axios.get(`http://localhost:5000/project/getid/${id}`).then((response) => {
            setProfileData(response.data);
        });
    }, 
    console.log(id),
    []);
    // useEffect(() => {
    //     axios.get("http://localhost:5000/project/viewproject").then((response) => {
    //         setProfileData(response.data);
    //         // console.log(response.data);
    //     });
    // }, []);

    return (
        <div>

                

            <div className="update_proj_over_all">
                <div className='update_proj_head_div'>
                    <div className='update_proj_head_inner_div'>
                        <Link to={'/Projectprofileview'}>
                            <AiIcons.MdOutlineKeyboardBackspace className="update_proj_head_icon"/>
                        </Link>
                        <p className='update_proj_head_text'>Update_project</p>
                    </div>
                </div>

                <div className='update_proj_inner_div'>
                {/* {profiledata.length > 0 && profiledata.map((values, key) => {
                return ( */}
                    <div className='update_proj_inner_body'>
                        <div className='update_proj_content'>
                        <p className="update_project_text">Client_name*</p><br />
                        <div className="update_project_field_contain">
                        <div className="update_project_feild">
                            <AiIcons.FaRegUserCircle className="update_proj_icons"/>
                            <input type="text" className="update_proj_textfield" placeholder="Client_name" required  />
                        </div>
                        </div>
                        </div>
                   
                        <div className='update_proj_content'>
                        <p className="update_project_text">Project_name*</p><br />
                        <div className="update_project_field_contain">
                        <div className="update_project_feild">
                            <AiIcons.AiOutlineFundProjectionScreen className="update_proj_icons"/>
                            <input type="text" className="update_proj_textfield" placeholder="Project_name" required   />
                        </div>
                        </div>
                        </div>
                     </div>
                 {/* )
                })}    */}

                    <div className='update_proj_inner_body'>
                        <div className='update_proj_content'>
                        <p className="update_project_text">Start_Date*</p><br />
                        <div className="update_project_field_contain">
                        <div className="update_project_feild">
                            <input type="date" className="update_proj_textfield" placeholder="Client_name" required   />
                        </div>
                        </div>
                        </div>
                   
                        <div className='update_proj_content'>
                        <p className="update_project_text">End_Date*</p><br />
                        <div className="update_project_field_contain">
                        <div className="update_project_feild">
                            <input type="date" className="update_proj_textfield" placeholder="Project_name" required   />
                        </div>
                        </div>
                        </div>
                    </div>

                    <div className='update_proj_inner_body'>
                        <div className='update_proj_content'>
                        <p className="update_project_text">Client_Email*</p><br />
                        <div className="update_project_field_contain">
                        <div className="update_project_feild">
                            <AiIcons.SiGmail className="update_proj_icons"/>  
                            <input type="email" className="update_proj_textfield" placeholder="Client_Email" required   />
                        </div>
                        </div>
                        </div>
                   
                        <div className='update_proj_checkbox_content'>
                            <p className="update_project_checkbox_text">Project_Status*</p><br />
                            <input type="checkbox" className="update_proj_textfield" required   />
                            <label>Enable</label>
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
