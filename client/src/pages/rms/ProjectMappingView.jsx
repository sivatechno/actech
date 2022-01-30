import React from 'react';
import AdminLayout_rms from '../../components/layout/Adminlayout_rms';
import ProjectMapping from '../../components/rms/projectmapping/Projectmappingview';

function ProjectMappingView() {
  return (
    <AdminLayout_rms>
        <ProjectMapping />
    </AdminLayout_rms>
  )
};

export default ProjectMappingView;
