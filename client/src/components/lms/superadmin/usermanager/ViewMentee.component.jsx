import React from 'react'
import * as AiIcons from 'react-icons/all';
import "./ViewMentee.component.scss";
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Modal from 'react-modal';
import AddMentee from './AddMentee.component';
import config from '../../../config/config';
import UpdateProfileViewMentee from './UpdateProfileMentee.component'
import DeletePopupMentee from './DeletePopupMentee.component';
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
toast.configure()


const customStyles = {
    content: {
        top: '50%',
        left: '60%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        
        outline:'none',
        border:'none',
    },
};

const Styles = {
    content: {
        top: '55%',
        left: '60%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        height:'95%',
        background:'transparent',
        outline:'none',
        border:'none',
        
    },
   
};
const custstyles= {
    content: {
        top: '40%',
        left: '60%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        background:'transparent',
        outline:'none',
        border:'none',
        width:'80%',
        overflow:'hidden',
        
    },
   
};

function ViewMentee() {
    const apiURL=config.API_URL;

    const [editpopup,setEditpopup]= useState(false);

    const [deletepopup,setDeletepopup] = useState(false);

    const history = useNavigate();

    const [listofMentees, setListOfMentees] = useState([]);

    const [modalIsOpen, setIsOpen] = useState(false);

    const notify = ()=>{toast.error('Deleted Successfully',{position: toast.POSITION.TOP_CENTER})}

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const deleteMentee = (id, e) => {
        console.log(id);
        axios.delete(`http://localhost:5000/mentee/delete/${id}`).then((response) => {
            response.json("deleted successfully");
            history.push("/viewmentee");
        });
        notify(true);
    };

    useEffect(() => {
        axios.get("http://localhost:5000/mentee/viewmentee").then((response) => {
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
                style={customStyles}
                contentLabel="Example Modal"
            >
                {listofMentees  && <AddMentee closeModule={setIsOpen} />}
            </Modal>
            <div className="table_container">
                <table cellSpacing="10px" >
                    <tr className="table_row_head">
                        {/* <th>Avatar</th> */}
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
                                {/* <td className="avatarcol"></td> */}
                                <td className="namecol">{value.firstname} {value.lastname}</td>
                                <td className="emailcol">{value.email}</td>
                                <td>{value.company}</td>
                                <td>{value.technology}</td>
                                <td>{value.phonenumber}</td>
                                <td>
                                  {/* <Link to={`/editprofileviewmentee/${value.id}`}> */}
                                    <div className="table_icons"><AiIcons.GrEdit className="icons_align" onClick={()=>{setEditpopup(true);}}/></div>
                                    <Modal
                                             isOpen={editpopup}
                                            onRequestClose={closeModal}
                                            style={Styles}
                                            contentLabel="Example Modal"
                                            >                
                                            {  <UpdateProfileViewMentee closeModule={setEditpopup} />}
                                        </Modal>
                                    {/* </Link> */}
                                    
                                    {/* <Link to={"/viewmentee"}> */}
                                        <div className="table_icons"><AiIcons.MdDelete className="icons_align_delete"
                                            onClick={(e) => deleteMentee(value.id, e)}
                                        /></div>
                                    {/* </Link> */}
                                    {/* <div className="table_icons"><AiIcons.MdDelete className="icons_align_delete" onClick={()=>{setDeletepopup(true);}}
                                            
                                            /></div>
                                            <Modal
                                                 isOpen={deletepopup}
                                                onRequestClose={closeModal}
                                                style={custstyles}
                                                contentLabel="Example Modal"
                                                >                
                                                {  <DeletePopupMentee closeModule={setDeletepopup} />}
                                            </Modal> */}
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
