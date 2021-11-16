import React from 'react';
import './App.css';
import{ BrowserRouter as Router,Routes} from 'react-router-dom';
import Student from './components/Studentstab/Student';
 import Navbar from './components/header/Navbar';
// import "../node_modules/bootstrap/dist/css/bootstrap.css";
// import Usermanager from './pages/Usermanager';
// import Staff from './pages/Staff';

//  import SuperAdminLogin from './components/form/SuperAdminLogin';
function App() {
  return (
   <>
     <Router>
        <Navbar/>  
         {/* <SuperAdminLogin/>  */}
          <Student/>  
        
       <Routes>
          {/* <Route path='/usermanager' exact component={Usermanager}/> 
         <Route path='/staff'  exact component={Staff}/>*/}
       </Routes>
      </Router>
  </>
  );
}

export default App;
