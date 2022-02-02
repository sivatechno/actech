import React, { useState } from 'react';
import './MCQs.scss';
import Validate from './Validate';
import * as AiIcons from 'react-icons/all';

const Mcqs = () => {
    const [question, setQuestion] = useState("");
    const [answers, setAnswers] = useState([{}]);
    const [inputFields, setInputFields] = useState("");
    const [dataFields, setDataFields] = useState([]);

    const [errors, setErrors] = useState(false);


    const handleChange = (e, index) => {
        const { name, value } = e.target;
        const fields = [...answers];
        fields[index][name] = value;
        setAnswers(fields);
       
    }

    const handleSubmit = (e) => {
        if(!question||!answers)
        {
            setErrors(true);
            return;
        }
        else
        {
            setErrors(false);
            e.preventDefault();
            setInputFields(question);
            setDataFields(answers);
            setQuestion(" ");
        }
        
       
        
        
    }
    const handleAddInput = () => {
        setAnswers([...answers,{Answers: ""}])
    }

    const handleRemoveInput = (index) => {
        const values = [...answers];
        values.splice(index, 1);
        setAnswers(values);

    }

    return (
        <div className='MultipleAnswer'>
            {errors && <Validate/>}
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
                            <div key={index} className="Multiple-Ans_Inputfields">

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
                                    value={input.value}
                                    onChange={e => handleChange(e, index)}
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
                        )
                    })}

                    < div className='MultipleAns_Buttonfields' >
                        <button className='MultipleAns-addbutton' type='submit' onClick={handleSubmit}>Add</button>
                    </div>




                </div>



            </div>
            </div>
            <div className='MultipleAnswer-output'>
                     <h4>{inputFields}</h4> 
                       
                       {
                           dataFields.map((input) => (
                            <ul>
                                
                                {input.answers && <li>{input.answers}</li>}
                            </ul>
                           ))}
                          {/* { <data question={inputFields}
                             answers={dataFields.map((input) => (
                                <ul>
                                    
                                    {input.answers && <li>{input.answers}</li>}
                                </ul>)}                                }/> } */}
             </div>

        </div >


    );
}

export default Mcqs;
