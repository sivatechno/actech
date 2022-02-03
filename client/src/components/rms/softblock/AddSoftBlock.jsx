import React from 'react';
import './AddSoftBlock.scss';
import * as AiIcons from 'react-icons/all';

function AddSoftBlock({closeModule}) {
  return (
    <div>
    <div className='addsoft_overall_div'>
    <div className="add_soft_overall"> 
        <div className="add_soft_inner">
            <div className="add_soft_head">
            <p className="add_soft_header">ADD soft Block</p>
                 < AiIcons.CgClose className="add_soft_close" onClick={()=>{ closeModule(false)}} />
                 </div>
                 <form>
             <div className="add_soft_inner_body">
             <div className="add_soft_content" >
                      <p className="add_soft_text">Name*</p><br />
                      <div className="add_soft_field_contain">
                  <div className="add_soft_feild">
                    
                       <i><AiIcons.FaRegUserCircle className="add_soft_icons"/></i>
                      <input type="text" className="textfield" placeholder="Name" required name="softname" />                 
                  </div>
                  </div>
                  
                  </div>
                  
                  <div className="add_soft_content" >
                      <p className="add_soft_text">Email*</p><br />
                      <div className="add_soft_field_contain">
                  <div className="add_soft_feild">
                      <i><AiIcons.SiMicrosoftoffice className="add_soft_icons"/></i>
                      <input type="text" className="textfield" placeholder="Email" required name='companyname'/>
                  </div>
                  </div>
        
                  </div>

             </div>
             <div className="add_soft_inner_body">
             <div className="add_soft_content" >
                      <p className="add_soft_text">Technology*</p><br />
                      <div className="add_soft_field_contain">
                  <div className="add_soft_feild">
                      <i><AiIcons.SiGmail className="add_soft_icons"/></i>
                      <input type="email" className="textfield" placeholder="technology" required name='softemail' />
                  </div>
                  </div>
                  
                  </div>
                  <div className="add_soft_content" >
                      <p className="add_soft_text">Project*</p><br />
                      <div className="add_soft_field_contain">
                  <div className="add_soft_feild">
                      <i><AiIcons.MdOutlineLocalPhone className="add_soft_icons"/></i>
                      <input type="text" className="textfield" placeholder="contact" required name='contact'  />
                  </div>
                  </div>
                  
                  </div>

             </div>
            
             <div className="add_soft_buttons">
                 <button className="soft_cancel_btn" onClick={()=>{ closeModule(false)}}>Cancel</button>
                 <button className="soft_add_btn">Add softBlock</button>
             </div>
             </form>
            
        </div>
        
        
    </div>
    </div>
    </div>

  );
}

export default AddSoftBlock;