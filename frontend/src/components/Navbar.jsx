import { Link } from 'react-router-dom';
import SearchBox from '../components/SearchBox';
import { useSelector } from 'react-redux';

const dynamicNavClassName = (type) => {
  // defining possible routes
  const possibleRoutes = new Set(['user-bookslot', 'owner-landing']);

  return possibleRoutes.has(type) ? 'border-b-[0.8px] border-grayish' : '';
};

// eslint-disable-next-line react/prop-types
const Navbar = ({ type }) => {
  // const { details } = useContext(UserContext);
  // console.log(details);

  const { user } = useSelector(state => state.auth)
  console.log("currentUser", user)

  return (
    <div className="w-full left-0 bg-background fixed z-50 flex flex-row items-center justify-center">
      <nav
        className={`w-11/12 lg:w-[1200px] mb-2 top-1 pt-12 pb-4  flex justify-between items-center  font-mediumlight ${dynamicNavClassName(type)} `}
      >
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
          {type === 'user-landing' ||
          type === 'user-bookslot' ||
          type === 'owner-landing' ? (
            <p className="font-light text-2xl">
              {type === 'owner-landing'
                ? `${user ? user.name : 'Owner'}`
                : `${user ? user.name : 'User'}`}
            </p>
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
