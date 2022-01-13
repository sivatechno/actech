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

            <div className="projectprofiletablecontainer">
            <AiIcons.CgClose className="close_icon" onClick={()=>CloseModal(false)} />

                <table  className="project_profile_table">
                    <thead>
                    
                    
                    <tr className="project_profile_table_head">
                        <th>Client_Name</th>
                        <th>Proj_Name</th>
                        <th>Start_Date</th>
                        <th>End_Date</th>
                        {/* <th>Actions</th> */}
                    </tr>
                    </thead>
                    
                   <tbody>

                   {listOfProject&&listOfProject.map((value,key)=>{
                       return(

                       

                        <tr className="project_profile_table_body">
                        <td>{value.Client_Name}</td>
                        <td>{value.Project_Name}</td>
                        <td>{value.Start_Date}</td>
                        <td >{value.End_Date}</td>
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
