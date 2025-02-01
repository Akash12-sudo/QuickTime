import { createContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/features/auth/authSlice';

const apiUrl = import.meta.VITE_API_URL;
export const UserContext = createContext();

// eslint-disable-next-line react/prop-types
export const UserContextProvider = ({ children }) => {
  // const url = import.meta.env.VITE_API_URL;
  const [details, setDetails] = useState({
    name: '',
    role: '',
    email: '',
    mobile: '',
    otp: '',
  });

  const fetchDate = (offset) => {
    const date = new Date();
    date.setDate(date.getDate() + offset); // Offset for the next days

    const day = date.getDate(); // No leading zero
    const month = date.getMonth() + 1; // No leading zero

    return `${day}/${month}`;
  };

  const dispatch = useDispatch();

  const handleLogout = async () => {
    // handle logout
    try {
      const response = await fetch(apiUrl + '/api/user/logout');
      if (!response.ok || response.status === 500) {
        alert('Failed to logout');
        return;
      }
      console.log('user logged out successfully');
      dispatch(logout());
      window.location.reload();
    } catch (error) {
      alert('Failed to logout');
      console.error('Error in logout', error);
    }
  };

  return (
    <UserContext.Provider
      value={{ details, setDetails, handleLogout, fetchDate }}
    >
      {children}
    </UserContext.Provider>
  );
};
