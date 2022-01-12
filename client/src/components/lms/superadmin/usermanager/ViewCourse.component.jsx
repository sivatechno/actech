import React from 'react';
import * as AiIcons from 'react-icons/all';
import "./ViewCourse.component.scss";
function ViewCourse() {
    return (
        <div className="parent-container">
           <div className="header">
               <div className="title">
                   <h3>View Course</h3>
               </div>
              <div className="addcourse">
                  <button className="btn-click">
                    Add Course
                  </button>
              </div>
           </div>
           <div className="tab-container">
               <table cellSpacing="10px">
                   <tr className="tab-row">
                       <th>Course Name</th>
                       <th>Course Description</th>
                       <th>Fees</th>
                       <th>Actions</th>
                   </tr>
                   <tr>
                       <td>
                           <div className="tab-icons"><AiIcons.GrEdit className="icons-align"/></div>
                           <div className="tab-icons"><AiIcons.MdDelete className="icons_delete"/></div>
                           <div className="tab-icons"><AiIcons.BsFillEyeSlashFill className="icons-align1"/></div>
                       </td>
                   </tr>
               </table>
           </div>
        </div>
    )
}

export default ViewCourse;

