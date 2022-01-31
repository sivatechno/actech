import React from 'react'
import * as AiIcons from 'react-icons/all'
import './Addclient.scss'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect,useState } from 'react';
import Validate from './Clientvalidate';
import config from '../../config/config';

// export default function Project_add() {
    function  Addclient ({ closeModule}) {
        const apiURL = config.API_URL;
        const [clientprofiledata, setClientProfileData] = useState([]);
        const [clientname, setClientName] = useState([]);
        const [clientemail, setClientEMail] = useState([]);
        const [companyname, setCompanyName] = useState([]);
        const [password, setPassword] = useState([]);
        const [country, setCountry] = useState([]);
        const [state, setState] = useState([]);
        const [city, setCity] = useState([]);
        const [address, setAddress] = useState([]);
        const [startdate, setStartDate] = useState([]);
        const [enddate, setEndDate] = useState([]);
        const [contact, setContact] = useState([]);
        const [pincode, setPinCode] = useState([]);
        const [newclientprofileData, setNewClientProfileData] = useState([]);
        const {id} = useParams();

        useEffect(() =>{
            axios.get(`http://localhost:5000/clientprofile/${id}`).then((response) => {
                setClientProfileData(response.data);
            })
        },[]);    

        //const[errors,setErrors]=useState({});
        // console.log(values);
          //const handleChange = (event) =>{
              //setValues({
                  //...values,
                  //[event.target.name]: event.target.value,
             // });
            //   console.log(values);
          //};
        
        //const handleFormSubmit=(event) =>{
            //event.preventDefault();
            //setErrors(Validate(values));
        //};
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
                          <input type="text" className="textfield" placeholder="Client_name" required name="clientname" />
                    
                      </div>
                      </div>
                      
                      </div>
                      
                      <div className="add_client_content" >
                          <p className="add_client_text">company name*</p><br />
                          <div className="add_client_field_contain">
                      <div className="add_client_feild">
                          <i><AiIcons.SiMicrosoftoffice className="add_client_icons"/></i>
                          <input type="text" className="textfield" placeholder="company_name" required name='companyname'/>
                      </div>
                      </div>
            
                      </div>

                 </div>
                 <div className="add_client_inner_body">
                 <div className="add_client_content" >
                          <p className="add_client_text">Client E-Mail*</p><br />
                          <div className="add_client_field_contain">
                      <div className="add_client_feild">
                          <i><AiIcons.SiGmail className="add_client_icons"/></i>
                          <input type="email" className="textfield" placeholder="E-Mail" required name='clientemail' />
                      </div>
                      </div>
                      
                      </div>
                      <div className="add_client_content" >
                          <p className="add_client_text">Contact*</p><br />
                          <div className="add_client_field_contain">
                      <div className="add_client_feild">
                          <i><AiIcons.MdOutlineLocalPhone className="add_client_icons"/></i>
                          <input type="text" className="textfield" placeholder="contact" required name='contact'  />
                      </div>
                      </div>
                      
                      </div>

                 </div>
                 <div className="add_client_inner_body">
                 <div className="add_client_content" >
                          <p className="add_client_text">Address*</p><br />
                          <div className="add_client_field_contain">
                      <div className="add_client_feild">
                          <i><AiIcons.ImAddressBook className="add_client_icons"/></i>
                          <input type="text" className="textfield" placeholder="Address" required name='Address' />
                      </div>
                      </div>
                      
                      </div>
                      <div className="add_client_content" >
                          <p className="add_client_text">Country*</p><br />
                          <div className="add_client_field_contain">
                      <div className="add_client_feild">
                          <i><AiIcons.GiWorld className="add_client_icons"/></i>
                          <input type="text" className="textfield" placeholder="Country" required name='Country' />
                      </div>
                      </div>
                      
                      </div>
                 </div>
                 <div className="add_client_inner_body">
                 <div className="add_client_content" >
                          <p className="add_client_text">State*</p><br />
                          <div className="add_client_field_contain">
                      <div className="add_client_feild">
                          <i><AiIcons.FiMapPin className="add_client_icons"/></i>
                          <input type="text" className="textfield" placeholder="state" required name='State' />
                      </div>
                      </div>
                      
                      </div>
                      <div className="add_client_content" >
                          <p className="add_client_text">City*</p><br />
                          <div className="add_client_field_contain">
                      <div className="add_client_feild">
                          <i><AiIcons.FaCity className="add_client_icons"/></i>
                          <input type="text" className="textfield" placeholder="City" required name='City'  />
                      </div>
                      </div>
                      
                      </div>
                 </div>
                 <div className="add_client_inner_body">
                 <div className="add_client_content" >
                         <label > <p className="add_client_text">Start_Date*</p> </label><br />
                          <div className="add_client_field_contain">
                      <div className="add_client_feild">
                          {/* <i><AiIcons.FaUser className="icons"/></i> */}
                          <input type="date" className="textfield" placeholder='enter date' required name='startdate' />
                      </div>
                      </div>
                      
                      </div>
                      <div className="add_client_content" >
                         <label > <p className="add_client_text">End_Date*</p></label><br />
                          <div className="add_client_field_contain">
                      <div className="add_client_feild">
                          {/* <i><AiIcons.FaUser className="icons"/></i> */}
                          <input type="date" className="textfield" placeholder='enter date' required  name='enddate'  />
                      </div>
                      </div>
                      
                      </div>
                      

                 </div>
                 <div className="add_client_inner_body">
                 <div className="add_client_content" >
                          <p className="add_client_text">Pin_code*</p><br />
                          <div className="add_client_field_contain">
                      <div className="add_client_feild">
                          <i><AiIcons.BsPinAngleFill className="add_client_icons"/></i>
                          <input type="text" className="textfield" placeholder="pin_code" required name='pincode'  />
                      </div>
                      </div>
                      
                      </div>
                      <div className="add_client_content" >
                        
                          <div className="add_client_field_contain">
                      
                      </div>
                      
                      </div>
                 </div>
                 <div className="add_client_buttons">
                     <button className="client_cancel_btn" onClick={()=>{ closeModule(false)}}>Cancel</button>
                     <button className="client_add_btn">Add client</button>
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