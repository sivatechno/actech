import React,{useState} from 'react'
import './Addclient.scss'
import * as AiIcons from 'react-icons/all'
import Validate from './Clientvalidate';

// export default function Project_add() {
    function  Addclient ({ closeModule}) {

        const [values,setValues]=useState({
            clientname:"",
            companyname:"",
            clientemail:"",
            password:"",
            startdate:"",
            enddate:"",
            

        });

        const[errors,setErrors]=useState({});
        // console.log(values);
          const handleChange = (event) =>{
              setValues({
                  ...values,
                  [event.target.name]: event.target.value,
              });
            //   console.log(values);
          };
        
        const handleFormSubmit=(event) =>{
            event.preventDefault();
            setErrors(Validate(values));
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
                          <input type="text" className="textfield" placeholder="Client Name" required name="clientname" value={values.clientname} onChange={handleChange}  />
                    
                      </div>
                      </div>
                      {errors.clientname && <p className='add_client_errormsg'>{errors.clientname}</p>}
                      </div>
                      
                      <div className="add_client_content" >
                          <p className="add_client_text">company name*</p><br />
                          <div className="add_client_field_contain">
                      <div className="add_client_feild">
                          <i><AiIcons.SiMicrosoftoffice className="add_client_icons"/></i>
                          <input type="text" className="textfield" placeholder="company Name" required name='companyname' value={values.projectname} onChange={handleChange} />
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
                          <input type="email" className="textfield" placeholder="E-Mail" required name='clientemail' value={values.clientemail} onChange={handleChange}  />
                      </div>
                      </div>
                      {errors.clientemail && <p className='add_client_errormsg'>{errors.clientemail}</p>}
                      </div>
                      <div className="add_client_content" >
                          <p className="add_client_text">Password*</p><br />
                          <div className="add_client_field_contain">
                      <div className="add_client_feild">
                          <i><AiIcons.CgPassword className="add_client_icons"/></i>
                          <input type="password" className="textfield" placeholder="Password" required name='password' value={values.password}  onChange={handleChange} />
                      </div>
                      </div>
                      {errors.password && <p className='add_client_errormsg'>{errors.password}</p>}
                      </div>

                 </div>
                 <div className="add_client_inner_body">
                 <div className="add_client_content" >
                          <p className="add_client_text">Address*</p><br />
                          <div className="add_client_field_contain">
                      <div className="add_client_feild">
                          <i><AiIcons.ImAddressBook className="add_client_icons"/></i>
                          <input type="text" className="textfield" placeholder="Address" required name='Address' value={values.Address} onChange={handleChange}  />
                      </div>
                      </div>
                      {errors.Address && <p className='add_client_errormsg'>{errors.Address}</p>}
                      </div>
                      <div className="add_client_content" >
                          <p className="add_client_text">Country*</p><br />
                          <div className="add_client_field_contain">
                      <div className="add_client_feild">
                          <i><AiIcons.GiWorld className="add_client_icons"/></i>
                          <input type="text" className="textfield" placeholder="Country" required name='Country' value={values.Country}  onChange={handleChange} />
                      </div>
                      </div>
                      {errors.Country && <p className='add_client_errormsg'>{errors.Country}</p>}
                      </div>
                 </div>
                 <div className="add_client_inner_body">
                 <div className="add_client_content" >
                          <p className="add_client_text">State*</p><br />
                          <div className="add_client_field_contain">
                      <div className="add_client_feild">
                          <i><AiIcons.FiMapPin className="add_client_icons"/></i>
                          <input type="text" className="textfield" placeholder="state" required name='State' value={values.State} onChange={handleChange}  />
                      </div>
                      </div>
                      {errors.State && <p className='add_client_errormsg'>{errors.State}</p>}
                      </div>
                      <div className="add_client_content" >
                          <p className="add_client_text">City*</p><br />
                          <div className="add_client_field_contain">
                      <div className="add_client_feild">
                          <i><AiIcons.FaCity className="add_client_icons"/></i>
                          <input type="text" className="textfield" placeholder="City" required name='City' value={values.City}  onChange={handleChange} />
                      </div>
                      </div>
                      {errors.City && <p className='add_client_errormsg'>{errors.City}</p>}
                      </div>
                 </div>
                 <div className="add_client_inner_body">
                 <div className="add_client_content" >
                         <label > <p className="add_client_text">Start_Date*</p> </label><br />
                          <div className="add_client_field_contain">
                      <div className="add_client_feild">
                          {/* <i><AiIcons.FaUser className="icons"/></i> */}
                          <input type="date" className="textfield" placeholder='enter date' required name='startdate' value={values.startdate}  onChange={handleChange}  />
                      </div>
                      </div>
                      {errors.startdate && <p className='add_client_errormsg'>{errors.startdate}</p>}
                      </div>
                      <div className="add_client_content" >
                         <label > <p className="add_client_text">End_Date*</p></label><br />
                          <div className="add_client_field_contain">
                      <div className="add_client_feild">
                          {/* <i><AiIcons.FaUser className="icons"/></i> */}
                          <input type="date" className="textfield" placeholder='enter date' required  name='enddate' value={values.enddate}  onChange={handleChange} />
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
                          <input type="text" className="textfield" placeholder="pin code" required name='pincode' value={values.pincode} onChange={handleChange}  />
                      </div>
                      </div>
                      {errors.Pin_code && <p className='add_client_errormsg'>{errors.Pin_code}</p>}
                      </div>
                      <div className='add_div_client'></div>
                 </div>
                 <div className="add_client_buttons">
                     <button className="client_cancel_btn" onClick={()=>{ closeModule(false)}}>Cancel</button>
                     <button className="client_add_btn" onClick={handleFormSubmit}>Add client</button>
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