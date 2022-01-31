import React from 'react'
import {useEffect, useState } from 'react'
import axios from 'axios';
import './Projectview.scss';
import * as AiIcons from 'react-icons/all'


function Projectview({CloseModal}) {

    const [listOfProject, setListOfProject] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/project/viewproject").then((response) => {
            setListOfProject(response.data);
            // console.log(response.data);
        });
    }, []);

    return (
        <div>

            <div className="project_container">
                <AiIcons.CgClose className="close_icon" onClick={()=>CloseModal(false)} />
                <table  className="project_profile_table_container">
                    <thead>           
                        <tr className="project_profile_row">
                            <th className='project_row_data'>Client Name</th>
                            <th className='project_row_data'>Proj Name</th>
                            <th className='project_row_data'>Start Date</th>
                            <th className='project_row_data'>End Date</th>
                            {/* <th>Actions</th> */}
                        </tr>
                    </thead>                   
                   <tbody>

                   {listOfProject&&listOfProject.map((value,key)=>{
                       return(

                       

                        <tr className="project_profile_body_row">
                        <td className='project_profile_body_row_data'>{value.Client_Name}</td>
                        <td className='project_profile_body_row_data'>{value.Project_Name}</td>
                        <td className='project_profile_body_row_data'>{value.Start_Date}</td>
                        <td className='project_profile_body_row_data'>{value.End_Date}</td>
                        {/* <td className="proj_table_icons"><AiIcons.MdEdit className="prof_edit_icon" onClick={()=>{EditpopupCome(true);}}/> <AiIcons.FaTrash className="prof_tash_icon" onClick={()=>{Deletepopupcome(true);}}/></td> */}
                    </tr>
                    
                    
                    
                   

                       )
                   })}
                   </tbody>                                                     
             </table>
            
        </div>
        </div>
            
        
    )
}

export default Projectview
