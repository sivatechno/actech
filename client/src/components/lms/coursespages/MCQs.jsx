import React, { useState } from 'react';
import './MCQs.scss';
import * as AiIcons from 'react-icons/all';

const Mcqs = () => {
    const [question, setQuestion] = useState();
    const [answers, setAnswers] = useState([{Answers: " "}]);
    const [inputFields, setInputFields] = useState();
     

    const handleChange = (e,index) => {
       const {name, value} = e.target;
       const fields = [...answers];
       fields[index][name] = value; 
       setAnswers(fields);
       }
          
       const handleSubmit = (e) => {
      e.preventDefault();
   
      
        // const data = {question,answers}
        //  if(question&&answers)
        //  {
        //  setInputFields((fields)=>[...fields,data])
        //  setQuestion("")
        //  setAnswers("")
        //  }
       console.log("Question :", question,answers)
        setQuestion(" ")
        
        
}
        
     


    const  handleAddInput = () => {
        setAnswers([...answers , {Answers: ""}])
    }
       
    const handleRemoveInput = (index) => {
        const values = [...answers];
        values.splice(index,1);
        setAnswers(values);
        
    }

    return (
        <div className='MultipleAns'>
            <div className="MultipleAns_txt-box1">
                <div className="MultipleAns_txt-box1-quest">Question</div>
                <div className="MultipleAns_txt-box1-textarea">
                    <input
                    name='question'
                    type='text'
                    className="input_textarea"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}

                    />
                </div>
            </div>

            <div className="MultipleAns-txt-box2">
                <div className="MultipleAns-txt-box2-answ">Answer For Question</div>
                <div className='Multiple-input_generate'>


                    {answers.map((input, index) => {
                        return (
                            <div key={index}  className="Multiple-Ans_Inputfields">
                                
                                <input 
                                type="checkbox"
                                name="checkbox"
                                className='multipleans_checkbox'
                                
                                />
                                <input 
                                   type="text"
                                    name="answers"
                                    placeholder="Answers"
                                    className="multipleans_auge"
                                    value={input.answers}
                                    onChange={e => handleChange(e,index)} 
                                    required
                                    />
                               {answers.length > 1 && 
                                <input type="button"
                                    value=" - "
                                    className="multipleans_auge-btn1"
                                    onClick={() => handleRemoveInput(index)}
                                />
                               }
                               {answers.length - 1 === index && answers.length < 6 &&
                                <input type="button"
                                    value=" + "
                                    className="multipleans_auge-btn2"
                                    onClick={() => handleAddInput(index)}
                                />}
                               
                            </div>
                        )})}

                            < div className = 'MultipleAns_Buttonfields' >
                                <button className='MultipleAns-addbutton' type='submit' onClick={handleSubmit}>Add</button>
                       </div>
                       {/* <div>
                           <p>Output</p>
                           {
                        inputFields.map((question, input) => (
                            <ul>
                                {question}
                                {input.answers && <li>{input.answers}</li>}
                            </ul>
                        ))
                    }
                       </div> */}



            </div>
          


        </div>
        </div >


    );
}

export default Mcqs;
