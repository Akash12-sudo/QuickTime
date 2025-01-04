import React from "react";
import backlogo from "../../public/backlogo.png";

const DarkLoginForm = () => {
  return (
    <div className="flex justify-center items-center  ">
      <div className="w-[375px]  p-8 bg-black rounded-2xl shadow-md font-light antialiased">
        {/* Back Arrow */}
        <a href="/" className="text-white">
          <img src={backlogo} alt="back" className="mb-4" width={24} height={24} style={{ filter: "invert(1)" }} />
        </a>

        {/* Title */}
        <h2 className="text-2xl text-white">Login</h2>
        <p className="text-sm mt-1 text-gray-400">
          or{" "}
          <a href="/owners/signup" className="text-secondary font-medium">
            create an account
          </a>
        </p>

        {/* Input */}
        <div className="mt-6">
          <input
            type="text"
            id="mobile"
            placeholder="Mobile number"
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

export default DarkLoginForm;
