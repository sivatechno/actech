import React from 'react';
import Login from './pages/Login';
import AddStaff from './components/header/AddStaff';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
function App() {
  return (
   <div>
      <Router>
       <Routes> 
         {/* <AdminHeader/> */}
             <Route path="/" element={<AddStaff />} />
       </Routes>
     </Router> 
     
   </div>
  );
}


export default App;
