import React from 'react'
import * as AiIcons from 'react-icons/all';
import './AddAssociateProfile.component.scss';
import Profileimage from '../../assets/images/profileimage.jpg';
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

  const [values,setValues]=useState({
    firstname:"",

});
const handleChangeCapture = (event) =>{
    setValues({
        ...values,
        [event.target.name]: event.target.value,
    });
};
//   const resetInputField = () => {
//     setInputValue("");
//   };
   //let nav = './AddAssociateprofile.component.jsx'
   function cancel(e)  { 
       e.preventDefault();
       console.log(firstname);
       setFirstname("");
    // setLastname.value=" ";
    //   if(setFirstname.value ==" " || setFirstname.value == null){
    //     alert('Please fill in your password again for confirmation!');
    //     return false;
    //   }
    // //   if(setFirstname !== null)
    //   {
          
    //   }
  }
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
  const handler = (event) => {
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
      postalcode:postalcode,
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
    return (
      <div>
        <div className="addassociate">
           <i >< AiIcons.IoMdClose className="closeIcon" onClick={()=>closeModel(false)}/></i>
           <div className="profile_view">
                {uploadimage && <img alt={uploadimage.name} src={preview}  className="profile_align"  /> }
                <input type="text" className="toptxtfeild"   onChange={(e)=>{setFirstname(e.target.value);}}  /><br />              
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
                            <input type="text" className="textfield"   placeholder="first name" values={setValues.firstname} onChangeCapture={handleChangeCapture} required onChange={(e)=>{setFirstname(e.target.value);}} /><br />
                            {errors.firstname &&<p className="error">{errors.firstname}</p>}
                            <span  hidden >This is required feild</span>
                            </div>
                        </div>
                        <div className="right-inputfeilds">
                            <label>Last Name</label><br />
                            <div className="feild">
                            <i><AiIcons.FaUser className="icons"/></i>
                            <input type="text" className="textfield" placeholder="last name" autoFocus={false} onChange={(e)=>{setLastname(e.target.value);}}/>
                            </div>
                        </div>
                   </div>
                     <div className="inputfeilds">
                        <div className="left-inputfeilds" >
                            <label>Email</label><br />
                            <div className="feild">
                            <i><AiIcons.AiOutlineMail className="icons"/></i>
                            <input type="text" className="textfield" placeholder="email" pattern=".+@tutsplus\.com|.+@envato\.com"  onChange={(e)=>{setEmail(e.target.value);}}/>
                            </div>
                        </div>
                        <div className="right-inputfeilds">
                            <label>Country</label><br />
                            <div className="feild">
                            <i><AiIcons.BiWorld className="icons"/></i>
                            <input type="text" className="textfield" placeholder="country" onChange={(e)=>{setCountry(e.target.value);}}/>
                            </div>
                        </div>
                   </div>
                   <div className="inputfeilds">
                        <div className="left-inputfeilds" >
                            <label>City</label><br />
                            <div className="feild">
                            <i><AiIcons.FaCity className="icons"/></i>
                            <input type="text" className="textfield" placeholder="city" onChange={(e)=>{setCity(e.target.value);}}/><br/>
                            </div>
                        </div>
                        <div className="right-inputfeilds">
                            <label>Address</label><br />
                            <div className="feild">
                            <i><AiIcons.FiMapPin className="icons"/></i>
                            <input type="text" className="textfield" placeholder="address" onChange={(e)=>{setAddress(e.target.value);}}/>
                            </div>
                        </div>
                   </div>

                   <div className="inputfeilds">
                        <div className="left-inputfeilds" >
                            <label>State</label><br />
                            <div className="feild">
                            <i><AiIcons.GiModernCity className="icons"/></i>
                            <input type="text" className="textfield" placeholder="State" onChange={(e)=>{setState(e.target.value);}}/>
                            </div>
                        </div>
                        <div className="right-inputfeilds">
                            <label>Phone Number</label><br />
                            <div className="feild">
                            <i><AiIcons.BsPhone className="icons"/></i>
                            <input type="text" className="textfield" placeholder="Phone number" pattern="\d*" title="Numbers only, please." onChange={(e)=>{setPhonenumber(e.target.value);}}/>
                            </div>
                        </div>
                    </div>
                   <div className="inputfeilds">
                        <div className="left-inputfeilds" >
                            <label>Postal Code</label><br />
                            <div className="feild">
                            <i><AiIcons.BiMapPin className="icons"/></i>
                            <input type="text" className="textfield" placeholder="Postal Code" onChange={(e)=>{setPostalcode(e.target.value);}}/>
                          </div>
                        </div>
                        <div className="left-inputfeilds" >
                            <label>DOB</label><br />
                            <div className="feild">
                            <input type="date" className="textfield" placeholder="Dob" onChange={(e)=>{setDob(e.target.value);}}/>
                          </div>
                        </div>
                        
                    </div>
                    <div className="radioinputfeilds">
                        <div className="genderradiobutton">
                            <label className="genderlbl">Gender</label><br />
                            <input type="radio"  className="radiomalebtn" onChange={(e)=>{setMale(e.target.value);}} name="radio"  />
                            <p className="radiobtn-txt">Male</p>
                            <input type="radio" className="radiofemalebtn" onChange={(e)=>{setFemale(e.target.value);}} name="radio"/>
                            <p className="radiobtn-txt">Female</p>
                        </div>
                        <div className="checkboxselective">
                            {/* <label className="Qualificationlbl"></label><br /> */}
                            <input type="checkbox"  className="radiofresherbtn" onChange={(e)=>{setFresher(e.target.value);}} name="radio"  />
                            <p className="radiobtn-txt">Fresher</p>
                            <input type="checkbox" className="radioexperiencebtn" onChange={(e)=>{setExperience(e.target.value);}} name="radio"/>
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
                            
                    <div className="btn1">
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
                <div className="textfeild-container" hidden={index != 1}>
                {inputList.map((x, i) => {
                return ( 
                <div className='Addeducationpart'>
                <div className="inputfeilds">
                        <div className="left-inputfeilds" >
                            <label>University</label><br />
                            <div className="feild">
                            <i><AiIcons.IoBusinessOutline className="icons"/></i>
                            <input type="text" className="textfield"    placeholder=" University Name "  onChange={(e)=>{setUniversity(e.target.value);}}  /><br />
                            <span  hidden >This is required feild</span>
                            </div>
                        </div>
                        <div className="right-inputfeilds">
                            <label>College</label><br />
                            <div className="feild">
                            <i><AiIcons.MdOutlineBusiness className="icons"/></i>
                            <input type="text" className="textfield" placeholder="College Name"  onChange={(e)=>{setCollege(e.target.value);}}/>
                            </div>
                        </div>
                   </div>
                        <div className="inputfeilds">
                        <div className="left-inputfeilds" >
                            <label>Year of Passed out</label><br />
                            <div className="feild">
                            <input type="date" className="textfield" placeholder=" Year of Passed out"  onChange={(e)=>{setPassedoutyear(e.target.value);}}/>
                            </div>
                        </div>
                        <div className="right-inputfeilds">
                            <label>Degree</label><br />
                            <div className="feild">
                            <i><AiIcons.GiMedallist className="icons"/></i>
                            <input type="text" className="textfield" placeholder="Degree" onChange={(e)=>{setDegree(e.target.value);}}/>
                            </div>
                        </div>
                   </div>
                   <div className="inputfeilds">
                        <div className="left-inputfeilds" >
                            <label>CGPA</label><br />
                            <div className="feild">
                            <i><AiIcons.GrScorecard className="icons"/></i>
                            <input type="text" className="textfield" placeholder=" CGPA " onChange={(e)=>{setCgpa(e.target.value);}}/><br/>
                            </div>
                        </div>
                        <div className="right-inputfeilds">
                            <label>Highest qualification</label><br />
                            <div className="feild">
                            <i><AiIcons.GiMedallist className="icons"/></i>
                            <input type="text" className="textfield" placeholder=" Highest Qualification " onChange={(e)=>{setQualification(e.target.value);}}/><br />
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
                    <div className="btn1">
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
                {inputList.map((x, i) => {
                return ( 
                <div className='Addeducationpart'>
                <div className="inputfeilds">
                        <div className="left-inputfeilds" >
                            <label>Company/Organization Name</label><br />
                            <div className="feild">
                            <i><AiIcons.MdOutlineBusiness className="icons"/></i>
                            <input type="text" className="textfield"  placeholder="Company Name" required onChange={(e)=>{setCompany(e.target.value);}}  /><br />
                            <span  hidden >This is required feild</span>
                            </div>
                        </div>
                        <div className="right-inputfeilds">
                            <label>Designation</label><br />
                            <div className="feild">
                            <i><AiIcons.MdBusinessCenter className="icons"/></i>
                            <input type="text" className="textfield" placeholder=" Designation " autoFocus={false} onChange={(e)=>{setDesignation(e.target.value);}}/>
                            </div>
                        </div>
                   </div>
                   
                        <div className="inputfeilds">
                        <div className="left-inputfeilds" >
                            <label>Years of Experience</label><br />
                            <div className="feild">
                            <input type="date" className="textfield" placeholder=" Year of Experience"   onChange={(e)=>{setYearsofexp(e.target.value);}}/>
                            </div>
                        </div>
                        <div className="right-inputfeilds">
                            <label> Current Salary(Pa)</label><br />
                            <div className="feild">
                            <i><AiIcons.FaMoneyBillAlt className="icons"/></i>
                            <input type="text" className="textfield" placeholder="Current salary" onChange={(e)=>{setCurrentsalary(e.target.value);}}/>
                            </div>
                        </div>
                   </div>
                   <div className="inputfeilds">
                        <div className="left-inputfeilds" >
                            <label>Company Address</label><br />
                            <div className="feild">
                            <i><AiIcons.FaCity className="icons"/></i>
                            <input type="text" className="textfield" placeholder="Company Address" onChange={(e)=>{setCompanyaddress(e.target.value);}}/><br/>
                            </div>
                        </div>
                        <div className="right-inputfeilds">
                           <label>Exceptation Salary(Pa)</label><br />
                            <div className="feild">
                            <i><AiIcons.FaMoneyBillAlt className="icons"/></i>
                            <input type="text" className="textfield" placeholder=" Exceptation Salary" onChange={(e)=>{setExpectsalary(e.target.value);}}/><br/>
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
                    <div className="btn1">
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
                            <input type="text" className="textfield"   placeholder="Institute name" required onChange={(e)=>{setInstitutename(e.target.value);}}  /><br />
                            <span  hidden >This is required feild</span>
                            </div>
                        </div>
                        <div className="right-inputfeilds">
                            <label>Course Name</label><br />
                            <div className="feild">
                            <i><AiIcons.FaChalkboardTeacher className="icons"/></i>
                            <input type="text" className="textfield" placeholder=" Course name" autoFocus={false} onChange={(e)=>{setCoursename(e.target.value);}}/>
                            </div>
                        </div>
                   </div>
                   <div className="inputfeilds">
                        <div className="left-inputfeilds" >
                            <label>No of Month/year</label><br />
                            <div className="feild">
                            <i><AiIcons.MdToday className="icons"/></i>
                            <input type="text" className="textfield" placeholder= " No of Month/year"  onChange={(e)=>{setDuration(e.target.value);}}/>
                            </div>
                        </div>
                        <div className="right-inputfeilds">
                            <label>Score</label><br />
                            <div className="feild">
                            <i><AiIcons.GrScorecard className="icons"/></i>
                            <input type="text" className="textfield" placeholder="Course Certificate" onChange={(e)=>{setCoursecertificate(e.target.value);}}/>
                            </div>
                        </div>
                   </div>
                   <div className="inputfeilds">
                        <div className="left-inputfeilds" >
                            <label>Institute Address</label><br />
                            <div className="feild">
                            <i><AiIcons.FaCity className="icons"/></i>
                            <input type="text" className="textfield" placeholder=" Institute Address" onChange={(e)=>{setInstituteaddress(e.target.value);}}/><br/>
                            </div>
                        </div>
                        <div className="right-inputfeilds">
                            <label>Project</label><br />
                            <div className="feild">
                            <i><AiIcons.FaProjectDiagram className="icons"/></i>
                            <input type="text" className="textfield" placeholder=" Project " onChange={(e)=>{setProject(e.target.value);}}/>
                            </div>
                        </div>
                   </div> 
                   <div className="inputfeilds">
                   <div className="left-inputfeilds" >
                            <label>Primary Skill</label><br />
                            <div className="feild">
                            <i><AiIcons.GiSkills className="icons"/></i>
                            <input type="text" className="textfield" placeholder="PrimarySkill" onChange={(e)=>{setPrimarySkill(e.target.value);}}/><br/>
                            </div>
                        </div>
                        <div className="right-inputfeilds">
                            <label> Secondary Skill</label><br />
                            <div className="feild">
                            <i><AiIcons.GiSkills className="icons"/></i>
                            <input type="text" className="textfield" placeholder="SecondarySkill" onChange={(e)=>{setSecondarySkill(e.target.value);}}/>
                            </div>
                        </div>
                   </div> 
                   <div className="certifyupoadinputfeilds">
                       <div className="certifyuploadfeildleft" >
                            <label>Experience Certificate</label><br />
                            <div className="feild">
                            <input type="file" name="file" className="textfield"  id='exp_certify'/>
                            <label htmlFor='exp_certify' className='imageupload'>
                            <i>< AiIcons.FcAddImage/> Choose an file</i>
                            </label>
                            </div>
                        </div> 
                        <div className="certifyuploadfeildright" >
                            <label>Course Certificate</label><br />
                            <div className="feild">
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
                    <div className="btn1">
                            <div className="backbtn">
                               {/* <i><AiIcons.BsArrowLeftSquareFill className="nexticon" onClick={focus3}/></i> */}
                               <input type="button" className="backicon" value="Back" onClick={focus3}/>
                            </div>
                            <div className="nextbtn">
                            {/* <input type="button" className="Addprofile" value="Cancel" /> */}
                            <input type="button" className="cancelicon" value="Cancel" />
                            <input type="button" className="Addprofile" value="Submit" onClick={addAssociateProfile}/>
                            </div>
                    </div>
                </div>
            </div>                   
      </div>
    )
}

