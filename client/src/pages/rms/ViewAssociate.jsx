import React from 'react'
import AdminLayout from '../../components/layout/Adminlayout_rms';
import ViewAssociateProfile from '../../components/rms/associate/ViewAssociateProfile.component'

const ViewAssociate = ({classes,children}) => {
    return(
        <AdminLayout>
            <ViewAssociateProfile/>
        </AdminLayout>
    )
}

export default ViewAssociate;
