import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import Navbar from "../components/Navbar";
import UserLogin from "../pages/users/Login";
import UserSignUp from "../pages/users/SignUp";
import OtpVerification from "../pages/users/OtpVerification";
import OwnerLogin from "../pages/owners/Login";
import OwnerSignUp from "../pages/owners/SignUp";
import OtpVerificationOwner from "../pages/owners/OtpVerificationOwner";
// A wrapper component to handle Navbar logic
const AppLayout = ({ children }) => {
  const location = useLocation();

  // Determine type for Navbar
  const isHomePage = location.pathname === "/";
  const navbarType = isHomePage ? "home" : "default";

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
          
        </Routes>
      </AppLayout>
    </Router>
  );
};

export default AppRoutes;
