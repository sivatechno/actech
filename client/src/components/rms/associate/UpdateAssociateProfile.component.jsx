import React, { useEffect, useState } from 'react'
import './UpdateAssociateProfile.component.scss'
import * as AiIcons from 'react-icons/all';
import Profileimage from '../../assets/images/profileimage.jpg'
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

  const [newDob,setNewDob] = useState("");

  const [newCollege, setNewCollege] = useState("");

  const [newPassedoutyear,setNewPassedoutyear] = useState("");

  const [newDegree,setNewDegree] = useState("");

  const [newCgpa,setNewCgpa] = useState("");

  const [newQualification,setNewQualification] = useState("");

  const [newCompany,setNewCompany] = useState("");

  const [newDesignation,setNewDesignation] = useState("");

  const [newSslcboard, setNewSslcBoard] = useState("");

  const [newSslcschoolname, setNewSslcSchoolName] = useState("");

  const [newSslcyearpassedout, setNewSslcYearPassedOut] = useState("");

  const [newSslcmark, setNewSslcMark] = useState("");

  const [newHscboard, setNewHscBoard] = useState("");

  const [newHscschoolname, setNewHscSchoolName] = useState("");

  const [newHscyearpassedout, setNewHscYearPassedOut] = useState("");

  const [newHscmark, setNewHscMark] = useState("");

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

  const [inputList, setInputList] = useState([{ firstName: "", lastName: "" }]);

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
                dob:newDob,
                postalcode:newPostalcode,
                sslcboard:newSslcboard,
                sslcschoolname:newSslcschoolname,
                sslcyearpassedout: newSslcyearpassedout,
                sslcmark:newSslcmark,
                hscboard:newHscboard,
                hscschoolname:newHscschoolname,
                hscyearpassedout:newHscyearpassedout,
                hscmark:newHscmark,
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
    
    const handleRemoveClick = index => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
      };

    const handleAddClick = () => {
        setInputList([...inputList, { firstName: "", lastName: "" }]);
      };

    return (
        <div className="profileviewmentor_container">
            {profiledata.length > 0 && profiledata.map((values, key) => {
                return (
        <div>
        <div className="Updateassociate">
           <i >< AiIcons.IoMdClose className="closeIcon" /></i>
           <div className="update_profile_view">
                {uploadimage && <img alt={uploadimage.name} src={preview}  className="profile_align"  /> }
                {/* <input type="text" className="toptxtfeild"   onChange={(e) => { setNewFirstname(e.target.value); }} value={values.firstname}  /><br />               */}
            </div>
            <div className="update_Tabitems">
                <button className={index != 0 ? "profiletab":"profiletabbg"} onClick={()=>{setIndex(0)}}>Profile</button>
                <button className={index != 1 ? "Educationtab":"Educationtabbg"} onClick={()=>{setIndex(1)}}>Education</button>
                <button className={index != 2 ? "Experiencetab":"Experiencetabbg"}  onClick={()=>{setIndex(2)}}>Experience</button>
                <button className={index != 3 ? "Certificatetab":"Certificatetabbg"}  onClick={()=>{setIndex(3)}}>Certificate</button>   
            </div> <hr />
                <div className="associateprofile-textfeild-container" hidden={index != 0}>
                <div className="associateprofile-inputfeilds">
                        <div className="associateprofile-left-inputfeilds" >
                            <label>First Name</label><br />
                            <div className="associateprofile-feild">
                            <i><AiIcons.FaUser className="associateprofile-icons"/></i>
                            <input type="text" className="associateprofile-textfield"  autoFocus = {true} placeholder="first name" required onChange={(e) => { setNewFirstname(e.target.value); }} value={values.firstname}/><br />
                            <span  hidden >This is required feild</span>
                            </div>
                        </div>
                        <div className="associateprofile-right-inputfeilds">
                            <label>Last Name</label><br />
                            <div className="associateprofile-feild">
                            <i><AiIcons.FaUser className="associateprofile-icons"/></i>
                            <input type="text" className="associateprofile-textfield"   placeholder="last name" onChange={(e) => { setNewLastname(e.target.value); }} value={values.lastname}/>
                            </div>
                        </div>
                   </div>
                     <div className="associateprofile-inputfeilds">
                        <div className="associateprofile-left-inputfeilds" >
                            <label>Email</label><br />
                            <div className="associateprofile-feild">
                            <i><AiIcons.AiOutlineMail className="associateprofile-icons"/></i>
                            <input type="text" className="associateprofile-textfield" placeholder="email" pattern=".+@tutsplus\.com|.+@envato\.com"  onChange={(e) => { setNewEmail(e.target.value); }} value={values.email}/>
                            </div>
                        </div>
                        <div className="associateprofile-right-inputfeilds">
                            <label>Country</label><br />
                            <div className="associateprofile-feild">
                            <i><AiIcons.BiWorld className="associateprofile-icons"/></i>
                            <input type="text" className="associateprofile-textfield" placeholder="country" onChange={(e) => { setNewCountry(e.target.value); }} value={values.country}/>
                            </div>
                        </div>
                   </div>
                   <div className="associateprofile-inputfeilds">
                        <div className="associateprofile-left-inputfeilds" >
                            <label>City</label><br />
                            <div className="associateprofile-feild">
                            <i><AiIcons.FaCity className="associateprofile-icons"/></i>
                            <input type="text" className="associateprofile-textfield" placeholder="city" onChange={(e) => { setNewCity(e.target.value); }} value={values.city}/><br/>
                            </div>
                        </div>
                        <div className="associateprofile-right-inputfeilds">
                            <label>Address</label><br />
                            <div className="associateprofile-feild">
                            <i><AiIcons.FiMapPin className="associateprofile-icons"/></i>
                            <input type="text" className="associateprofile-textfield" placeholder="address" onChange={(e) => { setNewAddress(e.target.value); }} value={values.address}/>
                            </div>
                        </div>
                   </div>

                   <div className="associateprofile-inputfeilds">
                        <div className="associateprofile-left-inputfeilds" >
                            <label>State</label><br />
                            <div className="associateprofile-feild">
                            <i><AiIcons.GiModernCity className="associateprofile-icons"/></i>
                            <input type="text" className="associateprofile-textfield" placeholder="State" onChange={(e)=>{setNewState(e.target.value);}} value={values.state}/>
                            </div>
                        </div>
                        <div className="associateprofile-right-inputfeilds">
                            <label>Phone Number</label><br />
                            <div className="associateprofile-feild">
                            <i><AiIcons.BsPhone className="associateprofile-icons"/></i>
                            <input type="text" className="associateprofile-textfield" placeholder="Phone number" pattern="\d*" title="Numbers only, please." onChange={(e)=>{setNewPhonenumber(e.target.value);}} value={values.phonenumber}/>
                            </div>
                        </div>
                    </div>
                   <div className="associateprofile-inputfeilds">
                        <div className="associateprofile-left-inputfeilds" >
                            <label>Postal Code</label><br />
                            <div className="associateprofile-feild">
                            <i><AiIcons.BiMapPin className="associateprofile-icons"/></i>
                            <input type="text" className="associateprofile-textfield" placeholder="Postal Code" onChange={(e)=>{setNewPostalcode(e.target.value);}} value={values.postalcode}/>
                          </div>
                        </div>
                        <div className="associateprofile-left-inputfeilds" >
                            <label>DOB</label><br />
                            <div className="associateprofile-feild">
                            <input type="date" className="associateprofile-textfield" placeholder="Dob" onChange={(e)=>{setNewDob(e.target.value);}} value={values.dob}/>
                          </div>
                        </div>
                        
                    </div>
                    <div className="associateprofile-inputfeilds">
                    <div className="associateprofile-left-inputfeilds-Avatarfeild" >
                            <label >Avatar</label><br />
                            <div className="imagefeild">
                            <input type="file" name="file" className="textfield" accept="image/*" id='input' onChange={(e)=> imageHandler(e)}/>
                            <label htmlFor='input' className='imageupload'>
                            <i>< AiIcons.FcAddImage/> Choose an image</i>
                            </label>
                            </div>
                        </div>  
                        <div className="associateprofile-right-inputfeilds-genderradiobutton">
                            <label className="genderlbl">Gender</label><br />
                            <input type="radio"  className="radiomalebtn" onChange={(e)=>{setNewMale(e.target.value);}} value={values.male} name="radio"  />
                            <p className="radiobtn-txt">Male</p>
                            <input type="radio" className="radiofemalebtn" onChange={(e)=>{setNewFemale(e.target.value);}} value={values.female} name="radio"/>
                            <p className="radiobtn-txt">Female</p>
                        </div>
                    </div>  
                    <div className="associateprofile-inputfeilds-checkbox">   
                      <div className="associateprofile-left-inputfeilds-checkboxselective">
                            <label className="Qualificationlbl">Qualify</label><br />
                            <input type="checkbox"  className="checkfresherbtn" onChange={(e)=>{setNewFresher(e.target.value);}} value={values.fresher} name="radio"  />
                            <p className="checkbtn-txt">Fresher</p>
                            <input type="checkbox" className="checkexperiencebtn" onChange={(e)=>{setNewExperience(e.target.value);}} value={values.experience} name="radio"/>
                            <p className="checkbtn-txt">Experience</p>
                        </div> 
                    </div>                              
                    <div className="buttonsection">
                            <div className="backbtn">
                               <i></i>
                            </div>
                            <div className="nextbtn">
                                <input type="button" className="cancelicon" value="Cancel" />
                                <input type="button" className="nexticon" value="Next" onClick={focus2}/>
                            </div>
                        </div>
                    {/* </div>{console.log(addAssociate)} */}
                </div>                
                <div className="associateprofile-textfeild-container" hidden={index != 1}> 
                <div className='Addeducationpart'>
                <div className='Sslcpart'>
                <div className="associateprofile-inputfeilds">
                        <div className="associateprofile-left-inputfeilds" >
                            <label>Board</label><br />
                            <div className="associateprofile-feild">
                            <i><AiIcons.IoBusinessOutline className="associateprofile-icons"/></i>
                            <input type="text" className="associateprofile-textfield"    placeholder=" Sslc Board "  onChange={(e)=>{setNewSslcBoard(e.target.value);}} value={values.sslcboard}  /><br />
                            <span  hidden >This is required feild</span>
                            </div>
                        </div>
                        <div className="associateprofile-right-inputfeilds">
                            <label>Sslc School Name</label><br />
                            <div className="associateprofile-feild">
                            <i><AiIcons.MdOutlineBusiness className="associateprofile-icons"/></i>
                            <input type="text" className="associateprofile-textfield" placeholder="School Name"  onChange={(e)=>{setNewSslcSchoolName(e.target.value);}} value={values.sslcschoolname}/>
                            </div>
                        </div>
                   </div>
                   <div className="associateprofile-inputfeilds">
                        <div className="associateprofile-left-inputfeilds" >
                            <label>Year Of Passed Out </label><br />
                            <div className="associateprofile-feild">
                            <i><AiIcons.IoBusinessOutline className="associateprofile-icons"/></i>
                            <input type="text" className="associateprofile-textfield"  placeholder=" Year of passed out "  onChange={(e)=>{setNewSslcYearPassedOut(e.target.value);}} value={values.sslcyearpassedout}  /><br />
                            <span  hidden >This is required feild</span>
                            </div>
                        </div>
                        <div className="associateprofile-right-inputfeilds">
                            <label>Sslc Marks</label><br />
                            <div className="associateprofile-feild">
                            <i><AiIcons.MdOutlineBusiness className="associateprofile-icons"/></i>
                            <input type="text" className="associateprofile-textfield" placeholder="Sslc Marks"  onChange={(e)=>{setNewSslcMark(e.target.value);}} value={values.newSslcmark}/>
                            </div>
                        </div>
                   </div>
                   </div>
                   <div className='Hscpart'>
                <div className="associateprofile-inputfeilds">
                        <div className="associateprofile-left-inputfeilds" >
                            <label>Board </label><br />
                            <div className="associateprofile-feild">
                            <i><AiIcons.IoBusinessOutline className="associateprofile-icons"/></i>
                            <input type="text" className="associateprofile-textfield"    placeholder=" Hsc Board  "  onChange={(e)=>{setNewHscBoard(e.target.value);}} value={values.hscboard} /><br />
                            <span  hidden >This is required feild</span>
                            </div>
                        </div>
                        <div className="associateprofile-right-inputfeilds">
                            <label>Hsc School Name</label><br />
                            <div className="associateprofile-feild">
                            <i><AiIcons.MdOutlineBusiness className="associateprofile-icons"/></i>
                            <input type="text" className="associateprofile-textfield" placeholder="Hsc School Name"  onChange={(e)=>{setNewHscSchoolName(e.target.value);}} value={values.hscschoolname}/>
                            </div>
                        </div>
                   </div>
                   <div className="associateprofile-inputfeilds">
                        <div className="associateprofile-left-inputfeilds" >
                            <label>Year Of Passed Out </label><br />
                            <div className="associateprofile-feild">
                            <i><AiIcons.IoBusinessOutline className="associateprofile-icons"/></i>
                            <input type="text" className="associateprofile-textfield"    placeholder=" Year of Passedout "  onChange={(e)=>{setNewHscYearPassedOut(e.target.value);}} value={values.hscyearpassedout} /><br />
                            <span  hidden >This is required feild</span>
                            </div>
                        </div>
                        <div className="associateprofile-right-inputfeilds">
                            <label>Hsc Mark</label><br />
                            <div className="associateprofile-feild">
                            <i><AiIcons.MdOutlineBusiness className="associateprofile-icons"/></i>
                            <input type="text" className="associateprofile-textfield" placeholder="Hsc Mark"  onChange={(e)=>{setNewHscMark(e.target.value);}} value={values.hscmark}/>
                            </div>
                        </div>
                   </div>
                   </div>
                <div className='Universitypart'>
                <div className="associateprofile-inputfeilds">
                        <div className="associateprofile-left-inputfeilds" >
                            <label>University</label><br />
                            <div className="associateprofile-feild">
                            <i><AiIcons.IoBusinessOutline className="associateprofile-icons"/></i>
                            <input type="text" className="associateprofile-textfield"    placeholder=" University Name "  onChange={(e)=>{setNewUniversity(e.target.value);}} value={values.university} /><br />
                            <span  hidden >This is required feild</span>
                            </div>
                        </div>
                        <div className="associateprofile-right-inputfeilds">
                            <label>College</label><br />
                            <div className="associateprofile-feild">
                            <i><AiIcons.MdOutlineBusiness className="associateprofile-icons"/></i>
                            <input type="text" className="associateprofile-textfield" placeholder="College Name"  onChange={(e)=>{setNewCollege(e.target.value);}} value={values.college}/>
                            </div>
                        </div>
                   </div>
                        <div className="associateprofile-inputfeilds">
                        <div className="associateprofile-left-inputfeilds" >
                            <label>Year of Passed out</label><br />
                            <div className="associateprofile-feild">
                            <input type="date" className="associateprofile-textfield" placeholder=" Year of Passed out"  onChange={(e)=>{setNewPassedoutyear(e.target.value);}} value={values.passedoutyear}/>
                            </div>
                        </div>
                        <div className="associateprofile-right-inputfeilds">
                            <label>Degree</label><br />
                            <div className="associateprofile-feild">
                            <i><AiIcons.GiMedallist className="associateprofile-icons"/></i>
                            <input type="text" className="associateprofile-textfield" placeholder="Degree" onChange={(e)=>{setNewDegree(e.target.value);}} value={values.degree}/>
                            </div>
                        </div>
                   </div>
                   <div className="associateprofile-inputfeilds">
                        <div className="associateprofile-left-inputfeilds" >
                            <label>CGPA</label><br />
                            <div className="associateprofile-feild">
                            <i><AiIcons.GrScorecard className="associateprofile-icons"/></i>
                            <input type="text" className="associateprofile-textfield" placeholder=" CGPA " onChange={(e)=>{setNewCgpa(e.target.value);}} value={values.cgpa}/><br/>
                            </div>
                        </div>
                        <div className="associateprofile-right-inputfeilds">
                            <label>Highest qualification</label><br />
                            <div className="associateprofile-feild">
                            <i><AiIcons.GiMedallist className="associateprofile-icons"/></i>
                            <input type="text" className="associateprofile-textfield" placeholder=" Highest Qualification " onChange={(e)=>{setNewQualification(e.target.value);}} value={values.qualification}/><br />
                            </div>
                        </div>
                        </div>
                        <div className="btn-box">
                       </div> 
                   </div>
                   </div>
                    
                    <div className="buttonsection">
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
                <div className="associateprofile-textfeild-container" hidden={index != 2}>
                <div className='Addeducationpart'>
                <div className="associateprofile-inputfeilds">
                        <div className="associateprofile-left-inputfeilds" >
                            <label>Company/Organization Name</label><br />
                            <div className="associateprofile-feild">
                            <i><AiIcons.MdOutlineBusiness className="associateprofile-icons"/></i>
                            <input type="text" className="associateprofile-textfield"  placeholder="Company Name" required onChange={(e)=>{setNewCompany(e.target.value);}} value={values.company}/><br />
                            <span  hidden >This is required feild</span>
                            </div>
                        </div>
                        <div className="associateprofile-right-inputfeilds">
                            <label>Designation</label><br />
                            <div className="associateprofile-feild">
                            <i><AiIcons.MdBusinessCenter className="associateprofile-icons"/></i>
                            <input type="text" className="associateprofile-textfield" placeholder=" Designation " autoFocus={false} onChange={(e)=>{setNewDesignation(e.target.value);}} value={values.designation}/>
                            </div>
                        </div>
                   </div>
                   
                        <div className="associateprofile-inputfeilds">
                        <div className="associateprofile-left-inputfeilds" >
                            <label>Years of Experience</label><br />
                            <div className="associateprofile-feild">
                            <i><AiIcons.FaMoneyBillAlt className="associateprofile-icons"/></i>
                            <input type="text" className="associateprofile-textfield" placeholder=" Year of Experience"   onChange={(e)=>{setNewYearsofexp(e.target.value);}} value={values.yearsofexp}/>
                            </div>
                        </div>
                        <div className="associateprofile-right-inputfeilds">
                            <label> Current Salary(Pa)</label><br />
                            <div className="associateprofile-feild">
                            <i><AiIcons.FaMoneyBillAlt className="associateprofile-icons"/></i>
                            <input type="text" className="associateprofile-textfield" placeholder="Current salary" onChange={(e)=>{setNewCurrentsalary(e.target.value);}} value={values.currentsalary}/>
                            </div>
                        </div>
                   </div>
                   <div className="associateprofile-inputfeilds">
                        <div className="associateprofile-left-inputfeilds" >
                            <label>Company Address</label><br />
                            <div className="associateprofile-feild">
                            <i><AiIcons.FaCity className="associateprofile-icons"/></i>
                            <input type="text" className="associateprofile-textfield" placeholder="Company Address" onChange={(e)=>{setNewCompanyaddress(e.target.value);}} value={values.companyaddress}/><br/>
                            </div>
                        </div>
                        <div className="associateprofile-right-inputfeilds">
                           <label>Exceptation Salary(Pa)</label><br />
                            <div className="associateprofile-feild">
                            <i><AiIcons.FaMoneyBillAlt className="associateprofile-icons"/></i>
                            <input type="text" className="associateprofile-textfield" placeholder=" Exceptation Salary" onChange={(e)=>{setNewExpectsalary(e.target.value);}} value={values.expectsalary}/><br/>
                            </div>
                        </div>
                   </div> 
                   <div className="btn-box">
                   </div> 
                   </div>
                    <div className="buttonsection">
                            <div className="backbtn">
                               {/* <i><AiIcons.BsArrowLeftSquareFill className="nexticon" value="Back" onClick={focus2} /></i> */}
                               <input type="button" className="backicon" value="Back" onClick={focus2}/>
                            </div>
                            <div className="nextbtn">
                               {/* <i><AiIcons.BsFillArrowRightSquareFill className="nexticon" onClick={focus4}/></i> */}
                               <input type="button" className="cancelicon" value="Cancel"/>
                               <input type="button" className="nexticon" value="Next" onClick={focus4}/>
                            </div>
                    </div>
                </div>
                <div className="associateprofile-textfeild-container" hidden={index != 3}>
                <div className="associateprofile-inputfeilds">
                        <div className="associateprofile-left-inputfeilds" >
                            <label>Institute Name</label><br />
                            <div className="associateprofile-feild">
                            <i><AiIcons.MdOutlineBusiness className="associateprofile-icons"/></i>
                            <input type="text" className="associateprofile-textfield"   placeholder="Institute name" required onChange={(e)=>{setNewInstitutename(e.target.value);}} value={values.institutename} /><br />
                            <span  hidden >This is required feild</span>
                            </div>
                        </div>
                        <div className="associateprofile-right-inputfeilds">
                            <label>Course Name</label><br />
                            <div className="associateprofile-feild">
                            <i><AiIcons.FaChalkboardTeacher className="associateprofile-icons"/></i>
                            <input type="text" className="associateprofile-textfield" placeholder=" Course name" autoFocus={false} onChange={(e)=>{setNewCoursename(e.target.value);}} value={values.coursename}/>
                            </div>
                        </div>
                   </div>
                   <div className="associateprofile-inputfeilds">
                        <div className="associateprofile-left-inputfeilds" >
                            <label>No of Month/year</label><br />
                            <div className="associateprofile-feild">
                            <i><AiIcons.MdToday className="associateprofile-icons"/></i>
                            <input type="text" className="associateprofile-textfield" placeholder= "No of Month/year"  onChange={(e)=>{setNewDuration(e.target.value);}} value={values.duration}/>
                            </div>
                        </div>
                        <div className="associateprofile-right-inputfeilds">
                            <label>Score</label><br />
                            <div className="associateprofile-feild">
                            <i><AiIcons.GrScorecard className="associateprofile-icons"/></i>
                            <input type="text" className="associateprofile-textfield" placeholder="Course Certificate" onChange={(e)=>{setNewCoursecertificate(e.target.value);}} value={values.coursecertificate}/>
                            </div>
                        </div>
                   </div>
                   <div className="associateprofile-inputfeilds">
                        <div className="associateprofile-left-inputfeilds" >
                            <label>Institute Address</label><br />
                            <div className="associateprofile-feild">
                            <i><AiIcons.FaCity className="associateprofile-icons"/></i>
                            <input type="text" className="associateprofile-textfield" placeholder=" Institute Address" onChange={(e)=>{setNewInstituteaddress(e.target.value);}} value={values.instituteaddress}/><br/>
                            </div>
                        </div>
                        <div className="associateprofile-right-inputfeilds">
                            <label>Project</label><br />
                            <div className="associateprofile-feild">
                            <i><AiIcons.FaProjectDiagram className="associateprofile-icons"/></i>
                            <input type="text" className="associateprofile-textfield" placeholder=" Project " onChange={(e)=>{setNewProject(e.target.value);}} value={values.project}/>
                            </div>
                        </div>
                   </div> 
                   <div className="associateprofile-inputfeilds">
                   <div className="associateprofile-left-inputfeilds" >
                            <label>Primary Skill</label><br />
                            <div className="associateprofile-feild">
                            <i><AiIcons.GiSkills className="associateprofile-icons"/></i>
                            <input type="text" className="associateprofile-textfield" placeholder="PrimarySkill" onChange={(e)=>{setNewPrimarySkill(e.target.value);}} value={values.primaryskill}/><br/>
                            </div>
                        </div>
                        <div className="associateprofile-right-inputfeilds">
                            <label> Secondary Skill</label><br />
                            <div className="associateprofile-feild">
                            <i><AiIcons.GiSkills className="associateprofile-icons"/></i>
                            <input type="text" className="associateprofile-textfield" placeholder="SecondarySkill" onChange={(e)=>{setNewSecondarySkill(e.target.value);}} value={values.secondaryskill}/>
                            </div>
                        </div>
                   </div> 
                   <div className="associateprofile-inputfeilds">
                       <div className="associateprofile-left-inputfeilds-certifyuploadfeildleft" >
                            <label>Experience Certificate</label><br />
                            <div className="associateprofile-feild">
                            <input type="file" name="file" className="textfield"  id='exp_certify'/>
                            <label htmlFor='exp_certify' className='imageupload'>
                            <i>< AiIcons.FcAddImage/> Choose an file</i>
                            </label>
                            </div>
                        </div> 
                        <div className="associateprofile-right-inputfeilds-certifyuploadfeildright" >
                            <label>Course Certificate</label><br />
                            <div className="associateprofile-feild">
                            <input type="file" name="file" className="textfield"  id='Course_certify' />
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
                    <div className="buttonsection">
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

