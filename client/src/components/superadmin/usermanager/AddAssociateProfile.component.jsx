import React from 'react'
import * as AiIcons from 'react-icons/all';
import './AddAssociateProfile.component.scss';
import Profileimage from '../../assets/images/profileimage.png'
import { useState , useEffect ,useRef } from 'react';
import axios from 'axios';
import Associateprofilepopup from './AssociatePopup.jsx';
import config from '../../config/config'


export default function AddAssociateprofile() {
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

  const [index, setIndex] = useState("");

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

  const [uploadimage,setUploadimage] = useState(Profileimage);

  const [preview , setPreview] = useState(Profileimage);

  function close(){

  }
   //let nav = './AddAssociateprofile.component.jsx'
  function tab()
  {
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

  axios.post(`${apiURL}/associateprofile/upload` , formData,{
      headers : {
          "enc-type" : "multipart/form-data",
      },
  })
  .then((res) => console.log(res))
  .catch((err) => console.log(err))
 }
  const addAssociateProfile = (e) =>{
    upload();
    axios.post(`${apiURL}/associateprofile/create`,
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

    return (
      <div>
        <div className="addassociate">
           <i >< AiIcons.IoMdClose className="closeIcon"  /></i>
           <div className="profile_view">
                {uploadimage && <img alt={uploadimage.name} src={preview}  className="profile_align"  /> }
                <input type="text" className="toptxtfeild"  onChange={(e)=>{setFirstname(e.target.value);}}  /><br />              
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
                            <input type="text" className="textfield" errorText={tab}    placeholder="first name" required onChange={(e)=>{setFirstname(e.target.value);}} onClick={tab} /><br />
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
                            <input type="text" className="textfield" placeholder="email" pattern=".+@tutsplus\.com|.+@envato\.com" onKeyPress={tab} onChange={(e)=>{setEmail(e.target.value);}}/>
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
                        <div className="radiobutton">
                            <label className="genderlbl">Gender</label><br />
                            <input type="radio"  className="radiomalebtn" onChange={(e)=>{setMale(e.target.value);}} name="radio"  />
                            <p className="radiobtn-txt">Male</p>
                            <input type="radio" className="radiofemalebtn" onChange={(e)=>{setFemale(e.target.value);}} name="radio"/>
                            <p className="radiobtn-txt">Female</p>
                        </div>
                    </div>
                    <div className="inputfeilds">
                       <div className="left-inputfeilds">
                            <label>Avatar</label><br />
                            <div className="feild">
                            <input type="file" name="file" className="textfield" accept="image/*"  onChange={(e)=> imageHandler(e)}/>
                            </div>
                        </div>
                        <div className="radiobutton">
                            <label className="Qualificationlbl">Qualification</label><br />
                            <input type="checkbox"  className="radiofresherbtn" onChange={(e)=>{setFresher(e.target.value);}} name="radio"  />
                            <p className="radiobtn-txt">Fresher</p>
                            <input type="checkbox" className="radioexperiencebtn" onChange={(e)=>{setExperience(e.target.value);}} name="radio"/>
                            <p className="radiobtn-txt">Experience</p>
                        </div>
                    </div>                 
                    <div className="btn">
                            <div className="nextbtn">
                               <i></i>
                            </div>
                            <div className="nextbtn">Next
                               <i><AiIcons.BsFillArrowRightSquareFill className="nexticon" onClick={focus2}/></i>
                            </div>
                        </div>
                    {/* </div>{console.log(addAssociate)} */}
                </div>
                <div className="textfeild-container" hidden={index != 1}>
                <div className="inputfeilds">
                        <div className="left-inputfeilds" >
                            <label>University</label><br />
                            <div className="feild">
                            <i><AiIcons.FaUser className="icons"/></i>
                            <input type="text" className="textfield" errorText={tab}    placeholder=" University Name "  onChange={(e)=>{setUniversity(e.target.value);}} onClick={tab} /><br />
                            <span  hidden >This is required feild</span>
                            </div>
                        </div>
                        <div className="right-inputfeilds">
                            <label>College</label><br />
                            <div className="feild">
                            <i><AiIcons.FaUser className="icons"/></i>
                            <input type="text" className="textfield" placeholder="College Name"  onChange={(e)=>{setCollege(e.target.value);}}/>
                            </div>
                        </div>
                   </div>
                   
                        <div className="inputfeilds">
                        <div className="left-inputfeilds" >
                            <label>Year of Passed out</label><br />
                            <div className="feild">
                            <i><AiIcons.AiOutlineMail className="icons"/></i>
                            <input type="text" className="textfield" placeholder=" Year of Passed out"  onKeyPress={tab} onChange={(e)=>{setPassedoutyear(e.target.value);}}/>
                            </div>
                        </div>
                        <div className="right-inputfeilds">
                            <label>Degree</label><br />
                            <div className="feild">
                            <i><AiIcons.BiWorld className="icons"/></i>
                            <input type="text" className="textfield" placeholder="Degree" onChange={(e)=>{setDegree(e.target.value);}}/>
                            </div>
                        </div>
                   </div>
                   <div className="inputfeilds">
                        <div className="left-inputfeilds" >
                            <label>CGPA</label><br />
                            <div className="feild">
                            <i><AiIcons.FaCity className="icons"/></i>
                            <input type="text" className="textfield" placeholder=" CGPA " onChange={(e)=>{setCgpa(e.target.value);}}/><br/>
                            </div>
                        </div>
                        <div className="right-inputfeilds">
                            <label>Highest qualification</label><br />
                            <div className="feild">
                            <i><AiIcons.FiMapPin className="icons"/></i>
                            <input type="text" className="textfield" placeholder=" Highest Qualification " onChange={(e)=>{setQualification(e.target.value);}}/>
                            </div>
                        </div>
                   </div> 
                    <div className="btn">
                            <div className="nextbtn">Back
                               <i><AiIcons.BsArrowLeftSquareFill className="nexticon" onClick={focus1} /></i>
                            </div>
                            <div className="nextbtn">Next
                               <i><AiIcons.BsFillArrowRightSquareFill className="nexticon" onClick={focus3}/></i>
                            </div>
                    </div>
                </div>
                <div className="textfeild-container" hidden={index != 2}>
                <div className="inputfeilds">
                        <div className="left-inputfeilds" >
                            <label>Company/Organization Name</label><br />
                            <div className="feild">
                            <i><AiIcons.FaUser className="icons"/></i>
                            <input type="text" className="textfield" errorText={tab}    placeholder="Company Name" required onChange={(e)=>{setCompany(e.target.value);}} onClick={tab} /><br />
                            <span  hidden >This is required feild</span>
                            </div>
                        </div>
                        <div className="right-inputfeilds">
                            <label>Designation</label><br />
                            <div className="feild">
                            <i><AiIcons.FaUser className="icons"/></i>
                            <input type="text" className="textfield" placeholder=" Designation " autoFocus={false} onChange={(e)=>{setDesignation(e.target.value);}}/>
                            </div>
                        </div>
                   </div>
                   
                        <div className="inputfeilds">
                        <div className="left-inputfeilds" >
                            <label>Years of Experience</label><br />
                            <div className="feild">
                            <i><AiIcons.AiOutlineMail className="icons"/></i>
                            <input type="text" className="textfield" placeholder=" Year of Experience"  onKeyPress={tab} onChange={(e)=>{setYearsofexp(e.target.value);}}/>
                            </div>
                        </div>
                        <div className="right-inputfeilds">
                            <label> Current Salary(Pa)</label><br />
                            <div className="feild">
                            <i><AiIcons.FiMapPin className="icons"/></i>
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
                            <i><AiIcons.FaCity className="icons"/></i>
                            <input type="text" className="textfield" placeholder=" Exceptation Salary" onChange={(e)=>{setExpectsalary(e.target.value);}}/><br/>
                            </div>
                        </div>
                   </div> 
                    <div className="btn">
                            <div className="nextbtn">Back
                               <i><AiIcons.BsArrowLeftSquareFill className="nexticon" onClick={focus2} /></i>
                            </div>
                            <div className="nextbtn">Next
                               <i><AiIcons.BsFillArrowRightSquareFill className="nexticon" onClick={focus4}/></i>
                            </div>
                    </div>
                </div>
                <div className="textfeild-container" hidden={index != 3}>
                <div className="inputfeilds">
                        <div className="left-inputfeilds" >
                            <label>Institute Name</label><br />
                            <div className="feild">
                            <i><AiIcons.FaUser className="icons"/></i>
                            <input type="text" className="textfield" errorText={tab}    placeholder="Institute name" required onChange={(e)=>{setInstitutename(e.target.value);}} onClick={tab} /><br />
                            <span  hidden >This is required feild</span>
                            </div>
                        </div>
                        <div className="right-inputfeilds">
                            <label>Course Name</label><br />
                            <div className="feild">
                            <i><AiIcons.FaUser className="icons"/></i>
                            <input type="text" className="textfield" placeholder=" Course name" autoFocus={false} onChange={(e)=>{setCoursename(e.target.value);}}/>
                            </div>
                        </div>
                   </div>
                   <div className="inputfeilds">
                        <div className="left-inputfeilds" >
                            <label>No of Month/year</label><br />
                            <div className="feild">
                            <i><AiIcons.AiOutlineMail className="icons"/></i>
                            <input type="text" className="textfield" placeholder= " No of Month/year"  onKeyPress={tab} onChange={(e)=>{setDuration(e.target.value);}}/>
                            </div>
                        </div>
                        <div className="right-inputfeilds">
                            <label>Course Certificate</label><br />
                            <div className="feild">
                            <i><AiIcons.BiWorld className="icons"/></i>
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
                            <i><AiIcons.FiMapPin className="icons"/></i>
                            <input type="text" className="textfield" placeholder=" Project " onChange={(e)=>{setProject(e.target.value);}}/>
                            </div>
                        </div>
                   </div> 
                   <div className="inputfeilds">
                        <div className="left-inputfeilds" >
                            <label>Primary Skill</label><br />
                            <div className="feild">
                            <i><AiIcons.FaCity className="icons"/></i>
                            <input type="text" className="textfield" placeholder="city" onChange={(e)=>{setPrimarySkill(e.target.value);}}/><br/>
                            </div>
                        </div>
                        <div className="right-inputfeilds">
                            <label> Secondary Skill</label><br />
                            <div className="feild">
                            <i><AiIcons.FiMapPin className="icons"/></i>
                            <input type="text" className="textfield" placeholder="address" onChange={(e)=>{setSecondarySkill(e.target.value);}}/>
                            </div>
                        </div>
                   </div> 
                   <div className="inputfeilds">
                        <div className="left-inputfeilds" >
                            <label>Experience Certificate</label><br />
                            <div className="feild">
                            {/* <input type="text" className="textfield" placeholder=" Experience Certificate" onChange={(e)=>{setExpcertificate(e.target.value);}}/> */}
                            <input type="file" name="file" className="textfield"   onChange={(e)=>{setExpcertificate(e.target.value);}}/>
                            </div>
                        </div> 
                        <div className="right-inputfeilds">
                            <label>Course Certificate</label><br />
                            <div className="feild">
                            {/* <input type="text" className="textfield" placeholder="Course Certificate" onChange={(e)=>{setCoursecertificate(e.target.value);}}/> */}
                            <input type="file" name="file" className="textfield"   onChange={(e)=>{setCoursecertificate(e.target.value);}}/>
                            </div>
                        </div>
                   </div>
                    <div className="btn">
                            <div className="nextbtn">Back
                               <i><AiIcons.BsArrowLeftSquareFill className="nexticon" onClick={focus3}/></i>
                            </div>
                            {/* <input type="button" className="Addprofile" value="Cancel" /> */}
                            <input type="button" className="Addprofile" value="Submit" onClick={addAssociateProfile}/>
                    </div>
                </div>
            </div>                   
      </div>
    )
}

