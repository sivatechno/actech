import React, {useState} from 'react'
import './Dashboard.scss';
import * as AiIcons from 'react-icons/all'
import Modal from 'react-modal';
import Projecttable from './projectviewtable';
import Popup from './Popup'


const customStyles = {
    content: {
        top: '50%',
        left: '60%',
        width: '60%',
        height: '70%',
       // right: 'auto',
        bottom: 'auto',
       // marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },

};
const close_icon = {
    height: '20px',
    width: '20px',
    border: 'solid 1px #242424',
    float : 'right',
   // margin: '-5px 0px',

}
function Dashboard() {
    const[modalIsOpen,setModalIsOpen] = useState(false);
    
    // function openModal(){
    //     setModalIsOpen(true);
    // }
    // function closeModal(){
    //     setModalIsOpen(false);
    //     console.log("hello")
    // }

    return (
        <div>
            <div className='dashboard_overall-contain'>
                <div className='dashboard_inner_contain'>
                    <div className='dashboard_inner_card_contain'>
                        <div className='dashboard_inner_cards'  onClick={()=>{setModalIsOpen(true);}}  >
                            <div className='dashboard_inner_side_head'>
                                <p className='dashboard_inner_side_heading'>PROJECT_INFO</p>
                            </div>
                            <div className='dashboard_inner_side_count'>
                                <div className='dashboard_inner_side_heading_count'>
                                    <p className='dashboard_inner_count'>COUNT</p>
                                </div>
                                <p className='dashboard_innercounting'>20</p>
                                <div className='dashboard_inner_icon'>
                                    <AiIcons.MdOutlineDoubleArrow className='dashboard_icons'/>
                                </div>
                            </div>
                            {/* <Modal isOpen={modalIsOpen}
                                style={customStyles} >

                                <div style={close_icon} >
                                    <AiIcons.CgClose onClick = {closeModal} />
                                </div>
                                
                                
                                <Projecttable />
                                {/* <div>
                                    <button style={close_icon} onClick={()=>setModalIsOpen(false)}>X</button>
                                </div> */}
                            {/* </Modal> */} 
                        </div>
                        <div className='dashboard_inner_cards'>
                            <div className='dashboard_inner_side_head'>
                                <p className='dashboard_inner_side_heading'>PROJECT INFO</p>
                            </div>
                            <div className='dashboard_inner_side_count'>
                                <div className='dashboard_inner_side_heading_count'>
                                    <p className='dashboard_inner_count'>COUNT</p>
                                </div>
                                <p className='dashboard_innercounting'>20</p>
                                <div className='dashboard_inner_icon'>
                                    <AiIcons.MdOutlineDoubleArrow className='dashboard_icons'/>
                                </div>
                            </div>
                        </div>
                        <div className='dashboard_inner_cards'>
                            <div className='dashboard_inner_side_head'>
                                <p className='dashboard_inner_side_heading'>Associate info</p>
                            </div>
                            <div className='dashboard_inner_side_count'>
                                <div className='dashboard_inner_side_heading_count'>
                                    <p className='dashboard_inner_count'>COUNT</p>
                                </div>
                                <p className='dashboard_innercounting'>20</p>
                                <div className='dashboard_inner_icon'>
                                    <AiIcons.MdOutlineDoubleArrow className='dashboard_icons'/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='dashboard_inner_card_contain'>
                        <div className='dashboard_inner_cards'>
                            <div className='dashboard_inner_side_head'>
                                <p className='dashboard_inner_side_heading'>Allocated INFO</p>
                            </div>
                            <div className='dashboard_inner_side_count'>
                                <div className='dashboard_inner_side_heading_count'>
                                    <p className='dashboard_inner_count'>COUNT</p>
                                </div>
                                <p className='dashboard_innercounting'>20</p>
                                <div className='dashboard_inner_icon'>
                                    <AiIcons.MdOutlineDoubleArrow className='dashboard_icons'/>
                                </div>
                            </div>
                        </div>
                        <div className='dashboard_inner_cards'>
                            <div className='dashboard_inner_side_head'>
                                <p className='dashboard_inner_side_heading'>UnAllocated INFO</p>
                            </div>
                            <div className='dashboard_inner_side_count'>
                                <div className='dashboard_inner_side_heading_count'>
                                    <p className='dashboard_inner_count'>COUNT</p>
                                </div>
                                <p className='dashboard_innercounting'>20</p>
                                <div className='dashboard_inner_icon'>
                                    <AiIcons.MdOutlineDoubleArrow className='dashboard_icons'/>
                                </div>
                            </div>
                        </div>
                        <div className='dashboard_inner_cards'>
                            <div className='dashboard_inner_side_head'>
                                <p className='dashboard_inner_side_heading'>Billable INFO</p>
                            </div>
                            <div className='dashboard_inner_side_count'>
                                <div className='dashboard_inner_side_heading_count'>
                                    <p className='dashboard_inner_count'>COUNT</p>
                                </div>
                                <p className='dashboard_innercounting'>20</p>
                                <div className='dashboard_inner_icon'>
                                    <AiIcons.MdOutlineDoubleArrow className='dashboard_icons'/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='dashboard_inner_card_contain'>
                        <div className='dashboard_inner_cards'>
                            <div className='dashboard_inner_side_head'>
                                <p className='dashboard_inner_side_heading'>Non-Billable INFO</p>
                            </div>
                            <div className='dashboard_inner_side_count'>
                                <div className='dashboard_inner_side_heading_count'>
                                    <p className='dashboard_inner_count'>COUNT</p>
                                </div>
                                <p className='dashboard_innercounting'>20</p>
                                <div className='dashboard_inner_icon'>
                                    <AiIcons.MdOutlineDoubleArrow className='dashboard_icons'/>
                                </div>
                            </div>
                        </div>
                        <div className='dashboard_inner_cards'>
                            <div className='dashboard_inner_side_head'>
                                <p className='dashboard_inner_side_heading'>Hard-Block info</p>
                            </div>
                            <div className='dashboard_inner_side_count'>
                                <div className='dashboard_inner_side_heading_count'>
                                    <p className='dashboard_inner_count'>COUNT</p>
                                </div>
                                <p className='dashboard_innercounting'>20</p>
                                <div className='dashboard_inner_icon'>
                                    <AiIcons.MdOutlineDoubleArrow className='dashboard_icons'/>
                                </div>
                            </div>
                        </div>
                        <div className='dashboard_inner_cards'>
                            <div className='dashboard_inner_side_head'>
                                <p className='dashboard_inner_side_heading'>Soft-Block info</p>
                            </div>
                            <div className='dashboard_inner_side_count'>
                                <div className='dashboard_inner_side_heading_count'>
                                    <p className='dashboard_inner_count'>COUNT</p>
                                </div>
                                <p className='dashboard_innercounting'>20</p>
                                <div className='dashboard_inner_icon'>
                                    <AiIcons.MdOutlineDoubleArrow className='dashboard_icons'/>
                                </div>
                            </div>
                        </div>
                    </div> 
                   
                                                                              
                </div>
                
            </div>
            {modalIsOpen && <Popup   CloseModal={setModalIsOpen}/>}
            
        </div>
    )
}

export default Dashboard
