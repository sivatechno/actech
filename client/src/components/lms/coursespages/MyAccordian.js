import React, {useState} from 'react';

const Myaccordian = ({Question, Answer}) => {
    const [show, setShow] = useState(false);
    return (
        <>
        <div className='main-heading'>
            
            <h1>{Question}</h1>
            <p onClick={() => setShow(!show)}>{show? "-":"+"}</p>
            
        </div> 
        { show && <p className='answers'>{Answer}</p> }
        </>
    );
}

export default Myaccordian;
