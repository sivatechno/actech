import React, { useEffect, useState } from 'react'
import './UpdateAssociateProfile.component.scss'
import * as AiIcons from 'react-icons/all';
import Profileimage from '../../assets/images/profileimage.png'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import config from '../../config/config'


export default function UpdateProfileViewMentor() {

  const apiURL = config.API_URL;

  const [profiledata, setProfileData] = useState([]);

  const [newFirstname,setNewFirstname] = useState("");

  const [newLastname,setNewLastname] = useState("");

  const [newEmail,setNewEmail] = useState("");

  const [newCountry,setNewCountry] = useState("");

  const [newCity,setNewCity] = useState("");

  const [newAddress,setNewAddress] = useState("");

  const [newState,setNewState] = useState("");

  const [newPostalcode,setNewPostalcode] = useState("");

  const [newPhonenumber,setNewPhonenumber] = useState("");

  const [newCollege, setNewCollege] = useState("");

  const [newPassedoutyear,setNewPassedoutyear] = useState("");

  const [newDegree,setNewDegree] = useState("");

  const [newCgpa,setNewCgpa] = useState("");

  const [newQualification,setNewQualification] = useState("");

  const [newCompany,setNewCompany] = useState("");

  const [newDesignation,setNewDesignation] = useState("");

  const [newUniversity, setNewUniversity] = useState("");

  const [newYearsofexp, setNewYearsofexp] = useState("");

  const [newExpcertificate, setNewExpcertificate] = useState("");

  const [newCompanyaddress, setNewCompanyaddress] = useState("");

  const [newCurrentsalary, setNewCurrentsalary] = useState("");

  const [newExpectsalary, setNewExpectsalary] = useState("");

  const [newInstitutename , setNewInstitutename] = useState("");

  const [newCoursename, setNewCoursename] = useState("");

  const [newDuration, setNewDuration] = useState("");

  const [newCoursecertificate, setNewCoursecertificate] = useState("");

  const [newInstituteaddress, setNewInstituteaddress] = useState("");

  const [newProject, setNewProject] = useState("");
  
  const [newFemale,setNewFemale] = useState("");

  const [newMale,setNewMale] = useState("");

  const [newExperience,setNewExperience] = useState("");

  const [newFresher,setNewFresher] = useState("");

  const [newPrimaryskill,setNewPrimarySkill] = useState("");

  const [newSecondaryskill,setNewSecondarySkill] = useState("");

  const [newProfileData, setNewProfileData] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        axios.get(`${apiURL}/associateprofile/${id}`).then((response) => {
            setProfileData(response.data);
        });
    }, []);
    const update = (e) => {
        axios.put(`${apiURL}/associateprofile/update/${id}`,
            {
                firstname:newFirstname,
                lastname:newLastname,
                email:newEmail,
                country:newCountry,
                city:newCity,
                address:newAddress,
                state:newState,
                phonenumber:newPhonenumber,
                postalcode:newPostalcode,
                university : newUniversity,
                college:newCollege,
                passedoutyear:newPassedoutyear,
                degree:newDegree,
                cgpa:newCgpa,
                qualification:newQualification,
                company:newCompany,
                designation:newDesignation,
                currentsalary:newCurrentsalary,
                expectsalary:newExpectsalary,
                yearsofexp:newYearsofexp,
                expcertificate:newExpcertificate,
                companyaddress:newCompanyaddress,
                institutename:newInstitutename,
                coursename:newCoursename,
                duration:newDuration,
                coursecertificate:newCoursecertificate,
                instituteaddress:newInstituteaddress,
                project:newProject,
                female:newFemale,
                male:newMale,
                experience:newExperience,
                fresher:newFresher,
                secondaryskill:newSecondaryskill,
                primaryskill:newPrimaryskill,
            }).then((response) => {
                setNewProfileData(response.data);
            });
    };
    return (
        <div className="profileviewmentor_container">
            {profiledata.length > 0 && profiledata.map((values, key) => {
                return (
                    <div>
                        <div className="viewpart_left">
                            <div className="profile_view">
                                <img src={Profileimage} alt="" className="profile_align" />
                            </div>
                            <div className="about_profile">
                                <div className="about_box_1">
                                    <label className="label">NAME  :</label>
                                    <p className="profile_field">{values.firstname}{values.lastname}</p>
                                </div>
                                <div className="about_box_1">
                                    <label className="label">EMAIL :</label>
                                    <p className="profile_field">{values.email}</p>
                                </div>
                                <div className="about_box_1">
                                    <label>CONTACT :</label>
                                    <p className="profile_field">{values.phonenumber}</p>
                                </div>
                            </div>
                        </div>
                        <div className="viewpart_right">
                            <div className="viewtitle">
                                <p>Basic Info</p>
                            </div>
                            <div className="right_container_1">
                            <div className="field">
                                    <div className="label_box">
                                        <label>FIRST NAME :</label>
                                    </div>
                                    <div className="txtboxes">
                                        <AiIcons.FaUserTie className="icon_align" />
                                        <input className="profile_field" onChange={(e) => { setNewFirstname(e.target.value); }} value={values.firstname} />
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="label_box">
                                        <label>LAST NAME :</label>
                                    </div>
                                    <div className="txtboxes">
                                        <AiIcons.FaUserTie className="icon_align" />
                                        <input className="profile_field" onChange={(e) => { setNewLastname(e.target.value); }} value={values.lastname} />
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="label_box">
                                        <label>EMAIL :</label>
                                    </div>
                                    <div className="txtboxes">
                                        <AiIcons.SiMinutemailer className="icon_align" />
                                        <input className="profile_field" onChange={(e) => { setNewEmail(e.target.value); }} value={values.email} />
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="label_box">
                                        <label>PHONE NO :</label>
                                    </div>
                                    <div className="txtboxes">
                                        <AiIcons.IoMdPhonePortrait className="icon_align" />
                                        <input className="profile_field" onChange={(e) => { setNewPhonenumber(e.target.value); }} value={values.phonenumber} />
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="label_box">
                                        <label>COUNTRY :</label>
                                    </div>
                                    <div className="txtboxes">
                                        <AiIcons.AiOutlineGlobal className="icon_align" />
                                        <input className="profile_field" onChange={(e) => { setNewCountry(e.target.value); }} value={values.country} />
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="label_box">
                                        <label>CITY :</label>
                                    </div>
                                    <div className="txtboxes">
                                        <AiIcons.AiFillFlag className="icon_align" />
                                        <input className="profile_field" onChange={(e) => { setNewCity(e.target.value); }} value={values.city} />
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="label_box">
                                        <label>ZIP CODE :</label>
                                    </div>
                                    <div className="txtboxes">
                                        <AiIcons.TiCode className="icon_align" />
                                        <input className="profile_field" onChange={(e) => { setNewPostalcode(e.target.value); }} value={values.postalcode} />
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="label_box">
                                        <label>STATE :</label>
                                    </div>
                                    <div className="txtboxes">
                                        <AiIcons.TiCode className="icon_align" />
                                        <input className="profile_field" onChange={(e) => { setNewState(e.target.value); }} value={values.state} />
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="label_box">
                                        <label>UNIVERSITY :</label>
                                    </div>
                                    <div className="txtboxes">
                                        <AiIcons.TiCode className="icon_align" />
                                        <input className="profile_field" onChange={(e) => { setNewUniversity(e.target.value); }} value={values.university} />
                                    </div>
            
            
                                </div>
                                <div className="field">
                                    <div className="label_box">
                                        <label>COLLEGE :</label>
                                    </div>
                                    <div className="txtboxes">
                                        <AiIcons.TiCode className="icon_align" />
                                        <input className="profile_field" onChange={(e) => { setNewCollege(e.target.value); }} value={values.college} />
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="label_box">
                                        <label>PASSEDOUTYEAR :</label>
                                    </div>
                                    <div className="txtboxes">
                                        <AiIcons.TiCode className="icon_align" />
                                        <input className="profile_field" onChange={(e) => { setNewPassedoutyear(e.target.value); }} value={values.passedoutyear} />
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="label_box">
                                        <label>DEGREE :</label>
                                    </div>
                                    <div className="txtboxes">
                                        <AiIcons.TiCode className="icon_align" />
                                        <input className="profile_field" onChange={(e) => { setNewDegree(e.target.value); }} value={values.degree} />
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="label_box">
                                        <label>CGPA :</label>
                                    </div>
                                    <div className="txtboxes">
                                        <AiIcons.TiCode className="icon_align" />
                                        <input className="profile_field" onChange={(e) => { setNewCgpa(e.target.value); }} value={values.cgpa} />
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="label_box">
                                        <label>COMPANY :</label>
                                    </div>
                                    <div className="txtboxes">
                                        <AiIcons.TiCode className="icon_align" />
                                        <input className="profile_field" onChange={(e) => { setNewCompany(e.target.value); }} value={values.company} />
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="label_box">
                                        <label>DESIGNATION :</label>
                                    </div>
                                    <div className="txtboxes">
                                        <AiIcons.TiCode className="icon_align" />
                                        <input className="profile_field" onChange={(e) => { setNewDesignation(e.target.value); }} value={values.designation} />
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="label_box">
                                        <label>CURRENT SALARY :</label>
                                    </div>
                                    <div className="txtboxes">
                                        <AiIcons.TiCode className="icon_align" />
                                        <input className="profile_field" onChange={(e) => { setNewCurrentsalary(e.target.value); }} value={values.currentsalary} />
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="label_box">
                                        <label>EXPECTATION SALARY :</label>
                                    </div>
                                    <div className="txtboxes">
                                        <AiIcons.TiCode className="icon_align" />
                                        <input className="profile_field" onChange={(e) => { setNewExpectsalary(e.target.value); }} value={values.expectsalary} />
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="label_box">
                                        <label> YEARS OF EXPERIENCE :</label>
                                    </div>
                                    <div className="txtboxes">
                                        <AiIcons.TiCode className="icon_align" />
                                        <input className="profile_field" onChange={(e) => { setNewYearsofexp(e.target.value); }} value={values.yearsofexp} />
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="label_box">
                                        <label>EXPERIENCE CERTIFICATE :</label>
                                    </div>
                                    <div className="txtboxes">
                                        <AiIcons.TiCode className="icon_align" />
                                        <input className="profile_field" onChange={(e) => { setNewExpcertificate(e.target.value); }} value={values.expcertificate} />
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="label_box">
                                        <label> COMPANY ADDRESSS :</label>
                                    </div>
                                    <div className="txtboxes">
                                        <AiIcons.TiCode className="icon_align" />
                                        <input className="profile_field" onChange={(e) => { setNewCompanyaddress(e.target.value); }} value={values.companyaddress} />
                                    </div>
                                </div>                
                                <div className="field">
                                    <div className="label_box">
                                        <label>COURSE NAME :</label>
                                    </div>
                                    <div className="txtboxes">
                                        <AiIcons.TiCode className="icon_align" />
                                        <input className="profile_field" onChange={(e) => { setNewCoursename(e.target.value); }} value={values.coursename} />
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="label_box">
                                        <label> DURATION :</label>
                                    </div>
                                    <div className="txtboxes">
                                        <AiIcons.TiCode className="icon_align" />
                                        <input className="profile_field" onChange={(e) => { setNewDuration(e.target.value); }} value={values.duration} />
                                    </div>
                                </div>                
                                <div className="field">
                                    <div className="label_box">
                                        <label>COURSE CERTIFICATE:</label>
                                    </div>
                                    <div className="txtboxes">
                                        <AiIcons.TiCode className="icon_align" />
                                        <input className="profile_field" onChange={(e) => { setNewCoursecertificate(e.target.value); }} value={values.coursecertificate} />
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="label_box">
                                        <label> INSTITUTE ADDRESS :</label>
                                    </div>
                                    <div className="txtboxes">
                                        <AiIcons.TiCode className="icon_align" />
                                        <input className="profile_field" onChange={(e) => { setNewInstituteaddress(e.target.value); }} value={values.instituteaddress} />
                                    </div>
                                </div>                
                                <div className="field">
                                    <div className="label_box">
                                        <label>PROJECT :</label>
                                    </div>
                                    <div className="txtboxes">
                                        <AiIcons.TiCode className="icon_align" />
                                        <input className="profile_field" onChange={(e) => { setNewProject(e.target.value); }} value={values.project} />
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="label_box">
                                        <label> PRIMARY SKILL :</label>
                                    </div>
                                    <div className="txtboxes">
                                        <AiIcons.TiCode className="icon_align" />
                                        <input className="profile_field" onChange={(e) => { setNewPrimarySkill(e.target.value); }} value={values.primaryskill} />
                                    </div>
                                </div>                
                                <div className="field">
                                    <div className="label_box">
                                        <label>SECONDARY SKILL :</label>
                                    </div>
                                    <div className="txtboxes">
                                        <AiIcons.TiCode className="icon_align" />
                                        <input className="profile_field" onChange={(e) => { setNewSecondarySkill(e.target.value); }} value={values.secondaryskill} />
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="label_box">
                                        <label> GENDER :</label>
                                    </div>
                                    <div className="txtboxes">
                                    <input type="radio"  className="profile_field" onChange={(e)=>{setNewMale(e.target.value);}} value={values.male}   />
                                    <p className="radiobtn-txt">Male</p>
                                    <input type="radio"  className="profile_field" onChange={(e)=>{setNewFemale(e.target.value);}} value={values.female}   />
                                    <p className="radiobtn-txt">Female</p>
                                    </div>
                                </div>                
                                <div className="field">
                                    <div className="label_box">
                                        <label> QUALIFICATION :</label>
                                    </div>
                                    <div className="txtboxes">
                                    <input type="radio"  className="profile_field" onChange={(e)=>{setNewFresher(e.target.value);}} value={values.fresher}   />
                                    <p className="radiobtn-txt">Fresher</p>
                                    <input type="radio"  className="profile_field" onChange={(e)=>{setNewExperience(e.target.value);}} value={values.experience}   />
                                    <p className="radiobtn-txt">Experience</p>
                                    </div>
                                </div>     
                                <div className="field">
                                    <div className="label_box">
                                        <label>STATUS</label>
                                    </div>
                                    <div className="txtboxes">
                                        <p className="profile_field">{values.role}</p>
                                    </div>
                                </div>
                                <div className="address_info">
                                <div className="address_label">
                                    <label>ADDRESS  :</label>
                                </div>
                                <div className="address_area">
                                    <AiIcons.ImAddressBook className="icon_align" />
                                    <input className="profile_field" onChange={(e) => { setNewAddress(e.target.value); }} value={values.address} />
                                </div>
                            </div>
                              <input className='submitbtn' type="submit" onClick={(e) => update(values.id, e)} />
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
