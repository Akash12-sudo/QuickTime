import React from 'react';
import backlogo from '../../public/backlogo.png';

const SignUpForm = ({ background, foreground }) => {
  return (
    <div className={`flex justify-center items-center  `}>
      <div
        className={`w-[375px] p-6 rounded-xl shadow-lg ${background ? background : 'bg-black'} font-light antialiased`}
      >
        {/* Back Arrow */}
        <a href="/" className="text-white">
          <img
            src={backlogo}
            alt="back"
            className="mb-4"
            width={24}
            height={24}
            style={{ filter: 'invert(1)' }}
          />
        </a>

        {/* Title */}
        <h2 className={`text-2xl text-white`}>Sign Up</h2>
        <p className="text-sm mt-1 text-gray-400">
          or{' '}
          <a href="/owners/login" className="text-secondary outline-none">
            login to your account
          </a>
        </p>

        {/* Input Fields */}
        <div className="mt-6 space-y-2">
          <input
            type="text"
            id="mobile"
            placeholder="Mobile number"
            className="w-full px-4 py-3 border-[1px] border-gray-600 rounded-[2px] bg-black text-white placeholder-gray-400 focus:outline-none"
          />
          <input
            type="text"
            id="name"
            placeholder="Name"
            className="w-full px-4 py-3 border-[1px] border-gray-600 rounded-[2px] bg-black text-white placeholder-gray-400 focus:outline-none"
          />
          <input
            type="email"
            id="email"
            placeholder="Email"
            className="w-full px-4 py-3 border-[1px] border-gray-600 rounded-[2px] bg-black text-white placeholder-gray-400 focus:outline-none"
          />
        </div>

        {/* Button */}
        <button className="w-full mt-6 px-4 py-3 bg-secondary text-white font-medium text-center rounded-lg hover:bg-green-600 focus:outline-none">
          Continue
        </button>

        {/* Footer */}
        <p className="mt-6 text-xs text-center text-gray-400 flex justify-center gap-x-1">
          By creating an account, I agree to QuickTime’s
          <a href="#" className={`${foreground} underline outline-none`}>
            terms & conditions
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUpForm;
