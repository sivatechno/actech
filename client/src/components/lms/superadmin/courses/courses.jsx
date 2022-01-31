import React, {useState} from 'react';
import './Courses.scss'
import axios from 'axios';
import Validate from '../../coursespages/Validate';

import * as AiIcons from 'react-icons/all';

const Courses = ({closeModal}) => {

 
  const intialvalue = {options:" "};
  const [coursename,setCourseName] = useState("");

  const [coursedescription,setCourseDescription] = useState("");

  const [status,setStatus] = useState(" ");

  const [error, setError] = useState(false);

    
    const handleChange = (e) => {
      const {name,value} = e.target;
      setStatus({...status,[name]:value})
    }

    const addCourse = (e) =>{
      if(!coursename||!coursedescription||!status.options)
      {
        setError(true);
        return;
      }
      else{
        //  console.log(coursename,coursedescription,status.options);
        setError(false);
        e.preventDefault();
        axios.post("http://localhost:5000/courses/create",
          {
            // courseid:courseid , 
            coursename:coursename, 
            coursedescription:coursedescription,
            status:status.options,
            
        
          }).then((response) =>{        
          });

      }
        
        }
    return (
        <div className='addcourses_container'>
          <div className="addcourses_title">
            <p className='addcourses_heading'>Add Courses</p>
         <AiIcons.GrClose className='titleCloseBtn' onClick={()=>closeModal(false)}/>
                
                </div>
                
                   
                      {/* <label>Course ID</label>
                    <input 
                    // type="number"
                    placeholder="Course Id"
                    className='Course-id'
                    autoFocus={false}
                    value=""
                    onChange={(e) =>{setCourseId(courseid + 1)}}
                    /> */}
                     <div className='addCourses-InputFields'>
                    <label>Course Name</label>
                    <input 
                    type="text"
                    placeholder='Course Name'
                    className='Course-name'
                    onChange={(e) =>{setCourseName(e.target.value)}}
                    />
                    { error && <p className='error'>*Course Name is Required</p>}
                    <label>Course Description</label>
                    <input 
                    type="text"
                    placeholder='Course Description'
                    className='Course-desc'
                    onChange={(e) =>{setCourseDescription(e.target.value)}}
                    />
                    { error && <p className='error'>*Course Description is Required</p>}
                    <label>Status
                      <div className='status-inputFields'>
                      <input 
                      type='radio'
                      name='options'
                      value='active'
                      id='active'
                      onChange={handleChange}
                      />
                      <label>Active</label>
                      <input 
                      type='radio'
                      name='options'
                      value='Inactive'
                      id='Inactive'
                      onChange={handleChange}
                      />
                      <label>InActive</label>
                      
                 </div>
                 { error && <p className='error'>*Status is Required</p>}
                      </label>
                    </div>
                    
                    <div className='Courses-btns'>
                    <button type='submit' className='Courses-btn1' onClick={()=>closeModal(false)}>Cancel</button>
                    <button type='submit' className='Courses-btn2' onClick={addCourse}>Submit</button>
                    </div>
               
    </div>
    );
}

export default Courses;

