import React, { Fragment, useState } from 'react';
import './App.css';
import{ BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom';
import AdminLogin from './components/form/SuperAdminLogin';
import ProfileViewMentee from './pages/ProfileViewMentee';
import ProfileViewMentor from './pages/ProfileViewMentor';
import ViewMentee from './pages/ViewMentee';
import ViewMentor from './pages/ViewMentor';
import PageNotFound from './components/PageNotFound';
import ProtectedRoute from './ProtectedRoutes';
import LoginProtect from './LoginProtect';


function App({children}) {

  return (
    <>
     <Router>
       <Fragment>
         <Routes>
           <Route exact path="/viewmentee" element={<ProtectedRoute/>}>
             <Route exact path="/viewmentee" element={<ViewMentee/>}/>
            </Route>

            <Route exact path="/viewmentor" element={<ProtectedRoute/>}>
             <Route exact path="/viewmentor" element={<ViewMentor/>}/>
            </Route>

            <Route exact path="/profileviewmentee" element={<ProtectedRoute/>}>
             <Route exact path="/profileviewmentee" element={<ProfileViewMentee/>}/>
            </Route>

            <Route exact path="/profileviewmentor" element={<ProtectedRoute/>}>
             <Route exact path="/profileviewmentor" element={<ProfileViewMentor/>}/>
            </Route>

            {/* <Route exact path="/profileviewmentor/:id" element={<ProtectedRoute/>}>
             <Route exact path="/profileviewmentor/:id" element={<ProfileViewMentor/>}/>
            </Route> */}

         </Routes>
          <Routes>
            
             <Route exact path="/"  element={<LoginProtect/>}>
             <Route exact path="/" element={<ViewMentor/>}/>
             </Route>
             
            <Route path="/:pathname" element={<PageNotFound/>}/>
          </Routes>
      </Fragment>
          
     </Router>
     </>
  );
}
export default App;

