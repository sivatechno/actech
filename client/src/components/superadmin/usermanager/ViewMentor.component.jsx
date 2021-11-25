import React from 'react'
import './ViewMentor.component.scss'
import * as AiIcons from 'react-icons/all';
import axios from 'axios';
import { useEffect , useState } from 'react';


function ViewMentor() {
    const [listofMentors,setListOfMentors] = useState([]);

    useEffect(() =>{
        axios.get("http://localhost:5000/mentors").then((response) =>{
            setListOfMentors(response.data);
        });
    });
    return (
        <div className="viewmentor_container">
            <div className="view_header">
                <div className="view_title">
                    <h3>View Mentor</h3>
                </div>
                <div className="add_staff">
                    <button className="button_click">Add Mentor</button>
                </div>
            </div>
            {listofMentors.map((value,key) =>{
                               return(
                                   <div>
                                       <div className="table_container">                
                                            <table cellSpacing="10px" >
                                                <tr className="table_row">
                                                    <th>Name</th>
                                                    <th>Email</th>
                                                    <th>Access Level</th>
                                                    <th>Contact Number</th>
                                                    <th>Actions</th>
                                                </tr>
                                                <tr>
                                                    <td>{value.first_name} {value.last_name}</td>
                                                    <td>{value.email}</td>
                                                    <td>{value.role}</td>
                                                    <td>{value.role}</td>
                                                    <td>
                                                        <div className="table_icons"><AiIcons.GrEdit className="icons_align"/></div>
                                                        <div className="table_icons"><AiIcons.MdDelete className="icons_align_delete"/></div>
                                                        <div className="table_icons"><AiIcons.BsFillEyeSlashFill className="icons_align"/></div>
                                                    </td>
                                                </tr>

                                            </table>
                                        </div>
                                   </div>
                                   
                               )
                           })}
            
            
        </div>
    )
}

export default ViewMentor;
