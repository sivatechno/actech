import React from 'react'
import { Outlet } from 'react-router-dom';
import AdminLayout from './AdminLayout';

export default function LmsLayout() {
    return (
        <AdminLayout>
            <Outlet/>
        </AdminLayout>

    )
}
