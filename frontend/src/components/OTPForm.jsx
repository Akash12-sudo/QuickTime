import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { useContext } from 'react';

// eslint-disable-next-line react/prop-types
const OTPForm = ({ role }) => {
  // getting the user
  const { user } = useContext(UserContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(user)
  }

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
              value={user.mobile}
              contentEditable={false}
              placeholder="Mobile number"
              className="w-full px-4 py-3 bg-inherit border-[1px] border-grayish rounded-[2px] text-grayish placeholder-grayish focus:outline-none"
            />
            <input
              type="password"
              id="otp"
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
