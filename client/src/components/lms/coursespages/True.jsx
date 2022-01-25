import React from 'react';
import './True.scss';
const True = () => {
    return (
        <div className='truefalse'>
            <div className="true_txt-box1">
                <div className="true_questions">Question</div>
                <div className="true_txt_box">
                    <textarea id="" name="">

                    </textarea>
                </div>
            </div>
              <div className="true_txt-box2">
                <div className="true_answers">Answer For Question</div>
                <div className='input-radio'>
                <input type="radio" id="true" name="options" value="true"/>
                    <label for="true">TRUE</label><br/>
                        <input type="radio" id="false" name="options" value="false"/>
                            <label for="false">FALSE</label><br/>

                                </div>
                                <div className='true-addbutton'> 
                                <button className='true_addbutton' type='submit'>Add</button>
                                   </div>

                                </div>

                            </div>


                        
                        );
}
                        export default True;