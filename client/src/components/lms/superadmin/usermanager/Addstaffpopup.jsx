import React from 'react'
import  './Addstaffpopup.scss';
export default function Addstaffpopup() 
{
    return (
        <div>
            <div className="popupbackground">
                <div className="headercontainer">
                <div className="close">&times;
                </div>
                </div><hr/>
                    <div className="textcontainer">
                        <p>Do you want to Add this details</p>
                    </div>
                
                <div className="btn-container">
                    <input type="button" className="ok" value="ok"/>
                    <input type="button" className="continue" value="continue"/>
                </div>
            </div>
        </div>        
    )
}
