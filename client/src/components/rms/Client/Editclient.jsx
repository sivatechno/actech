import React,{useState} from 'react';
import './Editclient.scss'
import * as AiIcons from 'react-icons/all'
import Adminlayout_rms from '../../layout/Adminlayout_rms';
import {Link} from 'react-router-dom';

export default function Editclient() {
  return(
      <Adminlayout_rms>
        <div>
          <div className='update_client_overall_contain'>
            <div className='update_client_overall_head_contain' >
             <Link to={'/ClientView'}> <AiIcons.MdOutlineKeyboardBackspace className='update_client_back_icon'/></Link>
              <p className='update_client_header_text'>Update Client</p>
            </div>

            <div className='update_client_inner_contain'>
              <div className='update_client_inner_contant'>
                <div className='update_client_inner_contant_contain'>
                  <p className='update_client_inner_contant_text'>Client Name*</p>
                  <div className='update_client_inner_input_contain'>
                    <AiIcons.FaRegUserCircle className='update_client_inner_icon'/>
                    <input type="text" placeholder='Enter Client Name' />
                  </div>
                </div>
                <div className='update_client_inner_contant_contain'>
                  <p className='update_client_inner_contant_text'>Company Name*</p>
                  <div className='update_client_inner_input_contain'>
                    <AiIcons.FaRegBuilding className='update_client_inner_icon'/>
                    <input type="text" placeholder='Enter Company Name' />
                  </div>
                </div>
              </div>

              <div className='update_client_inner_contant'>
                <div className='update_client_inner_contant_contain'>
                  <p className='update_client_inner_contant_text'>Client E-Mail*</p>
                  <div className='update_client_inner_input_contain'>
                    <AiIcons.HiOutlineMail className='update_client_inner_icon'/>
                    <input type="email" placeholder='Enter E-Mail' />
                  </div>
                </div>
                <div className='update_client_inner_contant_contain'>
                  <p className='update_client_inner_contant_text'>contact*</p>
                  <div className='update_client_inner_input_contain'>
                    <AiIcons.RiContactsBook2Fill className='update_client_inner_icon'/>
                    <input type="text" placeholder='Enter Password' />
                  </div>
                </div>
              </div>

              <div className='update_client_inner_contant'>
                <div className='update_client_inner_contant_contain'>
                  <p className='update_client_inner_contant_text'>Start Date*</p>
                  <div className='update_client_inner_input_contain'>
                    {/* <AiIcons.HiOutlineMail className='update_client_inner_icon'/> */}
                    <input type="date" placeholder='Enter E-Mail' />
                  </div>
                </div>
                <div className='update_client_inner_contant_contain'>
                  <p className='update_client_inner_contant_text'>End Date*</p>
                  <div className='update_client_inner_input_contain'>
                    {/* <AiIcons.RiContactsBook2Fill className='update_client_inner_icon'/> */}
                    <input type="date" placeholder='Enter Password' />
                  </div>
                </div>
              </div>

              <div className='update_client_inner_contant'>
                <div className='update_client_inner_contant_contain'>
                  <p className='update_client_inner_contant_text'>Country*</p>
                  <div className='update_client_inner_input_contain'>
                    <AiIcons.BiWorld className='update_client_inner_icon'/>
                    <input type="text" placeholder='Enter Country' />
                  </div>
                </div>
                <div className='update_client_inner_contant_contain'>
                  <p className='update_client_inner_contant_text'>State*</p>
                  <div className='update_client_inner_input_contain'>
                    <AiIcons.MdPinDrop className='update_client_inner_icon'/>
                    <input type="text" placeholder='Enter State' />
                  </div>
                </div>
              </div>

              <div className='update_client_inner_contant'>
                <div className='update_client_inner_contant_contain'>
                  <p className='update_client_inner_contant_text'>City*</p>
                  <div className='update_client_inner_input_contain'>
                    <AiIcons.FaCity className='update_client_inner_icon'/>
                    <input type="text" placeholder='Enter City' />
                  </div>
                </div>
                <div className='update_client_inner_contant_contain'>
                  <p className='update_client_inner_contant_text'>Address*</p>
                  <div className='update_client_inner_input_contain'>
                    <AiIcons.FaRegAddressCard className='update_client_inner_icon'/>
                    <input type="text" placeholder='Enter Door NO, Street' />
                  </div>
                </div>
              </div>

              <div className='update_client_inner_contant'>
                <div className='update_client_inner_contant_contain'>
                  <p className='update_client_inner_contant_text'>Postalcode*</p>
                  <div className='update_client_inner_input_contain'>
                    <AiIcons.IoPinSharp className='update_client_inner_icon'/>
                    <input type="text"  placeholder='Enter Postalcode' />
                  </div>
                </div>
                <div className='update_client_inner_contant_contain'>
                  
                  </div>
              </div>

              <div className='update_client_btn'>
                <button className='update_client_update_button'>Update</button>
              </div>
            </div> 

          </div> 
        </div>

      </Adminlayout_rms>
      
  )
};