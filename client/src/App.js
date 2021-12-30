import React, { Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminLogin from './components/form/SuperAdminLogin';

import Projectprofileview from './pages/ProjectProfileView';
import ProfileViewMentee from './pages/ProfileViewMentee';
import ProfileViewMentor from './pages/ProfileViewMentor';
import ViewMentee from './pages/ViewMentee';
import ViewCourse from './pages/ViewCourse';
import UpdateProfileViewMentor from './components/superadmin/usermanager/UpdateProfileMentor.component';
import AdminLayout from './components/layout/AdminLayout';
import ViewMentor from './pages/ViewMentor';
import PageNotFound from './components/PageNotFound';
import ProtectedRoute from './ProtectedRoutes';
import LoginProtect from './LoginProtect';
import HomePage from './components/frontpage/HomePage';
import Dashboard from './pages/Dashboardview';
import Viewassociateprofile from './pages/ViewAssociateProfile';
import UpdateAssociateProfile from './components/superadmin/usermanager/UpdateAssociateProfile.component'
import Exam from './pages/exam';
import ViewQuestion from './pages/ViewQuestion';
import Result from './pages/Result';
import AddQuestion from './pages/AddQuestion';
import { LmsRoutes } from './components/layout/LmsRoutes';


function App({ children }) {

  return (
    <>
      <Router>

        <Fragment>

          <Routes>

            <Route exact path="/viewcourse" element={<ProtectedRoute />}>
              <Route exact path="/viewcourse" element={<ViewCourse />} />
            </Route>

            <Route exact path="/viewmentee" element={<ProtectedRoute />}>
              <Route exact path="/viewmentee" element={<ViewMentee />} />
            </Route>

            <Route exact path="/viewmentor" element={<ProtectedRoute />}>
              <Route exact path="/viewmentor" element={<ViewMentor />} />
            </Route>

            <Route exact path="/profileviewmentee/:id" element={<ProtectedRoute />}>
              <Route exact path="/profileviewmentee/:id" element={<ProfileViewMentee />} />
            </Route>


            <Route exact path="/editprofileviewmentor/:id" element={<ProtectedRoute />}>
              <Route exact path="/editprofileviewmentor/:id" element={<UpdateProfileViewMentor />} />
            </Route>

            <Route exact path="/profileviewmentor/:id" element={<ProtectedRoute />}>
              <Route exact path="/profileviewmentor/:id" element={<ProfileViewMentor />} />
            </Route>

            <Route exact path="/homepage" element={<ProtectedRoute />}>
              <Route exact path="/homepage" element={<HomePage />} />
            </Route>

            <Route exact path="/exam" element={<ProtectedRoute />}>
              <Route exact path="/exam" element={<Exam />} />
            </Route>
            <Route exact path="/viewquestion" element={<ProtectedRoute />}>
              <Route exact path="/viewquestion" element={<ViewQuestion />} />
            </Route>
            <Route exact path="/addquestion" element={<ProtectedRoute />}>
              <Route exact path="/addquestion" element={<AddQuestion />} />
            </Route>
            <Route exact path="/result" element={<ProtectedRoute />}>
              <Route exact path="/result" element={<Result />} />
            </Route>


            <Route exact path="/dashboard" element={<ProtectedRoute />}>
              <Route exact path="/dashboard" element={<Dashboard />} />
            </Route>




            <Route exact path="/projectprofileview" element={<ProtectedRoute />}>
              <Route exact path="/projectprofileview" element={<Projectprofileview />} />
            </Route>

            <Route exact path="/viewassociateprofile" element={<ProtectedRoute />}>
              <Route exact path="/viewassociateprofile" element={<Viewassociateprofile />} />
            </Route>


            {/* <Route exact path="/editprofileviewmentee/:id" element={<ProtectedRoute />}>
              <Route exact path="/editprofileviewmentee/:id" element={<UpdateProfileViewMentee />} />
            </Route> */}

            <Route exact path="/editviewassociateprofile/:id" element={<ProtectedRoute />}>
              <Route exact path="/editviewassociateprofile/:id" element={<UpdateAssociateProfile />} />
            </Route>

            {/* <Route exact path="/profileviewmentor" element={<ProtectedRoute/>}>
             <Route exact path="/profileviewmentor" element={<ProfileViewMentor/>}/>
            </Route> */}




          </Routes>
          <Routes>

            <Route exact path="/" element={<LoginProtect />}>
              <Route exact path="/" element={<AdminLogin />} />
            </Route>

            {/* <Route path="/:pathname" element={<PageNotFound/>}/> */}
          </Routes>
        </Fragment>

      </Router>
    </>
  );
}
export default App;

