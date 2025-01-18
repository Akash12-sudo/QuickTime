import { Link } from 'react-router-dom';

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen overflow-hidden">
      {/* Navbar */}

      {/* Hero Section */}
      <section className="hero-section text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col text-center text-[48px] font-mediumbold leading-[1]">
          Your Turf,
          <span className="text-secondary">Just a Tap away</span>
        </div>
        <div className="buttons flex gap-[40px] mt-[150px] gap-x-[120px]">
          <Link
            to="/owners/login"
            replace
            className="button owner w-[260px] h-[60px] flex justify-center items-center rounded-[30px] text-[20px] font-mediumlight cursor-pointer bg-black text-secondary"
          >
            Sign in as Owner
          </Link>
          <Link
            to="/users/login"
            replace
            className="button user w-[260px] h-[60px] flex justify-center items-center rounded-[30px] text-[20px] font-mediumlight cursor-pointer bg-secondary text-black"
          >
            Sign in as User
          </Link>
        </div>
      </section>
    </div>
  );
};

export default App;

//<div>
