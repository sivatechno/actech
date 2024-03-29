import React from 'react'
import './ViewAssociateProfile.component.scss'
import _, { ceil } from 'lodash';
import * as AiIcons from 'react-icons/all';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import AddAssociateProfile from  './AddAssociateProfile.component'
import UpdateAssociateProfile from './UpdateAssociateProfile.component';
import { toast } from 'react-toastify'
import config from '../../config/config'

const customStyles = {
    content: {
         left: '20%',
         right: '10%',
    },
};
function ViewAssociateProfile() {
    
    const apiURL = config.API_URL;
    let history = useNavigate();

    const [listOfAssociateProfiles, setListOfAssociateProfiles] = useState([]); 
    const [modalIsOpen, setIsOpen] = useState(false);
    const [modalUpdateIsOpen, setUpdateIsOpen] = useState(false);
    const [associatepaginatedPosts,setAssociatePaginatedPosts] = useState();
    const [searchTerm,setsearchTerm] = useState("");

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
        axios.delete(`${apiURL}/associateprofile/delete/${id}`).then((response) => {
        });
        notify(true);
    };
    
    useEffect(() => {
        axios.get(`${apiURL}/associateprofile/viewassociateprofile`).then((response) => {
            setListOfAssociateProfiles(response.data);
            setAssociatePaginatedPosts(_(response.data).slice(0).take(associatepageSize).value());
        });
    }, []);

    const notify = () => { toast.error('Deleted', { position: toast.POSITION.BOTTOM_CENTER }) }
    const [currentAssociatePage,setcurrentAssociatePage] = useState(1);

    const associatepageSize=7;
    console.log(Math)
    const associatepageCount=listOfAssociateProfiles?Math.ceil(listOfAssociateProfiles.length/associatepageSize):1;

    const associatepages = _.range(1, associatepageCount+1);

    const Associatepagination =(pageNo)=>{
        setcurrentAssociatePage(pageNo);
        const startIndex = (pageNo-1)* associatepageSize;
        const associatepaginatedPosts = _(listOfAssociateProfiles).slice(startIndex).take(associatepageSize).value();
        setAssociatePaginatedPosts(associatepaginatedPosts);
        }

    return (
        <div className="associateprofile_container">
            <div className="associate_header">
                <div className="associate_title">
                    <h3>AssociateProfile</h3>
                </div>
                <div className="associateprofile-feild">
                    <i><AiIcons.BsSearch className="associateprofile-icons" /></i>                    
                    <input type="text" className="associateprofile-namesearch" placeholder= " Associate name " name='hscboard' onChange={(e)=> setsearchTerm(e.target.value)} /><br />
                </div>                
                <div className="add_profile">
                    <button className="associate_button_click"  onClick={()=>{setIsOpen(true);}}>Add Profile</button>
                </div>
            </div>
            <Modal
                isOpen={modalIsOpen}
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
                    {associatepaginatedPosts&&associatepaginatedPosts.filter((val) => {
                            if(searchTerm === ""){
                                return val;
                            } else if(
                                val.firstname.toLowerCase().includes(searchTerm.toLowerCase())||
                                val.lastname.toLowerCase().includes(searchTerm.toLowerCase())
                            ){
                                return val;
                            }
                             }).map((value,key)=>{
                            console.log(value.id); 
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
            <nav className='Associativenav'>
                <ul className='Associatepagination'>
                    {
                        associatepages.map((Associatepage)=>(
                            <li className={Associatepage === currentAssociatePage ? "associatepage-item active" : "associatepage-item"} onClick={()=>Associatepagination(Associatepage)}>
                                <p className='associatepage-link' onClick={()=>Associatepagination(Associatepage)}>{Associatepage}</p>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </div>
    )
}

export default ViewAssociateProfile;
