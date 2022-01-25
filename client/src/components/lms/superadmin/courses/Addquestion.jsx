import React, { useState } from 'react';
import './Addquestion.scss';
import Accordian from '../../coursespages/Accordian';
import Validate from '../../coursespages/Validate';



const Addquestion = () => {
   const [values, setValues] = useState({
       select:" ",
       enddate:" ",
       time:" ",
       startdate:" "

   });
   
    const [errors, setErrors] = useState({});

    // const [inputDetails, setInputDetails] = useState([]);
    const handleChange = (e) => {
        e.preventDefault();
        setValues({
            ...values,
            [e.target.name]:e.target.value,
        });

    }
    

    const handleSubmit = (e) => {
        
        setErrors(Validate(values));   
        console.log(values);   
        
    }
    
    
   

    return (
        <div className="addquestion_container">
                <div className="addquestion_section1">
                    <div>Add Questions</div>
                </div>
                <hr/>
                 <div className="addquestion_section2">
                   <div className="addquestion_box1"> 
                       <label className='addquestion_labelexams'>SELECT EXAMS*</label>
                    <div className="addquestion_scrollbar">
                        <select 
                        className="addquestion_select" 
                        name='select' 
                        placeholder="--Select Exam--" 
                        value={values.select}
                        onChange={handleChange}
                        required>
                            <option value="">--Please choose an option--</option>
                            <option>AWS One</option>
                            <option>Snow Flake One</option>
                            <option>Week two</option>
                        </select>
                        {errors.select && <p className='errors'>{errors.select}</p>}
                    </div>
                    <label className='addquestion_label-enddate'>END_DATE : </label><br/>
                     <input 
                     className='addquestion_input-enddate' 
                     name='enddate' 
                     type="date" 
                     value={values.enddate}
                     onChange={handleChange}
                     required/>
                     {errors.enddate && <p className='errors'>{errors.enddate}</p>}
                   </div>
                   <div className="addquestion_box2">
                       <label className='addquestion_label-duration'>EXAM_DURATION:</label><br/>
                       <input 
                       className='addquestion_input-time' 
                       name='time' 
                       type="time" 
                       value={values.time}
                       onChange={handleChange}
                       required
                       />
                       {errors.time && <p className='errors'>{errors.time}</p>}
                       <br/>
                       <label className='addquestion_label-date'>START_DATE :</label><br/>
                       <input 
                       className='addquestion_input-startdate' 
                       name='startdate' 
                       type="date" 
                       value={values.startdate}
                       onChange={handleChange} 
                       required />
                       {errors.startdate && <p className='errors'>{errors.startdate}</p>}
                    </div>
                    </div>
                    
                    
        <div className="addquestion_section3">
            <Accordian/>
               
            </div>
            
            <div className="addquestion_section4">

                <div className="addquestion_btn">
               <button className="addquestion_btn1" >Cancel</button>
                <button className="addquestion_btn2" type='submit'>Submit</button>
                </div>
            </div>
            </div>
           
    );
}

export default Addquestion;
