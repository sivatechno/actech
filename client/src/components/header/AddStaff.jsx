import React from 'react'
import * as AiIcons from 'react-icons/all';
import './AddStaff.scss';

export default function AdminHeader() {
    return (
        
         <div className="container-one">
             <div className="inner_container">
                           {/* heading start */}
               <div className="inner_container_one">
                     <div className="head_div">
                     <p className="heading">ADD STAFF </p> 
                     </div>
                     <div className="close_icon_div">
                      <AiIcons.IoClose className="close_icon"/>
                    </div> 
                    </div>
                    <hr />   
                                {/* heading end */}

                    {/* ---------------------------------------------------------------------------------------------- */}
                                       
                                                                   {/* FIRST CONTAINER START */}
                        <div className="inner_container_two">
                            <div className="sub_container_one">
                                        <p className="sub_heading">USERNAME *</p>
                                            <div className="sub_textbox">
                                              <AiIcons.AiOutlineUser className="inner_icon"/> <input className="textfield" type="text" placeholder="" required />
                                            </div>
                                            <span className="error">* This is required field</span>
                              </div>
                                <div className="sub_container_one">
                                           <p className="sub_heading">E-MAIL *</p>
                                              <div className="sub_textbox">
                                                 <AiIcons.AiOutlineMail className="inner_icon"/> <input className="textfield" type="text" placeholder="" required />
                                                 </div>
                                                 <span className="error">* This is required field</span>
                                 </div>
                         </div>
                                                                         {/* FIRST CONTAINER END */}

                                                                         {/* SECOND CONTAINER START */}
                      <div className="inner_container_two">
                            <div className="sub_container_one">
                                        <p className="sub_heading">PHONE NUMBER *</p>
                                            <div className="sub_textbox">
                                              <AiIcons.BsPhone className="inner_icon"/> <input className="textfield" type="text" placeholder="" required />
                                            </div>
                                            <span className="error">* This is required field</span>
                              </div>
                                <div className="sub_container_one">
                                           <p  className="sub_heading">PASSWORD *</p>
                                              <div className="sub_textbox">
                                                 <input className="textfield" type="password" placeholder="" required /> <AiIcons.AiOutlineEye className="inner_icon"/>
                                                 </div>
                                                 <span className="error">* This is required field</span>
                                 </div>
                        </div>

                                                                           {/* SECOND CONTAINER END */}
                        
                                                                          {/* THIRD CONTAINER START */}
                      <div className="inner_container_two">
                            <div className="sub_container_one">
                                        <p  className="sub_heading">FIRST NAME *</p>
                                            <div className="sub_textbox">
                                              <AiIcons.RiUser6Fill className="inner_icon"/> <input className="textfield" type="text" placeholder="" required />
                                            </div>
                                            <span className="error">* This is required field</span>
                              </div>
                                <div className="sub_container_one">
                                           <p  className="sub_heading">LAST NAME *</p>
                                              <div className="sub_textbox">
                                                 <AiIcons.RiUser6Line className="inner_icon"/> <input className="textfield" type="text" placeholder="" required />
                                                 </div>
                                                 <span className="error">* This is required field</span>
                                 </div>
                        </div>

                                                                           {/* THIRD CONTAINER END */}

                                                                           {/* FORTH CONTAINER START */}
                      <div className="inner_container_two">
                            <div className="sub_container_one">
                                        <p  className="sub_heading">COUNTRY *</p>
                                            <div className="sub_textbox">
                                              <AiIcons.BiWorld className="inner_icon"/> 
                                                                          {/* DROP DOWN */}
                                                    <select className="drop_down" >
                                                            <option className="list" value="COUNTRY">---COUNTRY---</option>
                                                                         <option className="list"  value="india">INDIA</option>
                                                                          <option className="list" value="usa">USA</option>
                                                                           <option className="list" value="uae">UAE</option>
                                                                            <option className="list" value="uk">UK</option>
                                                     </select>
  
                                            </div>
                                            <span className="error">* This is required field</span>
                              </div>
                                <div className="sub_container_one">
                                           <p  className="sub_heading">CITY *</p>
                                              <div className="sub_textbox">
                                                 <AiIcons.FaCity className="inner_icon"/> <input className="textfield" type="text" placeholder="" required />
                                                 </div>
                                                 <span className="error">* This is required field</span>
                                 </div>
                        </div>

                                                                           {/* FORTH CONTAINER END */}

                                                                             {/* FIFTHCONTAINER START */}
                      <div className="inner_container_two">
                            <div className="sub_container_one">
                                        <p  className="sub_heading">POSTAL/ZIP CODE *</p>
                                            <div className="sub_textbox">
                                              <AiIcons.FaMapPin className="inner_icon"/> <input className="textfield" type="text" placeholder="" required />
                                            </div>
                                            <span className="error">* This is required field</span>
                              </div> 
                                      {/* BROWSE BUTTON */}
                                 <div className="sub_container_one">
                                           <p  className="sub_heading">AVATAR</p>
                                              <div className="sub_textbox">
                                                 <AiIcons.CgProfile className="inner_icon"/>  <button className="browse_button">Browse</button>
                                                 </div>
                                                 <span className="error">* This is required field</span>
                                 </div>
                        </div>

                                                                           {/* FIFTH CONTAINER END */}

                                                                            {/* SIXTH CONTAINER START */}
                      <div className="inner_container_two">
                            <div className="sub_container_one">
                                        <p  className="sub_heading">ADDRESS *</p>
                                            <div className="sub_textbox">
                                              <AiIcons.FaRegAddressCard className="inner_icon"/> <input className="textfield" type="text" placeholder="" required />
                                            </div>
                                            <span className="error">* This is required field</span>
                              </div>
                                <div className="sub_container_one">
                                           <p  className="sub_heading">PROVINCE/STATE *</p>
                                              <div className="sub_textbox">
                                                 <AiIcons.RiPinDistanceLine className="inner_icon"/> <input className="textfield" type="text" placeholder="" required />
                                                 </div>
                                                 <span className="error">* This is required field</span>
                                 </div>
                        </div>

                                                                           {/* SIXTH CONTAINER END */}

                                                                          <div className="second_heading_div">
                                                                           <p className="second_heading">ACCESS LEVEL</p>
                                                                           </div>

                                                                           {/* SEVENTH CONTAINER START */}
                    <div className="inner_container_three">
                                 <div className="sub_container_two"> 
                                     {/* RADIO BUTTON START */}
                                     <div className="radio_div">
                                 <input className="radio_one" type="radio" name="access_level"/>
                                  <label className="label_one">ADMIN</label> 
                                
                                  <input className="radio_two" type="radio" name="access_level"/>
                                  <label className="label_two">STAFF</label><br/>
                                    </div>
                                    
                                   <p className="info_content">Admin has full rights. Staff has access to whatever is assigned to them.</p> <br />
                                         {/* CHECK BOX */}
                                    <input className="checkbox_one" type="checkbox" name="notify_user" />
                                   <label className="label_three">NOTIFY USER</label> <br />
                                   <p className="info_content">Send welcome email to this user.</p> <br />
                                   <textarea className="textarea" name="notes" id="" cols="93" rows="10"></textarea>
                                 </div>
                                 
                    </div>
                                                                             
                                                                             {/* SEVENTH CONTAINER END */}

                                                                             {/* EIGHTH CONTAINER START */}

                      <div className="inner_container_four">
                        <div className="final_buttons">
                             <button className="cancel_staff">CANCEL</button>
                              <button className="add_staff">ADD STAFF</button>
                        </div>
                    </div> 
                                                                            {/* EIGHTH CONTAINER START */}

            </div>    </div>
          
            
    )
}