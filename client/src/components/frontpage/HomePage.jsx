import React from 'react'
import { Link } from 'react-router-dom';
import './HomePage.scss';
import img1 from "../assets/images/LMS.jpg"
import img2 from "../assets/images/RMS.jpg"
export default function HomePage() {
    return (
        <div className='main_card' >

            <div className='homepage'>
                <Link className='card' to="/viewmentor">
                    <div className='img_lms'>
                        <img src={img1} alt='' />
                        <div className='title_lms'>
                            <h1>LMS</h1>
                        </div>
                        <div className='desc'>
                            <p>Learning Management System</p>
                            <button className='lmsbutton' >
                                <Link className='link-lms' to="/viewmentor">LMS</Link>
                            </button>
                        </div>
                    </div>
                </Link>
                <Link className='card2' to="/Dashboardview">
                    <div className='img_rms'>
                        <img src={img2} alt='' />
                        <div className='title_rms'>
                            <h1>RMS</h1>
                        </div>
                        <div className='desc1'>
                            <p>Resource Managemnet System</p>
                            <button className='rmsbutton'>
                                <Link className='link-rms' to="/Dashboardview">RMS</Link>
                            </button>
                        </div>
                    </div>
                </Link>
            </div>
        </div>

    )
}
