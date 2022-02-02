import React from 'react';

const Data = (props) => {
    return (
        <div className='dta.container'>
            <h5>Output</h5>
            <h4> {props.question}</h4>
            <p> {props.answers}</p>
            
        </div>
    );
}

export default Data;
