import React from 'react'
import Header from '../header/Header'
export default function DefaultLayout({children}) {
    return (
        <div>
            <div className="default-layout">
                <div className="header">
                    <Header />
                </div>
                <div className="main-body">
                    <main>{children}</main>
                </div>
            </div>
        </div>
    )
}
