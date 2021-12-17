import React from 'react'
import * as AiIcons from 'react-icons/all';
import './AddMentor.component.scss';
import { useState } from 'react';
import axios from 'axios';
import config from '../../config/config';

export default function AddMentor() {
    const apiURL=config.API_URL;

    const [username, setUsername] = useState("");

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const [role, setRole] = useState("");

    const [firstname, setFirstname] = useState("");

    const [lastname, setLastname] = useState("");

    const [country, setCountry] = useState("");

    const [city, setCity] = useState("");

    const [address, setAddress] = useState("");

    const [state, setState] = useState("");

    const [postalcode, setPostalcode] = useState("");

    const [phonenumber, setPhonenumber] = useState("");

    const addMentor = (e) => {

        axios.post(`${apiURL}/mentorsOne/create`,
            {
                username: username,
                password: password,
                role: role,
                email: email,
                firstname: firstname,
                lastname: lastname,
                country: country,
                city: city,
                address: address,
                state: state,
                phonenumber: phonenumber,
                postalcode: postalcode
            }).then((response) => {
            })
    }

    return (
        <div>
            <div className="addmentor">
                <div className="headercontent">
                    <p>Member Information</p>
                    < AiIcons.IoMdClose className="close" />
                </div> <hr />
                <div className="textfeild-container">
                    <div className="inputfeilds">
                        <div className="left-inputfeilds" >
                            <label>Username</label><br />
                            <div className="feild">
                                <i><AiIcons.FaUser className="icons" /></i>
                                <input type="text" className="textfield" placeholder="username" onChange={(e) => { setUsername(e.target.value); }} />
                            </div>
                        </div>
                        <div className="right-inputfeilds">
                            <label>Password</label><br />
                            <div className="feild">
                                <i><AiIcons.BsLockFill className="icons" /></i>
                                <input type="password" className="textfield" placeholder="password" onChange={(e) => { setPassword(e.target.value); }} />
                            </div>
                        </div>
                    </div>
                    <div className="inputfeilds">
                        <div className="left-inputfeilds" >
                            <label>Role</label><br />
                            <div className="feild">
                                <i><AiIcons.FaCriticalRole className="icons" /></i>
                                <input type="text" className="textfield" placeholder="role" onChange={(e) => { setRole(e.target.value); }} /><br />
                            </div>
                        </div>
                        <div className="right-inputfeilds">
                            <label>Email</label><br />
                            <div className="feild">
                                <i><AiIcons.AiOutlineMail className="icons" /></i>
                                <input type="text" className="textfield" placeholder="email" onChange={(e) => { setEmail(e.target.value); }} />
                            </div>
                        </div>
                    </div>
                    <div className="inputfeilds">
                        <div className="left-inputfeilds" >
                            <label>First Name</label><br />
                            <div className="feild">
                                <i><AiIcons.FaUser className="icons" /></i>
                                <input type="text" className="textfield" placeholder="firstname" onChange={(e) => { setFirstname(e.target.value); }} />
                            </div>
                        </div>
                        <div className="right-inputfeilds">
                            <label>Last Name</label><br />
                            <div className="feild">
                                <i><AiIcons.FaUser className="icons" /></i>
                                <input type="text" className="textfield" placeholder="lastname" onChange={(e) => { setLastname(e.target.value); }} />
                            </div>
                        </div>
                    </div>
                    <div className="inputfeilds">
                        <div className="left-inputfeilds" >
                            <label>country</label><br />
                            <div className="feild">
                                <i><AiIcons.BiWorld className="icons" /></i>
                                <input type="text" className="textfield" placeholder="country" onChange={(e) => { setCountry(e.target.value); }} />
                            </div>
                        </div>
                        <div className="right-inputfeilds">
                            <label>City</label><br />
                            <div className="feild">
                                <i><AiIcons.FaCity className="icons" /></i>
                                <input type="text" className="textfield" placeholder="city" onChange={(e) => { setCity(e.target.value); }} />
                            </div>
                        </div>
                    </div>
                    <div className="inputfeilds">
                        <div className="left-inputfeilds" >
                            <label>Address</label><br />
                            <div className="feild">
                                <i><AiIcons.FiMapPin className="icons" /></i>
                                <input type="text" className="textfield" placeholder="address" onChange={(e) => { setAddress(e.target.value); }} /><br />
                            </div>
                        </div>
                        <div className="right-inputfeilds">
                            <label>State</label><br />
                            <div className="feild">
                                <i><AiIcons.GiModernCity className="icons" /></i>
                                <input type="text" className="textfield" placeholder="state" onChange={(e) => { setState(e.target.value); }} />
                            </div>
                        </div>
                    </div>
                    <div className="inputfeilds">
                        <div className="left-inputfeilds" >
                            <label>Phone Number</label><br />
                            <div className="feild">
                                <i><AiIcons.BsPhone className="icons" /></i>
                                <input type="text" className="textfield" placeholder="phonenumber" onChange={(e) => { setPhonenumber(e.target.value); }} />
                            </div>
                        </div>
                        <div className="right-inputfeilds">
                            <label>Postal code</label><br />
                            <div className="feild">
                                <i><AiIcons.BiMapPin className="icons" /></i>
                                <input type="text" className="textfield" placeholder="postalcode" onChange={(e) => { setPostalcode(e.target.value); }} />
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
                        <input type="checkbox" className="checkbox" />
                        <label className="notify">NOTIFY USER</label>
                        <p>Sent welcome  mail to this user</p><br />
                        <div className="notes">
                            <textarea placeholder="notes" col="5" row="5" />
                        </div>
                        <div className="buttons">
                            <input type="button" className="cancel" value="cancel" />
                            <input type="button" className="Addstaff" value="Addstaff" onClick={addMentor} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
