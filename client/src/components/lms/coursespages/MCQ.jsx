import React, { useState } from 'react';
import './MCQs.scss';
import * as AiIcons from 'react-icons/all';

const Mcqs = () => {
    const [inputFields, setInputFields] = useState([
        { Answers: "" }
    ]);

    const handleChange = (index, event) => {
        const values = [...inputFields];
        values[index][event.target.name] = event.target.value;
        setInputFields(values);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("InputFields", inputFields);
    }


    const handleAddInput = () => {
        setInputFields([...inputFields, { Answers: " " }])
    }

    const handleRemoveInput = (index) => {
        const values = [...inputFields];
        values.splice(index, 1);
        setInputFields(values);

    }

    return (
        <div className='MultipleAns'>
            <div className="MultipleAns_txt-box1">
                <div className="questions">Question</div>
                <div className="MultipleAns_txt_box">
                    <textarea id="" name="">

                    </textarea>
                </div>
            </div>

            <div className="MultipleAns-txt-box2">
                <div className="answers">Answer For Question</div>
                <div className='Multiple-input_generate'>


                    {inputFields.map((Input, i) => {
                        return (
                            <div key={i} onSubmit={handleSubmit} className="MultipleAns_Inputfields">
                                <input type="text"
                                    name="Answers"
                                    placeholder="Answers"
                                    className="multipleans_auge"
                                    value={Input.Answers}
                                    onChange={e => handleChange(e, i)} />

                                <input type="button"
                                    value=" - "
                                    className="multipleans_auge-btn1"
                                    onClick={() => handleRemoveInput(i)}
                                />

                                <input type="button"
                                    value=" + "
                                    className="multipleans_auge-btn2"
                                    onClick={() => handleAddInput(i)}
                                />

                            </div>
                        )
                    })}

                    < div className='MultipleAns_Buttonfields' >
                        <button className='MultipleAns-addbutton' type='submit' onClick={handleSubmit}>Add</button>
                    </div>



                </div>



            </div>
        </div >


    );
}

export default Mcqs;
