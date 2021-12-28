import React from 'react'
import './Project_add.scss'
import * as AiIcons from 'react-icons/all'
import { useState } from 'react';
// import Validate from '../../Validate';
import axios from 'axios';
import config from '../../config/config'


// export default function Project_add() {
function Project_add({ closeModel }) {
    const apiURL = config.API_URL;
    const [clientname, setClientName] = useState("");

    const [projectname, setProjectName] = useState("");

    const [clientemail, setClientEmail] = useState("");

    const [startdate, setStartDate] = useState("");

    const [enddate, setEndDate] = useState("");

    const addproject = (e) => {

        axios.post(`${apiURL}/project/addproject`,
            {
                clientname: clientname,
                projectname: projectname,
                clientemail: clientemail,
                startdate: startdate,
                enddate: enddate
            }).then((response) => {
                alert("Created")
            })
    }


    // const [values,setValues]=useState({
    //     clientname:"",
    //     projectname:"",
    //     clientemail:"",
    //     password:"",
    //     startdate:"",
    //     enddate:"",


    // });

    // const[errors,setErrors]=useState({});
    // // console.log(values);
    //   const handleChange = (event) =>{
    //       setValues({
    //           ...values,
    //           [event.target.name]: event.target.value,
    //       });
    //     //   console.log(values);
    //   };

    // const handleFormSubmit=(event) =>{
    //     event.preventDefault();
    //     setErrors(Validate(values));
    // };
    return (
        <div>
            <div className='addprof_overall_div'>
                <div className="add_project_overall">
                    <div className="add_project_inner">
                        <div className="add_project_head">
                            <p className="add_project_header">ADD PROJECT</p>
                            < AiIcons.CgClose className="close" onClick={() => closeModel(false)} />
                        </div>
                        <form>
                            <div className="add_project_inner_body">
                                <div className="add_project_content" >
                                    <p className="add_project_text">Client_name*</p><br />
                                    <div className="add_project_field_contain">
                                        <div className="add_project_feild">
                                            <i><AiIcons.FaRegUserCircle className="icons" /></i>
                                            <input type="text" className="textfield" placeholder="Client_name" required name="clientname" onChange={(e) => { setClientName(e.target.value); }} />

                                        </div>
                                    </div>
                                    {/* {errors.clientname && <p className='errormsg'>{errors.clientname}</p>} */}
                                </div>

                                <div className="add_project_content" >
                                    <p className="add_project_text">Project_name*</p><br />
                                    <div className="add_project_field_contain">
                                        <div className="add_project_feild">
                                            <i><AiIcons.AiOutlineFundProjectionScreen className="icons" /></i>
                                            <input type="text" className="textfield" placeholder="Project_name" required name='projectname' onChange={(e) => { setProjectName(e.target.value); }} />
                                        </div>
                                    </div>
                                    {/* {errors.projectname && <p className='errormsg'>{errors.projectname}</p>} */}
                                </div>

                            </div>
                            <div className="add_project_inner_body">
                                <div className="add_project_content" >
                                    <p className="add_project_text">Client_E-Mail*</p><br />
                                    <div className="add_project_field_contain">
                                        <div className="add_project_feild">
                                            <i><AiIcons.SiGmail className="icons" /></i>
                                            <input type="email" className="textfield" placeholder="E-Mail" required name='clientemail' onChange={(e) => { setClientEmail(e.target.value); }} />
                                        </div>
                                    </div>
                                    {/* {errors.clientemail && <p className='errormsg'>{errors.clientemail}</p>} */}
                                </div>
                                <div className="add_project_content" >
                                    <p className="add_project_text">Password*</p><br />
                                    <div className="add_project_field_contain">
                                        <div className="add_project_feild">
                                            <i><AiIcons.CgPassword className="icons" /></i>
                                            <input type="password" className="textfield" placeholder="Password" required name='password' />
                                        </div>
                                    </div>
                                    {/* {errors.password && <p className='errormsg'>{errors.password}</p>} */}
                                </div>

                            </div>
                            <div className="add_project_inner_body">
                                <div className="add_project_content" >
                                    <label > <p className="add_project_text">Start_Date*</p> </label><br />
                                    <div className="add_project_field_contain">
                                        <div className="add_project_feild">
                                            {/* <i><AiIcons.FaUser className="icons"/></i> */}
                                            <input type="date" className="textfield" placeholder='enter date' required name='startdate' onChange={(e) => { setStartDate(e.target.value); }} />
                                        </div>
                                    </div>
                                    {/* {errors.startdate && <p className='errormsg'>{errors.startdate}</p>} */}
                                </div>
                                <div className="add_project_content" >
                                    <label > <p className="add_project_text">End_Date*</p></label><br />
                                    <div className="add_project_field_contain">
                                        <div className="add_project_feild">
                                            {/* <i><AiIcons.FaUser className="icons"/></i> */}
                                            <input type="date" className="textfield" placeholder='enter date' required name='enddate' onChange={(e) => { setEndDate(e.target.value); }} />
                                        </div>
                                    </div>
                                    {/* {errors.enddate && <p className='errormsg'>{errors.enddate}</p>} */}
                                </div>

                            </div>
                            <div className="add_project_buttons">
                                <button className="cancel_btn" onClick={() => closeModel(false)}>Cancel</button>
                                <button className="add_btn" onClick={addproject}>Add_Project</button>
                            </div>
                        </form>

                    </div>


                </div>
            </div>
        </div>
    )
};
export default Project_add;
// }
