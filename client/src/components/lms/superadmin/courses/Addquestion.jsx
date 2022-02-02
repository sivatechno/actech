import React, { useState } from 'react';
import './AddQuestion.scss';
import Accordian from '../../coursespages/Accordian';

const Addquestion = (props) => {
      
      const [selectExams, setSelectExams] = useState(""); 
      const [examId, setExamId] = useState("");  
      const [selectQues, setSelectQues] = useState("");    
      const [scores, setScores] = useState("");  
      const [error, setError] = useState(false);

    //  const [outputValue, setOutputValue] = useState(Data);

      const [dataValues, setDataValues] = useState({});

      const handleSubmit = () => {
          if(!selectExams||!examId||!selectQues||!scores)
          {
              setError(true)
              return;
          }
          else
          {
              setError(false)
              const values = {
                selectExams:selectExams,
                examId:examId,
                selectQues:selectQues,
                scores:scores,
                }
                setDataValues({...dataValues,values})
                console.log(values);
                setSelectExams("");
                setExamId("");
                setSelectQues("");
                setScores("");
               
          }
          

      }

    return (
        <div className="addquestion_container">
                <div className="addquestion_section1">
                    <div>Add Questions</div>
                </div>
                <hr/>
                 <div className="addquestion_section2">
                   <div className="addquestion_box1"> 
                       <label className='addquestion_labelexams'>SELECT EXAMS :-</label>
                    <div className="addquestion_scrollbar">
                        <select 
                        className="addquestion_select" 
                        name='selectExams' 
                        placeholder="--Select Exam--" 
                        value={selectExams}
                        onChange={(e)=>setSelectExams(e.target.value)}
                        
                        required>
                            <option value="">--Please choose an option--</option>
                            <option>AWS One</option>
                            <option>Snow Flake One</option>
                            <option>Week two</option>
                        </select>
                        { error && <p className='error'>*Exam Field is Required</p>}
                        
                    </div>
                    <label className='addquestion_label-examId'>EXAM ID :-</label>
                     <input 
                     className='addquestion_input-examId' 
                     name='examId' 
                     type="text" 
                     value={examId}
                        onChange={(e)=>setExamId(e.target.value)}
                     required/>
                     { error && <p className='error'>*Exam Id Field is Required</p>}
                   </div>
                   <div className="addquestion_box2">
                       <label className='addquestion_label-questiontypes'>QUESTION_TYPES :-</label>
                       <select 
                        className="addquestion_selectQuesTypes" 
                        name='selectQues' 
                        placeholder="" 
                        value={selectQues}
                        onChange={(e)=>setSelectQues(e.target.value)}
                        required>
                            <option value="">--Please choose an option--</option>
                            <option>True/False</option>
                            <option>MCQ</option>
                            <option>MCQ(Multi Answers)</option>
                        </select>
                        { error && <p className='error'>*Question Type Field is Required</p>}
                     
                       <label className='addquestion_scores'>SCORES :-</label>
                       <input 
                       className='addquestion_input-scores' 
                       name='scores' 
                       type="text" 
                     value={scores}
                    onChange={(e)=>setScores(e.target.value)}
                       required />
                       { error && <p className='error'>*Scores Field is Required</p>}
                    </div>
                    </div>
                    
                    
        <div className="addquestion_section3">
            <Accordian/>
               
            </div>
            
            <div className="addquestion_section4">

                <div className="addquestion_btn">
               <button className="addquestion_btn1" >Cancel</button>
                <button className="addquestion_btn2" type='submit' onClick={handleSubmit}>Submit</button>
                </div>
            </div>
                {/* <div>
                    <h4>output</h4>
                   
                </div> */}
            </div>
           
    );
}

export default Addquestion;
