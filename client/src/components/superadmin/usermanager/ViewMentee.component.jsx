import React from 'react'
import * as AiIcons from 'react-icons/all';
// import * as FiIcons from 'react-icons/all';
import "./ViewMentee.component.scss";
;
import axios from 'axios';
import { useEffect , useState } from 'react';
import {useNavigate} from 'react-router-dom';
import Modal from 'react-modal';
import AddMentee from './AddMentee.component';


const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

function ViewMentee() {

    const history=useNavigate(); 
    
    const [listofMentees,setListOfMentees] = useState([]);

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
      }

      function closeModal() {
        setIsOpen(false);
      }



    useEffect(() =>{
        axios.get("http://localhost:5000/mentee/viewmentee").then((response) =>{
            setListOfMentees(response.data);
        });
    });
    return (
        <div className="parent_container">
            <div className="view_header">
                <div className="view_title">
                    <h3>View Mentee</h3>
                </div>
                <div className="add_staff">
                    <button className="button_click" onClick={openModal}>Add Mentee</button>
                </div>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <AddMentee />
          </Modal>
            <div className="table_container">                
                <table cellSpacing="10px" >
                    <tr className="table_row">
                        <th>Name</th>
                        <th>Email</th>
                        <th>Company</th>
                        <th>Technology</th>
                        <th>Contact Number</th>
                        <th>Actions</th>
                    </tr>
                </table>
                    {listofMentees && listofMentees.map((value,key) =>{
                               return(
                                   <div>
                                        <table cellSpacing="10px">
                                            <tr className="table_row">
                                                <td>{value.first_name} {value.last_name}</td>
                                                <td>{value.email}</td>
                                                <td>{value.role}</td>
                                                <td>{value.role}</td>
                                                <td>
                                                    <div className="table_icons"><AiIcons.GrEdit className="icons_align"/></div>
                                                    <div className="table_icons"><AiIcons.MdDelete className="icons_align_delete"/></div>
                                                    <div className="table_icons" ><AiIcons.BsFillEyeSlashFill className="icons_align"/></div>
                                                </td>
                                            </tr>
                                        </table>
                                    </div>   
                               )
                           })}
            
            </div>
        </div>
    )
}

export default ViewMentee;
