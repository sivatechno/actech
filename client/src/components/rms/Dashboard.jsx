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
        border: 'none',
        overflow: 'hidden'
    },

};

function Dashboard() {
    const [listOfMentors, setListOfMentors] = useState([0]);
    const [associatelistOfMentors, associatesetListOfMentors] = useState([0]);
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
            <div className='dashboard_inner_row_card_contain'>
                <div className='dashboard_inner_proj_card_outline' onClick={()=>{projectsetModal(true);}}>

                    <div className='dashboard_inner_proj_card_left'>
                        <p className='dashboard_inner_proj_card_left_text'>Project</p>
                    </div>
 
                    <div className='dashboard_inner_proj_card_right'>
                        <p className='dashboard_inner_proj_card_right_text'>COUNT</p>
                        <p className='dashboard_inner_proj_card_right_count'>{listOfMentors}</p>
                    </div>

                </div>

                <div className='dashboard_inner_asso_card_outline' onClick={()=>{associatesetModal(true);}}>

                    <div className='dashboard_inner_asso_card_left'>
                        <p className='dashboard_inner_asso_card_left_text'>Associate</p>
                    </div>
 
                    <div className='dashboard_inner_asso_card_right'>
                        <p className='dashboard_inner_asso_card_right_text'>COUNT</p>
                        <p className='dashboard_inner_asso_card_right_count'>{associatelistOfMentors}</p>
                    </div>

                </div>

                <div className='dashboard_inner_client_card_outline'>

                    <div className='dashboard_inner_client_card_left'>
                        <p className='dashboard_inner_client_card_left_text'>Client</p>
                    </div>
 
                    <div className='dashboard_inner_client_card_right'>
                        <p className='dashboard_inner_client_card_right_text'>COUNT</p>
                        <p className='dashboard_inner_client_card_right_count'>0</p>
                    </div>

                </div> 

            </div>

 {/* -------------------------------------------------------------------------------------------------------------------------------------------*/}
            <div className='dashboard_inner_row_card_contain'>

                <div className='dashboard_inner_allo_card_outline'>

                    <div className='dashboard_inner_allo_card_left'>
                        <p className='dashboard_inner_allo_card_left_text'>Allocated</p>
                    </div>

                    <div className='dashboard_inner_allo_card_right'>
                        <p className='dashboard_inner_allo_card_right_text'>COUNT</p>
                        <p className='dashboard_inner_allo_card_right_count'>0</p>
                    </div>

                </div>

                <div className='dashboard_inner_unallo_card_outline'>

                    <div className='dashboard_inner_unallo_card_left'>
                        <p className='dashboard_inner_unallo_card_left_text'>Un Allocated</p>
                    </div>

                    <div className='dashboard_inner_unallo_card_right'>
                        <p className='dashboard_inner_unallo_card_right_text'>COUNT</p>
                        <p className='dashboard_inner_unallo_card_right_count'>0</p>
                    </div>

                </div>

                <div className='dashboard_inner_bill_card_outline'>

                    <div className='dashboard_inner_bill_card_left'>
                        <p className='dashboard_inner_bill_card_left_text'>Billable</p>
                    </div>

                    <div className='dashboard_inner_bill_card_right'>
                        <p className='dashboard_inner_bill_card_right_text'>COUNT</p>
                        <p className='dashboard_inner_bill_card_right_count'>0</p>
                    </div>

                </div>
                  
            </div>

 {/* -------------------------------------------------------------------------------------------------------------------------------------------*/}

            <div className='dashboard_inner_row_card_contain'>
                <div className='dashboard_inner_non_bill_card_outline'>
                    <div className='dashboard_inner_non_bill_card_left'>
                        <p className='dashboard_inner_non_bill_card_left_text'>Non Billable</p>
                    </div>
                    <div className='dashboard_inner_non_bill_card_right'>
                        <p className='dashboard_inner_non_bill_card_right_text'>COUNT</p>
                        <p className='dashboard_inner_non_bill_card_right_count'>0</p>
                    </div>
                </div>
                <div className='dashboard_inner_hard_card_outline'>
                    <div className='dashboard_inner_hard_card_left'>
                        <p className='dashboard_inner_hard_card_left_text'>Hard Block</p>
                    </div>
                    <div className='dashboard_inner_hard_card_right'>
                        <p className='dashboard_inner_hard_card_right_text'>COUNT</p>
                        <p className='dashboard_inner_hard_card_right_count'>0</p>
                    </div>
                </div>
                <div className='dashboard_inner_soft_card_outline'>
                    <div className='dashboard_inner_soft_card_left'>
                        <p className='dashboard_inner_soft_card_left_text'>Soft Block</p>
                    </div>
                    <div className='dashboard_inner_soft_card_right'>
                        <p className='dashboard_inner_soft_card_right_text'>COUNT</p>
                        <p className='dashboard_inner_soft_card_right_count'>0</p>
                    </div>
                </div>
            </div>

                                                               
                               
            </div>
            {/* {modalIsOpen && <Popup   CloseModal={setModalIsOpen}/>} */}
            
        </div>
    )
}

export default Dashboard