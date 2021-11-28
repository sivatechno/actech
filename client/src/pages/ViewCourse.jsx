import React from 'react';
import ViewCourseComponents from '../components/superadmin/usermanager/ViewCourse.component';
import AdminLayout from '../components/layout/AdminLayout';
const ViewCourse = ({classes,children}) => {
    return (
        <AdminLayout>
            <ViewCourseComponents/>
        </AdminLayout>
    )
}

export default ViewCourse;
