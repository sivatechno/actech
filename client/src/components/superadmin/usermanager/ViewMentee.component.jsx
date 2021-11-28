import React from 'react'
import * as AiIcons from 'react-icons/all';
import * as FiIcons from 'react-icons/all';
import "./ViewMentee.component.scss";
;
function ViewMentee() {
    return (
        <div className="parent-contain">
           <div className="head">
               <div className="viewmentee">
                   <h3>View Mentee</h3>
               </div>
              <div className="addmentee">
                  <button className="btn-clck">
                  <span className="button--text">Add Mentee</span> 
                    {/* <span className="button--icon"><FiIcons.FaPlusSquare/></span> */}
                  </button>
              </div>
           </div>
           <div className="tab-contain">
               <table cellSpacing="10px">
                   <tr className="table-row">
                       <th> Name</th>
                       <th> Email</th>
                       <th>Access Level</th>
                       <th>Contact Number</th>
                       <th>Actions</th>

                   </tr>
                   <tr>
                       <td>
                           <div className="tab-icon1"><AiIcons.GrEdit className="icon-edit"/></div>
                           <div className="tab-icon1"><AiIcons.MdDelete className="icon-delete"/></div>
                           <div className="tab-icon1"><AiIcons.BsFillEyeSlashFill className="icon-eye"/></div>
                       </td>
                   </tr>
               </table>
           </div>
        </div>
    )
}

export default ViewMentee;
