import React from 'react'
import './Viewstaffmentor.scss'
import * as AiIcons from 'react-icons/all';

function Viewstaffmentor() {
    return (
        <div className="parent_container">
            <div className="view_header">
                <div className="view_title">
                    <h3>View Mentor</h3>
                </div>
                <div className="add_staff">
                    <button className="button_click">Add Mentor</button>
                </div>
            </div>
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
                           <td>manoj</td>
                           <td>manoj@123gmail.commm</td>
                           <td>role</td>
                           <td>9876543210</td>
                           <td>
                               <div className="table_icons"><AiIcons.GrEdit className="icons_align"/></div>
                               <div className="table_icons"><AiIcons.MdDelete className="icons_align_delete"/></div>
                               <div className="table_icons"><AiIcons.BsFillEyeSlashFill className="icons_align"/></div>
                           </td>
                       </tr>
                       <tr>
                           <td>ragav</td>
                           <td>ragav@123gmail.commm</td>
                           <td>power ranges</td>
                           <td>789643201</td>
                           <td>
                               <div className="table_icons"><AiIcons.GrEdit className="icons_align"/></div>
                               <div className="table_icons"><AiIcons.MdDelete className="icons_align_delete"/></div>
                               <div className="table_icons"><AiIcons.BsFillEyeSlashFill className="icons_align"/></div>
                           </td>
                       </tr>
                       <tr>
                           <td>santo</td>
                           <td>santo@123gmail.commm</td>
                           <td>shinchan</td>
                           <td>6369125054</td>
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
}

export default Viewstaffmentor
