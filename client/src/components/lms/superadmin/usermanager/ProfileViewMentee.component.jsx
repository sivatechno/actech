import React, { useEffect, useState } from 'react'
import './ProfileViewMentor.component.scss'
import * as AiIcons from 'react-icons/all';
import Photo from '../../../assets/images/profile.png';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import config from '../../../config/config';

export default function ProfileViewMentee() {
    const apiURL=config.API_URL;
    const [profiledata, setProfileData] = useState([]);
    const { id } = useParams();

    useEffect(() => {

        axios.get(`${apiURL}/mentee/${id}`).then((response) => {
            setProfileData(response.data);
            // console.log(response);
        });
    }, []);
    // console.log(profile);
    // console.log(id);
    console.log(profiledata);
    return (
        <div className="profileviewmentor_container">
            {profiledata.length>0 && profiledata.map((values, key) => {
                return (
                    <div>
                        <div className="viewpart_left">
                            <div className="profile_view">
                                <img src={Photo} alt="" className="profile_align" />
                            </div>
                            <div className="about_profile">
                                <div className="about_box_1">
                                    <label className="label">NAME  :</label>
                                    <p className="profile_field">{values.firstname}{values.lastname}</p>
                                </div>
                                <div className="about_box_1">
                                    <label className="label">EMAIL :</label>
                                    <p className="profile_field">{values.email}</p>
                                </div>
                                <div className="about_box_1">
                                    <label>CONTACT :</label>
                                    <p className="profile_field">{values.phonenumber}</p>
                                </div>
                                <div className="about_box_1">
                                    <label className="label">COMPANY :</label>
                                    <p className="profile_field">{values.company}</p>
                                </div>
                                <div className="about_box_1">
                                    <label className="label">TECHNOLOGY :</label>
                                    <p className="profile_field">{values.technology}</p>
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
                                        <AiIcons.FaUserTie className="icon_align" />
                                        <p className="profile_field">{values.username}</p>
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="label_box">
                                        <label>EMAIL :</label>
                                    </div>
                                    <div className="txtboxes">
                                        <AiIcons.SiMinutemailer className="icon_align" />
                                        <p className="profile_field">{values.email}</p>
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="label_box">
                                        <label>PHONE NO :</label>
                                    </div>
                                    <div className="txtboxes">
                                        <AiIcons.IoMdPhonePortrait className="icon_align" />
                                        <p className="profile_field">{values.phonenumber}</p>
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="label_box">
                                        <label>FIRST NAME :</label>
                                    </div>
                                    <div className="txtboxes">
                                        <AiIcons.FaUserTie className="icon_align" />
                                        <p className="profile_field">{values.firstname}</p>
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="label_box">
                                        <label>LAST NAME :</label>
                                    </div>
                                    <div className="txtboxes">
                                        <AiIcons.FaUserTie className="icon_align" />
                                        <p className="profile_field">{values.lastname}</p>
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="label_box">
                                        <label>COUNTRY :</label>
                                    </div>
                                    <div className="txtboxes">
                                        <AiIcons.AiOutlineGlobal className="icon_align" />
                                        <p className="profile_field">{values.country}</p>
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="label_box">
                                        <label>CITY :</label>
                                    </div>
                                    <div className="txtboxes">
                                        <AiIcons.AiFillFlag className="icon_align" />
                                        <p className="profile_field">{values.city}</p>
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="label_box">
                                        <label>ZIP CODE :</label>
                                    </div>
                                    <div className="txtboxes">
                                        <AiIcons.TiCode className="icon_align" />
                                        <p className="profile_field">{values.postalcode}</p>
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="label_box">
                                        <label>STATE :</label>
                                    </div>
                                    <div className="txtboxes">
                                        <AiIcons.TiCode className="icon_align" />
                                        <p className="profile_field">{values.state}</p>
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="label_box">
                                        <label>STATUS</label>
                                    </div>
                                    <div className="txtboxes">
                                    <p className="profile_field">{values.role}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="address_info">
                                <div className="address_label">
                                    <label>ADDRESS  :</label>
                                </div>
                                <div className="address_area">
                                    <AiIcons.ImAddressBook className="icon_align" />
                                    <p className="profile_field">{values.address}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
