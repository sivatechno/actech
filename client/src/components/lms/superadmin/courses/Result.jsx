import React from 'react'
import './Result.scss'
import * as AiIcons from 'react-icons/all';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
//import Modal from 'react-modal';
//import AddMentor from './AddMentor.component';

// const customStyles = {
//     content: {
//         top: '50%',
//         left: '50%',
//         right: 'auto',
//         bottom: 'auto',
//         marginRight: '-50%',
//         transform: 'translate(-50%, -50%)',
//     },
// };
function ViewProjects() {
    const [listOfMentors, setListOfMentors] = useState([]);

    let history = useNavigate();

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }



    return (
        <div className="main">
            <div className="view_header">
                <div className="view_title">
                    <h3>View Projects</h3>
                </div>
                {/* <div className="add_exam">
                    <button className="button_click" onClick={openModal}>Add Exams</button>
                </div> */}
            </div>
            {/* <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <AddMentor />
            </Modal> */}
            <div class="section2">
                    <select class="select1" placeholder="--select Courses--">
                        <option value="0">--select Courses--</option>
                        <option value="1"></option>
                        <option value="2"></option>
                    </select>
                    <select class="select2">
                        <option value="0">Select Exams</option>
                        <option value="1"></option>
                        <option value="2"></option>
                    </select>
                    {/* <select class="select3">
                        <option value="0">Go To</option>
                        <option value="1"></option>
                        <option value="2"></option>
                    </select> */}
                </div>
            <div className="table_container">
                <table cellSpacing="10px" >
                    <tr className="table_row_head">
                        <th >Question Title</th>
                        <th >Exam Name</th>
                        <th>Question Type</th>
                        <th>Marks</th>
                        <th>Actions</th>
                    </tr>

                    
                </table>
            </div>
        </div>
    )
}

export default ViewProjects;
