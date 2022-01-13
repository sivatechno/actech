import React from 'react'
import Adminlayout_rms from '../../components/layout/Adminlayout_rms';
import Viewclient from '../../components/rms/Client/Viewclient';


const ClientView = ({classes,children}) =>  {
    return (
          <Adminlayout_rms>
            < Viewclient/>
          </Adminlayout_rms>
    )
}

export default ClientView;




