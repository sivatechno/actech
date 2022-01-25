import React from 'react'
import Adminlayout_rms from '../../components/layout/Adminlayout_rms';
import ViewSoftBlock from '../../components/rms/softblock/ViewSoftBlock';


const SoftBlock =({classes, children}) =>
{
    return (
        <Adminlayout_rms>
            <ViewSoftBlock/>
        </Adminlayout_rms>
    )
}
export default SoftBlock;