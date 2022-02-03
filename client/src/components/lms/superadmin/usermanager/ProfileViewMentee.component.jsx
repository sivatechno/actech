import React, { useEffect, useState } from 'react'
import './ProfileViewMentee.component.scss';
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
           
        
        });
    }, []);
    console.log(profiledata);
    return (
        <div className="profileviewmentee_container">
            {profiledata.length>0 && profiledata.map((values, key) => {
                return(
                <div>                    
                <div className="toprofileviewcontainer">
                    <div className="profile_viewmentee">
                        <img src={Photo} alt="" className="profile_alignmentee" />
                    </div>
                    <div className="aboutprofileviewmentee">
                        <div className="aboutprofilebox1">
                            <label className="aboutprofilelabel">NAME:</label>
                            <p className="aboutvaluesprofile">{values.firstname}{values.lastname}</p>
                        </div>
                        <div className="aboutprofilebox1">
                            <label className="aboutprofilelabel">EMAIL:</label>
                            <p className="aboutvaluesprofile">{values.email}</p>
                        </div>
                        <div className="aboutprofilebox1">
                            <label className="aboutprofilelabel">CONTACT:</label>
                            <p className="aboutvaluesprofile">{values.phonenumber}</p>
                        </div>
                        <div className="aboutprofilebox1">
                            <label className="aboutprofilelabel">COMPANY:</label>
                            <p className="aboutvaluesprofile">{values.phonenumber}</p>
                        </div>
                        <div className="aboutprofilebox1">
                            <label className="aboutprofilelabel">TECHNOLOGY:</label>
                            <p className="aboutvaluesprofile">{values.phonenumber}</p>
                        </div>
                    </div>
                    </div>
                    <div className="bottomprofileviewMenteecontainer">
                        <div className="viewtitle">
                            <p>Basic Info</p>
                        </div>
                        <div className="profiledetails">
                            <div className="wholeprofileboxes">
                                <div className="aboutprofilebox1">
                                    <label className="label">USER_NAME:</label>
                                    <p className="aboutvaluesprofile">{values.username}</p>
                                </div>
                                <div className="aboutprofilebox1">
                                    <label className="label">EMAIL:</label>
                                    <p className="aboutvaluesprofile">{values.email}</p>
                                </div>
                            </div>
                            <div className="wholeprofileboxes">
                                <div className="aboutprofilebox1">
                                    <label className="label">FIRST_NAME:</label>
                                    <p className="aboutvaluesprofile">{values.firstname}</p>
                                </div>
                                <div className="aboutprofilebox1">
                                    <label className="label">LAST_NAME:</label>
                                    <p className="aboutvaluesprofile">{values.lastname}</p>
                                </div>
                            </div>
                            <div className="wholeprofileboxes">
                                <div className="aboutprofilebox1">
                                    <label className="label">PHONE_NUMBER:</label>
                                    <p className="aboutvaluesprofile">{values.phonenumber}</p>
                                </div>
                                <div className="aboutprofilebox1">
                                    <label className="label">COUNTRY:</label>
                                    <p className="aboutvaluesprofile">{values.country}</p>
                                </div>
                            </div>
                            <div className="wholeprofileboxes">
                                <div className="aboutprofilebox1">
                                    <label className="label">CITY:</label>
                                    <p className="aboutvaluesprofile">{values.city}</p>
                                </div>
                                <div className="aboutprofilebox1">
                                    <label className="label">ZIPCODE:</label>
                                    <p className="aboutvaluesprofile">{values.postalcode}</p>
                                </div>
                            </div>
                            <div className="wholeprofileboxes">
                                <div className="aboutprofilebox1">
                                    <label className="label">STATE:</label>
                                    <p className="aboutvaluesprofile">{values.state}</p>
                                </div>
                                <div className="aboutprofilebox1">
                                    <label className="label">STATUS:</label>
                                    <p className="aboutvaluesprofile">{values.role}</p>
                                </div>
                            </div>
                            <div className="wholeprofileboxes">
                                <div className="aboutprofilebox1">
                                    <label className="label">ADDRESS:</label>
                                    <p className="aboutvaluesprofile">{values.address}</p>
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
