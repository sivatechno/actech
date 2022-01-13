import React, {useState,useEffect} from 'react'
import './Dashboard.scss';
import * as AiIcons from 'react-icons/all'
import ProjectView from './Popup/Projectview';
import AssociateView from './Popup/Associateview';
import axios from 'axios';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '55%',
        left: '57%',
        width: '60%',
        height: '75%',
       // right: 'auto',
        bottom: 'auto',
       // marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'transparent',
        outline: 'none',
        border: 'none'
    },

};

function Dashboard() {
    const [listOfMentors, setListOfMentors] = useState([0]);
    const [associatesetlistOfMentors, associatesetListOfMentors] = useState([0]);
    const[projectmodalIsOpen,projectsetModal] = useState(false);
    const[associatemodalIsOpen,associatesetModal] = useState(false);

    
    
    useEffect(() => {
        axios.get("http://localhost:5000/project/count").then((response) => {
            setListOfMentors(response.data);
            
        });
    }, []);

    useEffect(() => {
        axios.get("http://localhost:5000/associateprofile/count").then((response) => {
            associatesetListOfMentors(response.data);
            
        });
    }, []);

    return (
        <div>
              <Modal isOpen={projectmodalIsOpen}
                                style={customStyles}
                                contentLabel="Example Modal" >
                                    {<ProjectView CloseModal={projectsetModal}/>}
                               
                            </Modal>
                            <Modal isOpen={associatemodalIsOpen}
                                style={customStyles}
                                contentLabel="Example Modal" >
                                    {<AssociateView CloseModal={associatesetModal}/>}
                               
                            </Modal>  
            <div className='dashboard_overall-contain'>
                <div className='dashboard_inner_contain'>
                    <div className='dashboard_inner_card_contain'>
                        <div className='dashboard_inner_cards'  onClick={()=>{projectsetModal(true);}}  >
                            <div className='dashboard_inner_side_head'>
                                <p className='dashboard_inner_side_heading'>PROJECT_INFO</p>
                            </div>
                            <div className='dashboard_inner_side_count'>
                                <div className='dashboard_inner_side_heading_count'>
                                    <p className='dashboard_inner_count'>COUNT</p>
                                </div>                                                                                        
                                    <p className='dashboard_innercounting'>{listOfMentors}</p>
                                <div className='dashboard_inner_icon'>
                                    <AiIcons.MdOutlineDoubleArrow className='dashboard_icons'/>
                                </div>
                            </div>
                        </div>
                        <div className='dashboard_inner_cards' onClick={()=>{associatesetModal(true);}} >
                            <div className='dashboard_inner_side_head'>
                                <p className='dashboard_inner_side_heading'>ASSOCIATE_INFO</p>
                            </div>
                            <div className='dashboard_inner_side_count'>
                                <div className='dashboard_inner_side_heading_count'>
                                    <p className='dashboard_inner_count'>COUNT</p>
                                </div>
                                <p className='dashboard_innercounting'>{associatesetlistOfMentors}</p>
                                <div className='dashboard_inner_icon'>
                                    <AiIcons.MdOutlineDoubleArrow className='dashboard_icons'/>
                                </div>
                            </div>
                        </div>
                        <div className='dashboard_inner_cards'>
                            <div className='dashboard_inner_side_head'>
                                <p className='dashboard_inner_side_heading'>ALLOCATED_INFO</p>
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
                                <p className='dashboard_inner_side_heading'>UNALLOCATED INFO</p>
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
                                <p className='dashboard_inner_side_heading'>BILLABLE_INFO</p>
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
                                <p className='dashboard_inner_side_heading'>NON-BILLABLE INFO</p>
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
                                <p className='dashboard_inner_side_heading'>HARD-BLOCK INFO</p>
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
                                <p className='dashboard_inner_side_heading'>SOFT-BLOCK info</p>
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
                                <p className='dashboard_inner_side_heading'>REPORT</p>
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
            {/* {modalIsOpen && <Popup   CloseModal={setModalIsOpen}/>} */}
            
        </div>
    )
}

export default Dashboard