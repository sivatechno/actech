import React from 'react';
import './Header.scss';
import Logo from '../assets/images/logo.png';

export default function Header() {
    return (
        <div>
            <div className="header">
                <div className="left">
                    <img src={Logo} alt="" />
                </div>
                <div className="right">
                    
                </div>
            </div>
        </div>
    )
}
