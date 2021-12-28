import React from 'react'
import * as AiIcons from 'react-icons/all';
import './projectviewtable.scss';

function projectviewtable() {
    return (
        <div>
            <div className="project_profile_table_container">
                <table  className="project_profile_table">
                    <tr className="project_profile_table_head">
                        <th>Name</th>
                        <th>Email</th>
                        <th>Contact_Number</th>
                        <th>Satus</th>
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
    )
}

export default projectviewtable
