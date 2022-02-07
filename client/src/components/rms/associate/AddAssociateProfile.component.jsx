import React from 'react'
import * as AiIcons from 'react-icons/all';
import './AddAssociateProfile.component.scss';
import Profileimage from '../../assets/images/profileimage.jpg'
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Associateprofilepopup from './AssociatePopup.jsx';
import { AssociateEducationValidate, AssociateProfileValidate, AssociateCompanyValidate, AssociateCertificateValidate } from './AssociateValidate'
import config from '../../config/config'


export default function AddAssociateprofile({ closeModel }) {

    const apiURL = config.API_URL;
    const [email, setEmail] = useState("");

    const [firstname, setFirstname] = useState("");

    const [lastname, setLastname] = useState("");

    const [country, setCountry] = useState("");

    const [city, setCity] = useState("");

    const [address, setAddress] = useState("");

    const [state, setState] = useState("");

    const [postalcode, setPostalcode] = useState("");

    const [dob, setDob] = useState("");

    const [phonenumber, setPhonenumber] = useState("");

    const [university, setUniversity] = useState("");

    const [college, setCollege] = useState("");

    const [passedoutyear, setPassedoutyear] = useState("");

    const [degree, setDegree] = useState("");

    const [cgpa, setCgpa] = useState("");

    const [qualification, setQualification] = useState("");

    const [company, setCompany] = useState("");

    const [designation, setDesignation] = useState("");

    const [sslcboard, setSslcBoard] = useState("");

    const [sslcschoolname, setSslcSchoolName] = useState("");

    const [sslcyearpassedout, setSslcYearPassedOut] = useState("");

    const [sslcmark, setSslcMark] = useState("");

    const [hscboard, setHscBoard] = useState("");

    const [hscschoolname, setHscSchoolName] = useState("");

    const [hscyearpassedout, setHscYearPassedOut] = useState("");

    const [hscmark, setHscMark] = useState("");

    const [yearsofexp, setYearsofexp] = useState("");

    const [expcertificate, setExpcertificate] = useState("");

    const [companyaddress, setCompanyaddress] = useState("");

    const [currentsalary, setCurrentsalary] = useState("");

    const [expectsalary, setExpectsalary] = useState("");

    const [institutename, setInstitutename] = useState("");

    const [coursename, setCoursename] = useState("");

    const [duration, setDuration] = useState("");

    const [coursecertificate, setCoursecertificate] = useState("");

    const [instituteaddress, setInstituteaddress] = useState("");

    const [project, setProject] = useState("");

    const [gender, setGender] = useState("male");

    const [qualify, setQualify] = useState("fresher");

    const [primaryskill, setPrimarySkill] = useState("");

    const [secondaryskill, setSecondarySkill] = useState("");

    const [projectduration, setProjectDuration] = useState("");

    const [uploadimage, setUploadimage] = useState(Profileimage);

    const [preview, setPreview] = useState(Profileimage);

    const [index, setIndex] = useState(0);

    const [inputList, setInputList] = useState([{ university, college }])

    const [educationinputList, setEducationInputList] = useState([{ university: university, college: college, passedoutyear: passedoutyear, cgpa: cgpa, qualification: qualification }]);

    const [experienceinputList, setExperienceInputList] = useState([{ company: company, companyaddress: companyaddress, designation: designation, currentsalary: currentsalary, expectsalary: expectsalary, yearsofexp: yearsofexp }]);

    const [certificateinputList, setCertificateInputList] = useState([{ institutename: institutename, instituteaddress: instituteaddress, coursename: coursename, duration: duration, project: project, projectduration: projectduration, primaryskill: primaryskill, secondaryskill: secondaryskill }]);

    const [errors, setErrors] = useState({});

    const [active, setActive] = useState(false);

    const [values, setValues] = useState({
        firstname: "",
        lastname: "",
        email: "",
        country: "",
        city: "",
        address: "",
        state: "",
        phonenumber: "",
        postalcode: "",
        dob: "",
        university: "",
        college: "",
        passedoutyear: "",
        degree: "",
        cgpa: "",
        qualification: "",
        sslcboard: "",
        sslcyearpassedout: "",
        sslcschoolname: "",
        sslcmark: "",
        hscboard: "",
        hscyearpassedout: "",
        hscschoolname: "",
        hscmark: "",
        company: "",
        designation: "",
        currentsalary: "",
        expectsalary: "",
        yearsofexp: "",
        expcertificate: "",
        companyaddress: "",
        institutename: "",
        coursename: "",
        duration: "",
        coursecertificate: "",
        instituteaddress: "",
        project: "",
        projectduration: "",
        secondaryskill: "",
        primaryskill: "",
    });
    const handleChangeCapture = (event) => {
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
    function focus1() {
        setIndex(0)
    }
    function focus2() {
        setErrors(AssociateProfileValidate(values));
        if (values.firstname && values.lastname && values.email &&
            values.country && values.city && values.address && values.state && values.phonenumber &&
            values.postalcode && values.dob) {
            EducationTabFunc()
        }
    }
    function focus3() {
        setErrors(AssociateEducationValidate(values));
        if (values.sslcboard && values.sslcschoolname && values.sslcyearpassedout &&
            values.sslcmark && values.hscboard && values.hscschoolname && values.hscyearpassedout && values.hscmark &&
            values.university && values.college && values.passedoutyear && values.cgpa && values.qualification) {
            ExperienceTabFunc()
        }
    }
    function focus4() {
        setErrors(AssociateCompanyValidate(values))
        if (values.company && values.designation && values.companyaddress &&
            values.yearsofexp && values.currentsalary && values.expectsalary) {
            CertficateTabFunc()
        }
    }
    function submitform() {
        setErrors(AssociateCertificateValidate(values));
        if (values.institutename && values.instituteaddress && values.coursename &&
            values.duration && values.project && values.projectduration && values.primaryskill && values.secondaryskill) {
            addAssociateProfile()
        }
    }

    const upload = (e) => {
        const formData = new FormData()
        formData.append("myuploadimage", uploadimage)

        axios.post("http://localhost:5000/associateprofile/upload", formData, {
            headers: {
                "enc-type": "multipart/form-data",
            },
        })
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
    }
    const addAssociateProfile = (e) => {
        upload();
        //console.log(`${}`)
        axios.post("http://localhost:5000/associateprofile/create",
            {
                firstname: firstname,
                lastname: lastname,
                email: email,
                country: country,
                city: city,
                address: address,
                state: state,
                phonenumber: phonenumber,
                dob: dob,
                gender: gender,
                qualify: qualify,
                postalcode: postalcode,
                university: university,
                college: college,
                passedoutyear: passedoutyear,
                degree: degree,
                cgpa: cgpa,
                qualification: qualification,
                sslcboard: sslcboard,
                sslcyearpassedout: sslcyearpassedout,
                sslcschoolname: sslcschoolname,
                sslcmark: sslcmark,
                hscboard: hscboard,
                hscyearpassedout: hscyearpassedout,
                hscschoolname: hscschoolname,
                hscmark: hscmark,
                educationinputList: educationinputList,
                university: university,
                college: college,
                passedoutyear: passedoutyear,
                degree: degree,
                cgpa: cgpa,
                qualification: qualification,
                company: company,
                designation: designation,
                currentsalary: currentsalary,
                expectsalary: expectsalary,
                yearsofexp: yearsofexp,
                expcertificate: expcertificate,
                companyaddress: companyaddress,
                institutename: institutename,
                coursename: coursename,
                duration: duration,
                coursecertificate: coursecertificate,
                instituteaddress: instituteaddress,
                project: project,
                secondaryskill: secondaryskill,
                primaryskill: primaryskill,
                projectduration: projectduration
            }).then((response) => {

            })
    }
    const imageHandler = (event) => {
        const selectedImage = event.target.files[0]
        setUploadimage(selectedImage)
        const imagePreview = URL.createObjectURL(selectedImage)
        setPreview(imagePreview)
    }
    const handleEducationRemoveClick = index => {
        const educationlist = [...educationinputList];
        educationlist.splice(index, 1);
        setEducationInputList(educationlist);
    };
    const handleExperienceRemoveClick = index => {
        const experiencelist = [...experienceinputList];
        experiencelist.splice(index, 1);
        setExperienceInputList(experiencelist);
    };
    const handleCertificateRemoveClick = index => {
        const certificatelist = [...certificateinputList];
        certificatelist.splice(index, 1);
        setCertificateInputList(certificatelist);
    };
    const handleExperienceAddClick = () => {
        setExperienceInputList([...experienceinputList, { company: company, companyaddress: companyaddress, designation: designation, currentsalary: currentsalary, expectsalary: expectsalary, yearsofexp: yearsofexp }]);
    };
    const handleEducationAddClick = () => {
        setEducationInputList([...educationinputList, { university: university, college: college, passedoutyear: passedoutyear, cgpa: cgpa, qualification: qualification }]);
    };
    const handleCertificateAddClick = () => {
        setCertificateInputList([...certificateinputList, { institutename: institutename, instituteaddress: instituteaddress, coursename: coursename, duration: duration, project: project, projectduration: projectduration, primaryskill: primaryskill, secondaryskill: secondaryskill }]);
    };
    function proifleTabfunc() {
        setIndex(0);
    }
    function EducationTabFunc() {
        setIndex(1)
    }
    function ExperienceTabFunc() {
        setIndex(2)
    }
    function CertficateTabFunc() {
        setIndex(3)
    }
    const alphacheck = (e) => {
        const regex = /[A-Za-z]/;
        const chars = e.target.value.split('');
        const char = chars.pop();
        console.log(char);
        if (!regex.test(char)) {
            e.target.value = chars.join('');
            alert("Please enter only alphabets");
            e.preventDefault();
            return false;

        }
        else {
            return true;
        }
    }
    return (
        <div>
            <div className="addassociate">
                <i >< AiIcons.IoMdClose className="closeIcon" onClick={() => closeModel(false)} /></i>
                <div className="profile_view">
                    <div className="imagefeild">
                        <label htmlFor='input' className='imageupload'>
                            {uploadimage && <img alt={uploadimage.name} src={preview} className="profile_align" />}
                        </label>
                    </div>
                    <div className='addimageicon'><i >< AiIcons.FcAddImage /></i></div>
                    <input type="file" name="file" style={{ display: 'none' }} className="avatarfield" accept="image/*" id='input' onChange={(e) => imageHandler(e)} /><br />
                </div>
                <div className="Tabitems">
                    <button className={index != 0 ? "profiletab" : "profiletabbg"} onClick={() => { proifleTabfunc() }}>Profile</button>
                    <button className={index != 1 ? "Educationtab" : "Educationtabbg"} onClick={() => { EducationTabFunc() }}>Education</button>
                    <button className={index != 2 ? "Experiencetab" : "Experiencetabbg"} onClick={() => { ExperienceTabFunc() }}>Experience</button>
                    <button className={index != 3 ? "Certificatetab" : "Certificatetabbg"} onClick={() => { CertficateTabFunc() }}>Certificate</button>
                </div> <hr />
                <div className="associateprofile-textfeild-container" hidden={index != 0}>
                    <div className="associateprofile-inputfeilds">
                        <div className="associateprofile-left-inputfeilds" >
                            <label>First Name</label><br />
                            <div className="associateprofile-feild">
                                <i><AiIcons.FaUser className="associateprofile-icons" /></i>
                                <input type="text" className="associateprofile-textfield" values={setValues.firstname} maxLength={30} name='firstname' autoFocus={true} placeholder="first name" values={setValues.firstname} onChangeCapture={handleChangeCapture} required onChange={(e) => { setFirstname(e.target.value); }} /><br />
                                {errors.firstname && <p className='errormsg'>{errors.firstname}</p>}
                                <span className="error" ><p id="firstname_error"></p></span>
                            </div>
                        </div>
                        <div className="associateprofile-right-inputfeilds">
                            <label>Last Name</label><br />
                            <div className="associateprofile-feild">
                                <i><AiIcons.FaUser className="associateprofile-icons" /></i>
                                <input type="text" className="associateprofile-textfield" name='lastname' maxLength={30} placeholder="last name" onChange={(e) => { setLastname(e.target.value); }} values={setValues.lastname} onChangeCapture={handleChangeCapture} required />
                                {errors.lastname && <p className='errormsg'>{errors.lastname}</p>}
                                <span className="error"><p id="lastname_error"></p></span>
                            </div>
                        </div>
                    </div>
                    <div className="associateprofile-inputfeilds">
                        <div className="associateprofile-left-inputfeilds" >
                            <label>Email</label><br />
                            <div className="associateprofile-feild">
                                <i><AiIcons.AiOutlineMail className="associateprofile-icons" /></i>
                                <input type="text" className="associateprofile-textfield" name='email' placeholder="email" pattern=".+@tutsplus\.com|.+@envato\.com" onChange={(e) => { setEmail(e.target.value); }} values={setValues.email} onChangeCapture={handleChangeCapture} required />
                                {errors.email && <p className='errormsg'>{errors.email}</p>}
                                <span className="error"><p id="email_error"></p></span>
                            </div>
                        </div>
                        <div className="associateprofile-right-inputfeilds">
                            <label>Country</label><br />
                            <div className="associateprofile-feild">
                                <i><AiIcons.BiWorld className="associateprofile-icons" /></i>
                                <input type="text" pattern="!/^[A-Za-z]+$/" maxLength={30} className="associateprofile-textfield" name='country' placeholder="country" onChange={(e) => { setCountry(e.target.value); }} values={setValues.country} onChangeCapture={handleChangeCapture} required />
                                {errors.country && <p className='errormsg'>{errors.country}</p>}
                            </div>
                        </div>
                    </div>
                    <div className="associateprofile-inputfeilds">
                        <div className="associateprofile-left-inputfeilds" >
                            <label>District</label><br />
                            <div className="associateprofile-feild">
                                <i><AiIcons.FaCity className="associateprofile-icons" /></i>
                                <input type="text" className="associateprofile-textfield" maxLength={20} name='city' placeholder="city" onChange={(e) => { setCity(e.target.value); }} values={setValues.city} onChangeCapture={handleChangeCapture} required /><br />
                                {errors.city && <p className='errormsg'>{errors.city}</p>}
                            </div>
                        </div>
                        <div className="associateprofile-right-inputfeilds">
                            <label>Address</label><br />
                            <div className="associateprofile-feild">
                                <i><AiIcons.FiMapPin className="associateprofile-icons" /></i>
                                <input type="text" className="associateprofile-textfield" name='address' maxLength={100} placeholder="address" onChange={(e) => { setAddress(e.target.value); }} values={setValues.address} onChangeCapture={handleChangeCapture} required />
                                {errors.address && <p className='errormsg'>{errors.address}</p>}
                            </div>
                        </div>
                    </div>

                    <div className="associateprofile-inputfeilds">
                        <div className="associateprofile-left-inputfeilds" >
                            <label>State</label><br />
                            <div className="associateprofile-feild">
                                <i><AiIcons.GiModernCity className="associateprofile-icons" /></i>
                                <input type="text" className="associateprofile-textfield" placeholder="State" maxLength={20} name='state' onChange={(e) => { setState(e.target.value); }} values={setValues.state} onChangeCapture={handleChangeCapture} required />
                                {errors.state && <p className='errormsg'>{errors.state}</p>}
                            </div>
                        </div>
                        <div className="associateprofile-right-inputfeilds">
                            <label>Phone Number</label><br />
                            <div className="associateprofile-feild">
                                <i><AiIcons.BsPhone className="associateprofile-icons" /></i>
                                <input type="text" className="associateprofile-textfield" placeholder="Phone number" maxLength={12} name='phonenumber' pattern="\d*" title="Numbers only, please." onChange={(e) => { setPhonenumber(e.target.value); }} values={setValues.phonenumber} onChangeCapture={handleChangeCapture} required />
                                {errors.phonenumber && <p className='errormsg'>{errors.phonenumber}</p>}
                            </div>
                        </div>
                    </div>
                    <div className="associateprofile-inputfeilds">
                        <div className="associateprofile-left-inputfeilds" >
                            <label>Postal Code</label><br />
                            <div className="associateprofile-feild">
                                <i><AiIcons.BiMapPin className="associateprofile-icons" /></i>
                                <input type="text" className="associateprofile-textfield" placeholder="Postal Code" maxLength={6} name='postalcode' onChange={(e) => { setPostalcode(e.target.value); }} values={setValues.postalcode} onChangeCapture={handleChangeCapture} required />
                                {errors.postalcode && <p className='errormsg'>{errors.postalcode}</p>}
                            </div>
                        </div>
                        <div className="associateprofile-right-inputfeilds" >
                            <label>DOB</label><br />
                            <div className="associateprofile-feild">
                                <input type="date" className="associateprofile-textfield" placeholder="Dob" name='dob' onChange={(e) => { setDob(e.target.value); }} values={setValues.dob} onChangeCapture={handleChangeCapture} required />
                                {errors.dob && <p className='errormsg'>{errors.dob}</p>}
                            </div>
                        </div>
                    </div>
                    <div className="associateprofile-inputfeilds">
                        <div className="associateprofile-left-inputfeilds-checkbox">
                            <div className="associateprofile-left-inputfeilds-checkboxselective">
                                <label className="Qualificationlbl">Qualify</label><br />
                                <div>
                                    <input type="checkbox" className="checkfresherbtn" value={qualify} name="qualify" checked={qualify == "fresher"} onClick={() => { setQualify("fresher") }} />
                                    <label className="checkbtn-txt">Fresher</label>
                                    <input type="checkbox" className="checkexperiencebtn" value={qualify} name="qualify" checked={qualify == "experience"} onClick={() => { setQualify("experience") }} />
                                    <label className="checkbtn-txt">Experience</label>
                                </div>
                            </div>
                        </div>
                        <div className="associateprofile-right-inputfeilds-genderradiobutton">
                            <label className="genderlbl">Gender</label><br />
                            <div>
                                <input type="radio" className="radiomalebtn" value={gender} name="gender" checked={gender == "male"} onClick={() => { setGender("male") }} />
                                <label className="radiobtn-txt">Male</label>
                                <input type="radio" className="radiofemalebtn" value={gender} name="gender" checked={gender == "female"} onClick={() => { setGender("female") }} />
                                <label className="radiobtn-txt">Female</label>
                            </div>
                        </div>
                    </div>

                    <div className="buttonsection">
                        <div className="backbtn">
                            <i></i>
                        </div>
                        <div className="nextbtn">
                            <input type="button" className="cancelicon" value="Cancel" onClick={() => closeModel(false)} />
                            <input type="button" className="nexticon" value="Next" onClick={focus2} />
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
                                        <i><AiIcons.IoBusinessOutline className="associateprofile-icons" /></i>
                                        <input type="text" className="associateprofile-textfield" placeholder=" Sslc Board " maxLength={20} name='sslcboard' onChange={(e) => { setSslcBoard(e.target.value); }} values={setValues.sslcboard} onChangeCapture={handleChangeCapture} required /><br />
                                        {errors.sslcboard && <p className='errormsg'>{errors.sslcboard}</p>}
                                        <span hidden >This is required feild</span>
                                    </div>
                                </div>
                                <div className="associateprofile-right-inputfeilds">
                                    <label>Sslc School Name</label><br />
                                    <div className="associateprofile-feild">
                                        <i><AiIcons.MdOutlineBusiness className="associateprofile-icons" /></i>
                                        <input type="text" className="associateprofile-textfield" placeholder="School Name" maxLength={20} name='sslcschoolname' onChange={(e) => { setSslcSchoolName(e.target.value); }} values={setValues.sslcschoolname} onChangeCapture={handleChangeCapture} required />
                                        {errors.sslcschoolname && <p className='errormsg'>{errors.sslcschoolname}</p>}
                                    </div>
                                </div>
                            </div>
                            <div className="associateprofile-inputfeilds">
                                <div className="associateprofile-left-inputfeilds" >
                                    <label>Year Of Passed Out </label><br />
                                    <div className="associateprofile-feild">
                                        <i><AiIcons.IoBusinessOutline className="associateprofile-icons" /></i>
                                        <input type="text" className="associateprofile-textfield" placeholder=" Year of passed out " name='sslcyearpassedout' onChange={(e) => { setSslcYearPassedOut(e.target.value); }} values={setValues.sslcyearpassedout} onChangeCapture={handleChangeCapture} required /><br />
                                        {errors.sslcyearpassedout && <p className='errormsg'>{errors.sslcyearpassedout}</p>}
                                        <span hidden >This is required feild</span>
                                    </div>
                                </div>
                                <div className="associateprofile-right-inputfeilds">
                                    <label>Sslc Marks</label><br />
                                    <div className="associateprofile-feild">
                                        <i><AiIcons.MdOutlineBusiness className="associateprofile-icons" /></i>
                                        <input type="text" className="associateprofile-textfield" placeholder="Sslc Perecentage" maxLength={5} name='sslcmark' onChange={(e) => { setSslcMark(e.target.value); }} values={setValues.sslcmark} onChangeCapture={handleChangeCapture} required />
                                        {errors.sslcmark && <p className='errormsg'>{errors.sslcmark}</p>}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='Hscpart'>
                            <div className="associateprofile-inputfeilds">
                                <div className="associateprofile-left-inputfeilds" >
                                    <label>Board </label><br />
                                    <div className="associateprofile-feild">
                                        <i><AiIcons.IoBusinessOutline className="associateprofile-icons" /></i>
                                        <input type="text" className="associateprofile-textfield" placeholder=" Hsc Board " maxLength={20} name='hscboard' onChange={(e) => { setHscBoard(e.target.value); }} values={setValues.hscboard} onChangeCapture={handleChangeCapture} required /><br />
                                        {errors.hscboard && <p className='errormsg'>{errors.hscboard}</p>}
                                        <span hidden >This is required feild</span>
                                    </div>
                                </div>
                                <div className="associateprofile-right-inputfeilds">
                                    <label>Hsc School Name</label><br />
                                    <div className="associateprofile-feild">
                                        <i><AiIcons.MdOutlineBusiness className="associateprofile-icons" /></i>
                                        <input type="text" className="associateprofile-textfield" placeholder="Hsc School Name" maxLength={20} name='hscschoolname' onChange={(e) => { setHscSchoolName(e.target.value); }} values={setValues.hscschoolname} onChangeCapture={handleChangeCapture} required />
                                        {errors.hscschoolname && <p className='errormsg'>{errors.hscschoolname}</p>}
                                    </div>
                                </div>
                            </div>
                            <div className="associateprofile-inputfeilds">
                                <div className="associateprofile-left-inputfeilds" >
                                    <label>Year Of Passed Out </label><br />
                                    <div className="associateprofile-feild">
                                        <i><AiIcons.IoBusinessOutline className="associateprofile-icons" /></i>
                                        <input type="text" className="associateprofile-textfield" maxLength={4} placeholder=" Year of Passedout " name='hscyearpassedout' onChange={(e) => { setHscYearPassedOut(e.target.value); }} values={setValues.hscyearpassedout} onChangeCapture={handleChangeCapture} required /><br />
                                        {errors.hscyearpassedout && <p className='errormsg'>{errors.hscyearpassedout}</p>}
                                        <span hidden >This is required feild</span>
                                    </div>
                                </div>
                                <div className="associateprofile-right-inputfeilds">
                                    <label>Hsc Mark</label><br />
                                    <div className="associateprofile-feild">
                                        <i><AiIcons.MdOutlineBusiness className="associateprofile-icons" /></i>
                                        <input type="text" className="associateprofile-textfield" maxLength={5} placeholder="Hsc Percentage" name='hscmark' maxLength={5} onChange={(e) => { setHscMark(e.target.value); }} values={setValues.hscmark} onChangeCapture={handleChangeCapture} required />
                                        {errors.hscmark && <p className='errormsg'>{errors.hscmark}</p>}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {educationinputList.map((x, i) => {
                            return (
                                <div className='Universitypart'>
                                    <div className="btn-box">
                                        {educationinputList.length !== 1 && <button className="removeeducation" onClick={() => handleEducationRemoveClick(i)}>-</button>}
                                        {educationinputList.length - 1 === i && <button onClick={handleEducationAddClick} className='addeducation'>+</button>}
                                    </div><br /><br /><br />
                                    <div className="associateprofile-inputfeilds">
                                        <div className="associateprofile-left-inputfeilds" >
                                            <label>University</label><br />
                                            <div className="associateprofile-feild">
                                                <i><AiIcons.IoBusinessOutline className="associateprofile-icons" /></i>
                                                <input type="text" className="associateprofile-textfield" placeholder=" University Name " maxLength={20} name='university' onChange={(e) => { setUniversity(e.target.value); }} values={setValues.university} onChangeCapture={handleChangeCapture} required /><br />
                                                {errors.university && <p className='errormsg'>{errors.university}</p>}
                                            </div>
                                        </div>
                                        <div className="associateprofile-right-inputfeilds">
                                            <label>College</label><br />
                                            <div className="associateprofile-feild">
                                                <i><AiIcons.MdOutlineBusiness className="associateprofile-icons" /></i>
                                                <input type="text" className="associateprofile-textfield" placeholder="College Name" name='college' maxLength={20} onChange={(e) => { setCollege(e.target.value); }} values={setValues.college} onChangeCapture={handleChangeCapture} required />
                                                {errors.college && <p className='errormsg'>{errors.college}</p>}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="associateprofile-inputfeilds">
                                        <div className="associateprofile-left-inputfeilds" >
                                            <label>Year of Passed out</label><br />
                                            <div className="associateprofile-feild">
                                                <input type="text" className="associateprofile-textfield" maxLength={4} placeholder=" Year of Passed out" name='passedoutyear' onChange={(e) => { setPassedoutyear(e.target.value); }} values={setValues.passedoutyear} onChangeCapture={handleChangeCapture} required />
                                                {errors.passedoutyear && <p className='errormsg'>{errors.passedoutyear}</p>}
                                            </div>
                                        </div>
                                        <div className="associateprofile-right-inputfeilds">
                                            <label>Degree</label><br />
                                            <div className="associateprofile-feild">
                                                <i><AiIcons.GiMedallist className="associateprofile-icons" /></i>
                                                <input type="text" className="associateprofile-textfield" maxLength={30} placeholder="Degree" name='degree' maxLength={20} onChange={(e) => { setDegree(e.target.value); }} values={setValues.degree} onChangeCapture={handleChangeCapture} required />
                                                {errors.degree && <p className='errormsg'>{errors.degree}</p>}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="associateprofile-inputfeilds">
                                        <div className="associateprofile-left-inputfeilds" >
                                            <label>CGPA</label><br />
                                            <div className="associateprofile-feild">
                                                <i><AiIcons.GrScorecard className="associateprofile-icons" /></i>
                                                <input type="text" className="associateprofile-textfield" pattern='/^[+-]?\d*(?:[.,]\d*)?$/' placeholder=" CGPA " name='cgpa' maxLength={5} onChange={(e) => { setCgpa(e.target.value); }} values={setValues.cgpa} onChangeCapture={handleChangeCapture} required /><br />
                                                {errors.cgpa && <p className='errormsg'>{errors.cgpa}</p>}
                                            </div>
                                        </div>
                                        <div className="associateprofile-right-inputfeilds">
                                            <label>Highest qualification</label><br />
                                            <div className="associateprofile-feild">
                                                <i><AiIcons.GiMedallist className="associateprofile-icons" /></i>
                                                <input type="text" className="associateprofile-textfield" maxLength={30} placeholder=" Highest Qualification " maxLength={20} name='qualification' onChange={(e) => { setQualification(e.target.value); }} values={setValues.qualification} onChangeCapture={handleChangeCapture} required /><br />
                                                {errors.qualification && <p className='errormsg'>{errors.qualification}</p>}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className="buttonsection">
                        <div className="backbtn">
                            <input type="button" className="backicon" value="Back" onClick={proifleTabfunc} />
                        </div>
                        <div className="nextbtn">
                            <input type="button" className="cancelicon" value="Cancel" onClick={() => closeModel(false)} />
                            <input type="button" className="nexticon" value="Next" onClick={focus3} />
                        </div>
                    </div>
                </div>
                <div className="associateprofile-textfeild-container" hidden={index != 2}>
                    {experienceinputList.map((x, i) => {
                        return (
                            <div className='AddExperiencepart'>
                                <div className="btn-box">
                                    {experienceinputList.length !== 1 && <button className="removeexperience" onClick={() => handleExperienceRemoveClick(i)}>-</button>}
                                    {experienceinputList.length - 1 === i && <button onClick={handleExperienceAddClick} className='addexperience'>+</button>}
                                </div><br /><br /><br />
                                <div className="associateprofile-inputfeilds">
                                    <div className="associateprofile-left-inputfeilds" >
                                        <label>Company/Organization Name</label><br />
                                        <div className="associateprofile-feild">
                                            <i><AiIcons.MdOutlineBusiness className="associateprofile-icons" /></i>
                                            <input type="text" className="associateprofile-textfield" placeholder="Company Name" name='company' onChange={(e) => { setCompany(e.target.value); }} values={setValues.company} onChangeCapture={handleChangeCapture} required /><br />
                                            {errors.company && <p className='errormsg'>{errors.company}</p>}
                                        </div>
                                    </div>
                                    <div className="associateprofile-right-inputfeilds">
                                        <label>Designation</label><br />
                                        <div className="associateprofile-feild">
                                            <i><AiIcons.MdBusinessCenter className="associateprofile-icons" /></i>
                                            <input type="text" className="associateprofile-textfield" placeholder=" Designation " name='designation' onChange={(e) => { setDesignation(e.target.value); }} values={setValues.designation} onChangeCapture={handleChangeCapture} required />
                                            {errors.designation && <p className='errormsg'>{errors.designation}</p>}
                                        </div>
                                    </div>
                                </div>
                                <div className="associateprofile-inputfeilds">
                                    <div className="associateprofile-left-inputfeilds" >
                                        <label>Years of Experience</label><br />
                                        <div className="associateprofile-feild">
                                            <i><AiIcons.FaMoneyBillAlt className="associateprofile-icons" /></i>
                                            <input type="text" className="associateprofile-textfield" maxLength={2} placeholder=" Year of Experience" name='yearsofexp' onChange={(e) => { setYearsofexp(e.target.value); }} values={setValues.yearsofexp} onChangeCapture={handleChangeCapture} required />
                                            {errors.yearsofexp && <p className='errormsg'>{errors.yearsofexp}</p>}
                                        </div>
                                    </div>
                                    <div className="associateprofile-right-inputfeilds">
                                        <label> Current Salary(Pa)</label><br />
                                        <div className="associateprofile-feild">
                                            <i><AiIcons.FaMoneyBillAlt className="associateprofile-icons" /></i>
                                            <input type="text" className="associateprofile-textfield" placeholder="Current salary" name='currentsalary' onChange={(e) => { setCurrentsalary(e.target.value); }} values={setValues.currentsalary} onChangeCapture={handleChangeCapture} required />
                                            {errors.currentsalary && <p className='errormsg'>{errors.currentsalary}</p>}
                                        </div>
                                    </div>
                                </div>
                                <div className="associateprofile-inputfeilds">
                                    <div className="associateprofile-left-inputfeilds" >
                                        <label>Company Address</label><br />
                                        <div className="associateprofile-feild">
                                            <i><AiIcons.FaCity className="associateprofile-icons" /></i>
                                            <input type="text" className="associateprofile-textfield" placeholder="Company Address" name='companyaddress' onChange={(e) => { setCompanyaddress(e.target.value); }} values={setValues.companyaddress} onChangeCapture={handleChangeCapture} required /><br />
                                            {errors.companyaddress && <p className='errormsg'>{errors.companyaddress}</p>}
                                        </div>
                                    </div>
                                    <div className="associateprofile-right-inputfeilds">
                                        <label>Expectation Salary(Pa)</label><br />
                                        <div className="associateprofile-feild">
                                            <i><AiIcons.FaMoneyBillAlt className="associateprofile-icons" /></i>
                                            <input type="text" className="associateprofile-textfield" placeholder=" Expectation Salary" name='expectsalary' onChange={(e) => { setExpectsalary(e.target.value); }} values={setValues.expectsalary} onChangeCapture={handleChangeCapture} required /><br />
                                            {errors.expectsalary && <p className='errormsg'>{errors.expectsalary}</p>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                    <div className="buttonsection">
                        <div className="backbtn">
                            <input type="button" className="backicon" value="Back" onClick={EducationTabFunc} />
                        </div>
                        <div className="nextbtn">
                            <input type="button" className="cancelicon" value="Cancel" onClick={() => closeModel(false)} />
                            <input type="button" className="nexticon" value="Next" onClick={focus4} />
                        </div>
                    </div>
                </div>
                <div className="associateprofile-textfeild-container" hidden={index != 3}>
                    {certificateinputList.map((x, i) => {
                        return (
                            <div className='associateprofile-adddcertificatepart'>
                                <div className="btn-box">
                                    {certificateinputList.length !== 1 && <button className="removecertificate" onClick={() => handleCertificateRemoveClick(i)}>-</button>}
                                    {certificateinputList.length - 1 === i && <button onClick={handleCertificateAddClick} className='addcertificate'>+</button>}
                                </div><br /><br /><br />
                                <div className="associateprofile-inputfeilds">
                                    <div className="associateprofile-left-inputfeilds" >
                                        <label>Institute Name</label><br />
                                        <div className="associateprofile-feild">
                                            <i><AiIcons.MdOutlineBusiness className="associateprofile-icons" /></i>
                                            <input type="text" className="associateprofile-textfield" placeholder="Institute name" name='institutename' required onChange={(e) => { setInstitutename(e.target.value); }} values={setValues.institutename} onChangeCapture={handleChangeCapture} /><br />
                                            {errors.institutename && <p className='errormsg'>{errors.institutename}</p>}
                                        </div>
                                    </div>
                                    <div className="associateprofile-left-inputfeilds" >
                                        <label>Institute Address</label><br />
                                        <div className="associateprofile-feild">
                                            <i><AiIcons.FaCity className="associateprofile-icons" /></i>
                                            <input type="text" className="associateprofile-textfield" placeholder=" Institute Address" name='instituteaddress' onChange={(e) => { setInstituteaddress(e.target.value); }} values={setValues.instituteaddress} onChangeCapture={handleChangeCapture} required /><br />
                                            {errors.instituteaddress && <p className='errormsg'>{errors.instituteaddress}</p>}
                                        </div>
                                    </div>
                                </div>
                                <div className="associateprofile-inputfeilds">
                                    <div className="associateprofile-left-inputfeilds">
                                        <label>Course Name</label><br />
                                        <div className="associateprofile-feild">
                                            <i><AiIcons.FaChalkboardTeacher className="associateprofile-icons" /></i>
                                            <input type="text" className="associateprofile-textfield" placeholder=" Course name" name='coursename' onChange={(e) => { setCoursename(e.target.value); }} values={setValues.coursename} onChangeCapture={handleChangeCapture} required />
                                            {errors.coursename && <p className='errormsg'>{errors.coursename}</p>}
                                        </div>
                                    </div>
                                    <div className="associateprofile-right-inputfeilds" >
                                        <label>Course Duration</label><br />
                                        <div className="associateprofile-feild">
                                            <i><AiIcons.MdToday className="associateprofile-icons" /></i>
                                            <input type="text" className="associateprofile-textfield" placeholder="Course Duration" name='duration' onChange={(e) => { setDuration(e.target.value); }} values={setValues.duration} onChangeCapture={handleChangeCapture} required />
                                            {errors.duration && <p className='errormsg'>{errors.duration}</p>}
                                        </div>
                                    </div>
                                </div>
                                <div className="associateprofile-inputfeilds">
                                    <div className="associateprofile-left-inputfeilds">
                                        <label>Project</label><br />
                                        <div className="associateprofile-feild">
                                            <i><AiIcons.FaProjectDiagram className="associateprofile-icons" /></i>
                                            <input type="text" className="associateprofile-textfield" placeholder=" Project" name='project' onChange={(e) => { setProject(e.target.value); }} values={setValues.project} onChangeCapture={handleChangeCapture} required />
                                            {errors.project && <p className='errormsg'>{errors.project}</p>}
                                        </div>
                                    </div>
                                    <div className="associateprofile-right-inputfeilds" >
                                        <label>Project Duration</label><br />
                                        <div className="associateprofile-feild">
                                            <i><AiIcons.FaCity className="associateprofile-icons" /></i>
                                            <input type="text" className="associateprofile-textfield" name='projectduration' placeholder=" Project Duration" onChange={(e) => { setProjectDuration(e.target.value); }} values={setValues.projectduration} onChangeCapture={handleChangeCapture} required /><br />
                                            {errors.projectduration && <p className='errormsg'>{errors.projectduration}</p>}
                                        </div>
                                    </div>
                                </div>
                                <div className="associateprofile-inputfeilds">
                                    <div className="associateprofile-left-inputfeilds" >
                                        <label>Primary Skill</label><br />
                                        <div className="associateprofile-feild">
                                            <i><AiIcons.GiSkills className="associateprofile-icons" /></i>
                                            <input type="text" className="associateprofile-textfield" maxLength={50} placeholder="PrimarySkill" name='primaryskill' onChange={(e) => { setPrimarySkill(e.target.value); }} values={setValues.primaryskill} onChangeCapture={handleChangeCapture} required /><br />
                                            {errors.primaryskill && <p className='errormsg'>{errors.primaryskill}</p>}
                                        </div>
                                    </div>
                                    <div className="associateprofile-right-inputfeilds">
                                        <label> Secondary Skill</label><br />
                                        <div className="associateprofile-feild">
                                            <i><AiIcons.GiSkills className="associateprofile-icons" /></i>
                                            <input type="text" className="associateprofile-textfield" maxLength={50} placeholder="SecondarySkill" name='secondaryskill' onChange={(e) => { setSecondarySkill(e.target.value); }} values={setValues.secondaryskill} onChangeCapture={handleChangeCapture} required />
                                            {errors.secondaryskill && <p className='errormsg'>{errors.secondaryskill}</p>}
                                        </div>
                                    </div>
                                </div>
                                <div className="associateprofile-inputfeilds">
                                    <div className="associateprofile-left-inputfeilds-certifyuploadfeildleft" >
                                        <label>Experience Certificate</label><br />
                                        <div className="associateprofile-feild">
                                            <input type="file" name="file" className="textfield" id='exp_certify' />
                                            <label htmlFor='exp_certify' className='fileupload'>
                                                <i>< AiIcons.FcAddImage /> Choose an file</i>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="associateprofile-right-inputfeilds-certifyuploadfeildright" >
                                        <label>Course Certificate</label><br />
                                        <div className="associateprofile-feild">
                                            <input type="file" name="file" className="textfield" id='Course_certify' />
                                            <label htmlFor='Course_certify' className='fileupload'>
                                                <i>< AiIcons.FcAddImage /> Choose an file</i>
                                            </label>
                                        </div><br />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                    <div className="buttonsection">
                        <div className="backbtn">
                            <input type="button" className="backicon" value="Back" onClick={ExperienceTabFunc} />
                        </div>
                        <div className="nextbtn">
                            <input type="button" className="cancelicon" value="Cancel" onClick={() => closeModel(false)} />
                            <input type="button" className="Addprofile" value="Submit" onClick={submitform} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

