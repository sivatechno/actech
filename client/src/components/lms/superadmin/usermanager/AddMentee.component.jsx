import React from 'react'
import * as AiIcons from 'react-icons/all';
import './AddMentee.component.scss';
import { useState } from 'react';
import axios from 'axios';
import config from '../../../config/config';
import validate from './validation.js';
import image from '../../../assets/images/addmentor.png';

export default function AddMentee({closeModule}) {

    const apiURL=config.API_URL;

    const[errors,setErrors]=useState({});
 
   const [username,setUsername] = useState("");
 
   const [email,setEmail] = useState("");
 
   const [password,setPassword] = useState("");
 
   const [company,setCompany] = useState("");
 
   const [technology,setTechnology] = useState("");
 
   const [firstname,setFirstname] = useState("");
 
   const [lastname,setLastname] = useState("");
 
   const [country,setCountry] = useState("");
 
   const [city,setCity] = useState("");
 
   const [address,setAddress] = useState("");
 
   const [state,setState] = useState("");
 
   const [postalcode,setPostalcode] = useState("");
 
   const [phonenumber,setPhonenumber] = useState("");
 
 const addMentee = (e) =>{
     e.preventDefault();
     setErrors(validate(values));
 
   axios.post(`${apiURL}/mentee/create`,
   {
     username:username , 
     password:password, 
     company:company,
     technology:technology,
     email:email,
     firstname:firstname,
     lastname:lastname,
     country:country,
     city:city,
     address:address,
     state:state,
     phonenumber:phonenumber,
     postalcode:postalcode
   }).then((response) =>{    
     console.log(response);
   })
 }
 const [values,setValues]=useState({
 
     user_name:"",
     e_mail:"",
     password:"",
     phonenumber:"",
     city:"",
     postalcode:"",
     Firstname:"",
     Lastname:"",
     state:"",
     uploadimage:"",
     company:"",
     technology:"",
 
 });
 const handleChangeCapture = (event) =>{
     setValues({
         ...values,
         [event.target.name]: event.target.value,
     });
 //   //   console.log(values);
 };
 
     return (
       <div>
         <div className="addmentee">
            <div className="headercontent">
                         <img src={image} className="logoalign" alt="logo"/>
                         <p>Member Information</p>
                        < AiIcons.IoMdClose className="close" onClick={()=>closeModule(false)} />        
                 </div> <hr />
                 <div className="textfeild-container">
                     <div className="inputfeilds">
                         <div className="left-inputfeilds" >
                             <label>Username</label><br />
                         <div className="feild">
                             <i><AiIcons.FaUser className="icons"/></i>
                             <input type="text" className="textfield" placeholder="username"  name='username' required values={setValues.user_name} onChangeCapture={handleChangeCapture} onChange={(e)=>{setUsername(e.target.value);}}/>
                             {errors.username &&<p className="error">{errors.username}</p>}
                         </div>
                         
                         </div>
                         <div className="right-inputfeilds">
                             <label>Password</label><br />
                             <div className="feild">
                             <i><AiIcons.BsLockFill className="icons"/></i>
                             <input type="password" className="textfield" placeholder="password" required  values={setValues.password} name="password" onChangeCapture={handleChangeCapture} onChange={(e)=>{setPassword(e.target.value);}}/>
                             {errors.password &&<p className="error">{errors.password}</p>}
                             </div>
                         </div>
                    </div>
                    <div className="inputfeilds">
                         <div className="left-inputfeilds" >
                             <label>Technology</label><br />
                             <div className="feild">
                             <i><AiIcons.GrTechnology className="icons"/></i>
                             <input type="text" className="textfield" placeholder="technology"  required name="technology" values={setValues.technology}  onChangeCapture={handleChangeCapture} onChange={(e)=>{setTechnology(e.target.value);}}/><br/>
                             {errors.technology &&<p className="error">{errors.technology}</p>}
                             
                             </div>
                         </div>
                         <div className="right-inputfeilds">
                             <label>Company</label><br />
                             <div className="feild">
                             <i><AiIcons.HiOutlineOfficeBuilding className="icons"/></i>
                             <input type="text" className="textfield" placeholder="company" required name="company"  values={setValues.company}  onChangeCapture={handleChangeCapture}  onChange={(e)=>{setCompany(e.target.value);}}/><br/>
                             {errors.company &&<p className="error">{errors.company}</p>}
                             </div>
                         </div>
                    </div>
                    <div className="inputfeilds">
                         <div className="left-inputfeilds" >
                             <label>Email</label><br />
                             <div className="feild">
                             <i><AiIcons.AiOutlineMail className="icons"/></i>
                             <input type="text" className="textfield" placeholder="email" name="Email" required values={setValues.e_mail} onChangeCapture={handleChangeCapture} onChange={(e)=>{setEmail(e.target.value);}}/>
                             {errors.Email &&<p className="error">{errors.Email}</p>}
                             </div>
                         </div>
                         <div className="right-inputfeilds">
                             <label>First Name</label><br />
                             <div className="feild">
                             <i><AiIcons.FaUser className="icons"/></i>
                             <input type="text" className="textfield" placeholder="firstname" name="Firstname" required values={setValues.firstname} onChangeCapture={handleChangeCapture} onChange={(e)=>{setFirstname(e.target.value);}}/>
                             {errors.Firstname &&<p className="error">{errors.Firstname}</p>}
                             </div>
                         </div>
                    </div>
                    <div className="inputfeilds">
                         <div className="left-inputfeilds" >
                             <label>Last Name</label><br />
                             <div className="feild">
                             <i><AiIcons.FaUser className="icons"/></i>
                             <input type="text" className="textfield" placeholder="last name" required name="Lastname" values={setValues.Lastname} onChangeCapture={handleChangeCapture} onChange={(e)=>{setLastname(e.target.value);}}/>
                             {errors.Lastname &&<p className="error">{errors.Lastname}</p>} 
                             </div>
                         </div>
                         <div className="right-inputfeilds">
                             <label>Country</label><br />
                             <div className="feild">
                             <i><AiIcons.BiWorld className="icons"/></i>
                             <input type="text" className="textfield" placeholder="country" required name="country" values={setValues.country} onChangeCapture={handleChangeCapture} onChange={(e)=>{setCountry(e.target.value);}}/>
                             {errors.country &&<p className="error">{errors.country}</p>}
                             </div>
                         </div>
                    </div>
                    <div className="inputfeilds">
                         <div className="left-inputfeilds" >
                             <label>City</label><br />
                             <div className="feild">
                             <i><AiIcons.FaCity className="icons"/></i>
                             <input type="text" className="textfield" placeholder="city" required name="city" values={setValues.city}  onChangeCapture={handleChangeCapture} onChange={(e)=>{setCity(e.target.value);}}/><br/>
                             {errors.city &&<p className="error">{errors.city}</p>}
                             </div>
                         </div>
                         <div className="right-inputfeilds">
                             <label>Address</label><br />
                             <div className="feild">
                             <i><AiIcons.FiMapPin className="icons"/></i>
                             <input type="text" className="textfield" placeholder="address" required name="address"  values={setValues.address} onChangeCapture={handleChangeCapture} onChange={(e)=>{setAddress(e.target.value);}}/>
                             {errors.address &&<p className="error">{errors.address}</p>}
                             </div>
                         </div>
                    </div>
                    <div className="inputfeilds">
                         <div className="left-inputfeilds" >
                             <label>State</label><br />
                             <div className="feild">
                             <i><AiIcons.GiModernCity className="icons"/></i>
                             <input type="text" className="textfield" placeholder="State" required name="state"values={setValues.state}  onChangeCapture={handleChangeCapture} onChange={(e)=>{setState(e.target.value);}}/>
                             {errors.state &&<p className="error">{errors.state}</p>}
                             </div>
                         </div>
                         <div className="right-inputfeilds">
                             <label>Phone Number</label><br />
                             <div className="feild">
                             <i><AiIcons.BsPhone className="icons"/></i>
                             <input type="text" className="textfield" placeholder="Phone number" required name="phonenumber" values={setValues.phonenumber} onChangeCapture={handleChangeCapture} onChange={(e)=>{setPhonenumber(e.target.value);}}/>
                             {errors.phonenumber &&<p className="error">{errors.phonenumber}</p>} 
                             </div>
                         </div>
                    </div>
                    <div className="inputfeilds-postalfeild">
                         <div className="left-inputfeilds" >
                             <label>Postal Code</label><br />
                             <div className="feild">
                             <i><AiIcons.BiMapPin className="icons"/></i>
                             <input type="text" className="textfield" placeholder="Postal Code" required name="postalcode" values={setValues.postalcode}  onChangeCapture={handleChangeCapture} onChange={(e)=>{setPostalcode(e.target.value);}}/>
                             {errors.postalcode &&<p className="error">{errors.postalcode}</p>}
                           </div>
                         </div>
                     </div><hr />
                    <div className="accesslvl-container">
                        <p className="accesslvltxt">ACCESS LEVEL</p>
                        <div className="radiobutton">
                         <input type="radio"  className="radiobtnstaff" name="radio"  />
                         <label className="checkbox-label">ADMIN</label><br />
                         <input type="radio" className="radiobtnadmin" name="radio"/>
                         <label className="checkbox-label">STAFF</label>
                     </div>
                     <p>Admin has full rights.Staff has accessed to whatever is assigned to them</p>
                         <input type="checkbox" className="checkbox"/>
                         <label className="notify">NOTIFY USER</label>
                         <p>Sent welcome  mail to this user</p>
                         <br/>
                         <div className="notes">
                             <textarea placeholder="notes" col="5" row="5"/>
                         </div>
                         <div className="buttons">
                             <input type="button" className="cancel" value="cancel" onClick={()=>closeModule(false)} />
                             <input type="button" className="Addstaff" value="Add student" onClick={addMentee}/>
                        </div> 
                    </div>
                 </div>
                 </div>
       </div>
     )
 }
 
