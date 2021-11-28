import React from 'react'
import './ViewMentor.component.scss'
import * as AiIcons from 'react-icons/all';
import axios from 'axios';
import { useEffect , useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import Modal from 'react-modal';
import AddMentor from './AddMentor.component';

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
function ViewMentor() {
    const [listofMentors,setListOfMentors] = useState([]);

    const history=useNavigate(); 

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
      }

      function closeModal() {
        setIsOpen(false);
      }

      function handleClick(){
        history.push(`/profileviewmentor`)
      }

    const deleteMentor = (id)=>{
        axios.delete(`http://localhost/mentorsOne/${id}`).then((response)=>{
            response.json("deleted successfully")
        })
    }

    useEffect(() =>{
        axios.get("http://localhost:5000/mentorsOne/viewmentors").then((response) =>{
            setListOfMentors(response.data);
        });
    });
    return (
        <div className="parent_container">
            <div className="view_header">
                <div className="view_title">
                    <h3>View Mentor</h3>
                </div>
                <div className="add_staff">
                    <button className="button_click" onClick={openModal}>Add Mentor</button>
                </div>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <AddMentor />
          </Modal>
            <div className="table_container">                
                <table cellSpacing="10px" >
                    <tr className="table_row">
                        <th>Name</th>
                        <th>Email</th>
                        <th>Access Level</th>
                        <th>Contact Number</th>
                        <th>Actions</th>
                    </tr>
                </table>
                    {listofMentors.map((value,key) =>{
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
                                                    <div className="table_icons"><AiIcons.MdDelete className="icons_align_delete"
                                                    onClick={deleteMentor}
                                                    /></div>
                                                    <Link to={`/profileviewmentor/${value.id}`} className="table_icons"><AiIcons.BsFillEyeSlashFill className="icons_align"/></Link>
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

export default ViewMentor;
