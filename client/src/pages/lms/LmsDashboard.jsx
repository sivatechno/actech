import React from 'react';
import AdminLayout from '../../components/layout/AdminLayout';
import LmsDashboardComponents from '../../components/lms/Dashboard/LmsDashboard'
export default function LmsDashboard() {
  return (
    <>
        <AdminLayout>
            <LmsDashboardComponents/>
        </AdminLayout>
    </>
  )
}
