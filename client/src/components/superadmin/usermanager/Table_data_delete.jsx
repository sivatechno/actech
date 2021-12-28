import React from 'react'
import './Table_data_delete.scss'
import axios from 'axios'
import { Link, useNavigate} from 'react-router-dom';
import {useState,useEffect } from 'react';
import config from '../../config/config'


function Table_data_delete({closeDeletePopup}) {
    const [listOfProject,setUser] = useState([])

    const apiURL = config.API_URL;

    let history = useNavigate();

    const deleteProject = (id, e) => {
          //alert(id)
        console.log(id);
        axios.delete(`${apiURL}/project/deleteproject/${id}`).then((response) => {
             response.send("success");
            history.push("/viewproject")
        });
        
    };
    // alert(listOfProject)
    
    // useEffect(()=>{
    //     fetch(`http://localhost:5000/project/deleteproject`).then((result)=>{
    //         result.json("success").then((resp)=>{
    //             setUser(resp)
    //             history.push("/viewmentors")
    //         })
    //     })
    // },[])
    // function deleteProject(id){
    //     alert(id)
    // }


    return (
        <div>
            <div className='delete_popup_overall'>
             <div className='delete_popup_head'>
                 <p className='delete_popup_header'>Are You Sure Want To Delete ?</p>
             </div>
             <div className='delete_popup_buttons'>
                
                 <button className='delete_calcel_btn'onClick={()=>closeDeletePopup(false)}>Cancel</button>
                
                 
                        
                        <Link to={'/'}>
                        <button className='delete_btn' onClick={(e) => deleteProject(e)}>Delete</button> 
                        </Link>
                    
             </div>
            </div>
        </div>
    )
}

export default Table_data_delete
