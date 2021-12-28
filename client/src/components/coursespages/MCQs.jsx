import React from 'react';
import './True.scss'

const Mcqs = () => {
    return (
        <div className='MultipleQues'>
        <div className="txt-box1">
            <div className="questions">Question</div>
            <div className="txt_box">
                <textarea id="story" name="story"
                    rows="5" cols="33">

                </textarea>
            </div>
        </div>

        <div className="txt-box2">
            <div className="answers">Answer For Question</div>
            <div className='input-checkbox'>
            <div>
            <input type="checkbox" id="true" name="options" value="true"/>
                <label for="true">One</label><br/>
                    <input type="checkbox" id="false" name="options" value="false"/>
                        <label for="false">Two</label><br/>
            </div>
                       <div>
                       <input type="checkbox" id="true" name="options" value="true"/>
                <label for="true">Three</label><br/>
                    <input type="checkbox" id="false" name="options" value="false"/>
                        <label for="false">Four</label><br/>
                       </div>
                       <div>
                       <input type="checkbox" id="true" name="options" value="true"/>
                <label for="true">Five</label><br/>
                    <input type="checkbox" id="false" name="options" value="false"/>
                        <label for="false">Six</label><br/>
                       </div>

                            </div>
                                 
                

                            </div>
                        </div>
        

    );
}

export default Mcqs;
