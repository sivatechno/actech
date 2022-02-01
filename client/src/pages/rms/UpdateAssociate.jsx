import React from 'react'
import AdminLayout from '../../components/layout/Adminlayout_rms';
import UpdateAssociateProfile from '../../components/rms/associate/UpdateAssociateProfile.component'

const UpdateAssociate = ({classes,children}) => {
    return(
        <AdminLayout>
            <UpdateAssociateProfile/>
        </AdminLayout>
    )
}

export default UpdateAssociate;