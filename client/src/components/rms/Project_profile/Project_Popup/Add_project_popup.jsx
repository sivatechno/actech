import React from 'react';
import './Add_project_popup.scss'
import check from '../../../assets/images/checked.png'

function Add_project_popup({close}) {
  return( 
  <div>
      <div className='add_proj_popup_overall_contain'>
          <img src={check} className="add_proj_popup_check_img" alt="" />
          <p className='add_proj_popup_text'>SUCCESS !</p>
            <div className='add_proj_popup_btn'>
          <button className='add_proj_popup_ok_btn' onClick={()=>close(false)}>OK</button>
          </div>

          

      </div>
  </div>
);
}

export default Add_project_popup;
