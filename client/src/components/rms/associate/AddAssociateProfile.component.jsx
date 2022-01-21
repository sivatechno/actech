import React from 'react'
import * as AiIcons from 'react-icons/all';
import './AddAssociateProfile.component.scss';
import Profileimage from '../../assets/images/profileimage.jpg'
import { useState , useEffect ,useRef } from 'react';
import axios from 'axios';
import Associateprofilepopup from './AssociatePopup.jsx';
import AssociateValidate from './AssociateValidate'
import config from '../../config/config'

export default function AddAssociateprofile({closeModel}) {
  const apiURL = config.API_URL;  
  const [email,setEmail] = useState("");

  const [firstname,setFirstname] = useState("");

  const [lastname,setLastname] = useState("");

  const [country,setCountry] = useState("");

  const [city,setCity] = useState("");

  const [address,setAddress] = useState("");

  const [state,setState] = useState("");

  const [postalcode,setPostalcode] = useState("");

  const [phonenumber,setPhonenumber] = useState("");

  const [college, setCollege] = useState("");

  const [passedoutyear,setPassedoutyear] = useState("");

  const [degree,setDegree] = useState("");

  const [cgpa,setCgpa] = useState("");

  const [qualification,setQualification] = useState("");

  const [company,setCompany] = useState("");

  const [designation,setDesignation] = useState("");

  const [sslcboard, setSslcBoard] = useState("");

  const [sslcschoolname, setSslcSchoolName] = useState("");

  const [sslcyearpassedout, setSslcYearPassedOut] = useState("");

  const [sslcmark, setSslcMark] = useState("");

  const [hscboard, setHscBoard] = useState("");

  const [hscschoolname, setHscSchoolName] = useState("");

  const [hscyearpassedout, setHscYearPassedOut] = useState("");

  const [hscmark, setHscMark] = useState("");

  const [university, setUniversity] = useState("");

  const [yearsofexp, setYearsofexp] = useState("");

  const [expcertificate, setExpcertificate] = useState("");

  const [companyaddress, setCompanyaddress] = useState("");

  const [currentsalary, setCurrentsalary] = useState("");

  const [expectsalary, setExpectsalary] = useState("");

  const [institutename , setInstitutename] = useState("");

  const [coursename, setCoursename] = useState("");

  const [duration, setDuration] = useState("");

  const [coursecertificate, setCoursecertificate] = useState("");

  const [instituteaddress, setInstituteaddress] = useState("");

  const [project, setProject] = useState("");
  
  const [female,setFemale] = useState("");

  const [male,setMale] = useState("");

  const [experience,setExperience] = useState("");

  const [fresher,setFresher] = useState("");

  const [primaryskill,setPrimarySkill] = useState("");

  const [secondaryskill,setSecondarySkill] = useState("");

  const [dob,setDob] = useState("");

  const [uploadimage,setUploadimage] = useState(Profileimage);

  const [preview , setPreview] = useState(Profileimage);

  const [index, setIndex] = useState("");

  const [inputList, setInputList] = useState([{ firstName: "", lastName: "" }]);

  const[errors,setErrors]=useState({});

  const[active,setActive]=useState(false);

  const [values,setValues]=useState({
    firstname:"",

});
const handleChangeCapture = (event) =>{
    setValues({
        ...values,
        [event.target.name]: event.target.value,
    });
};
function cancel(e) {
    e.preventDefault();
    console.log(firstname, lastname);
    // clearing the values
    setFirstname("");
    setLastname("");
  }
//    function cancel()  { 
      
//        setFirstname.value = " ";
//        setLastname.value=" ";
    //   if(setFirstname.value ==" " || setFirstname.value == null){
    //     alert('Please fill in your password again for confirmation!');
    //     return false;
    //   }
    // //   if(setFirstname !== null)
    //   {
          
    //   }  
  function focus1(){
    setIndex(0)    
  }
  function focus2(){   
    tabvalidity()
  }
  function focus3(){
    setIndex(2)    
  }
  function focus4(){
    setIndex(3)
  }
  const tabfunction = (event) => {
    if(event.keyCode == 9)
    if(setFirstname.value ==" " || setFirstname.value == null){
        alert('Please fill in your password again for confirmation!');
        return false;
      }
  setEmail(event.key);
};
 const upload = (e) => {
  const formData = new FormData()
  formData.append("myuploadimage" , uploadimage)

  axios.post("http://localhost:5000/associateprofile/upload" , formData,{
      headers : {
          "enc-type" : "multipart/form-data",
      },
  })
  .then((res) => console.log(res))
  .catch((err) => console.log(err))
 }
  const addAssociateProfile = (e) =>{
    upload();
    axios.post("http://localhost:5000/associateprofile/create",
    {
      firstname:firstname,
      lastname:lastname,
      email:email,
      country:country,
      city:city,
      address:address,
      state:state,
      phonenumber:phonenumber,
      dob:dob,
      postalcode:postalcode,
      sslcboard:sslcboard,
      sslcyearpassedout:sslcyearpassedout,
      sslcschoolname:sslcschoolname,
      sslcmark:sslcmark,
      hscboard:hscboard,
      hscyearpassedout:hscyearpassedout,
      hscschoolname:hscschoolname,
      hscmark:hscmark,
      university : university,
      college:college,
      passedoutyear:passedoutyear,
      degree:degree,
      cgpa:cgpa,
      qualification:qualification,
      company:company,
      designation:designation,
      currentsalary:currentsalary,
      expectsalary:expectsalary,
      yearsofexp:yearsofexp,
      expcertificate:expcertificate,
      companyaddress:companyaddress,
      institutename:institutename,
      coursename:coursename,
      duration:duration,
      coursecertificate:coursecertificate,
      instituteaddress:instituteaddress,
      project:project,
      female:female,
      male:male,
      experience:experience,
      fresher:fresher,
      secondaryskill:secondaryskill,
      primaryskill:primaryskill,
    }).then((response) =>{  

    })
  }  
   
 const imageHandler = (event) => {
      const selectedImage = event.target.files[0]
      setUploadimage(selectedImage)
      const imagePreview = URL.createObjectURL(selectedImage)
      setPreview(imagePreview)
  }

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  // handle click event of the Remove button
  const handleRemoveClick = index => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  const handleAddClick = () => {
    setInputList([...inputList, { firstName: "", lastName: "" }]);
  };

  const tabvalidity = () =>
  {
    if(firstname.length<1){
        //document.getElementById("error").style.display = "inline";
        alert("please enter the first name")
    }
    if(lastname.length<1){
        //document.getElementById("error").style.display = "inline";
        alert("please enter the last name")
    }
    if(firstname.length>1 && lastname.length>1){setIndex(1)}      
  }
    return (
      <div>
        <div className="addassociate">
           <i >< AiIcons.IoMdClose className="closeIcon" onClick={()=>closeModel(false)}/></i>
           <div className="profile_view">
                {uploadimage && <img alt={uploadimage.name} src={preview}  className="profile_align"  /> }
                <input type="text" className="toptxtfeild"   onChange={(e)=>{setFirstname(e.target.value);}}  /><br />              
            </div>
           <div className="Tabitems">
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
                            <input type="text" className="associateprofile-textfield" onKeyPress={tabvalidity}  autoFocus = {true} placeholder="first name" values={setValues.firstname} onChangeCapture={handleChangeCapture} required onChange={(e)=>{setFirstname(e.target.value);}} onKeyPress={tabfunction}/><br />
                            {tabvalidity.firstname &&<p id="error"></p>}
                            <span  hidden >This is required feild</span>
                            </div>
                        </div>
                        <div className="associateprofile-right-inputfeilds">
                            <label>Last Name</label><br />
                            <div className="associateprofile-feild">
                            <i><AiIcons.FaUser className="associateprofile-icons"/></i>
                            <input type="text" className="associateprofile-textfield"   placeholder="last name" onChange={(e)=>{setLastname(e.target.value);}}/>
                            </div>
                        </div>
                   </div>
                     <div className="associateprofile-inputfeilds">
                        <div className="associateprofile-left-inputfeilds" >
                            <label>Email</label><br />
                            <div className="associateprofile-feild">
                            <i><AiIcons.AiOutlineMail className="associateprofile-icons"/></i>
                            <input type="text" className="associateprofile-textfield" placeholder="email" pattern=".+@tutsplus\.com|.+@envato\.com"  onChange={(e)=>{setEmail(e.target.value);}}/>
                            </div>
                        </div>
                        <div className="associateprofile-right-inputfeilds">
                            <label>Country</label><br />
                            <div className="associateprofile-feild">
                            <i><AiIcons.BiWorld className="associateprofile-icons"/></i>
                            <input type="text" className="associateprofile-textfield" placeholder="country" onChange={(e)=>{setCountry(e.target.value);}}/>
                            </div>
                        </div>
                   </div>
                   <div className="associateprofile-inputfeilds">
                        <div className="associateprofile-left-inputfeilds" >
                            <label>City</label><br />
                            <div className="associateprofile-feild">
                            <i><AiIcons.FaCity className="associateprofile-icons"/></i>
                            <input type="text" className="associateprofile-textfield" placeholder="city" onChange={(e)=>{setCity(e.target.value);}}/><br/>
                            </div>
                        </div>
                        <div className="associateprofile-right-inputfeilds">
                            <label>Address</label><br />
                            <div className="associateprofile-feild">
                            <i><AiIcons.FiMapPin className="associateprofile-icons"/></i>
                            <input type="text" className="associateprofile-textfield" placeholder="address" onChange={(e)=>{setAddress(e.target.value);}}/>
                            </div>
                        </div>
                   </div>

                   <div className="associateprofile-inputfeilds">
                        <div className="associateprofile-left-inputfeilds" >
                            <label>State</label><br />
                            <div className="associateprofile-feild">
                            <i><AiIcons.GiModernCity className="associateprofile-icons"/></i>
                            <input type="text" className="associateprofile-textfield" placeholder="State" onChange={(e)=>{setState(e.target.value);}}/>
                            </div>
                        </div>
                        <div className="associateprofile-right-inputfeilds">
                            <label>Phone Number</label><br />
                            <div className="associateprofile-feild">
                            <i><AiIcons.BsPhone className="associateprofile-icons"/></i>
                            <input type="text" className="associateprofile-textfield" placeholder="Phone number" pattern="\d*" title="Numbers only, please." onChange={(e)=>{setPhonenumber(e.target.value);}}/>
                            </div>
                        </div>
                    </div>
                   <div className="associateprofile-inputfeilds">
                        <div className="associateprofile-left-inputfeilds" >
                            <label>Postal Code</label><br />
                            <div className="associateprofile-feild">
                            <i><AiIcons.BiMapPin className="associateprofile-icons"/></i>
                            <input type="text" className="associateprofile-textfield" placeholder="Postal Code" onChange={(e)=>{setPostalcode(e.target.value);}}/>
                          </div>
                        </div>
                        <div className="associateprofile-left-inputfeilds" >
                            <label>DOB</label><br />
                            <div className="associateprofile-feild">
                            <input type="date" className="associateprofile-textfield" placeholder="Dob" onChange={(e)=>{setDob(e.target.value);}}/>
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
                            <input type="radio"  className="radiomalebtn" onChange={(e)=>{setMale(e.target.value);}} name="radio"  />
                            <p className="radiobtn-txt">Male</p>
                            <input type="radio" className="radiofemalebtn" onChange={(e)=>{setFemale(e.target.value);}} name="radio"/>
                            <p className="radiobtn-txt">Female</p>
                        </div>
                    </div>  
                    <div className="associateprofile-inputfeilds-checkbox">   
                      <div className="associateprofile-left-inputfeilds-checkboxselective">
                            <label className="Qualificationlbl">Qualify</label><br />
                            <input type="checkbox"  className="checkfresherbtn" onChange={(e)=>{setFresher(e.target.value);}} name="radio"  />
                            <p className="checkbtn-txt">Fresher</p>
                            <input type="checkbox" className="checkexperiencebtn" onChange={(e)=>{setExperience(e.target.value);}} name="radio"/>
                            <p className="checkbtn-txt">Experience</p>
                        </div> 
                    </div>                              
                    <div className="buttonsection">
                            <div className="backbtn">
                               <i></i>
                            </div>
                            <div className="nextbtn">
                                <input type="button" className="cancelicon" value="Cancel" onClick={()=>closeModel(false)} />
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
                            <input type="text" className="associateprofile-textfield"    placeholder=" Sslc Board "  onChange={(e)=>{setSslcBoard(e.target.value);}}  /><br />
                            <span  hidden >This is required feild</span>
                            </div>
                        </div>
                        <div className="associateprofile-right-inputfeilds">
                            <label>Sslc School Name</label><br />
                            <div className="associateprofile-feild">
                            <i><AiIcons.MdOutlineBusiness className="associateprofile-icons"/></i>
                            <input type="text" className="associateprofile-textfield" placeholder="School Name"  onChange={(e)=>{setSslcSchoolName(e.target.value);}}/>
                            </div>
                        </div>
                   </div>
                   <div className="associateprofile-inputfeilds">
                        <div className="associateprofile-left-inputfeilds" >
                            <label>Year Of Passed Out </label><br />
                            <div className="associateprofile-feild">
                            <i><AiIcons.IoBusinessOutline className="associateprofile-icons"/></i>
                            <input type="text" className="associateprofile-textfield"  placeholder=" Year of passed out "  onChange={(e)=>{setSslcYearPassedOut(e.target.value);}}  /><br />
                            <span  hidden >This is required feild</span>
                            </div>
                        </div>
                        <div className="associateprofile-right-inputfeilds">
                            <label>Sslc Marks</label><br />
                            <div className="associateprofile-feild">
                            <i><AiIcons.MdOutlineBusiness className="associateprofile-icons"/></i>
                            <input type="text" className="associateprofile-textfield" placeholder="Sslc Marks"  onChange={(e)=>{setSslcMark(e.target.value);}}/>
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
                            <input type="text" className="associateprofile-textfield"    placeholder=" Hsc Board  "  onChange={(e)=>{setHscBoard(e.target.value);}}  /><br />
                            <span  hidden >This is required feild</span>
                            </div>
                        </div>
                        <div className="associateprofile-right-inputfeilds">
                            <label>Hsc School Name</label><br />
                            <div className="associateprofile-feild">
                            <i><AiIcons.MdOutlineBusiness className="associateprofile-icons"/></i>
                            <input type="text" className="associateprofile-textfield" placeholder="Hsc School Name"  onChange={(e)=>{setHscSchoolName(e.target.value);}}/>
                            </div>
                        </div>
                   </div>
                   <div className="associateprofile-inputfeilds">
                        <div className="associateprofile-left-inputfeilds" >
                            <label>Year Of Passed Out </label><br />
                            <div className="associateprofile-feild">
                            <i><AiIcons.IoBusinessOutline className="associateprofile-icons"/></i>
                            <input type="text" className="associateprofile-textfield"    placeholder=" Year of Passedout "  onChange={(e)=>{setHscYearPassedOut(e.target.value);}}  /><br />
                            <span  hidden >This is required feild</span>
                            </div>
                        </div>
                        <div className="associateprofile-right-inputfeilds">
                            <label>Hsc Mark</label><br />
                            <div className="associateprofile-feild">
                            <i><AiIcons.MdOutlineBusiness className="associateprofile-icons"/></i>
                            <input type="text" className="associateprofile-textfield" placeholder="Hsc Mark"  onChange={(e)=>{setHscMark(e.target.value);}}/>
                            </div>
                        </div>
                   </div>
                   </div>
                {inputList.map((x, i) => {
                    return (
                <div className='Universitypart'>
                <div className="associateprofile-inputfeilds">
                        <div className="associateprofile-left-inputfeilds" >
                            <label>University</label><br />
                            <div className="associateprofile-feild">
                            <i><AiIcons.IoBusinessOutline className="associateprofile-icons"/></i>
                            <input type="text" className="associateprofile-textfield"    placeholder=" University Name "  onChange={(e)=>{setUniversity(e.target.value);}}  /><br />
                            <span  hidden >This is required feild</span>
                            </div>
                        </div>
                        <div className="associateprofile-right-inputfeilds">
                            <label>College</label><br />
                            <div className="associateprofile-feild">
                            <i><AiIcons.MdOutlineBusiness className="associateprofile-icons"/></i>
                            <input type="text" className="associateprofile-textfield" placeholder="College Name"  onChange={(e)=>{setCollege(e.target.value);}}/>
                            </div>
                        </div>
                   </div>
                        <div className="associateprofile-inputfeilds">
                        <div className="associateprofile-left-inputfeilds" >
                            <label>Year of Passed out</label><br />
                            <div className="associateprofile-feild">
                            <input type="date" className="associateprofile-textfield" placeholder=" Year of Passed out"  onChange={(e)=>{setPassedoutyear(e.target.value);}}/>
                            </div>
                        </div>
                        <div className="associateprofile-right-inputfeilds">
                            <label>Degree</label><br />
                            <div className="associateprofile-feild">
                            <i><AiIcons.GiMedallist className="associateprofile-icons"/></i>
                            <input type="text" className="associateprofile-textfield" placeholder="Degree" onChange={(e)=>{setDegree(e.target.value);}}/>
                            </div>
                        </div>
                   </div>
                   <div className="associateprofile-inputfeilds">
                        <div className="associateprofile-left-inputfeilds" >
                            <label>CGPA</label><br />
                            <div className="associateprofile-feild">
                            <i><AiIcons.GrScorecard className="associateprofile-icons"/></i>
                            <input type="text" className="associateprofile-textfield" placeholder=" CGPA " onChange={(e)=>{setCgpa(e.target.value);}}/><br/>
                            </div>
                        </div>
                        <div className="associateprofile-right-inputfeilds">
                            <label>Highest qualification</label><br />
                            <div className="associateprofile-feild">
                            <i><AiIcons.GiMedallist className="associateprofile-icons"/></i>
                            <input type="text" className="associateprofile-textfield" placeholder=" Highest Qualification " onChange={(e)=>{setQualification(e.target.value);}}/><br />
                            </div>
                        </div>
                        </div>
                        <div className="btn-box">
                           {inputList.length !== 1 && <button  className="removeeducation"  onClick={() => handleRemoveClick(i)}>Remove</button>}
                           {inputList.length - 1 === i && <button onClick={handleAddClick} className='addeducation'>Add</button>}
                        </div> 
                   </div>
                   );
                 })}
                   </div>
                    
                    <div className="buttonsection">
                            <div className="backbtn">
                               {/* <i><AiIcons.BsArrowLeftSquareFill className="nexticon" onClick={focus1} /></i> */}
                               <input type="button" className="backicon" value="Back" onClick={focus1}/>
                            </div>
                            <div className="nextbtn">
                               {/* <i><AiIcons.BsFillArrowRightSquareFill className="nexticon" onClick={focus3}/></i> */}
                               <input type="button" className="cancelicon" value="Cancel" onClick={()=>closeModel(false)}/>
                               <input type="button" className="nexticon" value="Next" onClick={focus3}/>
                            </div>
                    </div>
                </div>
                <div className="associateprofile-textfeild-container" hidden={index != 2}>
                {inputList.map((x, i) => {
                return ( 
                <div className='Addeducationpart'>
                <div className="associateprofile-inputfeilds">
                        <div className="associateprofile-left-inputfeilds" >
                            <label>Company/Organization Name</label><br />
                            <div className="associateprofile-feild">
                            <i><AiIcons.MdOutlineBusiness className="associateprofile-icons"/></i>
                            <input type="text" className="associateprofile-textfield"  placeholder="Company Name" required onChange={(e)=>{setCompany(e.target.value);}}  /><br />
                            <span  hidden >This is required feild</span>
                            </div>
                        </div>
                        <div className="associateprofile-right-inputfeilds">
                            <label>Designation</label><br />
                            <div className="associateprofile-feild">
                            <i><AiIcons.MdBusinessCenter className="associateprofile-icons"/></i>
                            <input type="text" className="associateprofile-textfield" placeholder=" Designation " autoFocus={false} onChange={(e)=>{setDesignation(e.target.value);}}/>
                            </div>
                        </div>
                   </div>
                   
                        <div className="associateprofile-inputfeilds">
                        <div className="associateprofile-left-inputfeilds" >
                            <label>Years of Experience</label><br />                    
                            <div className="associateprofile-feild">
                            <i><AiIcons.FaMoneyBillAlt className="associateprofile-icons"/></i>
                            <input type="text" className="associateprofile-textfield" placeholder=" Year of Experience"   onChange={(e)=>{setYearsofexp(e.target.value);}}/>
                            </div>
                        </div>
                        <div className="associateprofile-right-inputfeilds">
                            <label> Current Salary(Pa)</label><br />
                            <div className="associateprofile-feild">
                            <i><AiIcons.FaMoneyBillAlt className="associateprofile-icons"/></i>
                            <input type="text" className="associateprofile-textfield" placeholder="Current salary" onChange={(e)=>{setCurrentsalary(e.target.value);}}/>
                            </div>
                        </div>
                   </div>
                   <div className="associateprofile-inputfeilds">
                        <div className="associateprofile-left-inputfeilds" >
                            <label>Company Address</label><br />
                            <div className="associateprofile-feild">
                            <i><AiIcons.FaCity className="associateprofile-icons"/></i>
                            <input type="text" className="associateprofile-textfield" placeholder="Company Address" onChange={(e)=>{setCompanyaddress(e.target.value);}}/><br/>
                            </div>
                        </div>
                        <div className="associateprofile-right-inputfeilds">
                           <label>Exceptation Salary(Pa)</label><br />
                            <div className="associateprofile-feild">
                            <i><AiIcons.FaMoneyBillAlt className="associateprofile-icons"/></i>
                            <input type="text" className="associateprofile-textfield" placeholder=" Exceptation Salary" onChange={(e)=>{setExpectsalary(e.target.value);}}/><br/>
                            </div>
                        </div>
                   </div> 
                   <div className="btn-box">
                        {inputList.length !== 1 && <button  className="removeeducation"  onClick={() => handleRemoveClick(i)}>Remove</button>}
                        {inputList.length - 1 === i && <button onClick={handleAddClick} className='addeducation'>Add</button>}
                   </div> 
                   </div>
                    );
                  })}
                    <div className="buttonsection">
                            <div className="backbtn">
                               {/* <i><AiIcons.BsArrowLeftSquareFill className="nexticon" value="Back" onClick={focus2} /></i> */}
                               <input type="button" className="backicon" value="Back" onClick={focus2}/>
                            </div>
                            <div className="nextbtn">
                               {/* <i><AiIcons.BsFillArrowRightSquareFill className="nexticon" onClick={focus4}/></i> */}
                               <input type="button" className="cancelicon" value="Cancel" onClick={()=>closeModel(false)}/>
                               <input type="button" className="nexticon" value="Next" onClick={focus4}/>
                            </div>
                    </div>
                </div>
                <div className="associateprofile-textfeild-container" hidden={index != 3}>
                {inputList.map((x, i) => {
                return (
                <div className='associateprofile-adddcertificatepart'>
                   <div className="associateprofile-inputfeilds">
                        <div className="associateprofile-left-inputfeilds" >
                            <label>Institute Name</label><br />
                            <div className="associateprofile-feild">
                            <i><AiIcons.MdOutlineBusiness className="associateprofile-icons"/></i>
                            <input type="text" className="associateprofile-textfield"   placeholder="Institute name" required onChange={(e)=>{setInstitutename(e.target.value);}}  /><br />
                            <span  hidden >This is required feild</span>
                            </div>
                        </div>
                        <div className="associateprofile-right-inputfeilds">
                            <label>Course Name</label><br />
                            <div className="associateprofile-feild">
                            <i><AiIcons.FaChalkboardTeacher className="associateprofile-icons"/></i>
                            <input type="text" className="associateprofile-textfield" placeholder=" Course name" autoFocus={false} onChange={(e)=>{setCoursename(e.target.value);}}/>
                            </div>
                        </div>
                     </div>
                   <div className="associateprofile-inputfeilds">
                        <div className="associateprofile-left-inputfeilds" >
                            <label>No of Month/year</label><br />
                            <div className="associateprofile-feild">
                            <i><AiIcons.MdToday className="associateprofile-icons"/></i>
                            <input type="text" className="associateprofile-textfield" placeholder= "No of Month/year"  onChange={(e)=>{setDuration(e.target.value);}}/>
                            </div>
                        </div>
                        <div className="associateprofile-right-inputfeilds">
                            <label>Score</label><br />
                            <div className="associateprofile-feild">
                            <i><AiIcons.GrScorecard className="associateprofile-icons"/></i>
                            <input type="text" className="associateprofile-textfield" placeholder="Course Score" onChange={(e)=>{setCoursecertificate(e.target.value);}}/>
                            </div>
                        </div>
                   </div>
                   <div className="associateprofile-inputfeilds">
                        <div className="associateprofile-left-inputfeilds" >
                            <label>Institute Address</label><br />
                            <div className="associateprofile-feild">
                            <i><AiIcons.FaCity className="associateprofile-icons"/></i>
                            <input type="text" className="associateprofile-textfield" placeholder=" Institute Address" onChange={(e)=>{setInstituteaddress(e.target.value);}}/><br/>
                            </div>
                        </div>
                        <div className="associateprofile-right-inputfeilds">
                            <label>Project</label><br />
                            <div className="associateprofile-feild">
                            <i><AiIcons.FaProjectDiagram className="associateprofile-icons"/></i>
                            <input type="text" className="associateprofile-textfield" placeholder=" Project " onChange={(e)=>{setProject(e.target.value);}}/>
                            </div>
                        </div>
                   </div> 
                   <div className="associateprofile-inputfeilds">
                   <div className="associateprofile-left-inputfeilds" >
                            <label>Primary Skill</label><br />
                            <div className="associateprofile-feild">
                            <i><AiIcons.GiSkills className="associateprofile-icons"/></i>
                            <input type="text" className="associateprofile-textfield" placeholder="PrimarySkill" onChange={(e)=>{setPrimarySkill(e.target.value);}}/><br/>
                            </div>
                        </div>
                        <div className="associateprofile-right-inputfeilds">
                            <label> Secondary Skill</label><br />
                            <div className="associateprofile-feild">
                            <i><AiIcons.GiSkills className="associateprofile-icons"/></i>
                            <input type="text" className="associateprofile-textfield" placeholder="SecondarySkill" onChange={(e)=>{setSecondarySkill(e.target.value);}}/>
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
                   <div className="btn-box">
                            {inputList.length !== 1 && <button  className="removecertificate"  onClick={() => handleRemoveClick(i)}>Remove</button>}
                            {inputList.length - 1 === i && <button onClick={handleAddClick} className='addcertificate'>Add</button>}
                    </div> 
                    </div>
                    );
                })}
                    <div className="buttonsection">
                            <div className="backbtn">
                               {/* <i><AiIcons.BsArrowLeftSquareFill className="nexticon" onClick={focus3}/></i> */}
                               <input type="button" className="backicon" value="Back" onClick={focus3}/>
                            </div>
                            <div className="nextbtn">
                            {/* <input type="button" className="Addprofile" value="Cancel" /> */}
                            <input type="button" className="cancelicon" value="Cancel" onClick={()=>closeModel(false)} />
                            <input type="button" className="Addprofile" value="Submit"  onClick={addAssociateProfile}/>
                            </div>
                    </div>
                </div>
            </div>                   
      </div>
    )
}

