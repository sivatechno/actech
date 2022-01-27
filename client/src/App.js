import React, { Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminLogin from './components/form/SuperAdminLogin';
import Projectprofileview from './pages/rms/ProjectProfileView';
import ProfileViewMentee from './pages/lms/ProfileViewMentee';
import ProfileViewMentor from './pages/lms/ProfileViewMentor';
import ViewMentee from './pages/lms/ViewMentee';
import ViewCourse from './pages/lms/ViewCourse';
import HardBlock from './pages/rms/HardBlock';
import UpdateProfileViewMentor from './components/lms/superadmin/usermanager/UpdateProfileMentor.component';
// import AdminLayout from './components/layout/AdminLayout';
import ViewMentor from './pages/lms/ViewMentor';
// import PageNotFound from './components/PageNotFound';
import ProtectedRoute from './ProtectedRoutes';
import LoginProtect from './LoginProtect';
import HomePage from './components/frontpage/HomePage';
import Dashboard from './pages/rms/Dashboardview';
import Viewassociateprofile from './pages/rms/ViewAssociate';
import SoftBlock from './pages/rms/SoftBlock';
import ClientView from './pages/rms/Clientview';
import EditClient from './components/rms/Client/Editclient';
import UpdateAssociateProfile from './components/rms/associate/UpdateAssociateProfile.component';
import ProjectMappingView from './pages/rms/ProjectMappingView';
import Exam from './pages/lms/exam';
import ViewQuestion from './pages/lms/ViewQuestion';
import Result from './pages/lms/Result';
import AddQuestion from './pages/lms/AddQuestion';
import Update_Proj from './pages/rms/Update_proj'
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


            <Route exact path="/Dashboardview" element={<ProtectedRoute />}>
              <Route exact path="/Dashboardview" element={<Dashboard />} />
            </Route>


            <Route exact path="/projectprofileview" element={<ProtectedRoute />}>
              <Route exact path="/projectprofileview" element={<Projectprofileview />} />
            </Route>
            <Route exact path="/HardBlock" element={<ProtectedRoute />}>
              <Route exact path="/HardBlock" element={<HardBlock />} />
            </Route>
            <Route exact path="/SoftBlock" element={<ProtectedRoute />}>
              <Route exact path="/SoftBlock" element={<SoftBlock />} />
            </Route>
            <Route exact path="/Update_proj" element={<Update_Proj/>}>
              <Route exact path="/Update_proj" element={<Update_Proj/>} />
            </Route>    

            <Route exact path="/ViewAssociate" element={<ProtectedRoute />}>
              <Route exact path="/ViewAssociate" element={<Viewassociateprofile />} />
            </Route>
            <Route exact path="/ClientView" element={<ProtectedRoute />}>
              <Route exact path="/ClientView" element={<ClientView />} />
            </Route>

            <Route exact path="/Editclient" element={<ProtectedRoute />}>
              <Route exact path="/Editclient" element={<EditClient />} />
            </Route>
            
            <Route exact path="/HardBlock" element={<ProtectedRoute />}>
              <Route exact path="/HardBlock" element={<HardBlock />} />
            </Route>

            <Route exact path="/ProjectMappingView" element={<ProtectedRoute />}>
              <Route exact path="/ProjectMappingView" element={<ProjectMappingView />} />
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

