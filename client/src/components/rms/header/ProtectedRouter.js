import React from 'react';
import {Route,Redirect} from 'react-router-dom';

const ProtectedRouter = ({element,...rest})=>{
    var RenderElements = element;
    return(
        <Route
            {...rest}
            render = {
                props =>{
                    return true ? (
                    <RenderElements element={<props/>}/>
                    ):(
                        <Redirect to={{
                            pathname:'/login'
                        }}
                        />
                    )

                }
            }
        />
    )
}
export default ProtectedRouter;