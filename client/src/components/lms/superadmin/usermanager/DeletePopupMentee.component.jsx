import React from 'react'
// import axios from 'axios';
// import { Link, useNavigate } from 'react-router-dom';
// import { useEffect, useState } from 'react';
import './DeletePopupMentee.component.scss'
import * as  AiIcons from 'react-icons/all';
export default function DeleteMentee({closeModule}){
    // let history = useNavigate();
    // const deleteMentee = (id, e) => {
    //     console.log(id);
    //     axios.delete(`http://localhost:5000/mentee/delete/${id}`).then((response) => {
     //   response.json("deleted successfully");
      //  history.push("/viewmentee");
    //     });
    // };
    // const [listOfMentees, setListOfMentees] = useState([]);
    //{listofMentees.length > 0 && listofMentees.map((value, key) => {
    return(
        <div>
            <div className="container1">
                <div className="header">
                    <div className="closeicon"><AiIcons.GrClose  className="close" onClick={()=>closeModule(false)} /></div>
                </div>
                <div className="content-box">
                    <h3>Are you sure want to delete?</h3>
                </div>
                <div className="button-content">
                    <button className="cancel-btn" onClick={()=>closeModule(false)}>Cancel</button>
                    <button className="delete-btn"  >Delete</button>
                </div>
            </div>
        </div>
    )
// })}
}
