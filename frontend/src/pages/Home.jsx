import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// import { logout } from '../redux/features/auth/authSlice';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const App = () => {
  const { user } = useSelector((state) => state.auth);
  const { handleLogout } = useContext(UserContext);

  return (
    <div className="flex flex-col items-center justify-center h-screen overflow-hidden">
      <section className="hero-section text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col text-center text-[48px] font-mediumbold leading-[1]">
          Your Turf,
          <span className="text-secondary">Just a Tap away</span>
        </div>

        {user === null ? (
          <div
            className={`buttons flex-col md:flex-row flex gap-[40px] mt-[150px] gap-x-[120px]`}
          >
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
        ) : (
          <div className="flex gap-[40px] mt-[150px] items-center justify-center">
            <button
              onClick={handleLogout}
              className="button owner w-[260px] h-[60px] flex justify-center items-center rounded-[30px] text-[20px] font-mediumlight cursor-pointer bg-black text-secondary"
            >
              Sign Out
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default App;

//<div>
