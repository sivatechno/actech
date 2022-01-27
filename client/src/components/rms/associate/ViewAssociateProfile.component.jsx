import React from 'react'
import './ViewAssociateProfile.component.scss'
import * as AiIcons from 'react-icons/all';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import AddAssociateProfile from  './AddAssociateProfile.component'
import UpdateAssociateProfile from './UpdateAssociateProfile.component';
import config from '../../config/config'

const customStyles = {
    content: {
         left: '20%',
         right: '10%',
    },
};
function ViewAssociateProfile() {
   const [listOfAssociateProfiles, setListOfAssociateProfiles] = useState([]);   
   
    const apiURL = config.API_URL;
    let history = useNavigate();

    const [modalIsOpen, setIsOpen] = useState(false);
    const [modalUpdateIsOpen, setUpdateIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
    function openUpdateModal() {
        setUpdateIsOpen(true);
    }

    function closeUpdateModal() {
        setUpdateIsOpen(false);
    }
    const deleteAssociateProfile = (id, e) => {
        console.log(id);
        axios.delete(`http://localhost:5000/associateprofile/delete/${id}`).then((response) => {
            //response.json("deleted successfully");
            history.push("/viewassociateprofile")
        });
    };
    useEffect(() => {
        axios.get("http://localhost:5000/associateprofile/viewassociateprofile").then((response) => {
            setListOfAssociateProfiles(response.data);
            // console.log(response.data);
        });
    }, []);
    console.log(listOfAssociateProfiles);
    return (
        <div className="associateprofile_container">
            <div className="associate_header">
                <div className="associate_title">
                    <h3>AssociateProfile</h3>
                </div>
                <div className="add_profile">
                    <button className="associate_button_click"  onClick={()=>{setIsOpen(true);}}>Add Profile</button>
                </div>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                ariaHideApp={false}
                contentLabel="Example Modal"
            >
                {modalIsOpen &&<AddAssociateProfile closeModel={setIsOpen}/>}
            </Modal>
            <div className="associate_table_container">
                <table  className='associate_table' >
                    <tr className="associate_table_row_head">
                        <th>Name</th>
                        <th>Email</th>
                        <th>Highest Qualification</th>
                        <th>Primary Skill</th>
                        <th>Secondary Skill</th>
                        <th>Actions</th>
                    </tr>
                    <tr>
                    </tr>
                    {/* {listOfMentors.map((value,key) =>{
                    return <div>{value.username}</div>
                })} */}
                    {listOfAssociateProfiles.length > 0 && listOfAssociateProfiles.map((value, key)=> {
                    return (
                            <tr className="associate_table_row">
                                 <td className="associate_namecol">{value.firstname} {value.lastname}</td>
                                  <td className="associate_emailcol">{value.email}</td>
                                {/* <td>{value.role}</td> */}
                                   <td>{value.qualification}</td>
                                   <td>{value.primaryskill}</td>
                                   <td>{value.secondaryskill}</td>
                                <td>
                                    <Link to={`/editviewassociateprofile/${value.id}`}>
                                        <div className="associate_table_icons"><AiIcons.GrEdit onClick={()=>{setUpdateIsOpen(true);}} className="associate_icons_align" />
                                        </div>
                                    </Link>
                                    <Modal
                                           isOpen={modalUpdateIsOpen}
                                           onRequestClose={closeUpdateModal}
                                           style={customStyles}
                                           ariaHideApp={false}
                                           contentLabel="Example Modal2"
                                        >
                                        {modalUpdateIsOpen &&<UpdateAssociateProfile closeModelUpdate={setUpdateIsOpen}/>}
                                    </Modal>
                                        <div className="associate_table_icons"><AiIcons.MdDelete className="associate_icons_align_delete"
                                            onClick={(e) => deleteAssociateProfile(value.id, e)}
                                        /></div>
                                    
                                    {/* <Link to={`/profileviewassociateprofile/${value.id}`} className="table_icons"><AiIcons.BsFillEyeSlashFill className="icons_align" /></Link> */}
                                </td>
                            </tr>
                        )
                    })}
                </table>
            </div>
        </div>
    )
}

export default ViewAssociateProfile;
