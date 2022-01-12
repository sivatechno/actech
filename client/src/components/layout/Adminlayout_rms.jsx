import React from 'react'
import Header from '../rms/header/Adminheader_rms';
import Sidebar from '../rms/sidebar/Sidebar';
import './Adminlayout_rms.scss';
export default function Adminlayout_rms({children}) {
    return (
        <div>
            <div className="admin_layout">
                <Header />
            </div>
            <div className="main_body">
                <div className="left">
                    <Sidebar />
                </div>
                <div className="right">
                    <main>{children}</main>
                </div>
            </div>
        </div>
    )
}

