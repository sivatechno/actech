import React from 'react'
import _, { ceil } from 'lodash';
import './Project_profile_view.scss'
import * as AiIcons from 'react-icons/all'
import Project_add from './Project_add'
import {useEffect, useState } from 'react'
import axios from 'axios';
import Modal from 'react-modal'
import config from '../../config/config'
import { Link, useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
toast.configure()



const customStyles = {
    content: {
        top: '56%',
        left: '58%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        height:'83%',
        width:'60%',
        background:'transparent',
        border:'1px solid transparent',
        outline:'none',
        overflow:'hidden',

    },
};

function Project_profile_view() {
    const apiURL = config.API_URL;
    const [listOfProject, setListOfProject] = useState([]);
    const [paginatedPosts,setpaginatedPosts] = useState();

    const deleteProject = (id,e) => {
        //alert(id)
      console.log(id);
        axios.delete(`http://localhost:5000/project/deleteproject/${id}`).then((response) => {
         //res.send("success");
        });
     notify(true);
    };

    useEffect(() => {
        axios.get("http://localhost:5000/project/viewproject").then((response) => {
            setListOfProject(response.data);
            setpaginatedPosts(_(response.data).slice(0).take(pageSize).value());
            // console.log(response.data);
            
        });

    }, []);

    const [popup, popupcome] = useState(false)
    const [Editpopup, EditpopupCome] = useState(false)

    const notify = ()=>{toast.error('Deleted',{position: toast.POSITION.TOP_CENTER})}

    const [currentPage,setcurrentPage] = useState(1);

    const pageSize=7;
    console.log(Math)
    const pageCount=listOfProject?Math.ceil(listOfProject.length/pageSize):1;
    //if(pageCount===1){return null};

    const pages = _.range(1, pageCount+1);

    const pagination =(pageNo)=>{
        setcurrentPage(pageNo);
        const startIndex = (pageNo-1)*pageSize;
        const paginatedPosts = _(listOfProject).slice(startIndex).take(pageSize).value();
        setpaginatedPosts(paginatedPosts);
    }

    return (
        <div>

            <div className='project_profile_overall_contain'>
               <div className="project_profile_top">
                   <p className="project_profile_headind_text">PROJECT PROFILE VIEW</p>
                   <button className="add_proj_btn"  onClick={()=>{popupcome(true);}}>ADD PROJECT</button>
               </div>

                <Modal 
                    isOpen={popup}
                    style={customStyles}
                    contentLabel="Example Modal">
                    {<Project_add closeModel={popupcome}/>}

                </Modal>

                <div>
                    <div className="project_profile_table_container">
                        <table  className="project_profile_table">
                            <thead>
                                <tr className="project_profile_table_head">
                                    <th>Client Name</th>
                                    <th>Project Name</th>
                                    <th>Start Date</th>
                                    <th>End Date</th>
                                    <th>Billing</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>

                            <tbody>

                                {paginatedPosts&&paginatedPosts.map((value,key)=>{
                                    //console.log(value.id);
                                    return(
                                        <tr className="project_profile_table_body">
                                            <td>{value.Client_Name}</td>
                                            <td>{value.Project_Name}</td>
                                            <td>{value.Start_Date}</td>
                                            <td >{value.End_Date}</td> 
                                            <td>{value.Billing_Status}</td>
                                            <td >{value.Project_Status}</td>  
                                            <td className="proj_table_icons"> <Link to={`/Update_proj`}><AiIcons.MdEdit className="prof_edit_icon" /></Link> <AiIcons.FaTrash className="prof_tash_icon"  onClick={(e) => deleteProject(value.id, e)}/></td>
                                        </tr>
                                     )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* {Deletepopup &&<Delete closeDeletePopup={Deletepopupcome}/>} */}

            </div>

            <nav>
                <ul className='pagination'>
                    {
                        pages.map((page)=>(
                            <li className={page === currentPage ? "page-item active" : "page-item"} onClick={()=>pagination(page)}>
                                <p className='page-link' onClick={()=>pagination(page)}>{page}</p>
                            </li>
                        ))
                    }
                </ul>
            </nav>

        </div>
        
    )
};
export default Project_profile_view;