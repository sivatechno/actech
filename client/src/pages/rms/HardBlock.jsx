import React from 'react'
import Adminlayout_rms from '../../components/layout/Adminlayout_rms';
import ViewHardBlock from '../../components/rms/hardblock/ViewHardBlock';

const HardBlock = ({classes,children}) => 
{
    return (
        <Adminlayout_rms>
            <ViewHardBlock/>
        </Adminlayout_rms>
    )
}
export default HardBlock;
