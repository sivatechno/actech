import React from 'react'
import './ProfileViewMentor.component.scss'
import * as AiIcons from 'react-icons/all';
import Photo from '../../assets/images/profile.png';

export default function ProfileViewMentor() {
    
    return (
        <div className="profileviewmentor_container">
            <div className="viewpart_left">
                <div className="profile_view">
                    <img src={Photo} alt="" className="profile_align"/>
                </div>
                <div className="about_profile">
                    <div className="about_box_1">
                        <label className="label">NAME  :</label>
                        <input className="profile_field" type="text" />
                    </div>  
                    <div className="about_box_1">
                        <label className="label">EMAIL :</label>
                        <input className="profile_field" type="email" />
                    </div>
                    <div className="about_box_1">
                        <label>CONTACT :</label>
                        <input className="profile_field" type="text" />
                    </div>      
                </div>
            </div>
            <div className="viewpart_right">
                <div className="viewtitle">
                    <p>Basic Info</p>
                </div>
                <div className="right_container_1">
                        <div className="field">
                            <div className="label_box">
                                <label>USERNAME :</label>
                            </div>
                            <div className="txtboxes">
                                <AiIcons.FaUserTie className="icon_align"/>
                                <input className="inputfields" type='text'/>                        
                            </div>    
                        </div>
                        <div className="field">
                            <div className="label_box">
                                <label>EMAIL :</label>
                            </div>
                            <div className="txtboxes">
                                <AiIcons.SiMinutemailer className="icon_align"/>
                                <input className="inputfields" type='email'/>                        
                            </div>
                        </div>
                        <div className="field">
                            <div className="label_box">
                                <label>PHONE NO :</label>
                            </div>
                            <div className="txtboxes">
                                <AiIcons.IoMdPhonePortrait className="icon_align"/>
                                <input className="inputfields" type='number'/>                        
                            </div>    
                        </div>
                        <div className="field">
                            <div className="label_box">
                                <label>FIRST NAME :</label>
                            </div>
                            <div className="txtboxes">
                                <AiIcons.FaUserTie className="icon_align"/>
                                <input className="inputfields" type='text'/>                        
                            </div>
                        </div>
                        <div className="field">
                            <div className="label_box">
                                <label>LAST NAME :</label>
                            </div>
                            <div className="txtboxes">
                                <AiIcons.FaUserTie className="icon_align"/>
                                <input className="inputfields" type='text'/>                        
                            </div>    
                        </div>
                        <div className="field">
                            <div className="label_box">
                                <label>COUNTRY :</label>
                            </div>
                            <div className="txtboxes">
                                <AiIcons.AiOutlineGlobal className="icon_align"/>
                                <input className="inputfields" type='text'/>                        
                            </div>
                        </div>
                        <div className="field">
                            <div className="label_box">
                                <label>CITY :</label>
                            </div>
                            <div className="txtboxes">
                                <AiIcons.AiFillFlag className="icon_align"/>
                                <input className="inputfields" type='text'/>                        
                            </div>
                        </div>
                        <div className="field">
                            <div className="label_box">
                                <label>ZIP CODE :</label>
                            </div>
                            <div className="txtboxes">
                                <AiIcons.TiCode className="icon_align"/>
                                <input className="inputfields" type='text'/>                        
                            </div>
                        </div>
                        <div className="field">
                            <div className="label_box">
                                <label>STATE :</label>
                            </div>
                            <div className="txtboxes">
                                <AiIcons.TiCode className="icon_align"/>
                                <input className="inputfields" type='text'/>                        
                            </div>
                        </div>
                        <div className="field">
                            <div className="label_box">
                                <label>STATUS</label>
                            </div>
                            <div className="txtboxes">
                                <input className="radiobutton" type="radio" value="admin"/><label>ADMIN</label>
                                <input className="radiobutton" type="radio" value="staff"/><label>STAFF</label>
                            </div>                            
                        </div>
                    </div>
                    <div className="address_info">
                        <div className="address_label">
                            <label>ADDRESS  :</label>
                        </div>
                        <div className="address_area">
                            <AiIcons.ImAddressBook className="icon_align"/>
                            <textarea></textarea>
                        </div>
                    </div>
                </div>        
        </div>
    )
}
