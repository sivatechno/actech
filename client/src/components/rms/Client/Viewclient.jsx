import React from 'react'
import * as AiIcons from 'react-icons/all';
import "./Viewclient.scss";
import {useEffect,useState} from 'react';
import Modal from 'react-modal';
import Addclient from './Addclient';
import {Link} from 'react-router-dom';
import axios from 'axios';
import  config from '../../config/config';

const customStyles = {
    content: {
        top: '54%',
        left: '58%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        height:'80%',
        width:'70%',
        background:'transparent',
        border:'none',
        outline:'none',
        overflow:'hidden',
    },

};


function ViewClient(){
    const apiURL = config.API_URL;
    const [listofClientprofile, setListofClientprofile] = useState([]);
    useEffect(() =>{
        axios.get(`${apiURL}/client/viewclient`).then((response)=>{
            setListofClientprofile(response.data);
        });
        

    },[]);
    console.log(listofClientprofile);
    const [modalIsOpen, setIsOpen] = useState(false);
   
    return (
        <div>

            <div className="client_profile_top">
                <p className="client_profile_headind_text">Client View</p>
                <button className="add_client_btn" onClick={()=>{setIsOpen(true);}} >ADD Client</button>
            </div>

            <Modal
                isOpen={modalIsOpen}
                style={customStyles}
                contentLabel="Example Modal">
                {<Addclient  closeModule={setIsOpen} />}
            </Modal>

            <div>
                
                <div className="client_profile_table_container">

                    <table  className="client_profile_table">

                        <thead>

                            <tr className="client_profile_table_head">
                                <th>Client Name</th>
                                <th>Email</th>
                                <th>Company</th>
                                <th>Start Date</th>
                                <th>End Date</th>
                                <th>Contact Number</th>
                                <th>Actions</th>
                            </tr>

                        </thead>

                        <tbody>

                            <tr className="client_profile_table_body">

                                <td>Bharath</td>
                                <td>Bhaarath...</td>
                                <td>Actech</td>
                                <td>2022-03-13</td>
                                <td >2022-04-12</td>
                                <td>345678789</td>
                                <td className="client_table_icons">
                                    <Link to={'/Editclient'}><AiIcons.MdEdit className="client_edit_icon" /></Link>
                                     <AiIcons.FaTrash className="client_tash_icon" /></td>

                            </tr>

                        </tbody>

                    </table>

                </div>

            </div>

        </div>
        
    )
};

export default ViewClient;
