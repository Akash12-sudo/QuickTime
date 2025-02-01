import { createContext, useState} from 'react';

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

  

  return (
    <UserContext.Provider value={{ details, setDetails }}>
      {children}
    </UserContext.Provider>
  );
};
