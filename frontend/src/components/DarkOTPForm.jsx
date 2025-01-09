import { Link } from 'react-router-dom';

const OTPForm = ({ background, foreground }) => {
  return (
    <div className={`flex justify-center items-center  `}>
      <div
        className={`w-[375px] p-8 ${background ? background : 'bg-black'} rounded-2xl shadow-md font-light antialiased `}
      >
        {/* Back Arrow */}
        <Link to="/" className="text-white">
          <img
            src="/backlogo.png"
            alt="back"
            className="mb-4"
            width={24}
            height={24}
            style={{ filter: 'invert(1)' }}
          />
        </Link>

        {/* Title */}
        <h2 className={`text-2xl text-white`}>Login</h2>
        <p className="text-md mt-1 text-gray-400">
          Enter the OTP sent to your mobile number
        </p>

        {/* Input Fields */}
        <div className="mt-6 space-y-1">
          <input
            type="text"
            id="mobile"
            placeholder="Mobile number"
            className="w-full px-4 py-3 border-[1px] border-gray-600 rounded-[2px] bg-black text-white placeholder-gray-400 focus:outline-none"
          />
          <input
            type="password"
            id="otp"
            placeholder="OTP"
            className="w-full px-4 py-3 border-[1px] border-gray-600 rounded-[2px] bg-black text-white placeholder-gray-400 focus:outline-none"
          />
        </div>

        {/* Button */}
        <button className="w-full mt-6 px-4 py-2 bg-secondary text-white rounded-md hover:bg-green-600">
          Continue
        </button>

        {/* Footer */}
        <p className="mt-6 text-xs text-center text-gray-400 flex justify-center gap-x-1">
          By clicking, I agree to QuickTime’s
          <a href="#" className="text-secondary underline outline-none">
            terms & conditions
          </a>
        </p>
      </div>
    </div>
  );
};

export default OTPForm;
