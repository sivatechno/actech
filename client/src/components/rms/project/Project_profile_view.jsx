import React from 'react'
import './Project_profile_view.scss'
import * as AiIcons from 'react-icons/all'
import Project_add from './Project_add'
import Delete from './Table_data_delete'
import Edit from './Edit_project'
import {useEffect, useState } from 'react'
import axios from 'axios';
import config from '../../config/config'



 function Project_profile_view() {
const apiURL = config.API_URL;
    const [listOfProject, setListOfProject] = useState([]);

    useEffect(() => {
        axios.get(`${apiURL}/project/viewproject`).then((response) => {
            setListOfProject(response.data);
            // console.log(response.data);
        });
    }, []);

    const [popup,popupcome] = useState(false)
    const [Deletepopup,Deletepopupcome] = useState(false)
    const [Editpopup,EditpopupCome] = useState(false)
    return (
           <div>
               <div className="project_profile_top">
                   <p className="project_profile_headind_text">PROJECT_PROFILE_VIEW</p>
                   <button className="add_proj_btn"  onClick={()=>{popupcome(true);}}>ADD PROJ</button>
               </div>
               <div>
            <div className="project_profile_table_container">
                <table  className="project_profile_table">
                    <tr className="project_profile_table_head">
                        <th>Client_Name</th>
                        <th>Proj_Name</th>
                        <th>Start_Date</th>
                        <th>End_Date</th>
                        <th>Actions</th>
                    </tr>

                   {listOfProject&&listOfProject.map((value,key)=>{
                       return(

                        <tr className="project_profile_table_body">
                        <td>{value.Client_Name}</td>
                        <td>{value.Project_Name}</td>
                        <td>{value.Start_Date}</td>
                        <td >{value.End_Date}</td>
                        <td className="proj_table_icons"><AiIcons.MdEdit className="prof_edit_icon" onClick={()=>{EditpopupCome(true);}}/> <AiIcons.FaTrash className="prof_tash_icon" onClick={()=>{Deletepopupcome(true);}}/></td>
                    </tr>

                       )
                   })}

                   
                  
                        
                
                    
             </table>
            
        </div>
        </div>
        {popup &&<Project_add closeModel={popupcome}/>}
        {Deletepopup &&<Delete closeDeletePopup={Deletepopupcome}/>}
        {Editpopup &&<Edit Editclosepopup={EditpopupCome}/>}
        </div>
        
    )
};
   export default Project_profile_view;
