import React,{useState} from 'react';
import './True.scss';
import Data from './Data';
import Validate from './Validate';
const True = () => {

    const intialvalue = {options:" "}
   const [questions, setQuestions] = useState("");
    const [answers, setAnswers] = useState([intialvalue]);
    
    const [errors, setErrors] = useState("");
    const [fields, setFields] = useState("");
    const [textans,setTextAns] = useState("");
       
    

    const handleChange = (e) =>
    {
       const {name,value} = e.target;
       setAnswers({...answers,
        [name]: value          
       })
             
    }
    const handleSubmit = (e) => {
        if(!questions||!answers.options)
        {
            setErrors(true)
            return;
                       
        }     

        
        else{
            setErrors(false)
             setFields(questions);
            setTextAns(answers.options);
            setQuestions(" ");
            
        }
    }

   
    
    return (
        
        <div className='true_false'>
            {errors && <Validate/>}
               <div className='truefalse'>
               <div className="true_txt-box1">
                <div className="true_questions">Question</div>
                <div className="true_txt_box">
                <input 
                name='questions'
                type='text' 
                className='true_textarea'
                value={questions}
                onChange={(e)=>setQuestions(e.target.value)}
                />
                </div>
                
            </div>


            <div className="true_txt-box2">
                <div className="true_answers">Answer For Question</div>
                <div className='input-radio' >
                    <input 
                    type="radio" 
                    id="true" 
                    name="options" 
                    value="true"
                    onChange={handleChange} 
                    />
                    <label for="true">TRUE</label><br />
                    <input 
                    type="radio" 
                    id="false" 
                    name="options" 
                    value="false"
                    onChange={handleChange}
                    />
                    <label for="false">FALSE</label><br />
                    </div>
                    {/* <div className='inputRadio'>
                    <label>True :</label>
                        <input type='radio' name='options' value="true"/>
                        
                    <label>False :</label> 
                    <input type='radio' name='options' value="False"/>
                        
                    </div> */}
                    
                    



                
                <div className='true-addbutton'>
                    <button className='true_addbutton' type='submit' onClick={handleSubmit}>Add</button>
                </div>

                

            </div>
            </div>
            <div className='truefalse-output'>
                {/* <h4>{fields}</h4>
                
                {textans && <p> Answer is : {textans}</p>} */}
                 {textans && <Data question={fields} answers={textans}/>}
                </div>

               </div>
               
            
 



    );
}
export default True;