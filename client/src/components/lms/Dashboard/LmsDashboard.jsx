import React, {useState,useEffect} from 'react';
import './LmsDashboard.scss';
// import axios from 'axios';
// import config from '../../config/config'

 function LmsDashboard() {
    // const apiURL = config.API_URL;
    // const [listofmentors ,setListofMentors] = useState([0]);

    // useEffect(() => {
    //     axios.get(`${apiURL}/mentor/count`).then((response) => {
    //         setListofMentors(response.data);
            
    //     });
    // }, []);
  return( 
  <>
   
   <section className='lms-dashboard'>
     <div className='new'>   
       <div className='dashboard-container'>
           <div className='card'>
               <div className='front front-card-color'>
                   <div className='content'>
                       <h1>Mentor</h1>
                   </div>
               </div>
               <div className='back back-card-color'>
                   <div className='content'>
                       <h2>Count</h2>
                       {/* <p>{listofmentors}</p> */}

                   </div>
               </div>
           </div>
       </div>
       <div className='dashboard-container'>
           <div className='card'>
               <div className='front front-card-color2'>
                   <div className='content'>
                       <h1>Mentee</h1>
                   </div>
               </div>
               <div className='back back-card-color2'>
                   <div className='content'>
                       <h2>Count</h2>
                       <p>0</p>

                   </div>
               </div>
           </div>
       </div>
       <div className='dashboard-container'>
           <div className='card'>
               <div className='front front-card-color3'>
                   <div className='content'>
                       <h1>Enrollment</h1>
                   </div>
               </div>
               <div className='back back-card-color3'>
                   <div className='content'>
                       <h2>Count</h2>
                       <p>0</p>

                   </div>
               </div>
           </div>
       </div>
       <div className='dashboard-container'>
           <div className='card'>
               <div className='front front-card-color4'>
                   <div className='content'>
                       <h1>Exams</h1>
                   </div>
               </div>
               <div className='back back-card-color4'>
                   <div className='content'>
                       <h2>Count</h2>
                       <p>0</p>

                   </div>
               </div>
           </div>
       </div>
       </div>
   </section>  
  </>);
}
export default LmsDashboard