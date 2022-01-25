import React from 'react';
import './MCQ.scss';

const Mcq = () => {
    return (
    
        <div className='MultipleQues'>
            <div className="multiQues_txt-box1">
                <div className="multiQues_questions">Question</div>
                <div className="multiQues_txt_box">
                    <textarea className="multipleQues-txt_box" id="" name="">
                    </textarea>
                </div>
            </div>
        

      
            <div className="multiQues_txt-box2">
                <div className="multiQues_txt-box2-answers">Answer For Question</div>
                   <div className='multiQues_inputfields'>
                   <div className='input-multiple-answer'>
                        <div>
                            <input className='ima_input' type="radio" id="true" name="options" value="true" />
                            <input className='input_textfield' type="text" for="true" placeholder='Option1' required/>
                            <br />
                            <input className='ima_input' type="radio" id="true" name="options" value="true" />
                            <input className='input_textfield' type="text" for="true" placeholder='Option2' required/><br />


                        </div>
                        <div>
                            <input className='ima_input' type="radio" id="true" name="options" value="true" />
                            <input className='input_textfield' type="text" for="true" placeholder='Option3' required/><br />
                            <input className='ima_input' type="radio" id="true" name="options" value="true" />
                            <input className='input_textfield' type="text" for="true" placeholder='Option4' required/><br />
                        </div>
                        </div>

                      <div className='multiple-addbutton'>
                      <button className='multiple_addbutton' type='submit'>Add</button>

                     </div>
                   </div>


            </div>
        </div>
    );
}

export default Mcq;