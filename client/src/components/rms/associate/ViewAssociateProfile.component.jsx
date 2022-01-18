import React from 'react'
import './ViewAssociateProfile.component.scss'
import * as AiIcons from 'react-icons/all';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import AddAssociateProfile from  './AddAssociateProfile.component'
import config from '../../config/config';


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

   function openModal() {
       setIsOpen(true);
   }

   function closeModal() {
       setIsOpen(false);
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
       <div className="viewmentor_container" >
           <div className="view_header">
               <div className="view_title">
                   <h3>View AssociateProfile</h3>
               </div>
               <div className="add_staff">
                   <button className="button_click" onClick={openModal}>Add Profile</button>
               </div>
           </div>
           <Modal
               isOpen={modalIsOpen}
               onRequestClose={closeModal}
               style={customStyles}
               ariaHideApp={false}
               contentLabel="Example Modal"
           >
               <AddAssociateProfile closeModel={setIsOpen} />
           </Modal>
           <div className="table_container">
               <table cellSpacing="10px" >
                   <tr className="table_row_head">
                       <th className="namehead">Name</th>
                       <th className="emailhead">Email</th>
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
                           <tr className="table_row">
                                <td className="namecol">{value.firstname} {value.lastname}</td>
                                 <td className="emailcol">{value.email}</td>
                               {/* <td>{value.role}</td> */}
                                  <td>{value.qualification}</td>
                                  <td>{value.primaryskill}</td>
                                  <td>{value.secondaryskill}</td>
                               <td>
                                   <Link to={`/editviewassociateprofile/${value.id}`}>
                                       <div className="table_icons"><AiIcons.GrEdit className="icons_align" /></div>
                                   </Link>
                                 
                                       <div className="table_icons"><AiIcons.MdDelete className="icons_align_delete"
                                           onClick={(e) => deleteAssociateProfile(value.id, e)}
                                       /></div>
                                 
                                   <Link to={`/profileviewassociateprofile/${value.id}`} className="table_icons"><AiIcons.BsFillEyeSlashFill className="icons_align" /></Link>
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
