import React from 'react'
// import Login from '../components/superadmin/usermanager/Login.component';
import Login from '../components/form/SuperAdminLogin';
import DefaultLayout from '../components/layout/DefaultLayout';

const AdminLogin = ({classes,children}) => {
    return(
        <DefaultLayout>
            <Login />
        </DefaultLayout>
    )
}
export default AdminLogin;