import { Link } from 'react-router-dom';
import SearchBox from '../components/SearchBox';

// eslint-disable-next-line react/prop-types
const Navbar = ({ type }) => {
  const username = 'User';

  return (
    <div className="w-full left-0 bg-background fixed flex flex-row items-center justify-center">
      <nav className="w-[1200px] mb-2 top-1 pt-12 pb-4  flex justify-between items-center  font-mediumlight">
        {/* QuickTime Logo */}
        <Link to={{ pathname: '/' }} className="bg-red-20">
          <div className="flex flex-row text-[32px] font-bold text-black">
            <p>QuickT</p>
            <p className="text-secondary">ime.</p>
          </div>
        </Link>

        {/* Will be available in user landing page */}
        {type === 'user-landing' && <SearchBox />}

        {/* Navbar Buttons */}
        <div className="flex space-x-6">
          {/* Partner with us button */}
          {type === 'home' && (
            <button className="text-black">Partner with us</button>
          )}

          {/* Get the App button with border and padding */}
          {type === 'user-landing' || type === 'user-bookslot' || type === 'owner-landing' ? (
            <p className="font-light text-2xl">{username}</p>
          ) : (
            <button className="border-[1.2px] border-black rounded-[12px] px-6 py-2 text-black">
              Get the App
            </button>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
