import React,{usestate} from 'react';
import AddMentor from './AddMentor.component';
import successvalidation from "./successvalidation";

const form = () =>{
    const [formIssumbitted,setformIssubmitted] = usestate(false);
    const Addmentor = () =>{
        setformIssubmitted(true);
    }
};
return(
    <div>
        {!formIssumbitted?(
            <form AddMentor={submitform}/>
        ):(
            <successvalidation/>
        )}
    </div>
);
export default form;
