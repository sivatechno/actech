import React from 'react'
import './exam.scss'
import AddExam from './AddExam';
import * as AiIcons from 'react-icons/all';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
//import AddMentor from './AddMentor.component';

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
function Viewexam() {
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
                    <h3>View Exams</h3>
                </div>
                <div className="add_exam">
                    <button className="button_click" onClick={openModal}>Add Exams</button>
                </div>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <AddExam />
            </Modal>
            <div class="sec2">
                    <select class="selectinput1" placeholder="--select Courses--">
                        <option value="0">--select Courses--</option>
                        <option value="1"></option>
                        <option value="2"></option>
                    </select>
                    <select class="selectinput2">
                        <option value="0">Items Per Page</option>
                        <option value="1"></option>
                        <option value="2"></option>
                    </select>
                    <select class="selectinput3">
                        <option value="0">Go To</option>
                        <option value="1"></option>
                        <option value="2"></option>
                    </select>
                </div>
            <div className="tablecontainer">
                <table cellSpacing="10px" >
                    <tr className="table_row_head">
                        <th className="namehead">Exam ID</th>
                        {/* <th className="emailhead">Email</th> */}
                        <th>Course ID</th>
                        <th>Exam Description</th>
                        <th>Duration</th>
                        <th>Status</th>
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

export default Viewexam;
