import React from 'react';
import './App.css';
import{ BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import AdminLayout from './components/layout/AdminLayout';
import Student from './pages/Student';
import Staff from './pages/Staff';
import UserManager from './pages/Usermanager';
import Login from './pages/Login';
import Test from './components/superadmin/Viewstaffmentor';

function App() {
  return (
     <Router>
       <Routes>
         <Route exact path="/" element={<Login />} />
         <Route path="/test" element={<Test />} />
       </Routes>
       {/* <AdminLayout>
         <Routes>
           <Route path="/staff" element={<Staff />} />
           <Route path="/student" element={<Student />} />
           <Route path="/usermanager" element={<UserManager />} />
         </Routes>
       </AdminLayout> */}

     </Router>
  );
}


export default App;
