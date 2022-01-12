import React from 'react'
import '../lms/superadmin/usermanager/Common_popup.scss';
import * as AiIcons from 'react-icons/all';

function Popup({CloseModal}) {
    return (
        <div>
            <div className='pop'>
            <div className='modal_container'>
               
            <div className="project_profile_table_container">
            <AiIcons.CgClose className="close_icon" onClick={()=>CloseModal(false)} />
                <table  className="project_profile_table">
                    <tr className="project_profile_table_head">
                        <th>Name</th>
                        <th>Email</th>
                        <th>Contact_Number</th>
                        <th>Status</th>
                        <th>Info</th>
                    </tr>
                    <tr className="project_profile_table_body">
                        <td>proj_A</td>
                        <td>10-2-2021</td>
                        <td>12-3-2021</td>
                        <td >Active</td>
                        <td className="proj_table_icons"><AiIcons.FiEye className="prof_eye_icon"/></td>
                    </tr>
                    <tr className="project_profile_table_body">
                        <td>proj_B</td>
                        <td>10-2-2021</td>
                        <td>12-3-2021</td>
                        <td >IN-Active</td>
                        <td className="proj_table_icons"><AiIcons.FiEye className="prof_eye_icon"/></td>
                    </tr>
                    <tr className="project_profile_table_body">
                        <td>proj_C</td>
                        <td>10-2-2021</td>
                        <td>12-3-2021</td>
                        <td >Active</td>
                        <td className="proj_table_icons"><AiIcons.FiEye className="prof_eye_icon"/></td>
                    </tr>
                </table>
            </div>

            </div>
            </div>
        </div>
    )
}

export default Popup
