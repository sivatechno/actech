import React from 'react'
import {useEffect, useState } from 'react'
import axios from 'axios';
import * as AiIcons from 'react-icons/all'
import './Associateview.scss'


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
            <div className="associate_container">
                <AiIcons.CgClose className="close_icon" onClick={()=>CloseModal(false)} />
                <table  className="associate_profile_table_container">
                    <thead>                  
                        <tr className='associate_profile_row'>
                            <th className="associate_row_data">Name</th>
                            <th className="associate_row_data">Email</th>
                            <th  className="associate_row_data">Highest Qualification</th>
                            <th  className="associate_row_data">Primary Skill</th>
                            <th  className="associate_row_data">Secondary Skill</th>
                            {/* <th>Actions</th> */}
                        </tr>
                    </thead>                    
                   <tbody>

                   {listOfAssociateProfiles.length > 0 && listOfAssociateProfiles.map((value,key)=>{
                       return(

                        <tr className="associate_profile_body_row">
                            <td className='associate_profile_body_row_data'>{value.firstname} {value.lastname}</td>
                            <td >{value.email}</td>
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
