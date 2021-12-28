import React from 'react'
import { Link } from 'react-router-dom';
import './HomePage.scss';

export default function HomePage() {
    return (
        <div>
            <div className='homepage'>
            <button className='lmsbutton' ><Link to="/viewmentor">LMS</Link></button>
            <button className='rmsbutton'><Link to="/dashboard">RMS</Link></button>
            </div>
        </div>
    )
}
