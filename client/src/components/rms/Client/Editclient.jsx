import React,{useState} from 'react'
import './Editclient.scss'
import * as AiIcons from 'react-icons/all'
import Validate from './Clientvalidate';

// export default function Project_add() {
    function  Editclient ({ closeModule}) {

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
        <div className='addedit_overall_div'>
        <div className="add_edit_overall"> 
            <div className="add_edit_inner">
                <div className="add_edit_head">
                <p className="add_edit_header">EDIT CLIENT</p>
                     < AiIcons.CgClose className="close" onClick={()=>{ closeModule(false)}}/>
                     </div>
                     <form>
                 <div className="add_edit_inner_body">
                 <div className="add_edit_content" >
                          <p className="add_edit_text">Client_name*</p><br />
                          <div className="add_edit_field_contain">
                      <div className="add_edit_feild">
                          <i><AiIcons.FaRegUserCircle className="icons"/></i>
                          <input type="text" className="textfield" placeholder="Client_name" required name="clientname" value={values.clientname} onChange={handleChange}  />
                    
                      </div>
                      </div>
                      {errors.clientname && <p className='errormsg'>{errors.clientname}</p>}
                      </div>
                      
                      <div className="add_edit_content" >
                          <p className="add_edit_text">Company_name*</p><br />
                          <div className="add_edit_field_contain">
                      <div className="add_edit_feild">
                          <i><AiIcons.SiMicrosoftoffice className="icons"/></i>
                          <input type="text" className="textfield" placeholder="company_name" required name="companyname" value={values.companyname} onChange={handleChange} />
                      </div>
                      </div>
                      {errors.companyname && <p className='errormsg'>{errors.companyname}</p>}
                      </div>

                 </div>
                 <div className="add_edit_inner_body">
                 <div className="add_edit_content" >
                          <p className="add_edit_text">Client_E-Mail*</p><br />
                          <div className="add_edit_field_contain">
                      <div className="add_edit_feild">
                          <i><AiIcons.SiGmail className="icons"/></i>
                          <input type="email" className="textfield" placeholder="E-Mail" required name='clientemail' value={values.clientemail} onChange={handleChange}  />
                      </div>
                      </div>
                      {errors.clientemail && <p className='errormsg'>{errors.clientemail}</p>}
                      </div>
                      <div className="add_edit_content" >
                          <p className="add_edit_text">Addreess*</p><br />
                          <div className="add_edit_field_contain">
                      <div className="add_edit_feild">
                          <i><AiIcons.ImAddressBook className="icons"/></i>
                          <input type="password" className="textfield" placeholder="Address" required name='Address' value={values.Address}  onChange={handleChange} />
                      </div>
                      </div>
                      {errors.Address && <p className='errormsg'>{errors.Address}</p>}
                    </div>
                 </div>
                                              
                 <div className="add_edit_inner_body">
                 <div className="add_edit_content" >
                         <label > <p className="add_edit_text">country*</p> </label><br />
                          <div className="add_edit_field_contain">
                      <div className="add_edit_feild">
                          <i><AiIcons.GiWorld className="icons"/></i> 
                          <input type="text" className="textfield" placeholder='country' required name='country' value={values.country}  onChange={handleChange}  />
                      </div>
                      </div>
                      {errors.country && <p className='errormsg'>{errors.coutry}</p>}
                      </div>
                      <div className="add_edit_content" >
                         <label > <p className="add_edit_text">State*</p></label><br />
                          <div className="add_edit_field_contain">
                      <div className="add_edit_feild">
                           <i><AiIcons.FiMapPin className="icons"/></i> 
                          <input type="text" className="textfield" placeholder='state' required  name='state' value={values.state}  onChange={handleChange} />
                      </div>
                      </div>
                      {errors.state && <p className='errormsg'>{errors.state}</p>}
                      </div>

                 </div>
                 <div className="add_edit_inner_body">
                 <div className="add_edit_content" >
                         <label > <p className="add_edit_text">City*</p> </label><br />
                          <div className="add_edit_field_contain">
                      <div className="add_edit_feild">
                          <i><AiIcons.FaCity className="icons"/></i> 
                          <input type="text" className="textfield" placeholder='city' required name='city' value={values.city}  onChange={handleChange}  />
                      </div>
                      </div>
                      {errors.city && <p className='errormsg'>{errors.city}</p>}
                      </div>
                      <div className="add_edit_content" >
                         <label > <p className="add_edit_text">Pin_code*</p></label><br />
                          <div className="add_edit_field_contain">
                      <div className="add_edit_feild">
                           <i><AiIcons.BsPinAngleFill className="icons"/></i> 
                          <input type="text" className="textfield" placeholder='pin code' required  name='pin code' value={values.pin_code}  onChange={handleChange} />
                      </div>
                      </div>
                      {errors.pin_code && <p className='errormsg'>{errors.pin_code}</p>}
                      </div>

                 </div>
                 <div className="add_edit_inner_body">
                 <div className="add_edit_content" >
                         <label > <p className="add_edit_text">Start_Date*</p> </label><br />
                          <div className="add_edit_field_contain">
                      <div className="add_edit_feild">
                          {/* <i><AiIcons.FaUser className="icons"/></i> */}
                          <input type="date" className="textfield" placeholder='Start date' required name='start date' value={values.startdate}  onChange={handleChange}  />
                      </div>
                      </div>
                      {errors.startdate && <p className='errormsg'>{errors.startdate}</p>}
                      </div>
                      <div className="add_edit_content" >
                         <label > <p className="add_edit_text">End_date*</p></label><br />
                          <div className="add_edit_field_contain">
                      <div className="add_edit_feild">
                          {/* <i><AiIcons.FaUser className="icons"/></i> */}
                          <input type="date" className="textfield" placeholder='end date' required  name='end date' value={values.enddate}  onChange={handleChange} />
                      </div>
                      </div>
                      {errors.enddate && <p className='errormsg'>{errors.enddate}</p>}
                      </div>

                 </div>
              
              
                 <div className="add_edit_buttons">
                     <button className="edit_cancel_btn">Cancel</button>
                     <button className="edit_add_btn" onClick={handleFormSubmit}>OK</button>
                 </div>
                 </form>
                
            </div>
            
            
        </div>
        </div>
        </div>
    )
    };
    export default Editclient;
// }