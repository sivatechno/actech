import React from 'react'
import ViewMentorComponents from '../../components/lms/superadmin/usermanager/ViewMentor.component';
import AdminLayout from '../../components/layout/AdminLayout';

const ViewMentor = ({classes,children}) => {
    return(
        <AdminLayout>
             <ViewMentorComponents/>
        </AdminLayout>   
    )
}
export default ViewMentor;
