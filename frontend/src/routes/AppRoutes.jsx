import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import Home from '../pages/Home';
import Navbar from '../components/Navbar';
import UserLogin from '../pages/users/auth/Login';
import UserSignUp from '../pages/users/auth/SignUp';
import OtpVerification from '../pages/users/auth/OtpVerification';
import OwnerLogin from '../pages/owners/auth/Login';
import OwnerSignUp from '../pages/owners/auth/SignUp';
import OtpVerificationOwner from '../pages/owners/auth/OtpVerificationOwner';
import LandingPage from '../pages/users/LandingPage';
import BookSlot from '../pages/users/BookSlot';
import QuickTimeUI from '../pages/owners/Landing';
import ProtectedRoute from './protected-routes/ProtectedRoute';

// Helper function to simplify dynamic navbar rendering
const getNavbarType = (path) => {
  switch (true) { // Switch on true to allow regex matching
    case path === '/':
      return 'home';
    case path === '/users/landing':
      return 'user-landing';
    case /^\/users\/bookslot\/\d+$/.test(path):
      return 'user-bookslot/:id'; // Matches /users/bookslot/{number}
    case path === '/owners/landing':
      return 'owner-landing';
    default:
      return 'default';
  }
};

// eslint-disable-next-line react/prop-types
const AppLayout = ({ children }) => {
  const location = useLocation();
  console.log(location)

  const navbarType = getNavbarType(location.pathname);

  return (
    <>
      <Navbar type={navbarType} />
      <main>{children}</main>
    </>
  );
};

const AppRoutes = () => {
  return (
    <Router>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users/login" element={<UserLogin />} />
          <Route path="/users/signup" element={<UserSignUp />} />
          <Route path="/users/otp-verify" element={<OtpVerification />} />

          <Route path="/owners/login" element={<OwnerLogin />} />
          <Route path="/owners/signup" element={<OwnerSignUp />} />
          <Route path="/owners/otp-verify" element={<OtpVerificationOwner />} />

          {/* User-specific routes */}
          <Route element={<ProtectedRoute allowedRoles={['user']} />}>
            <Route path="/users/landing" element={<LandingPage />} />
            <Route path="/users/bookslot/:id" element={<BookSlot />} />
          </Route>
          {/* Owner-protected routes */}
          <Route element={<ProtectedRoute allowedRoles={['owner']} />}>
            <Route path="/owners/landing" element={<QuickTimeUI />} />
          </Route>
        </Routes>
      </AppLayout>
    </Router>
  );
};

export default AppRoutes;
