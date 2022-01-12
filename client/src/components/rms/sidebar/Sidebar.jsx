import React from 'react'
import './Sidebar.scss';
import * as AiIcons from 'react-icons/all';
import {Link} from 'react-router-dom';

function Sidebar() {
    return (
        <div>
            <div className="sidebar_container">
                 <div className="sidebar_wrapper">
                    <div className="sidebar_menu">
                        <h3 className="sidebar_title">RMS Dashboard</h3>
                        <ul className="sidebar_list">
                            <li className="sidebar_listitem">
                                <AiIcons.BsFillFileEarmarkPersonFill className="sidebar_icon" /><Link to="/viewassociateprofile" className='link' >Associate</Link>  
                            </li>
                             <li className="sidebar_listitem">
                                <AiIcons.IoDocumentTextSharp className="sidebar_icon" /><Link to="/projectprofileview" className='link' >Project </Link>
                             </li>
                            <li className="sidebar_listitem">
                                <AiIcons.BiMapPin className="sidebar_icon" />Project Mapping
                            </li>
                           <li className="sidebar_listitem">
                                <AiIcons.MdPersonOff className="sidebar_icon" />Resource Blocking
                                <ul className="sub_sidebar_list">
                                    <li className="sub_sidebar_listitem"><AiIcons.SiHiveBlockchain className="sidebar_icon"/>Hard Blocking</li>
                                    <li className="sub_sidebar_listitem"><AiIcons.SiAdblock className="sidebar_icon"/>Soft Blocking</li>
                                </ul>
                            </li>
                            <li className="sidebar_listitem">
                                <AiIcons.MdReport className="sidebar_icon" />Report
                            </li>
                        </ul>

                    </div> 
                </div>

            </div>
        </div>
    )
}

export default Sidebar