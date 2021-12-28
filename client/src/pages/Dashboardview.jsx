import React from 'react'
import Adminlayout_rms from '../components/layout/Adminlayout_rms';
import DashboardView from '../components/superadmin/usermanager/Dashboard';

const Dashboardview = ({classes,children}) =>  {
    return (
          <Adminlayout_rms>
            <DashboardView />
          </Adminlayout_rms>
    )
}

export default Dashboardview;

