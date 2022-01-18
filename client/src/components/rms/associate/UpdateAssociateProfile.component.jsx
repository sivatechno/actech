import React, { useEffect, useState } from 'react'
import './UpdateAssociateProfile.component.scss'
import * as AiIcons from 'react-icons/all';
import Profileimage from '../../assets/images/profileimage.jpg';
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

  const [newdob,setNewDob] = useState("");

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

  const [uploadimage,setUploadimage] = useState(Profileimage);

  const [preview , setPreview] = useState(Profileimage);

  const [newProfileData, setNewProfileData] = useState([]);

  const [index, setIndex] = useState("");

    const { id } = useParams();

    function focus1(){
        setIndex(0)
      }
      function focus2(){
        setIndex(1)
        
      }
      function focus3(){
        setIndex(2)
        
      }
      function focus4(){
        setIndex(3)
      }

      const imageHandler = (event) => {
        const selectedImage = event.target.files[0]
        setUploadimage(selectedImage)
        const imagePreview = URL.createObjectURL(selectedImage)
        setPreview(imagePreview)
    }

    function cancel(e)  { 
        e.preventDefault();
       // console.log(firstname);
        setNewFirstname("");}


    useEffect(() => {
        axios.get(`http://localhost:5000/associateprofile/${id}`).then((response) => {
            setProfileData(response.data);
        });
    }, []);
    const update = (e) => {
        axios.put(`http://localhost:5000/associateprofile/update/${id}`,
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
        <div className="addassociate">
           <i >< AiIcons.IoMdClose className="closeIcon" /></i>
           <div className="profile_view">
                {uploadimage && <img alt={uploadimage.name} src={preview}  className="profile_align"  /> }
                {/* <input type="text" className="toptxtfeild"   onChange={(e) => { setNewFirstname(e.target.value); }} value={values.firstname}  /><br />               */}
            </div>
           <div className="Tabitems">
                <button className="profiletab" onClick={()=>{setIndex(0)}}>Profile</button>
                <button className="Educationtab" onClick={()=>{setIndex(1)}}>Education</button>
                <button className="Experiencetab" onClick={()=>{setIndex(2)}}>Experience</button>
                <button className="Certificatetab" onClick={()=>{setIndex(3)}}>Certificate</button>      
            </div> <hr />
                <div className="textfeild-container" hidden={index != 0}>
                <div className="inputfeilds">
                        <div className="left-inputfeilds" >
                            <label>First Name</label><br />
                            <div className="feild">
                            <i><AiIcons.FaUser className="icons"/></i>
                            <input type="text" className="textfield"   placeholder="first name" onChange={(e) => { setNewFirstname(e.target.value); }} value={values.firstname} /><br />
                            <span  hidden >This is required feild</span>
                            </div>
                        </div>
                        <div className="right-inputfeilds">
                            <label>Last Name</label><br />
                            <div className="feild">
                            <i><AiIcons.FaUser className="icons"/></i>
                            <input type="text" className="textfield" placeholder="last name" autoFocus={false} onChange={(e) => { setNewLastname(e.target.value); }} value={values.lastname}/>
                            </div>
                        </div>
                   </div>
                     <div className="inputfeilds">
                        <div className="left-inputfeilds" >
                            <label>Email</label><br />
                            <div className="feild">
                            <i><AiIcons.AiOutlineMail className="icons"/></i>
                            <input type="text" className="textfield" placeholder="email" pattern=".+@tutsplus\.com|.+@envato\.com"  onChange={(e) => { setNewEmail(e.target.value); }} value={values.email}/>
                            </div>
                        </div>
                        <div className="right-inputfeilds">
                            <label>Country</label><br />
                            <div className="feild">
                            <i><AiIcons.BiWorld className="icons"/></i>
                            <input type="text" className="textfield" placeholder="country" onChange={(e) => { setNewCountry(e.target.value); }} value={values.country}/>
                            </div>
                        </div>
                   </div>
                   <div className="inputfeilds">
                        <div className="left-inputfeilds" >
                            <label>City</label><br />
                            <div className="feild">
                            <i><AiIcons.FaCity className="icons"/></i>
                            <input type="text" className="textfield" placeholder="city" onChange={(e) => { setNewCity(e.target.value); }} value={values.city}/><br/>
                            </div>
                        </div>
                        <div className="right-inputfeilds">
                            <label>Address</label><br />
                            <div className="feild">
                            <i><AiIcons.FiMapPin className="icons"/></i>
                            <input type="text" className="textfield" placeholder="address" onChange={(e) => { setNewAddress(e.target.value); }} value={values.address}/>
                            </div>
                        </div>
                   </div>

                   <div className="inputfeilds">
                        <div className="left-inputfeilds" >
                            <label>State</label><br />
                            <div className="feild">
                            <i><AiIcons.GiModernCity className="icons"/></i>
                            <input type="text" className="textfield" placeholder="State" onChange={(e) => { setNewState(e.target.value); }} value={values.state}/>
                            </div>
                        </div>
                        <div className="right-inputfeilds">
                            <label>Phone Number</label><br />
                            <div className="feild">
                            <i><AiIcons.BsPhone className="icons"/></i>
                            <input type="text" className="textfield" placeholder="Phone number" pattern="\d*" title="Numbers only, please." onChange={(e) => { setNewPhonenumber(e.target.value); }} value={values.phonenumber}/>
                            </div>
                        </div>
                    </div>
                   <div className="inputfeilds">
                        <div className="left-inputfeilds" >
                            <label>Postal Code</label><br />
                            <div className="feild">
                            <i><AiIcons.BiMapPin className="icons"/></i>
                            <input type="text" className="textfield" placeholder="Postal Code" onChange={(e) => { setNewPostalcode(e.target.value); }} value={values.postalcode}/>
                          </div>
                        </div>
                        <div className="left-inputfeilds" >
                            <label>DOB</label><br />
                            <div className="feild">
                            <input type="date" className="textfield" placeholder="dob" onChange={(e) => { setNewDob(e.target.value); }} value={values.dob}/>
                          </div>
                        </div>
                        
                    </div>
                    <div className="radioinputfeilds">
                        <div className="genderradiobutton">
                            <label className="genderlbl">Gender</label><br />
                            <input type="radio"  className="radiomalebtn" onChange={(e) => { setNewMale(e.target.value); }} value={values.male} name="radio"  />
                            <p className="radiobtn-txt">Male</p>
                            <input type="radio" className="radiofemalebtn" onChange={(e) => { setNewFemale(e.target.value); }} value={values.female}name="radio"/>
                            <p className="radiobtn-txt">Female</p>
                        </div>
                        <div className="checkboxselective">
                            {/* <label className="Qualificationlbl"></label><br /> */}
                            <input type="checkbox"  className="radiofresherbtn" onChange={(e) => { setNewFresher(e.target.value); }} value={values.lastname} name="radio"  />
                            <p className="radiobtn-txt">Fresher</p>
                            <input type="checkbox" className="radioexperiencebtn" onChange={(e)=>{setNewExperience(e.target.value);}} value={values.experience} name="radio"/>
                            <p className="radiobtn-txt">Experience</p>
                        </div>
                    </div>     
                    <div className="Avatarfeild" >
                            <label >Avatar</label><br />
                            <div className="imagefeild">
                            <input type="file" name="file" className="textfield" accept="image/*" id='input' onChange={(e)=> imageHandler(e)}/>
                            <label htmlFor='input' className='imageupload'>
                            <i>< AiIcons.FcAddImage/> Choose an image</i>
                            </label>
                            </div>
                        </div>    
                            
                    <div className="btn">
                            <div className="backbtn">
                               <i></i>
                            </div>
                            <div className="nextbtn">
                                <input type="button" className="cancelicon" value="Cancel" onClick={cancel} />
                                <input type="button" className="nexticon" value="Next" onClick={focus2}/>
                            </div>
                        </div>
                    {/* </div>{console.log(addAssociate)} */}
                </div>
                <div className="textfeild-container" hidden={index != 1}>
                <div className="inputfeilds">
                        <div className="left-inputfeilds" >
                            <label>University</label><br />
                            <div className="feild">
                            <i><AiIcons.IoBusinessOutline className="icons"/></i>
                            <input type="text" className="textfield"    placeholder=" University Name "   onChange={(e)=>{setNewUniversity(e.target.value);}} value={values.university}  /><br />
                            <span  hidden >This is required feild</span>
                            </div>
                        </div>
                        <div className="right-inputfeilds">
                            <label>College</label><br />
                            <div className="feild">
                            <i><AiIcons.MdOutlineBusiness className="icons"/></i>
                            <input type="text" className="textfield" placeholder="College Name"   onChange={(e)=>{setNewCollege(e.target.value);}} value={values.college}/>
                            </div>
                        </div>
                   </div>
                   
                        <div className="inputfeilds">
                        <div className="left-inputfeilds" >
                            <label>Year of Passed out</label><br />
                            <div className="feild">
                            <input type="date" className="textfield" placeholder=" Year of Passed out"   onChange={(e)=>{setNewPassedoutyear(e.target.value);}} value={values.passedoutyear}/>
                            </div>
                        </div>
                        <div className="right-inputfeilds">
                            <label>Degree</label><br />
                            <div className="feild">
                            <i><AiIcons.GiMedallist className="icons"/></i>
                            <input type="text" className="textfield" placeholder="Degree"  onChange={(e)=>{setNewDegree(e.target.value);}} value={values.degree}/>
                            </div>
                        </div>
                   </div>
                   <div className="inputfeilds">
                        <div className="left-inputfeilds" >
                            <label>CGPA</label><br />
                            <div className="feild">
                            <i><AiIcons.GrScorecard className="icons"/></i>
                            <input type="text" className="textfield" placeholder=" CGPA "  onChange={(e)=>{setNewCgpa(e.target.value);}} value={values.cgpa}/><br/>
                            </div>
                        </div>
                        <div className="right-inputfeilds">
                            <label>Highest qualification</label><br />
                            <div className="feild">
                            <i><AiIcons.GiMedallist className="icons"/></i>
                            <input type="text" className="textfield" placeholder=" Highest Qualification "  onChange={(e)=>{setNewQualification(e.target.value);}} value={values.qualification}/>
                            </div>
                        </div>
                   </div> 
                    <div className="btn">
                            <div className="backbtn">
                               {/* <i><AiIcons.BsArrowLeftSquareFill className="nexticon" onClick={focus1} /></i> */}
                               <input type="button" className="backicon" value="Back" onClick={focus1}/>
                            </div>
                            <div className="nextbtn">
                               {/* <i><AiIcons.BsFillArrowRightSquareFill className="nexticon" onClick={focus3}/></i> */}
                               <input type="button" className="cancelicon" value="Cancel" />
                               <input type="button" className="nexticon" value="Next" onClick={focus3}/>
                            </div>
                    </div>
                </div>
                <div className="textfeild-container" hidden={index != 2}>
                <div className="inputfeilds">
                        <div className="left-inputfeilds" >
                            <label>Company/Organization Name</label><br />
                            <div className="feild">
                            <i><AiIcons.MdOutlineBusiness className="icons"/></i>
                            <input type="text" className="textfield"  placeholder="Company Name"  onChange={(e)=>{setNewCompany(e.target.value);}} value={values.company}  /><br />
                            <span  hidden >This is required feild</span>
                            </div>
                        </div>
                        <div className="right-inputfeilds">
                            <label>Designation</label><br />
                            <div className="feild">
                            <i><AiIcons.MdBusinessCenter className="icons"/></i>
                            <input type="text" className="textfield" placeholder=" Designation "  onChange={(e)=>{setNewDesignation(e.target.value);}} value={values.designation}/>
                            </div>
                        </div>
                   </div>
                   
                        <div className="inputfeilds">
                        <div className="left-inputfeilds" >
                            <label>Years of Experience</label><br />
                            <div className="feild">
                            <input type="date" className="textfield" placeholder=" Year of Experience"    onChange={(e)=>{setNewYearsofexp(e.target.value);}} value={values.yearsofexp}/>
                            </div>
                        </div>
                        <div className="right-inputfeilds">
                            <label> Current Salary(Pa)</label><br />
                            <div className="feild">
                            <i><AiIcons.FaMoneyBillAlt className="icons"/></i>
                            <input type="text" className="textfield" placeholder="Current salary"  onChange={(e)=>{setNewCurrentsalary(e.target.value);}} value={values.currentsalary}/>
                            </div>
                        </div>
                   </div>
                   <div className="inputfeilds">
                        <div className="left-inputfeilds" >
                            <label>Company Address</label><br />
                            <div className="feild">
                            <i><AiIcons.FaCity className="icons"/></i>
                            <input type="text" className="textfield" placeholder="Company Address"  onChange={(e)=>{setNewCompanyaddress(e.target.value);}} value={values.companyaddress}/><br/>
                            </div>
                        </div>
                        <div className="right-inputfeilds">
                           <label>Exceptation Salary(Pa)</label><br />
                            <div className="feild">
                            <i><AiIcons.FaMoneyBillAlt className="icons"/></i>
                            <input type="text" className="textfield" placeholder=" Exceptation Salary"  onChange={(e)=>{setNewExpectsalary(e.target.value);}} value={values.expectsalary}/><br/>
                            </div>
                        </div>
                   </div> 
                    <div className="btn">
                            <div className="backbtn">
                               {/* <i><AiIcons.BsArrowLeftSquareFill className="nexticon" value="Back" onClick={focus2} /></i> */}
                               <input type="button" className="backicon" value="Back" onClick={focus2}/>
                            </div>
                            <div className="nextbtn">
                               {/* <i><AiIcons.BsFillArrowRightSquareFill className="nexticon" onClick={focus4}/></i> */}
                               <input type="button" className="cancelicon" value="Cancel" />
                               <input type="button" className="nexticon" value="Next" onClick={focus4}/>
                            </div>
                    </div>
                </div>
                <div className="textfeild-container" hidden={index != 3}>
                <div className="inputfeilds">
                        <div className="left-inputfeilds" >
                            <label>Institute Name</label><br />
                            <div className="feild">
                            <i><AiIcons.MdOutlineBusiness className="icons"/></i>
                            <input type="text" className="textfield"   placeholder="Institute name"  onChange={(e)=>{setNewInstitutename(e.target.value);}} value={values.institutename}  /><br />
                            </div>
                        </div>
                        <div className="right-inputfeilds">
                            <label>Course Name</label><br />
                            <div className="feild">
                            <i><AiIcons.FaChalkboardTeacher className="icons"/></i>
                            <input type="text" className="textfield" placeholder=" Course name"  onChange={(e)=>{setNewCoursename(e.target.value);}} value={values.coursename}/>
                            </div>
                        </div>
                   </div>
                   <div className="inputfeilds">
                        <div className="left-inputfeilds" >
                            <label>No of Month/year</label><br />
                            <div className="feild">
                            <i><AiIcons.MdToday className="icons"/></i>
                            <input type="text" className="textfield" placeholder= " No of Month/year"   onChange={(e)=>{setNewDuration(e.target.value);}} value={values.duration}/>
                            </div>
                        </div>
                        <div className="right-inputfeilds">
                            <label>Score</label><br />
                            <div className="feild">
                            <i><AiIcons.GrScorecard className="icons"/></i>
                            <input type="text" className="textfield" placeholder="Course Certificate"  onChange={(e)=>{setNewCoursecertificate(e.target.value);}} value={values.coursecertificate}/>
                            </div>
                        </div>
                   </div>
                   <div className="inputfeilds">
                        <div className="left-inputfeilds" >
                            <label>Institute Address</label><br />
                            <div className="feild">
                            <i><AiIcons.FaCity className="icons"/></i>
                            <input type="text" className="textfield" placeholder=" Institute Address"  onChange={(e)=>{setNewInstituteaddress(e.target.value);}} value={values.instituteaddress}/><br/>
                            </div>
                        </div>
                        <div className="right-inputfeilds">
                            <label>Project</label><br />
                            <div className="feild">
                            <i><AiIcons.FaProjectDiagram className="icons"/></i>
                            <input type="text" className="textfield" placeholder=" Project "  onChange={(e)=>{setNewProject(e.target.value);}} value={values.project}/>
                            </div>
                        </div>
                   </div> 
                   <div className="inputfeilds">
                   <div className="left-inputfeilds" >
                            <label>Primary Skill</label><br />
                            <div className="feild">
                            <i><AiIcons.GiSkills className="icons"/></i>
                            <input type="text" className="textfield" placeholder="PrimarySkill"  onChange={(e)=>{setNewPrimarySkill(e.target.value);}} value={values.primaryskill}/><br/>
                            </div>
                        </div>
                        <div className="right-inputfeilds">
                            <label> Secondary Skill</label><br />
                            <div className="feild">
                            <i><AiIcons.GiSkills className="icons"/></i>
                            <input type="text" className="textfield" placeholder="SecondarySkill"  onChange={(e)=>{setNewSecondarySkill(e.target.value);}} value={values.secondaryskill}/>
                            </div>
                        </div>
                   </div> 
                   <div className="certifyupoadinputfeilds">
                       <div className="certifyuploadfeildleft" >
                            <label>Experience Certificate</label><br />
                            <div className="feild">
                            <input type="file" name="file" className="textfield"  id='exp_certify' onChange={(e)=> imageHandler(e)}/>
                            <label htmlFor='exp_certify' className='imageupload'>
                            <i>< AiIcons.FcAddImage/> Choose an file</i>
                            </label>
                            </div>
                        </div> 
                        <div className="certifyuploadfeildright" >
                            <label>Course Certificate</label><br />
                            <div className="feild">
                            <input type="file" name="file" className="textfield"  id='Course_certify' onChange={(e)=> imageHandler(e)}/>
                            <label htmlFor='Course_certify' className='imageupload'>
                            <i>< AiIcons.FcAddImage/> Choose an file</i>
                            </label>
                            </div>
                        </div>    
                        {/* <div className="left-inputfeilds" >
                            <label>Experience Certificate</label><br />
                            <div className="feild">
                            {/* <input type="text" className="textfield" placeholder=" Experience Certificate" onChange={(e)=>{setExpcertificate(e.target.value);}}/> */}
                            {/* <input type="file" name="file" className="textfield"   onChange={(e)=>{setExpcertificate(e.target.value);}}/>
                            </div>
                        </div>  */} 
                        {/* <div className="right-inputfeilds">
                            <label>Course Certificate</label><br />
                            <div className="feild"> */}
                            {/* <input type="text" className="textfield" placeholder="Course Certificate" onChange={(e)=>{setCoursecertificate(e.target.value);}}/> */}
                            {/* <input type="file" name="file" className="textfield"   onChange={(e)=>{setCoursecertificate(e.target.value);}}/>
                            </div>
                        </div> */}
                   </div>
                    <div className="btn">
                            <div className="backbtn">
                               {/* <i><AiIcons.BsArrowLeftSquareFill className="nexticon" onClick={focus3}/></i> */}
                               <input type="button" className="backicon" value="Back" onClick={focus3}/>
                            </div>
                            <div className="nextbtn">
                            {/* <input type="button" className="Addprofile" value="Cancel" /> */}
                            <input type="button" className="cancelicon" value="Cancel" />
                            {/* <input type="button" className="Addprofile" value="Submit" onClick={addAssociateProfile}/> */}
                            <input className='Updateprofile' type="submit" value="Update" onClick={(e) => update(values.id, e)} />
                            </div>
                    </div>
                </div>
            </div>                   
             </div>
                )
            })}
        </div>
    )
}

