import React, {useState} from 'react';
import './AddExam.scss';

const Addexam = () => {
    const [examid,setExamId] = useState("");

  const [courseid,setCourseId] = useState("");

  const [examdesc,setExamDesc] = useState("");

  const [examDuration, setExamDuration] = useState("");

  const [status,setStatus] = useState("");

  const [examdetails, setExamDetails] = useState("");

  const handleSubmit = () => {
      const details = {examid:examid, courseid: courseid, examdesc:examdesc,
                        examDuration:examDuration, status:status}
        setExamDetails([...examdetails, details]);
        console.log(details);
          

        setExamId(" ");
        setCourseId(" ");
        setExamDesc(" ");
        setExamDuration(" ");
        setStatus(" ");
  }
    return (
        <div>
             <div class="addexam_container">
                   <input 
                   type="text"
                   placeholder="Exam Id"
                    className='exam-id'
                    autoFocus={false}
                    onChange={(e) =>{setExamId(e.target.value)}}
                    />
                    <input 
                   type="text"
                    placeholder="Course Id"
                    className='Course-id'
                    autoFocus={false}
                    onChange={(e) =>{setCourseId(e.target.value)}}
                    />
                    <input 
                   type="text"
                    placeholder='Exam Desc'
                    className='exam-desc'
                   onChange={(e) =>{setExamDesc(e.target.value)}}
                    />
                    <input 
                    type="text"
                    placeholder='Exam Duration'
                    className='exam-duration'
                    onChange={(e) =>{setExamDuration(e.target.value)}}
                    />
                    <input 
                    type="text"
                    placeholder='Status'
                    className='status'
                     onChange={(e) =>{setStatus(e.target.value)}}
                    />
                    <button type='submit' className='addexam-btn' onClick={handleSubmit}>Submit</button>
                    </div>
        </div>
    );
}

export default Addexam;
