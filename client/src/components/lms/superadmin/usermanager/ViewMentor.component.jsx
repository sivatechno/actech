import React from 'react'
import './ViewMentor.component.scss'
import _, { ceil, set } from 'lodash';
import * as AiIcons from 'react-icons/all';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import AddMentor from './AddMentor.component';
import UpdateProfileViewMentor from './UpdateProfileMentor.component';
import DeletePopup from './DeletePopup.component';
import config from '../../../config/config';
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
        outline: 'none',
        border: 'none',


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
        height: '95%',
        background: 'transparent',
        outline: 'none',
        border: 'none',

    },

};

const custstyles = {
    content: {
        top: '40%',
        left: '60%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        background: 'transparent',
        outline: 'none',
        border: 'none',
        width: '80%',
        overflow: 'hidden',

    },

};
function ViewMentor() {

    const apiURL = config.API_URL;

    const [editpopup, setEditpopup] = useState(false);

    const [deletepopup, setDeletepopup] = useState(false);

    const [listOfMentors, setListOfMentors] = useState([]);

    const [viewmentorpaginatedPosts,setviewmentorpaginatedPosts] = useState();

    const [token,setToken] = useState("")

    let history = useNavigate();

    const [modalIsOpen, setIsOpen] = useState(false);

    const notify = ()=>{toast.error('Deleted Successfully',{position: toast.POSITION.TOP_CENTER})}

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }


    const deleteMentor = (id, e) => {
        console.log(id);
        axios.delete(`${apiURL}/mentorsOne/delete/${id}`).then((response) => {
            response.json("deleted successfully");
            history.push("/viewmentors")
        });
        notify(true);
    };

    // useEffect(() => {
    //     setToken(localStorage.getItem("auth"))
    //     axios.get(`${apiURL}/mentorsOne/viewmentors`).then((response) => {
    //         setListOfMentors(response.data);
    //         // console.log(response.data);
    //         console.log(token)
    //     });
    // }, []);

    const [currentViewMentorPage,setcurrentViewMentorPage] = useState(1);

    useEffect(() => {
        axios.get(`${apiURL}/mentorsOne/viewmentors`).then((response) => {
            setListOfMentors(response.data);
            setviewmentorpaginatedPosts(_(response.data).slice(0).take(viewmentorpageSize).value());
        });
    }, []);

    const viewmentorpageSize=7;
    console.log(Math)
    const viewmentorpageCount=listOfMentors?Math.ceil(listOfMentors.length/viewmentorpageSize):1;

    const viewmentorpages = _.range(1, viewmentorpageCount+1);

    const Viewmentorpagination =(pageNo)=>{
        setcurrentViewMentorPage(pageNo);
        const startIndex = (pageNo-1)* viewmentorpageSize;
        const viewmentorpaginatedPosts = _(listOfMentors).slice(startIndex).take(viewmentorpageSize).value();
        setviewmentorpaginatedPosts(viewmentorpaginatedPosts);
        }


    return (
        <div className="viewmentor_container">
            {console.log(token)}
            <div className="viewmentor_header">
                <div className="viewmentor_title">
                    <h3>View Mentor</h3>
                </div>
                <div className="viewmentoradd_staff">
                    <button className="viewmentorbutton_clicks" onClick={openModal}>Add Mentor</button>
                </div>
            </div>
            <Modal
                isOpen={modalIsOpen}
                style={customStyles}
                contentLabel="Example Modal"
            >

                {listOfMentors && <AddMentor closeModule={setIsOpen} />}
            </Modal>
            <div className="viewmentortable_container">
                <table className='table_adjust' cellSpacing="10px" >
                    <tr className="table_row_head">
                        <th className="avatar">Avatar</th>
                        <th className="namehead">Name</th>
                        <th className="emailhead">Email</th>
                        <th>Access Level</th>
                        <th>Contact Number</th>
                        <th>Actions</th>
                    </tr>

                    {/* {listOfMentors.map((value,key) =>{
                    return <div>{value.username}</div>
                })} */}
                {console.log(listOfMentors)}
                    {listOfMentors && listOfMentors.map((value, key) => {
                        return (


                            <tr className="table_row">
                                <td className="avatarcol"></td>
                                <td className="namecol">{value.firstname} {value.lastname}</td>
                                <td className="emailcol">{value.email}</td>
                                <td>{value.role}</td>
                                <td>{value.phonenumber}</td>
                                
                                <td>
                                     <Link to={`/editprofileviewmentor/${value.id}`}>  
                                        <div className="table_icons"><AiIcons.GrEdit className="icons_align" onClick={()=>{setEditpopup(true);}}  /></div>
                                        {/* <Modal
                                             isOpen={editpopup}
                                            onRequestClose={closeModal}
                                            style={Styles}
                                            contentLabel="Example Modal"
                                            >                
                                            {  <UpdateProfileViewMentor closeModule={setEditpopup} />
                                        </Modal> */}
                                     </Link> 
                                    {/* <Link to={"/"}> */}
                                        {/* <div className="table_icons"><AiIcons.MdDelete className="icons_align_delete" onClick={()=>{setDeletepopup(true);}}
                                            
                                        /></div>
                                        <Modal
                                             isOpen={deletepopup}
                                            onRequestClose={closeModal}
                                            style={custstyles}
                                            contentLabel="Example Modal"
                                            >                
                                            {  <DeletePopup closeModule={setDeletepopup} />}
                                        </Modal> */}
                                        <div className="table_icons"><AiIcons.MdDelete className="icons_align_delete"  onClick={(e) => deleteMentor(value.id, e)} /></div>
                                     {/* </Link> */}
                                    <Link to={`/profileviewmentor/${value.id}`} className="table_icons"><AiIcons.BsFillEyeSlashFill className="icons_align" /></Link>
                                </td>
                            </tr>


                        )
                    })}
                </table>
            </div>
            <nav className='Viewmentornav'>
                <ul className='Viewmentorpagination'>
                    {
                        viewmentorpages.map((Viewmentorpage)=>(
                            <li className={Viewmentorpage === currentViewMentorPage ? "Viewmentorpage-item active" : "Viewmentorpage-item"} onClick={()=>Viewmentorpagination(Viewmentorpage)}>
                                <p className='Viewmentorpage-link' onClick={()=>Viewmentorpagination(Viewmentorpage)}>{Viewmentorpage}</p>
                            </li>
                        ))
                    }
                </ul>
            </nav>
            {/* {editpopup &&<UpdateProfileViewMentor  closeModule={setEditpopup}/>} */}
        </div>
    )
}

export default ViewMentor;
