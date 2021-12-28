import React from 'react';
import './True.scss';
const True = () => {
    return (
        <div className='truefalse'>
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
                <div className='input-radio'>
                <input type="radio" id="true" name="options" value="true"/>
                    <label for="true">TRUE</label><br/>
                        <input type="radio" id="false" name="options" value="false"/>
                            <label for="false">FALSE</label><br/>
                                </div>
                                     
                    

                                </div>
                            </div>


                        



                        );
}

                        export default True;
