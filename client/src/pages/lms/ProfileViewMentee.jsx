import React from 'react'
import ProfileViewMenteeComponent from '../../components/lms/superadmin/usermanager/ProfileViewMentee.component';
import AdminLayout from '../../components/layout/AdminLayout';
const ProfileViewMentee = ({classes,children}) => {
    return (
        <AdminLayout>
            <ProfileViewMenteeComponent />
        </AdminLayout>  
        
    )
}
export default ProfileViewMentee;