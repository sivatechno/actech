import React from 'react'
import * as AiIcons from 'react-icons/all';
import './AddMentor.component.scss';
import { useState } from 'react';
import axios from 'axios';

export default function AddMentor() {

  const [username,setUsername] = useState("");

  const [email,setEmail] = useState("");

  const [password,setPassword] = useState("");

  const [role,setRole] = useState("");

  const [firstname,setFirstname] = useState("");

  const [lastname,setLastname] = useState("");

  const [country,setCountry] = useState("");

  const [city,setCity] = useState("");

  const [address,setAddress] = useState("");

  const [state,setState] = useState("");

  const [postalcode,setPostalcode] = useState("");

  const [phonenumber,setPhonenumber] = useState("");

const addMentor = (e) =>{

  axios.post("http://localhost:5000/mentorsOne/create",
  {
    username:username , 
    password:password, 
    role:role,
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
  })
}

    return (
      <div>
        <input type="text" className="textfield" placeholder="username" onChange={(e)=>{setUsername(e.target.value);}}/>
        <input type="password" className="textfield" placeholder="password" onChange={(e)=>{setPassword(e.target.value);}}/>
        <input type="text" className="textfield" placeholder="role" onChange={(e)=>{setRole(e.target.value);}}/><br/>
        <input type="text" className="textfield" placeholder="email" onChange={(e)=>{setEmail(e.target.value);}}/>
        <input type="text" className="textfield" placeholder="firstname" onChange={(e)=>{setFirstname(e.target.value);}}/>
        <input type="text" className="textfield" placeholder="lastname" onChange={(e)=>{setLastname(e.target.value);}}/><br/>
        <input type="text" className="textfield" placeholder="country" onChange={(e)=>{setCountry(e.target.value);}}/>
        <input type="text" className="textfield" placeholder="city" onChange={(e)=>{setCity(e.target.value);}}/>
        <input type="text" className="textfield" placeholder="address" onChange={(e)=>{setAddress(e.target.value);}}/><br/>
        <input type="text" className="textfield" placeholder="state" onChange={(e)=>{setState(e.target.value);}}/>
        <input type="text" className="textfield" placeholder="phonenumber" onChange={(e)=>{setPhonenumber(e.target.value);}}/>
        <input type="text" className="textfield" placeholder="postalcode" onChange={(e)=>{setPostalcode(e.target.value);}}/>
        <input type="submit" className="textfield" onClick={addMentor}/>
      </div>
    )
}