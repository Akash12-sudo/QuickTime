import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import UserLogin from "../pages/users/Login";
import UserSignUp from "../pages/users/SignUp";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users/login" element={<UserLogin />} />
        <Route path="/users/signup" element={<UserSignUp />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
