import React, { useEffect, useState } from 'react'
import './UpdateProfileMentor.scss'
import * as AiIcons from 'react-icons/all';
import image from '../../../assets/images/updatementor.png';

import axios from 'axios';
import { useParams } from 'react-router-dom';
import config from '../../../config/config';

export default function UpdateProfileViewMentor({closeModule}) {
    const apiURL = config.API_URL;
    const imageHandler = (event) => {
        const selectedImage = event.target.files[0]
        setUploadimage(selectedImage)
        const imagePreview = URL.createObjectURL(selectedImage)
        setPreview(imagePreview)
    }

    const [uploadimage, setUploadimage] = useState(image);

    const [preview, setPreview] = useState(image);

    const [profiledata, setProfileData] = useState([]);

    const [newUsername, setNewUsername] = useState();

    const [newPassword, setNewPassword] = useState();

    const [newEmail, setNewEmail] = useState();

    const [newPhonenumber, setNewPhonenumber] = useState();

    const [newFirstname, setNewFirstname] = useState();

    const [newLastname, setNewLastname] = useState();

    const [newCountry, setNewCountry] = useState();

    const [newPostalcode, setNewPostalcode] = useState();

    const [newCity, setNewCity] = useState();

    const [newAddress, setNewAddress] = useState();

    const [newState, setNewState] = useState();

    const [newProfileData, setNewProfileData] = useState([]);






    const { id } = useParams();

    useEffect(() => {
        axios.get(`${apiURL}/mentorsOne/${id}`).then((response) => {
            setProfileData(response.data);
        });
    }, []);
    const update = (e) => {
        axios.put(`${apiURL}/mentorsOne/update/${id}`,
            {


                email: newEmail,
                phonenumber: newPhonenumber,
                firstname: newFirstname,
                lastname: newLastname,
                country: newCountry,
                postalcode: newPostalcode,
                city: newCity,
                address: newAddress,
                state: newState
            }).then((response) => {
                setNewProfileData(response.data);
                alert("Submitted")
            });
    };



    return (
        <div className="profileviewmentor_container">
            {/* {newProfileData.length > 0 && newProfileData.map((values, key) => {
                return ( */}
            <div>
                {/* <div className="viewpart_left">
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
                        </div> */}
                <div className="updateprofilementor">
                    <div className="headercontent">
                        <img src={image} alt="" className="profile_align" />
                        <p className="member_align">Member Information</p>
                        < AiIcons.VscChromeClose className="close" onClick={() => closeModule(false)} />

                    </div> <hr />

                    <div className="textfeild-container">
                        <div className="inputfeilds">
                            <div className="left-inputfeilds" >
                                <label>Username</label><br />
                                <div className="feild">
                                    <i><AiIcons.FaUser className="icons" /></i>
                                    <input type="text" className="textfield" placeholder="username" onChange={(e) => { setNewUsername(e.target.value); }} />
                                </div>
                            </div>
                            <div className="right-inputfeilds">
                                <label>Password</label><br />
                                <div className="feild">
                                    <i><AiIcons.BsLockFill className="icons" /></i>
                                    <input type="password" className="textfield" placeholder="password" onChange={(e) => { setNewPassword(e.target.value); }} />
                                </div>
                            </div>
                        </div>
                        
                        <div className="inputfeilds">
                            <div className="left-inputfeilds" >
                                <label>Email</label><br />
                                <div className="feild">
                                    <i><AiIcons.AiOutlineMail className="icons" /></i>
                                    <input type="text" className="textfield" placeholder="Email" onChange={(e) => { setNewEmail(e.target.value); }} /><br />
                                </div>
                            </div>
                            <div className="right-inputfeilds">
                                <label>Phone Number</label><br />
                                <div className="feild">
                                    <i><AiIcons.BsPhone className="icons" /></i>
                                    <input type="text" className="textfield" placeholder="Phone number" onChange={(e) => { setNewPhonenumber(e.target.value); }} />
                                </div>
                            </div>
                        </div>
                        <div className="inputfeilds">
                            <div className="left-inputfeilds" >
                                <label>First Name</label><br />
                                <div className="feild">
                                    <i><AiIcons.FaUser className="icons" /></i>
                                    <input type="text" className="textfield" placeholder="firstname" onChange={(e) => { setNewFirstname(e.target.value); }} />
                                </div>
                            </div>
                            <div className="right-inputfeilds">
                                <label>Last Name</label><br />
                                <div className="feild">
                                    <i><AiIcons.FaUser className="icons" /></i>
                                    <input type="text" className="textfield" placeholder="lastname" onChange={(e) => { setNewLastname(e.target.value); }} />
                                </div>
                            </div>
                        </div>
                        <div className="inputfeilds">
                            <div className="left-inputfeilds" >
                                <label>country</label><br />
                                <div className="feild">
                                    <i><AiIcons.BiWorld className="icons" /></i>
                                    <input type="text" className="textfield" placeholder="country" onChange={(e) => { setNewCountry(e.target.value); }} />
                                </div>
                            </div>
                            <div className="right-inputfeilds">
                                <label>City</label><br />
                                <div className="feild">
                                    <i><AiIcons.FaCity className="icons" /></i>
                                    <input type="text" className="textfield" placeholder="city" onChange={(e) => { setNewCity(e.target.value); }} />
                                </div>
                            </div>
                        </div>
                        <div className="inputfeilds">
                            <div className="left-inputfeilds" >
                                <label>Postal code</label><br />
                                <div className="feild">
                                    <i><AiIcons.BiMapPin className="icons" /></i>
                                    <input type="text" className="textfield" placeholder="postalcode" onChange={(e) => { setNewPostalcode(e.target.value); }} /><br />
                                </div>
                            </div>
                            <div className="right-inputfeilds">
                                <label>Proviance/state</label><br />
                                <div className="feild">
                                    <i><AiIcons.GiModernCity className="icons" /></i>
                                    <input type="text" className="textfield" placeholder="proviance/state" onChange={(e) => { setNewState(e.target.value); }} />
                                </div>
                            </div>

                        </div>
                        <div className="inputfeilds">
                            <div className="left-inputfeilds" >
                                <label>address</label><br />
                                <div className="feild">
                                    <i><AiIcons.FiMapPin className="icons" /></i>
                                    <input type="text" className="textfield" placeholder="address" onChange={(e) => { setNewAddress(e.target.value); }} />
                                </div>
                            </div>
                            <div className="right-inputfeilds">
                                <label>Avatar</label><br />
                                <div className="feild">
                                    {uploadimage && <img alt={uploadimage.name} src={preview} className="avatar_box" />}<br />
                                    <input type="file" placeholder='Upload' accept="image/*" onChange={(e) => imageHandler(e)} />
                                </div>
                            </div>
                        </div><hr />
                        <div className="accesslvl-container">
                            <p className="accesslvltxt">ACCESS LEVEL</p>
                            <div className="radiobutton">
                                <input type="radio" className="radiobtnstaff" name="radio" />
                                <label className="checkbox-label">ADMIN</label><br />
                                <input type="radio" className="radiobtnadmin" name="radio" />
                                <label className="checkbox-label">STAFF</label>
                            </div>
                            <p>Admin has full rights.Staff has accessed to whatever is assigned to them</p>

                            <div className="notes">
                                <textarea placeholder="notes" col="5" row="5" />
                            </div>
                            <div className="buttons">
                                <input type="button" className="cancel" value="cancel" onClick={() => closeModule(false)} />

                                <input type="submit" className="editstaff" value="submit" onClick={(e) => update(e)} />


                            </div>
                        </div>
                    </div>

                </div>


            </div>


            {/* ) */}
            {/* }
            )}  */}
        </div>


    )


}

