import React, {useState} from 'react';
import './courses.scss'
import axios from 'axios';

const Courses = () => {

  const [courseid,setCourseId] = useState("");

  const [coursename,setCourseName] = useState("");

  const [coursedescription,setCourseDescription] = useState("");

  const [status,setStatus] = useState("");

 

    const addCourse = (e) =>{
        //    sendEmail();
        e.preventDefault();
        //setErrors(validate(values));
          axios.post("http://localhost:5000/courses/create",
          {
             
            courseid:courseid , 
            coursename:coursename, 
            coursedescription:coursedescription,
            status:status,
            
        
          }).then((response) =>{        
          });
        }
    return (
        <div className='addcourses_container'>
                
                    <input 
                    type="text"
                    placeholder="Course Id"
                    className='Course-id'
                    autoFocus={false}
                    onChange={(e) =>{setCourseId(e.target.value)}}
                    />
                    <input 
                    type="text"
                    placeholder='Course Name'
                    className='Course-name'
                    onChange={(e) =>{setCourseName(e.target.value)}}
                    />
                    <input 
                   type="text"
                    placeholder='Course Description'
                    className='Course-desc'
                    onChange={(e) =>{setCourseDescription(e.target.value)}}
                    />
                    <input 
                    type="text"
                    placeholder='Status'
                    className='status'
                    onChange={(e) =>{setStatus(e.target.value)}}
                    />
                    <button type='submit' className='Courses-btn' onClick={addCourse}>Submit</button>
               
    </div>
    );
}

export default Courses;

