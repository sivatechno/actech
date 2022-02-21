import React from 'react';
import './Addprojectmapping.scss';
import * as AiIcons from 'react-icons/all'
import './Addprojectmapping.scss';
import AdminLayout_rms from '../../layout/Adminlayout_rms';
import {Link} from 'react-router-dom';

function Addprojectmapping() {
  return (
      <AdminLayout_rms>
            <div>
                <div className='addproject_mapping_overall_conatiner'>
                    <div className="addproject_mapping_inner_container">
                        <div className="addproject_mapping_topheader">
                            <div className="top_icon"><Link to={'/Projectmappingview'}><AiIcons.MdOutlineKeyboardBackspace className='arrow_icon'/></Link></div>
                            <div className="mapping_top_header"><h4>Project Mapping</h4></div>
                        </div>
                        <form>
                            <div className="addproject_mapping_formbody">
                                <div className="addproject_mapping_form_row">
                                    <div className="addproject_mapping_col1">
                                        <label className='label'>Associative name *</label>
                                        <div className="addproject_mapping_input_container">
                                            <AiIcons.FaRegUserCircle className='usericons'/>
                                            <input type='text' className='input_name_textboxes' placeholder='Associative name' />
                                        </div>
                                    </div>
                                    <div className="addproject_mapping_col2">
                                        <label className='label'>Project Name *</label>
                                        <div className="addproject_mapping_input_container">
                                            <AiIcons.FaRegUserCircle className='usericons'/>
                                            <input type='text' className='input_name_textboxes' placeholder='Project Name'/>
                                        </div>
                                    </div>

                                </div>
                                <div className="addproject_mapping_form_row">
                                    <div className="addproject_mapping_col1">
                                        <label className='label'>start Date *</label>
                                        <div className="addproject_mapping_input_container">
                                            {/* <AiIcons.BsCalendarDate className='usericons'/> */}
                                            <input type='Date' className='input_date_textboxes' />
                                        </div>
                                    </div>
                                    <div className="addproject_mapping_col2">
                                        <label className='label'>End Date *</label>
                                        <div className="addproject_mapping_input_container">
                                            {/* <AiIcons.BsCalendarDate className='usericons'/> */}
                                            <input type='date' className='input_date_textboxes' />
                                        </div>
                                    </div>

                                </div>
                                <div className="addproject_mapping_form_row">
                                    <div className="addproject_mapping_col1">
                                        <label className='label'>Status *</label>
                                        <div className="addproject_mapping_radio_container">
                                            <input type='radio' className='rbtn1' name='radio'  />Enable
                                            <input type= 'radio' className='rbtn2'name='radio' />Disable
                                        </div>
                                    </div>
                                    

                                </div>
                                <div className="addproject_mapping_submittingpart">
                                    <div className='project_mapping_btn_inner'>
                                    
                                        <input type='button' value='Cancel' className='cnclebtn'/>
                                   
                                   
                                        <input type='button' value='Save' className='addbtn' />
                                        </div>

                                   

                                </div>
                                                    
                            </div>
                        </form>
                    </div>
                </div>
            </div>
      </AdminLayout_rms>
      
  )
    
}

export default Addprojectmapping;
