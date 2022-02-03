import React from 'react';
import './AddHardBlock.scss';
import * as AiIcons from 'react-icons/all';

function AddHardBlock({closeModule}) {
  return (
    <div>
    <div className='addhard_overall_div'>
    <div className="add_hard_overall"> 
        <div className="add_hard_inner">
            <div className="add_hard_head">
            <p className="add_hard_header">ADD Hard Block</p>
                 < AiIcons.CgClose className="add_hard_close" onClick={()=>{ closeModule(false)}} />
                 </div>
                 <form>
             <div className="add_hard_inner_body">
             <div className="add_hard_content" >
                      <p className="add_hard_text">Name*</p><br />
                      <div className="add_hard_field_contain">
                  <div className="add_hard_feild">
                    
                       <i><AiIcons.FaRegUserCircle className="add_hard_icons"/></i>
                      <input type="text" className="textfield" placeholder="Name" required name="hardname" />                 
                  </div>
                  </div>
                  
                  </div>
                  
                  <div className="add_hard_content" >
                      <p className="add_hard_text">Email*</p><br />
                      <div className="add_hard_field_contain">
                  <div className="add_hard_feild">
                      <i><AiIcons.SiMicrosoftoffice className="add_hard_icons"/></i>
                      <input type="text" className="textfield" placeholder="Email" required name='companyname'/>
                  </div>
                  </div>
        
                  </div>

             </div>
             <div className="add_hard_inner_body">
             <div className="add_hard_content" >
                      <p className="add_hard_text">Technology*</p><br />
                      <div className="add_hard_field_contain">
                  <div className="add_hard_feild">
                      <i><AiIcons.SiGmail className="add_hard_icons"/></i>
                      <input type="email" className="textfield" placeholder="technology" required name='hardemail' />
                  </div>
                  </div>
                  
                  </div>
                  <div className="add_hard_content" >
                      <p className="add_hard_text">Project*</p><br />
                      <div className="add_hard_field_contain">
                  <div className="add_hard_feild">
                      <i><AiIcons.MdOutlineLocalPhone className="add_hard_icons"/></i>
                      <input type="text" className="textfield" placeholder="contact" required name='contact'  />
                  </div>
                  </div>
                  
                  </div>

             </div>
            
             <div className="add_hard_buttons">
                 <button className="hard_cancel_btn" onClick={()=>{ closeModule(false)}}>Cancel</button>
                 <button className="hard_add_btn">Add HardBlock</button>
             </div>
             </form>
            
        </div>
        
        
    </div>
    </div>
    </div>

  );
}

export default AddHardBlock;
