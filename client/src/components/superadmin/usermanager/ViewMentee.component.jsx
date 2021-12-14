import React from 'react'
import * as AiIcons from 'react-icons/all';
import "./ViewMentee.component.scss";
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Modal from 'react-modal';
import AddMentee from './AddMentee.component';
import config from '../../config/config';


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
    const apiURL=config.API_URL;

    const history = useNavigate();

    const [listofMentees, setListOfMentees] = useState([]);

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const deleteMentee = (id, e) => {
        console.log(id);
        axios.delete(`${apiURL}/mentee/delete/${id}`).then((response) => {
            response.json("deleted successfully");
            history.push("/viewmentee");
        });
    };

    useEffect(() => {
        axios.get(`${apiURL}/mentee/viewmentee`).then((response) => {
            setListOfMentees(response.data);

        });
    }, []);
    console.log(listofMentees);
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
                    <tr className="table_row_head">
                        <th>Name</th>
                        <th>Email</th>
                        <th>Company</th>
                        <th>Technology</th>
                        <th>Contact Number</th>
                        <th>Actions</th>
                    </tr>

                    {listofMentees.length > 0 && listofMentees.map((value, key) => {
                        return (

                            <tr className="table_row">
                                <td className="namecol">{value.firstname} {value.lastname}</td>
                                <td className="emailcol">{value.email}</td>
                                <td>{value.company}</td>
                                <td>{value.technology}</td>
                                <td>{value.phonenumber}</td>
                                <td>
                                    <div className="table_icons"><AiIcons.GrEdit className="icons_align" /></div>
                                    <Link to={"/viewmentee"}>
                                        <div className="table_icons"><AiIcons.MdDelete className="icons_align_delete"
                                            onClick={(e) => deleteMentee(value.id, e)}
                                        /></div>
                                    </Link>
                                    <Link to={`/profileviewmentee/${value.id}`} className="table_icons"><AiIcons.BsFillEyeSlashFill className="icons_align" /></Link>
                                </td>
                            </tr>
                        )
                    })}
                </table>

            </div>
        </div>
    )
}

export default ViewMentee;
