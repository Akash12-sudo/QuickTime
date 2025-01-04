import React from "react";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen overflow-hidden">
      {/* Navbar */}
      

      {/* Hero Section */}
      <section className="hero-section text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-[36px] font-bold text-black leading-[1.5]">
          Your Turf,
          <br />
          <span className="text-[#00cc66] text-[32px]">Just a Tap away</span>
        </h1>
        <div className="buttons flex gap-[40px] mt-[30px]">
          <a href="/owners/login" className="button owner w-[260px] h-[60px] flex justify-center items-center rounded-[30px] text-[16px] font-bold cursor-pointer bg-black text-white">
            Sign in as Owner
          </a>
          <a href="/users/login" className="button user w-[260px] h-[60px] flex justify-center items-center rounded-[30px] text-[16px] font-bold cursor-pointer bg-[#00cc66] text-white">
            Sign in as User
          </a>
        </div>
      </section>
    </div>
  );
};

export default App;
