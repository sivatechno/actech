import React,{useState} from 'react';
import './Editclient.scss'
import * as AiIcons from 'react-icons/all'
import Adminlayout_rms from '../../layout/Adminlayout_rms';
import {Link} from 'react-router-dom';

export default function Editclient() {
  return(
      <Adminlayout_rms>
        <div>
          <div className='update_client_overall_div'>
            <div className='update_client_overall'>
              <div className='update_client_inner'>
                <div className='update_client_head'>
                   <Link to={'/ClientView'}><AiIcons.TiArrowLeftThick className='update_client_back'/></Link>
                    <p className='update_client_header'>Update Client</p>

                </div>
                <form>
                  <div className='update_client_innerbody'>
                    <div className='update_client_content'>
                      <p className='update_client_text'>Client Name</p><br/>
                      <div className='update_client_field_contain'>
                        <div className='update_client_field'>
                        <i><AiIcons.FaRegUserCircle className="update_client_icons"/></i>
                        <input type="text" className="textfield" placeholder="Client_name"/>
                        </div>
                      </div>
                    </div>
                    <div className='update_client_content'>
                      <p className='update_client_text'>Company Name</p><br/>
                      <div className='update_client_field_contain'>
                        <div className='update_client_field'>
                        <i><AiIcons.SiMicrosoftoffice className="update_client_icons"/></i>
                        <input type="text" className="textfield" placeholder="company_name"/>
                        </div>
                      </div>
                  </div>
                                  
                  </div>
                  <div className='update_client_innerbody'>
                    <div className='update_client_content'>
                      <p className='update_client_text'>Client E-mail</p><br/>
                      <div className='update_client_field_contain'>
                        <div className='update_client_field'>
                        <i><AiIcons.SiGmail className="update_client_icons"/></i>
                        <input type="email" className="textfield" placeholder="client_email"/>
                        </div>
                      </div>
                    </div>
                    <div className='update_client_content'>
                      <p className='update_client_text'>Address</p><br/>
                      <div className='update_client_field_contain'>
                        <div className='update_client_field'>
                        <i><AiIcons.ImAddressBook className="update_client_icons"/></i>
                        <input type="text" className="textfield" placeholder="Address"/>
                        </div>
                      </div>
                    </div>
                </div>
                <div className='update_client_innerbody'>
                    <div className='update_client_content'>
                      <p className='update_client_text'>Country</p><br/>
                      <div className='update_client_field_contain'>
                        <div className='update_client_field'>
                        <i><AiIcons.GiWorld className="update_client_icons"/></i>
                        <input type="email" className="textfield" placeholder="country"/>
                        </div>
                      </div>
                    </div>
                    <div className='update_client_content'>
                      <p className='update_client_text'>state</p><br/>
                      <div className='update_client_field_contain'>
                        <div className='update_client_field'>
                        <i><AiIcons.FiMapPin className="update_client_icons"/></i>
                        <input type="text" className="textfield" placeholder="State"/>
                        </div>
                      </div>
                    </div>
                </div>
                <div className='update_client_innerbody'>
                    <div className='update_client_content'>
                      <p className='update_client_text'>City</p><br/>
                      <div className='update_client_field_contain'>
                        <div className='update_client_field'>
                        <i><AiIcons.FaCity className="update_client_icons"/></i>
                        <input type="text" className="textfield" placeholder="city"/>
                        </div>
                      </div>
                    </div>
                    <div className='update_client_content'>
                      <p className='update_client_text'>Pin Code</p><br/>
                      <div className='update_client_field_contain'>
                        <div className='update_client_field'>
                        <i><AiIcons.BsPinAngleFill className="update_client_icons"/></i>
                        <input type="text" className="textfield" placeholder="pin code"/>
                        </div>
                      </div>
                    </div>
                </div>
                <div className='update_client_innerbody'>
                    <div className='update_client_content'>
                      <p className='update_client_text'>Start Date</p><br/>
                      <div className='update_client_field_contain'>
                        <div className='update_client_field'>
                        {/* <i><AiIcons.FaCity className="add_client_icons"/></i> */}
                        <input type="date" className="textfield" placeholder="start date"/>
                        </div>
                      </div>
                    </div>
                    <div className='update_client_content'>
                      <p className='update_client_text'>End Date</p><br/>
                      <div className='update_client_field_contain'>
                        <div className='update_client_field'>
                        {/* <i><AiIcons.BsPinAngleFill className="add_client_icons"/></i> */}
                        <input type="date" className="textfield" placeholder="end date"/>
                        </div>
                      </div>
                    </div>
                </div>
                <div className='update_client_innerbody'>
                    <div className='update_client_content'>
                      <p className='update_client_text'>Contact</p><br/>
                      <div className='update_client_field_contain'>
                        <div className='update_client_field'>
                        <i><AiIcons.IoCallSharp className="update_client_icons"/></i>
                        <input type="text" className="textfield" placeholder="contact"/>
                        </div>
                      </div>
                    </div>
                    </div>
                    <div className='update_client_buttons'>
                      <button className='update_cancel_button'>cancel</button>
                      <button className='update_update_button'>update</button>

                    </div>
                
                </form>

              </div>

            </div>
          </div>
        </div>

      </Adminlayout_rms>
      
  )
};