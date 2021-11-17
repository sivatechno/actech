import React from 'react';
import './App.css';
import{ BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import AdminLayout from './components/layout/AdminLayout';
import AddMentee from './pages/AddMentee';
import AddMentor from './pages/AddMentor';
import AdminLogin from './pages/AdminLogin';
import ProfileViewMentee from './pages/ProfileViewMentee';
import ProfileViewMentor from './pages/ProfileViewMentor';
import ViewMentee from './pages/ViewMentee';
import ViewMentor from './pages/ViewMentor';

function App() {
  return (
     <Router>
       <Routes>
         <Route exact path="/" element={<AdminLogin />} />

       </Routes>
       <AdminLayout>
         <Routes>
           <Route path="/viewmentee" element={<ViewMentee />} />
           <Route path="/viewmentor" element={<ViewMentor />} />
           <Route path="/addmentee" element={<AddMentee />} />
           <Route path="/addmentor" element={<AddMentor />} />
           <Route path="/profileviewmentee" element={<ProfileViewMentee />} />
           <Route path="/profileviewmentee" element={<ProfileViewMentor />} />
         </Routes>
       </AdminLayout>

     </Router>
  );
}


export default App;
