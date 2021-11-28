import React from "react";
import {Navigate} from 'react-router-dom';
const ProtectedRoute = ()=>{
    const hasToken = JSON.parse(localStorage.getItem('auth'));
    
    // return(
    //     <Route
    //         {...rest} render={
    //             (props)=>{
    //                 if(auth) return <Element {...props} />;
    //                 if(!auth) return <Navigate to={{path:"/login",state:{from:props.location}}} />;
    //             }
    //         }
    //     />
    // )

    return hasToken!==null && hasToken!=='undefind' ? <Navigate to="/viewmentor" /> : <Navigate to="/" />;
};
export default ProtectedRoute;