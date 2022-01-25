import React ,{ useState } from 'react';
import { questions } from './api';
import MyAccordian from './MyAccordian';
import './Accordian.scss';

const Accordian = () => {
    const [data, setData] = useState(questions);
    return (
        <>
        <section className='main-div'>
            
            {
                data.map((curElem) => {
                    const {id} = curElem;
                    return <MyAccordian key={id} {...curElem} />
                })
            }
            </section>
        </>
    );
}

export default Accordian;
