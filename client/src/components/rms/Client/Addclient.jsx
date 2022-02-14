import React from 'react'
import * as AiIcons from 'react-icons/all'
import './Addclient.scss'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import config from '../../config/config';
import Clientvalidate from './Clientvalidate'

// export default function Project_add() {
    function  Addclient ({ closeModule}) {
        const apiURL = config.API_URL;
        const[errors,setErrors]=useState({});
        const [clientprofiledata, setClientProfileData] = useState([]);
        const [clientname, setClientName] = useState("");
        const [clientemail, setClientEMail] = useState("");
        const [companyname, setCompanyName] = useState("");
        const [country, setCountry] = useState("");
        const [state, setState] = useState("");
        const [city, setCity] = useState("");
        const [address, setAddress] = useState("");
        const [startdate, setStartDate] = useState("");
        const [enddate, setEndDate] = useState("");
        const [contact, setContact] = useState("");
        const [pincode, setPin_code] = useState("");

        const addclient = (event) =>{

            event.preventDefault();
            setErrors(Clientvalidate(values));

                

            axios.post(`${apiURL}/client/addclient`,
            {
                
              clientname:clientname,
              companyname:companyname,
              clientemail:clientemail,
              startdate:startdate,
              enddate:enddate,
              contact:contact,
              country:country,
              state:state,
              city:city,
              address:address,
              pincode:pincode,
            }).then((response) =>{ 
                //notify(true); 
                //alert('hai')     
            })

           
           
            
          }
      

        const [values,setValues]=useState({
            client_name:"",
            company_name:"",
            client_email:"",
            contact:"",
            start_date:"",
            end_date:"",
            pincode:"",
            country:"",
            state:"",
            city:"",
            address:"",
            

        });


        const handleChangeCapture = (event) => {
            setValues({
                ...values,
                [event.target.name]: event.target.value,
            });
        };

        

       
    return (
        <div>
        <div className='addclient_overall_div'>
        <div className="add_client_overall"> 
            <div className="add_client_inner">
                <div className="add_client_head">
                <p className="add_client_header">ADD CLIENT</p>
                     < AiIcons.CgClose className="add_client_close" onClick={()=>{ closeModule(false)}}/>
                     </div>
                     <form>
                 <div className="add_client_inner_body">
                 <div className="add_client_content" >
                          <p className="add_client_text">Client name*</p><br />
                          <div className="add_client_field_contain">
                      <div className="add_client_feild">
                          <i><AiIcons.FaRegUserCircle className="add_client_icons"/></i>
                          <input type="text" className="textfield" placeholder="Client_name" required name="clientname" values={setValues.client_name} onChange={(e)=>{setClientName(e.target.value);}}   onChangeCapture={handleChangeCapture} autoFocus = {true} />
                    
                      </div>
                      </div>
                      {errors.clientname && <p className='add_client_errormsg'>{errors.clientname}</p>}    
                      </div>
                      
                      <div className="add_client_content" >
                          <p className="add_client_text">company name*</p><br />
                          <div className="add_client_field_contain">
                      <div className="add_client_feild">
                          <i><AiIcons.SiMicrosoftoffice className="add_client_icons"/></i>
                          <input type="text" className="textfield" placeholder="company_name" required name='companyname' values={setValues.company_name} onChange={(e)=>{setCompanyName(e.target.value);}}   onChangeCapture={handleChangeCapture} autoFocus = {true}/>
                      </div>
                      </div>
                      {errors.companyname && <p className='add_client_errormsg'>{errors.companyname}</p>} 
            
                      </div>

                 </div>
                 <div className="add_client_inner_body">
                 <div className="add_client_content" >
                          <p className="add_client_text">Client E-Mail*</p><br />
                          <div className="add_client_field_contain">
                      <div className="add_client_feild">
                          <i><AiIcons.SiGmail className="add_client_icons"/></i>
                          <input type="email" className="textfield" placeholder="E-Mail" required name='clientemail' values={setValues.client_email} onChange={(e)=>{setClientEMail(e.target.value);}}   onChangeCapture={handleChangeCapture} autoFocus = {true} />
                      </div>
                      </div>
                      {errors.clientemail && <p className='add_client_errormsg'>{errors.clientemail}</p>} 
                      </div>
                      <div className="add_client_content" >
                          <p className="add_client_text">Contact*</p><br />
                          <div className="add_client_field_contain">
                      <div className="add_client_feild">
                          <i><AiIcons.MdOutlineLocalPhone className="add_client_icons"/></i>
                          <input type="text" className="textfield" placeholder="contact" required name='contact' values={setValues.contact} onChange={(e)=>{setContact(e.target.value);}}   onChangeCapture={handleChangeCapture} autoFocus = {true}  />
                      </div>
                      </div>
                      {errors.contact && <p className='add_client_errormsg'>{errors.contact}</p>} 
                      </div>

                 </div>
                 <div className="add_client_inner_body">
                 <div className="add_client_content" >
                          <p className="add_client_text">Address*</p><br />
                          <div className="add_client_field_contain">
                      <div className="add_client_feild">
                          <i><AiIcons.ImAddressBook className="add_client_icons"/></i>
                          <input type="text" className="textfield" placeholder="Address" required name='Address' values={setValues.address} onChange={(e)=>{setAddress(e.target.value);}}   onChangeCapture={handleChangeCapture} autoFocus = {true} />
                      </div>
                      </div>
                      {errors.Address && <p className='add_client_errormsg'>{errors.Address}</p>} 
                      </div>
                      <div className="add_client_content" >
                          <p className="add_client_text">Country*</p><br />
                          <div className="add_client_field_contain">
                      <div className="add_client_feild">
                          <i><AiIcons.GiWorld className="add_client_icons"/></i>
                          <input type="text" className="textfield" placeholder="Country" required name='Country' values={setValues.country} onChange={(e)=>{setCountry(e.target.value);}}   onChangeCapture={handleChangeCapture} autoFocus = {true} />
                      </div>
                      </div>
                      {errors.country && <p className='add_client_errormsg'>{errors.country}</p>} 
                      </div>
                 </div>
                 <div className="add_client_inner_body">
                 <div className="add_client_content" >
                          <p className="add_client_text">State*</p><br />
                          <div className="add_client_field_contain">
                      <div className="add_client_feild">
                          <i><AiIcons.FiMapPin className="add_client_icons"/></i>
                          <input type="text" className="textfield" placeholder="state" required name='State' values={setValues.state} onChange={(e)=>{setState(e.target.value);}}   onChangeCapture={handleChangeCapture} autoFocus = {true} />
                      </div>
                      </div>
                      {errors.state && <p className='add_client_errormsg'>{errors.state}</p>} 
                      </div>
                      <div className="add_client_content" >
                          <p className="add_client_text">City*</p><br />
                          <div className="add_client_field_contain">
                      <div className="add_client_feild">
                          <i><AiIcons.FaCity className="add_client_icons"/></i>
                          <input type="text" className="textfield" placeholder="City" required name='City' values={setValues.city} onChange={(e)=>{setCity(e.target.value);}}   onChangeCapture={handleChangeCapture} autoFocus = {true}  />
                      </div>
                      </div>
                      {errors.city && <p className='add_client_errormsg'>{errors.city}</p>} 
                      </div>
                 </div>
                 <div className="add_client_inner_body">
                 <div className="add_client_content" >
                         <label > <p className="add_client_text">Start_Date*</p> </label><br />
                          <div className="add_client_field_contain">
                      <div className="add_client_feild">
                          {/* <i><AiIcons.FaUser className="icons"/></i> */}
                          <input type="date" className="textfield" placeholder='enter date' required name='startdate' values={setValues.start_date} onChange={(e)=>{setStartDate(e.target.value);}}   onChangeCapture={handleChangeCapture} autoFocus = {true} />
                      </div>
                      </div>
                      {errors.startdate && <p className='add_client_errormsg'>{errors.startdate}</p>} 
                      </div>
                      <div className="add_client_content" >
                         <label > <p className="add_client_text">End_Date*</p></label><br />
                          <div className="add_client_field_contain">
                      <div className="add_client_feild">
                          {/* <i><AiIcons.FaUser className="icons"/></i> */}
                          <input type="date" className="textfield" placeholder='enter date' required  name='enddate' values={setValues.end_date} onChange={(e)=>{setEndDate(e.target.value);}}   onChangeCapture={handleChangeCapture} autoFocus = {true}  />
                      </div>
                      </div>
                      {errors.enddate && <p className='add_client_errormsg'>{errors.enddate}</p>} 
                      </div>
                      

                 </div>
                 <div className="add_client_inner_body">
                 <div className="add_client_content" >
                          <p className="add_client_text">Pin_code*</p><br />
                          <div className="add_client_field_contain">
                      <div className="add_client_feild">
                          <i><AiIcons.BsPinAngleFill className="add_client_icons"/></i>
                          <input type="text" className="textfield" placeholder="pin_code" required name='pincode' values={setValues.Pin_code} onChange={(e)=>{setPin_code(e.target.value);}}   onChangeCapture={handleChangeCapture} autoFocus = {true}  />
                      </div>
                      </div>
                      {errors.pincode && <p className='add_client_errormsg'>{errors.pincode}</p>} 
                      </div>
                      <div className="add_client_content" >
                        
                          <div className="add_client_field_contain">
                      
                      </div>
                      
                      </div>
                 </div>
                 <div className="add_client_buttons">
                     <button className="client_cancel_btn" onClick={()=>{ closeModule(false)}}>Cancel</button>
                     <button className="client_add_btn" onClick={addclient}>Add client</button>
                 </div>
                 </form>
                
            </div>
            
            
        </div>
        </div>
        </div>
    )
    };
    export default Addclient;
// }