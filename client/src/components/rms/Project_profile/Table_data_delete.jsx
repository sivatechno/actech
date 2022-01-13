import React from 'react'
import './Table_data_delete.scss'
import axios from 'axios'
import { useNavigate,useParams} from 'react-router-dom';
import {useState,useEffect } from 'react';
//import { request } from 'express';
import config from '../../config/config'
function Table_data_delete({closeDeletePopup}) {
    const [listOfProject,setUser] = useState([])

    const apiURL = config.API_URL;

    let history = useNavigate();

    const deleteProject = (id,e) => {
          //alert(id)
        console.log(id);
        axios.delete(`http://localhost:5000/project/deleteproject/${id}`).then((res) => {
             //res.send("success");
            history.push("/viewproject")
        });
        
    };

    const {id}=useParams();

    useEffect(() => {
        axios.get(`http://localhost:5000/project/${id}`).then((response) => {
            setUser(response.data);
            //  console.log(response.data);
        });
    }, []);



    //alert(listOfProject)
    
    // useEffect(()=>{
    //     fetch(`http://localhost:5000/project/deleteproject`).then((result)=>{
    //         result.json("success").then((resp)=>{
    //             setUser(resp)
    //             history.push("/viewproject")
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
                
                 {/* {listOfProject&&listOfProject.map((values)=>{
                     return( */}
                        
                        <button className='delete_btn'>Delete</button> 
                        
                     {/* )
                 })} */}
                        
                       
                        
                    
             </div>
            </div>
        </div>
    )
}

export default Table_data_delete
