import React from 'react'
import './AddMentor.component.scss';

const successvalidation = () => {
    return (
        <div className='addmentor'>
        <div className='app_wrapper'>
            <h1 className='form_success'>Mentor added</h1>
            
        </div>    
            
        </div>
    );
};

export default successvalidation

// const addMentor = (e) =>{
    
//     const[values,Setvalues]=useState({
//         username :"",
//         password :"",
//         email :"",
//     });
//     e.preventDefault();
//     setError(validation(values));
// const [errors,setErrors]= useState({}); 
// // value={values.email}
// value={values.username}
{/* <div className='app_wrapper'></div> */}