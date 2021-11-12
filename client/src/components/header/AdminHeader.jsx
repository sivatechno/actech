import React from 'react'
import * as AiIcons from 'react-icons/all';
import './AdminHeader.scss';

export default function AdminHeader() {
    return (
        
        <div className="container">
            <div className="inner_container">
                    <h1>STAFF ADDING</h1>
                    <div className="box1">
         <div className="name">
             <p1>USERNAME*</p1>
             <div className="ph1">
                <AiIcons.AiOutlineUser className="user"/> <input className="us" type="text" placeholder="" required />
             </div>
         </div>
         <div className="email">
             <p1>E-MAIL*</p1>
             <div className="ph2">
                <AiIcons.AiOutlineUser className="mail"/> <input className="em" type="text" placeholder="" required />
             </div>
         </div>
         </div>

         </div>
        </div>
            
    )
}