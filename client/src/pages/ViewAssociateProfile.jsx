import React from 'react'
import AdminLayout from '../components/layout/Adminlayout_rms';
import ViewAssociateProfile from '../../src/components/superadmin/usermanager/ViewAssociateProfile.component'

const Viewassociateprofile = ({classes,children}) => {
    return(
        <AdminLayout>
            <ViewAssociateProfile/>
        </AdminLayout>
    )
}

export default Viewassociateprofile;
