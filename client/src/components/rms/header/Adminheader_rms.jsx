import React from 'react'
import './Adminheader_rms.scss'
import Logo from '../../assets/images/logo.png';
import * as AiIcons from 'react-icons/all';
import Profile from '../../assets/images/profile.png';

function Adminheader_rms() {
    return (
        <div>
             <div className="topbar">
                <div className="topbar_wrapper">
                    <div className="left">
                        <img src={Logo} alt="" />
                    </div>
                    <div className="right">
                        <div className="message_bar">
                            <div className="icon">
                                <AiIcons.BsChatDots />
                            </div>
                            <div className="notification_badge">
                                <div className="in-notify">
                                </div>
                            </div>
                        </div>
                        <div className="notifications">
                            <div className="icon">
                                <AiIcons.IoNotificationsOutline />
                            </div>
                            <div className="notify">
                                <div className="in-notify">
                                </div>
                            </div>
                        </div>
                        <div className="profile">
                            <div className="icon">
                                <img src={Profile} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Adminheader_rms
