import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import UserLogin from "../pages/users/Login";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users/login" element={<UserLogin />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
