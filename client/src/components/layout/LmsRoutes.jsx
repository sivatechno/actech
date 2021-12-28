import { Route, Routes } from 'react-router-dom';
import ProfileViewMentee from '../../pages/ProfileViewMentee';
import ProfileViewMentor from '../../pages/ProfileViewMentor';
import ViewMentee from '../../pages/ViewMentee';
import ViewCourse from '../../pages/ViewCourse';
import UpdateProfileViewMentor from '../../components/superadmin/usermanager/UpdateProfileMentor.component';
import AdminLayout from './AdminLayout';
import ViewMentor from '../../pages/ViewMentor';
import ProtectedRoute from '../../ProtectedRoutes';
export const LmsRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<AdminLayout/>}>
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
            </Route>
        </Routes>
    )
}