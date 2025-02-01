import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { useContext } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { setUser } from "../redux/features/auth/authSlice"

// eslint-disable-next-line react/prop-types
const OTPForm = ({ role }) => {
  // getting the user
  const { user } = useSelector(state => state.auth);
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_URL;

  const { details, setDetails } = useContext(UserContext)


  const handleSubmit = async (event) => {
    event.preventDefault();

    const { mobile, otp } = details;
    console.log(mobile, otp);

    try {
      const response = await fetch(apiUrl + '/api/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ mobile, otp }),
      });

      const result = await response.json();

      if (!response.ok) {
        alert(`${result.message}`); // Show an alert first
        throw new Error(`Error: ${response.statusText}`); // Then throw the error
      }

      console.log(result);
      dispatch(setUser(result))
      console.log(user)
      // setUser((prevUser) => ({...prevUser, 'otp': result.otp}))
      role === 'user' ? navigate('/users/landing') : navigate('/owners/landing')
    } catch (error) {
      console.error('error while login', error);
    }
    
  };

  return (
    <div className={`flex justify-center items-center h-auto `}>
      <div
        className={`w-[375px] p-8 rounded-2xl shadow-md font-light antialiased ${role === 'owner' ? 'bg-black' : 'bg-white'}`}
      >
        {/* Back Arrow */}
        <Link
          to={role === 'owner' ? '/owners/login' : '/users/login'}
          className="text-gray-700"
        >
          <img
            src="/backlogo.png"
            alt="back"
            className="mb-4"
            width={24}
            height={24}
            style={role === 'owner' ? { filter: 'invert(1)' } : {}}
          />
        </Link>

        {/* Title */}
        <h2
          className={`text-2xl ${role === 'owner' ? 'text-white' : 'text-black'}`}
        >
          Login
        </h2>
        <p className="text-md mt-1 text-grayish">
          Enter the OTP sent to your mobile number
        </p>

        {/* Input */}
        <form onSubmit={handleSubmit}>
          <div className="mt-6 space-y-2">
            <input
              type="tel"
              pattern="[0-9]{10}"
              id="mobile"
              value={details.mobile}
              contentEditable={false}
              placeholder="Mobile number"
              className="w-full px-4 py-3 bg-inherit border-[1px] border-grayish rounded-[2px] text-grayish placeholder-grayish focus:outline-none"
            />
            <input
              type="password"
              id="otp"
              value={details.otp}
              onChange={(e) =>
                setDetails((prevUser) => ({
                  ...prevUser,
                  [e.target.id]: e.target.value,
                }))
              }
              placeholder="OTP"
              className="w-full px-4 py-3 bg-inherit border-[1px] border-grayish rounded-[2px] text-grayish placeholder-grayish focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-6 px-4 py-2 bg-secondary text-white rounded-md hover:bg-green-600"
          >
            Continue
          </button>
        </form>

        {/* Footer */}
        <p className="mt-6 text-xs text-center text-grayish flex justify-center gap-x-1">
          By clicking, I agree to QuickTime’s
          <a
            href="#"
            className={`${role === 'owner' ? 'text-white' : 'text-black'} underline outline-none`}
          >
            terms & conditions
          </a>
        </p>
      </div>
    </div>
  );
};

export default OTPForm;
