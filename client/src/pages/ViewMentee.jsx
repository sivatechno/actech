import React from 'react'
import ViewMenteeComponents from '../components/superadmin/usermanager/ViewMentee.component';
import AdminLayout from '../components/layout/AdminLayout';

const ViewMentee = ({classes,children}) => {
    return(
        <AdminLayout>
             <ViewMenteeComponents />
        </AdminLayout>
           
        
    )
}
export default ViewMentee;