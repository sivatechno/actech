// import React from 'react'
// import { SidebarData } from './SidebarData'
// import SubMenu from './SubMenu'

// export default function Navbar() {
//     return (
//         <div>
//             {SidebarData.map((item,index) =>{
//                 return(
//                     <div>
//                         <SubMenu item={item} key={index}/>
//                     </div>
//                 )
//             })}
//         </div>
//     )
// }
import React from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import * as AiIcons from 'react-icons/all';
import './Navbar.scss'
import {Link} from 'react-router-dom';

export default function Navbar() {
    return (
        <div>
            <ProSidebar>
                <Menu iconShape="square">
                    <SubMenu title="Usermanager" icon={<AiIcons.FiUsers />}>
                        <MenuItem icon={<AiIcons.FiUsers />}><Link to="/viewmentor"/>Mentor</MenuItem>
                        <MenuItem icon={<AiIcons.FiUsers />}><Link to="/viewmentee"/>Mentee</MenuItem>
                        <MenuItem icon={<AiIcons.BsChatDots />}>Password Reset</MenuItem>
                    </SubMenu>
                    <SubMenu title="Course Exams" icon={<AiIcons.ImFilesEmpty />}>
                        <MenuItem icon={<AiIcons.RiFileCopy2Line />}>Manage Courses</MenuItem>
                        <MenuItem icon={<AiIcons.RiFileListLine />}>Manage Exams</MenuItem>
                        <MenuItem icon={<AiIcons.AiOutlineFolderOpen />}>Manage Question</MenuItem>
                        <MenuItem icon={<AiIcons.AiOutlineFileAdd />}>Add Question</MenuItem>
                        <MenuItem icon={<AiIcons.HiOutlineTrendingUp />}>Results</MenuItem>
                    </SubMenu>
                    <SubMenu title="Enrollment" icon={<AiIcons.FaBuffer />}>
                        <MenuItem icon={<AiIcons.TiArrowShuffle />}>Enroll</MenuItem>
                    </SubMenu>
                    <SubMenu title="Contents" icon={<AiIcons.AiOutlineContainer />}>
                        <MenuItem icon={<AiIcons.RiFileCopy2Line />}>Resource Categories</MenuItem>
                        <MenuItem icon={<AiIcons.RiFileListLine />}>Resource Items</MenuItem>
                        <MenuItem icon={<AiIcons.AiOutlineFolderOpen />}>Add Resource Item</MenuItem>
                        <MenuItem icon={<AiIcons.AiOutlineFileAdd />}>Manage FAQs</MenuItem>
                        <MenuItem icon={<AiIcons.HiOutlineTrendingUp />}>Add FAQ Item</MenuItem>
                    </SubMenu> 
                    <SubMenu title="System Setting" icon={<AiIcons.GrSystem />}>
                        <MenuItem icon={<AiIcons.GrSettingsOption />}>System Configuration</MenuItem>
                        <MenuItem icon={<AiIcons.FiDatabase />}>Database Backup</MenuItem>
                        <MenuItem icon={<AiIcons.AiOutlineMail />}>Email Manager</MenuItem>
                    </SubMenu> 
                </Menu>
            </ProSidebar>;
        </div>
    )
}
