import React from 'react'
import * as AiIcons from 'react-icons/all';
import './AddMentor.component.scss';
import { useState } from 'react';
import axios from 'axios';
import validate from './validation.js';
import placeholder from '../../../assets/images/avatar placeholder.png'
import image from '../../../assets/images/addmentor.png';
import config from '../../../config/config';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

export default function AddMentor({ closeModule }) {

    const imageHandler = (event) => {
        const selectedImage = event.target.files[0]
        setUploadimage(selectedImage)
        const imagePreview = URL.createObjectURL(selectedImage)
        setPreview(imagePreview)
    }

    const [errors, setErrors] = useState({});

    const apiURL = config.API_URL;

    const [username, setUsername] = useState("");

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const [firstname, setFirstname] = useState("");

    const [lastname, setLastname] = useState("");

    const [country, setCountry] = useState("");

    const [city, setCity] = useState("");

    const [address, setAddress] = useState("");

    const [state, setstate] = useState("");

    const [postalcode, setPostalcode] = useState("");

    const [phonenumber, setPhonenumber] = useState("");

    const [uploadimage, setUploadimage] = useState(placeholder);

    const [preview, setPreview] = useState(placeholder);

    
    const [role,setRole]=useState("Role");

    // const onValueChange =(e)=> {
    //     this.setRole({
    //       selectedOption: e.target.value,
    //     });
    //   }




    const addMentor = (e) => {
        //    sendEmail();
        e.preventDefault();
        setErrors(validate(values));
        axios.post(`${apiURL}/mentorsOne/create`,
            {

                username: username,
                password: password,
                email: email,
                firstname: firstname,
                lastname: lastname,
                country: country,
                city: city,
                address: address,
                state: state,
                phonenumber: phonenumber,
                postalcode: postalcode,
                role:role,

            }).then((response) => {
            })

    }
    const [values, setValues] = useState({

        user_name: "",
        e_mail: "",
        password: "",
        phonenumber: "",
        city: "",
        postalcode: "",
        Firstname: "",
        Lastname: "",
        state: "",
        uploadimage: "",

    });
    const handleChangeCapture = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
        //   //   console.log(values);
    };
    return (

        <div>
            <div className="addmentor">
                <div className="headercontent">
                    <img src={image} className="logoalign" alt="logo" />
                    <p>Member Information</p>
                    {/* <AiIcons.IoMdClose className="close"/> */}
                    < AiIcons.VscChromeClose className="close" onClick={() => closeModule(false)} />
                </div> <hr />
                <form>
                    <div className="textfeild-container">
                        <div className="inputfeilds">
                            <div className="left-inputfeilds" >
                                <label>Username</label><br />
                                <div className="feild">
                                    <i><AiIcons.FaUser className="icons" /></i>
                                    <input type="text" className="textfield" placeholder="username" name='username' required values={setValues.user_name} onChangeCapture={handleChangeCapture} onChange={(e) => { setUsername(e.target.value); }} />
                                    {errors.username && <p className="error">{errors.username}</p>}
                                </div>
                            </div>
                            <div className="right-inputfeilds">
                                <label>Password</label><br />
                                <div className="feild">
                                    <i><AiIcons.BsLockFill className="icons" /></i>
                                    <input type="password" className="textfield" placeholder="password" required values={setValues.password} name="password" onChangeCapture={handleChangeCapture} onChange={(e) => { setPassword(e.target.value); }} />
                                    {errors.password && <p className="error">{errors.password}</p>}
                                </div>
                            </div>
                        </div>
                        <div className="inputfeilds">
                            <div className="left-inputfeilds" >
                                <label>Email</label><br />
                                <div className="feild">
                                    <i><AiIcons.AiOutlineMail className="icons" /></i>
                                    <input type="text" className="textfield" placeholder="Email" name="Email" required values={setValues.Email} onChangeCapture={handleChangeCapture} onChange={(e) => { setEmail(e.target.value); }} /><br />
                                    {errors.Email && <p className="error">{errors.Email}</p>}
                                </div>
                            </div>
                            <div className="right-inputfeilds">
                                <label>Phone Number</label><br />
                                <div className="feild">
                                    <i><AiIcons.BsPhone className="icons" /></i>
                                    <input type="text" className="textfield" placeholder="phonenumber" required name="phonenumber" values={setValues.phonenumber} onChangeCapture={handleChangeCapture} onChange={(e) => { setPhonenumber(e.target.value); }} />
                                    {errors.phonenumber && <p className="error">{errors.phonenumber}</p>}
                                </div>
                            </div>
                        </div>
                        <div className="inputfeilds">
                            <div className="left-inputfeilds" >
                                <label>First Name</label><br />
                                <div className="feild">
                                    <i><AiIcons.FaUser className="icons" /></i>
                                    <input type="text" className="textfield" placeholder="firstname" name="Firstname" required values={setValues.firstname} onChangeCapture={handleChangeCapture} onChange={(e) => { setFirstname(e.target.value); }} />
                                    {errors.Firstname && <p className="error">{errors.Firstname}</p>}
                                </div>
                            </div>
                            <div className="right-inputfeilds">
                                <label>Last Name</label><br />
                                <div className="feild">
                                    <i><AiIcons.FaUser className="icons" /></i>
                                    <input type="text" className="textfield" placeholder="lastname" required name="Lastname" values={setValues.Lastname} onChangeCapture={handleChangeCapture} onChange={(e) => { setLastname(e.target.value); }} />
                                    {errors.Lastname && <p className="error">{errors.Lastname}</p>}
                                </div>
                            </div>
                        </div>
                        <div className="inputfeilds">
                            <div className="left-inputfeilds" >
                                <label>country</label><br />
                                <div className="feild">
                                    <i><AiIcons.BiWorld className="icons" /></i>
                                    <input type="text" className="textfield" placeholder="country" required name="country" values={setValues.country} onChangeCapture={handleChangeCapture} onChange={(e) => { setCountry(e.target.value); }} />
                                    {errors.country && <p className="error">{errors.country}</p>}
                                </div>
                            </div>
                            <div className="right-inputfeilds">
                                <label>City</label><br />
                                <div className="feild">
                                    <i><AiIcons.FaCity className="icons" /></i>
                                    <input type="text" className="textfield" placeholder="city" required name="city" values={setValues.city} onChangeCapture={handleChangeCapture} onChange={(e) => { setCity(e.target.value); }} />
                                    {errors.city && <p className="error">{errors.city}</p>}
                                </div>
                            </div>
                        </div>
                        <div className="inputfeilds">
                            <div className="left-inputfeilds" >
                                <label>Postal code</label><br />
                                <div className="feild">
                                    <i><AiIcons.BiMapPin className="icons" /></i>
                                    <input type="text" className="textfield" placeholder="Postal code" required name="postalcode" values={setValues.postalcode} onChangeCapture={handleChangeCapture} onChange={(e) => { setPostalcode(e.target.value); }} /><br />
                                    {errors.postalcode && <p className="error">{errors.postalcode}</p>}
                                </div>
                            </div>
                            <div className="right-inputfeilds">
                                <label>Proviance/state</label><br />
                                <div className="feild">
                                    <i><AiIcons.GiModernCity className="icons" /></i>
                                    <input type="text" className="textfield" placeholder="Proviance/state" required name="state" values={setValues.state} onChangeCapture={handleChangeCapture} onChange={(e) => { setstate(e.target.value); }} />
                                    {errors.state && <p className="error">{errors.state}</p>}
                                </div>
                            </div>
                        </div>
                        <div className="inputfeilds">
                            <div className="left-inputfeilds" >
                                <label>address</label><br />
                                <div className="feild">
                                    <i><AiIcons.FiMapPin className="icons" /></i>
                                    <input type="text" className="textfield" placeholder="Address" required name="address" values={setValues.address} onChangeCapture={handleChangeCapture} onChange={(e) => { setAddress(e.target.value); }} />
                                    {errors.address && <p className="error">{errors.address}</p>}
                                </div>
                            </div>
                            <div className="right-inputfeilds" >
                                <label>Avatar</label><br />
                                <div className="feild">
                                    {uploadimage && <img alt={uploadimage.name} src={preview} className="avatar_box" />}<br />
                                    <input type="file" placeholder='Upload' required values={setValues.uploadimage} name="uploadimage" onChangeCapture={handleChangeCapture} onChange={(e) => imageHandler(e)} accept="image/*" />
                                    {errors.uploadimage && <p className="error">{errors.uploadimage}</p>}
                                </div>
                            </div>

                        </div><hr />
                        <div className="accesslvl-container">
                            <p className="accesslvltxt">ACCESS LEVEL</p>
                            <div className="radiobutton">
                                
                                <input type="radio" value={role} name="role"checked={role == "admin"}className="radio-btn"onClick={() => {setRole("admin");}}/>   ADMIN <br/>
                                <input type="radio"  value={role} name="role" checked={role == "staff"} className="radio-btn"onClick={() => {setRole("staff");}}/>   STAFF
                            </div>
                            <p>Admin has full rights.Staff has accessed to whatever is assigned to them</p>
                            <input type="checkbox" className="checkbox" />
                            <label className="notify">NOTIFY USER</label>
                            <p>Sent welcome  mail to this user</p><br />
                            <div className="notes">
                                <textarea placeholder="notes" col="5" row="5" />
                            </div>
                            <div className="buttons">
                                <input type="button" className="cancel" value="cancel" onClick={() => closeModule(false)} />
                                <input type="button" className="Addstaff" value="Addstaff" onClick={addMentor} />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    )
}

