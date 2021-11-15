import React from 'react'
import * as AiIcons from 'react-icons/all';
import './AddStaff.scss';

export default function AdminHeader() {
    return (
        
         <div className="container-one">
             <div className="inner_container">
                       <AiIcons.IoClose className="close_icon"/>
                    <p14>STAFF ADDING</p14> <hr />
                                                                   {/* FIRST CONTAINER START */}
                        <div className="first_container">
                            <div className="name">
                                        <p className="inner_heading">USERNAME *</p>
                                            <div className="textbox_one">
                                              <AiIcons.AiOutlineUser className="user_icon"/> <input className="user" type="text" placeholder="" required />
                                            </div>
                                            <span>* This is required field</span>
                              </div>
                                <div className="email">
                                           <p className="inner_heading">E-MAIL *</p>
                                              <div className="textbox_one">
                                                 <AiIcons.AiOutlineMail className="user_icon"/> <input className="user" type="text" placeholder="" required />
                                                 </div>
                                 </div>
                         </div>
                                                                         {/* FIRST CONTAINER END */}

                                                                         {/* SECOND CONTAINER START */}
                      <div className="second_container">
                            <div className="phone_no">
                                        <p className="inner_heading">PHONE NUMBER *</p>
                                            <div className="textbox_three">
                                              <AiIcons.BsPhone className="phone_icon"/> <input className="phone" type="text" placeholder="" required />
                                            </div>
                              </div>
                                <div className="pasword">
                                           <p  className="inner_heading">PASSWORD*</p>
                                              <div className="textbox_four">
                                                 <AiIcons.AiOutlineEye className="eye_icon"/> <input className="pass" type="password" placeholder="" required />
                                                 </div>
                                 </div>
                        </div>

                                                                           {/* SECOND CONTAINER END */}
                        
                                                                          {/* THIRD CONTAINER START */}
                      <div className="third_container">
                            <div className="Fname">
                                        <p  className="inner_heading">FIRST NAME*</p>
                                            <div className="textbox_five">
                                              <AiIcons.RiUser6Fill className="fname_icon"/> <input className="firstname" type="text" placeholder="" required />
                                            </div>
                              </div>
                                <div className="Lname">
                                           <p  className="inner_heading">LAST NAME*</p>
                                              <div className="textbox_six">
                                                 <AiIcons.RiUser6Line className="lname_icon"/> <input className="lastname" type="text" placeholder="" required />
                                                 </div>
                                 </div>
                        </div>

                                                                           {/* THIRD CONTAINER END */}

                                                                           {/* FORTH CONTAINER START */}
                      <div className="fourth_container">
                            <div className="cuntry">
                                        <p  className="inner_heading">COUNTRY*</p>
                                            <div className="textbox_seven">
                                              <AiIcons.BiWorld className="world_icon"/> 
                                                                          {/* DROP DOWN */}
                                                   <select className="country_list" >
                                                            <option className="list" value="COUNTRY">---COUNTRY---</option>
                                                                         <option className="list"  value="india">INDIA</option>
                                                                          <option className="list" value="usa">USA</option>
                                                                           <option className="list" value="uae">UAE</option>
                                                                            <option className="list" value="uk">UK</option>
                                                     </select>
  
                                            </div>
                              </div>
                                <div className="cty">
                                           <p  className="inner_heading">CITY*</p>
                                              <div className="textbox_eight">
                                                 <AiIcons.FaCity className="city_icon"/> <input className="city" type="text" placeholder="" required />
                                                 </div>
                                 </div>
                        </div>

                                                                           {/* FORTH CONTAINER END */}

                                                                             {/* FIFTHCONTAINER START */}
                      <div className="fifth_container">
                            <div className="postalcode">
                                        <p  className="inner_heading">POSTAL/ZIP CODE*</p>
                                            <div className="textbox_nine">
                                              <AiIcons.FaMapPin className="pin_icon"/> <input className="zipcode" type="text" placeholder="" required />
                                            </div>
                              </div>
                                      {/* BROWSE BUTTON */}
                                <div className="profile">
                                           <p  className="inner_heading">AVATAR</p>
                                              <div className="textbox_ten">
                                                 <AiIcons.CgProfile className="prof_picture_icon"/>  <button className="browse_button">Browse</button>
                                                 </div>
                                 </div>
                        </div>

                                                                           {/* FIFTH CONTAINER END */}

                                                                            {/* SIXTH CONTAINER START */}
                      <div className="sixth_container">
                            <div className="adres">
                                        <p  className="inner_heading">ADDRESS*</p>
                                            <div className="textbox_eleven">
                                              <AiIcons.FaRegAddressCard className="address_icon"/> <input className="address" type="text" placeholder="" required />
                                            </div>
                              </div>
                                <div className="stat">
                                           <p  className="inner_heading">PROVINCE/STATE*</p>
                                              <div className="textbox_twele">
                                                 <AiIcons.RiPinDistanceLine className="dualpin_icon"/> <input className="state" type="text" placeholder="" required />
                                                 </div>
                                 </div>
                        </div>

                                                                           {/* SIXTH CONTAINER END */}

                                                                           <h2>ACCESS LEVEL</h2>

                                                                           {/* SEVENTH CONTAINER START */}
                    <div className="seventh_container">
                                 <div className="aces_level">
                                     {/* RADIO BUTTON START */}
                                 <input type="radio" name="access_level"/>
                                  <label className="label1">ADMIN</label> 
                                  <input type="radio" name="access_level"/>
                                  <label className="label1">STAFF</label><br/>
                                   <p13>Admin has full rights. Staff has access to whatever is assigned to them.</p13> <br/>
                                         {/* CHECK BOX */}
                                   <input type="checkbox" name="notify_user" />
                                   <label className="label1">NOTIFY USER</label><br/>
                                   <p13>Send welcome email to this user.</p13> <br />
                                   <textarea className="textarea" name="notes" id="" cols="93" rows="10"></textarea>
                                 </div>
                                 
                    </div>
                                                                             
                                                                             {/* SEVENTH CONTAINER END */}

                                                                             {/* EIGHTH CONTAINER START */}

                     <div className="eighth_container">
                        <div className="final_buttons">
                             <button className="cancel_staff">CANCEL</button>
                              <button className="add_staff">ADD STAFF</button>
                        </div>
                    </div>
                                                                            {/* EIGHTH CONTAINER START */}

                </div>
          </div>
            
    )
}