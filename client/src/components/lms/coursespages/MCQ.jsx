import React, {useState} from 'react';
import './MCQ.scss';
import Data from './Data';
import Validate from './Validate';

const Mcq = () => {
    const options = {
        option1:"",
        option2:"",
        option3:"",
        option4:""
    }
    const [question, setQuestion] = useState(" ");
    const [answers, setAnswers] = useState(options);

    const [questxt, setQuesTxt] = useState("");
    const [anstxt, setAnsTxt] = useState("");

    const [error, setError] = useState(false);

    const handleChange = (e) => {
        const {name , value} = e.target;
        setAnswers({...answers,
        [name]:value
        })
    } 

    
    const handleSubmit = (e) => {
        if(!question||!answers.options)
        {
            setError(true);
            return;
        }
        else{
            setError(false);
            setQuesTxt(question);
            setAnsTxt(answers.options);
            setQuestion(" ");
            setAnswers("");
        }
        
    }



    return (
    
        <div className='MultipleQues'>
            {error && <Validate/>}
            <div className='Multiple-Ques'>
            <div className="multiQues_txt-box1">
                <div className="multiQues_questions">Question</div>
                <div className="multiQues_txt_box">
                    <input
                    name='question'
                    type='text'
                    className="multipleQues-txt_box"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}

                    />
                </div>
            </div>
        

      
            <div className="multiQues_txt-box2">
                <div className="multiQues_txt-box2-answers">Answer For Question</div>
                   <div className='multiQues_inputfields'>
                   <div className='input-multiple-answer'>
                        <div>
                        <input className='ima_input' type="radio" id="true" name="options" 
                        value={answers.option1} 
                        onChange={handleChange}/>
                            <input 
                            className='input_textfield' 
                            type="text" 
                            for="true" 
                            name="option1" 
                            placeholder='Option1' 
                            value={answers.option1} 
                            onChange={handleChange}
                            required/>
                            <br />
                            <input className='ima_input' type="radio" id="true" name="options" 
                           value={answers.option2} 
                           onChange={handleChange}/>
                            <input 
                            className='input_textfield' 
                            type="text" 
                            for="true" 
                            name="option2" 
                            placeholder='Option2' 
                            required
                            value={answers.option2} 
                            onChange={handleChange}
                            />
                            <br />


                        </div>
                        <div>
                        <input className='ima_input' type="radio" id="true" name="options" 
                        value={answers.option3} 
                        onChange={handleChange}/>
                            <input 
                            className='input_textfield' 
                            type="text" 
                            for="true" 
                            name="option3" 
                            placeholder='Option3' 
                            required
                            value={answers.option3} 
                            onChange={handleChange}
                            />
                            <br />
                            <input className='ima_input' type="radio" id="true" name="options" 
                             value={answers.option4} 
                             onChange={handleChange}/>
                            <input 
                            className='input_textfield' 
                            type="text" 
                            for="true" 
                            name="option4" 
                            placeholder='Option4'
                            value={answers.option4} 
                            onChange={handleChange} 
                            required/><br />
                        </div>
                        </div>

                      <div className='multiple-addbutton'>
                      <button className='multiple_addbutton' type='submit' onClick={handleSubmit}>Add</button>

                     </div>
                   </div>


            </div>
            </div>
                   <div className='MultipleQues-output'>
                   {/* <h3>{questxt}</h3>
                   {anstxt && <p>Answer is: {anstxt}</p>} */}
                   {anstxt && <Data question={questxt} answers={anstxt}/>}
            
                   </div>
        </div>
    );
}

export default Mcq;