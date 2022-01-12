import React, { useState } from 'react';
import './Addquestion.scss';
import True from '../../coursespages/True';
import MCQs from '../../coursespages/MCQs';
import MCQ from '../../coursespages/MCQ';
import * as AiIcons from 'react-icons/all';
import Write from '../../coursespages/Write';

const Addquestion = () => {
    const [trueBox, setTruebox] = useState(' ');
    const [question, setQuestions] = useState(' ');
    const [answer, setAnswers] = useState(' ');
    const [writing, setWriting] = useState(' ');


    const TrueFalse = () => {
        setAnswers('')
        setQuestions('')
        setWriting('')
        setTruebox(() => {
            return <>
                <True />
            </>
        })

    }
    const multipleQuestion = () => {
        setAnswers('')
        setWriting('')
        setTruebox('')
        setQuestions(() => {
            return <>
                <MCQ />
            </>
        })
    }
    const multipleAnswer = () => {

        setQuestions('')
        setWriting('')
        setTruebox('')
        setAnswers(() => {
            return <>
                <MCQs />
            </>
        })
    }
    const Writing = () => {
        setAnswers('')
        setQuestions('')
        setTruebox('')
        setWriting(() => {
            return <>
                <Write />
            </>
        })
    }

    return (
        <div className="main">
            <div className="header">
                <h3>ADD QUESTIONS</h3>
            </div>
            <hr />
            <div className="body">
                <div className="box1">
                    <label>SELECT EXAMS *</label>
                    <i className="icons"><AiIcons.ImBooks /></i>

                    <input className='' type="text" id="name" name="name" placeholder="--select Name--" required
                        minlength="4" maxlength="8" size="23" /><i className="icon"><AiIcons.IoIosArrowUp /></i>

                    <label>MARKS *</label>
                    <i className="icons"><AiIcons.RiBookMarkLine /></i>
                    <input className="inputnumber" type="number" id="name" name="name" required
                        minlength="4" maxlength="8" size="23" />
                    <label>END_DATE *</label>
                    {/* <i className="icons"><AiIcons.BsCalendarEvent /></i> */}
                    <input type="datetime-local" id="name" name="name" required
                        minlength="4" maxlength="8" size="23" />
                </div>
                <div className="box2">
                    <label>EXAM_DURATION *</label>
                    {/* <i className="icons"><AiIcons.MdTimer /></i> */}
                    <input className="inputtime" type="time" id="name" name="name" required
                        minlength="4" maxlength="8" size="23" />
                    <label>START_DATE *</label>
                    {/* <i className="icons"><AiIcons.BsCalendarEvent /></i> */}
                    <input type="datetime-local" id="name" name="name" required
                        minlength="4" maxlength="8" size="23" />
                    <div className="row1">
                        <button className="btn1" onClick={TrueFalse}>True/False</button>
                        <button className="btn2" onClick={multipleQuestion}>MCQ(1-4)</button>
                    </div>
                    <div className="row2">
                        <button className="btn3" onClick={multipleAnswer}>MCQ(mul ans)</button>
                        <button className="btn4" onClick={Writing}>Writing</button>
                    </div>
                </div></div>
            <div className="footer">
                <hr /><p>{trueBox}</p>
                <p>{question}</p>
                <p>{answer}</p>
                <p>{writing}</p>


                <hr />
                <div className="box">

                    <button className="btn5">cancel</button>
                    <button className="btn6">ADD QUESTION</button>

                </div>

            </div>

        </div>
    );
}

export default Addquestion;
