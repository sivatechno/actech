import React, { useEffect, useState } from 'react'
import './ProfileViewMentor.component.scss'
import * as AiIcons from 'react-icons/all';
import Photo from '../../../assets/images/profile.png';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import config from '../../../config/config';

export default function ProfileViewMentor() {
    const apiURL=config.API_URL;
    const [profiledata, setProfileData] = useState([]);
    const { id } = useParams();

    useEffect(() => {

        axios.get(`${apiURL}/mentorsOne/${id}`).then((response) => {
            setProfileData(response.data);
            // console.log(response);
        });
    }, []);
    // console.log(profile);
    // console.log(id);
    console.log(profiledata);
    return (
        <div className="profileviewmentor_container">
            {profiledata.length > 0 && profiledata.map((values, key) => {
                return (
                    <div>
                        <div className="left">
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
                            </div>
                       </div>

                       <div className="right">
                            <div className="viewtitle">
                                <p>Basic Info</p>
                            </div>
                            <div className="right_container_1">
                            <div className="about_profile">
                                <div className="about_box_1">
                                    <label className="label">USER NAME  :</label>
                                    <p className="profile_field">{values.username}</p>
                                </div>
                                <div className="about_box_1">
                                    <label className="label">EMAIL :</label>
                                    <p className="profile_field">{values.email}</p>
                                </div>
                                <div className="about_box_1">
                                    <label className="label">FIRST NAME :</label>
                                    <p className="profile_field">{values.firstname}</p>
                                </div>
                                <div className="about_box_1">
                                    <label className="label">LAST NAME :</label>
                                    <p className="profile_field">{values.lastname}</p>
                                </div>
                                <div className="about_box_1">
                                    <label className="label">PHONE NUMBER :</label>
                                    <p className="profile_field">{values.phonenumber}</p>
                                </div>
                                <div className="about_box_1">
                                    <label className="label">COUNTRY :</label>
                                    <p className="profile_field">{values.country}</p>                                    
                                </div>
                                <div className="about_box_1">
                                    <label className="label">CITY :</label>
                                    <p className="profile_field">{values.city}</p>
                                </div>
                                <div className="about_box_1">
                                    <label className="label">ZIP CODE :</label>
                                    <p className="profile_field">{values.postalcode}</p>
                                </div>
                                <div className="about_box_1">
                                    <label className="label">STATE :</label>
                                    <p className="profile_field">{values.state}</p>
                                </div>
                                <div className="about_box_1">
                                    <label className="label">STATUS :</label>
                                    <p className="profile_field">{values.role}</p>
                                </div>
                                <div className="about_box_1">
                                    <label className="label">ADDRESS :</label>
                                    <p className="profile_field">{values.address}</p>
                                </div>
                            </div>

                            </div>    
                               
                        </div>
                  </div>
                ) 
            })}
        </div>
    )
}
