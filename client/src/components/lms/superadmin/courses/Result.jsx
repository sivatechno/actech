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


    const deleteMentor = (id, e) => {
        console.log(id);
        axios.delete(`http://localhost:5000/mentorsOne/delete/${id}`).then((response) => {
            response.json("deleted successfully");
            history.push("/viewmentors")
        });
    };

    useEffect(() => {
        axios.get("http://localhost:5000/mentorsOne/viewmentors").then((response) => {
            setListOfMentors(response.data);
            // console.log(response.data);
        });
    }, []);

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
            <div className="tablecontainer">
                <table cellSpacing="10px" >
                    <tr className="table_row_head">
                        <th >User Name</th>
                        <th >Exam Title</th>
                        <th>Score</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>

                    {/* {listOfMentors.map((value,key) =>{
                    return <div>{value.username}</div>
                })} */}
                    {listOfMentors && listOfMentors.map((value, key) => {
                        return (


                            <tr className="table_row">
                                 <td className="namecol">{value.firstname} {value.lastname}</td>
                                <td className="emailcol">{value.email}</td>
                                <td>{value.role}</td>
                                <td>{value.phonenumber}</td>
                                <td>
                                    <Link to={`/editprofileviewmentor/${value.id}`}>
                                        <div className="table_icons"><AiIcons.GrEdit className="icons_align" /></div>
                                    </Link>
                                    <Link to={"/"}>
                                        <div className="table_icons"><AiIcons.MdDelete className="icons_align_delete"
                                            onClick={(e) => deleteMentor(value.id, e)}
                                        /></div>
                                    </Link>
                                    <Link to={`/profileviewmentor/${value.id}`} className="table_icons"><AiIcons.BsFillEyeSlashFill className="icons_align" /></Link>
                                </td>
                            </tr>


                        )
                    })}
                </table>
            </div>
        </div>
    )
}

export default ViewProjects;
