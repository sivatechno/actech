import React from 'react';

const Mcq = () => {
    return (
        <div className='Multipleans'>
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
                <label for="true">TRUE</label><br/>
                    <input type="checkbox" id="false" name="options" value="false"/>
                        <label for="false">FALSE</label><br/>
            </div>
                       <div>
                       <input type="checkbox" id="true" name="options" value="true"/>
                <label for="true">TRUE</label><br/>
                    <input type="checkbox" id="false" name="options" value="false"/>
                        <label for="false">FALSE</label><br/>
                       </div>

                            </div>
                                 
                

                            </div>
                        </div>
    );
}

export default Mcq;
