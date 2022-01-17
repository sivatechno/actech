import React ,{ useState } from 'react';
import { questions } from './api';
import MyAccordian from './MyAccordian';
import './Accordian.css';

const Accordian = () => {
    const [data, setData] = useState(questions);
    return (
        <>
        <section className='main-accordian'>

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