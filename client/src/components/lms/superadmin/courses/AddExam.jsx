import React, {useState} from 'react';
import './AddExam.scss';
import axios from 'axios';
import * as AiIcons from 'react-icons/all';

const AddExam = ({closeModal}) => {
    const [coursename,setCourseName] = useState("");

  const [courseid,setCourseId] = useState("");

  const [examdesc,setExamDesc] = useState("");

  const [examduration, setExamDuration] = useState("");

  const [examstartdate, setExamStartDate] = useState("");

  const [examenddate, setExamEndDate] = useState("");

  const [status,setStatus] = useState("");

  const [examdetails, setExamDetails] = useState("");

  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const {name , value } = e.target;
    setStatus({...status,[name]:value})
  }

  // const handleSubmit = () => {
  //     const details = 
  //     {
  //         examid:examid, 
  //         courseid: courseid, 
  //         examdesc:examdesc,
  //         examduration:examduration, 
  //         examstartdate:examstartdate,
  //         examenddate,examenddate,
  //         status:status
  //       }
  //       setExamDetails([...examdetails, details]);
  //       console.log(details);
          

  //       setExamId(" ");
  //       setCourseId(" ");
  //       setExamDesc(" ");
  //       setExamDuration(" ");
  //       setExamStartDate("");
  //       setExamEndDate("");
  //       setStatus(" ");
  // }

  const addExam = (e) =>{
    if(!coursename||!examdesc||!examduration||!examstartdate||!examenddate||!status.options)
    {
      setError(true);
      return;
    }
    else
    {
      //    sendEmail();
    //e.preventDefault();
    //setErrors(validate(values));
    axios.post("http://localhost:5000/exam/create",
    {
       
      // courseid:courseid , 
      coursename:coursename, 
      courseid: courseid, 
      examdesc:examdesc,
      examduration:examduration, 
      examstartdate:examstartdate,
      examenddate,examenddate,
      status:status.options,
      
  
    }).then((response) =>{

    });
    }
    
    }
    return (
        <div>
             <div className="addexam_container">
             <div className="addexams_title">
        <p className='addexams_heading' >Add Exams</p>
     <AiIcons.IoCloseSharp className='addExamsCloseBtn' onClick={()=>closeModal(false)}/>
            
            </div>
                 <div className="addexam_subContainer" >
                 <div className="subContainer-sec1">
                   <label className='label-examid'>Course Name</label>
                 <input 
                   type="text"
                   placeholder="Exam Id"
                    className='exam-id'
                    autoFocus={false}
                    onChange={(e) =>{setCourseName(e.target.value)}}
                    />
                     { error && <p className='error'>*Course Name is Required</p>}
                    <label className='label-courseId'>Course Id</label>
                    <input 
                   type="text"
                    placeholder="Course Id"
                    className='Course-id'
                    autoFocus={false}
                    defaultValue="1"
                    // onChange={(e) =>{setCourseId(e.target.value)}}
                    disabled/>
                    
                    <label className='label-examDesc'>Exam Description</label>
                    <input 
                   type="text"
                    placeholder='Exam Desc'
                    className='examDesc'
                   onChange={(e) =>{setExamDesc(e.target.value)}}
                    />
                    { error && <p className='error'>*Exam Description is Required</p>}
                 </div>
                 <div className="subContainer-sec2">
                 <label className='label-examDuration'>Exam Duration</label>
                    <input 
                    type="time"
                    placeholder='Exam Duration'
                    className='examDuration'
                    onChange={(e) =>{setExamDuration(e.target.value)}}
                    />
                    { error && <p className='error'>*Exam Duration is Required</p>}
                    <label className='label-startDate'>Exam Start_Date</label>
                    <input 
                    type="date"
                    placeholder='Exam Duration'
                    className='exam-startDate'
                    onChange={(e) =>{setExamStartDate(e.target.value)}}
                    />
                    { error && <p className='error'>*Start Date is Required</p>}
                    <label className='label-endDate'>Exam End_Date</label>
                    <input 
                    type="date"
                    placeholder='Exam Duration'
                    className='exam-endDate'
                    onChange={(e) =>{setExamEndDate(e.target.value)}}
                    />
                    { error && <p className='error'>*End Date is Required</p>}
                    
                   
                 </div>
                 </div>

                   <div className='examstatus-input'>
                   <label className='label-examstatus'>Status
                  <div className='examstatus-div'>
                  <input 
                  type='radio'
                  name='options'
                  value='active'
                  id='active'
                  onChange={handleChange}
                  />
                  <label className='active'>Active</label>
                  <input 
                  type='radio'
                  name='options'
                  className='inactive'
                  value='Inactive'
                  id='Inactive'
                  onChange={handleChange}
                  />
                  <label>InActive</label>
             </div>
             { error && <p className='error'>*Status is Required</p>}
                  </label>
                     </div>
                 <div className='addExam-btns'>
                <button  className='addExam-btn1' onClick={()=>closeModal(false)}>Cancel</button>
                <button type='submit' className='addExam-btn2' onClick={addExam}>Submit</button>
                </div>
                    </div>
                    
        </div>
    );
}

export default AddExam;
