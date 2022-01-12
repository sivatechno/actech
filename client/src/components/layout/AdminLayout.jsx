import React from 'react';
import Header from '../lms/header/AdminHeader';
import Sidebar from '../lms/sidebar/Navbar';
import './AdminLayout.scss';
import {Outlet} from 'react-router-dom'
export default function AdminLayout({ children }) {
    return (
        <div>
            <div className="admin-layout">
                <div className="header">
                    <Header />
                </div>
                <div className="main-body">
                    <div className="left">
                        <Sidebar />
                    </div>
                    <div className="right">
                        <main>{children}</main>
                    </div>
                </div>
            </div>
        </div>
    )
}
