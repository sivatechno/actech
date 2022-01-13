import React from 'react'
import {useEffect, useState } from 'react'
import axios from 'axios';
import * as AiIcons from 'react-icons/all'
import './Projectview.scss'


function Associateview({CloseModal}) {

    const [listOfAssociateProfiles, setListOfAssociateProfiles] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/associateprofile/viewassociateprofile").then((response) => {
            setListOfAssociateProfiles(response.data);
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
                        <th>Name</th>
                        <th>Email</th>
                        <th>Highest Qualification</th>
                        <th>Primary Skill</th>
                        <th>Secondary Skill</th>
                        {/* <th>Actions</th> */}
                    </tr>
                    </thead>
                    
                   <tbody>

                   {listOfAssociateProfiles.length > 0 && listOfAssociateProfiles.map((value,key)=>{
                       return(

                       

                        <tr className="project_profile_table_body">
                                <td className="namecol">{value.firstname} {value.lastname}</td>
                                  <td className="emailcol">{value.email}</td>
                                   <td>{value.qualification}</td>
                                   <td>{value.primaryskill}</td>
                                   <td>{value.secondaryskill}</td>
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

export default Associateview
