import React from 'react'
import ProfileView from '../../components/rms/Project_profile/Project_profile_view';
import Adminlayout_rms from '../../components/layout/Adminlayout_rms'

const ProjectProfileView = ({classes,children}) => 
{
    return (
            <Adminlayout_rms>
                <ProfileView />
            </Adminlayout_rms>
    )
}

export default ProjectProfileView;
