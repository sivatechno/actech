import React from "react";
import {Navigate,Route,Outlet} from 'react-router-dom';
import AdminLogin from './pages/AdminLogin';
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

    return hasToken!==null && hasToken!=='undefind' ? <Navigate to="/homepage" /> : <Outlet />;
    // return hasToken!==null && hasToken!=='undefind' ? <Navigate to="/viewmentor" /> : <Route exact path="/" element={<AdminLogin/>}/>;
};
export default ProtectedRoute;