import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { useSelector } from 'react-redux';

const apiUrl = import.meta.env.VITE_API_URL;

// eslint-disable-next-line react/prop-types
const AuthForm = ({ type, route, role }) => {
  // user -> current logged in user
  const { user } = useSelector((state) => state.auth);
  console.log('currentUser: ', { user });

  const { details = {}, setDetails } = useContext(UserContext);
  const navigate = useNavigate();

  const handleRoutes = () => {
    if (role === 'user')
      return type === 'login' ? '/users/signup' : '/users/login';
    else return type === 'login' ? '/owners/signup' : '/owners/login';
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setDetails((prev) => ({ ...prev, role: role }));
    console.log(details);

    if (type === 'login') {
      const { mobile } = details;
      try {
        const response = await fetch(apiUrl + '/api/user/send-otp', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ role, mobile }),
        });

        console.log(response);
        const result = await response.json();

        if (!response.ok) {
          alert(`${result.message}`); // Show an alert first
          throw new Error(`Error: ${response.statusText}`); // Then throw the error
        }

        console.log('otp generated successfully: ', result);
        alert('An OTP send to your phone number');
        // setUser((prevUser) => ({...prevUser, 'otp': result.otp}))
        navigate(route);
      } catch (error) {
        console.error('Error while generating otp:', error);
      }
    } else {
      // Handle signup-specific logic if needed
      const { name, role, email, mobile } = details;
      console.log(name, email, mobile, role);

      try {
        const response = await fetch(apiUrl + '/api/user/create', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json', // Specifies the format of the data
          },
          body: JSON.stringify({ name, email, mobile, role }), // Converts the JavaScript object to a JSON string
        });

        const result = await response.json();
        if (!response.ok) {
          console.log(response.message);
          alert(`${result.error}`); // Show an alert first
          throw new Error(`Error: ${response.status}`);
        }
        console.log('Success:', result);
        alert('User has been successfully created!');
        window.location.reload();
      } catch (error) {
        alert(error);
        console.error('Error while signUp:', error);
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-auto">
      <div
        className={`scale-90 sm:scale-100 w-[375px] p-6 rounded-2xl shadow-md font-light antialiased ${
          role === 'user' ? 'bg-white' : 'bg-black'
        }`}
      >
        {/* Back Arrow */}
        <Link
          to="/"
          className={role === 'owner' ? 'text-white' : 'text-gray-700'}
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
        <h2 className={`text-2xl ${role === 'owner' ? 'text-white' : ''}`}>
          {type === 'login' ? 'Login' : 'Sign Up'}
        </h2>
        <p className="text-sm mt-1 text-grayish">
          or{' '}
          <Link to={handleRoutes()} className="text-secondary font-medium">
            {type === 'login' ? 'create an account' : 'login to your account'}
          </Link>
        </p>

        {/* Input Fields */}
        <form onSubmit={handleSubmit}>
          <div className="mt-6 space-y-2">
            <input
              type="tel"
              pattern="[0-9]{10}"
              id="mobile"
              required
              value={details.mobile}
              onChange={(event) =>
                setDetails((prevUser) => ({
                  ...prevUser,
                  [event.target.id]: event.target.value,
                }))
              }
              placeholder="Mobile number"
              className="w-full px-4 py-3 bg-inherit border-[1px] border-grayish rounded-[2px] text-grayish placeholder-grayish focus:outline-none"
            />
            {type === 'signup' && (
              <>
                <input
                  type="text"
                  id="name"
                  required
                  value={details.name}
                  onChange={(event) =>
                    setDetails((prevUser) => ({
                      ...prevUser,
                      [event.target.id]: event.target.value,
                    }))
                  }
                  placeholder="Name"
                  className="w-full px-4 py-3 bg-inherit border-[1px] border-grayish rounded-[2px] text-grayish placeholder-grayish focus:outline-none"
                />
                <input
                  type="email"
                  id="email"
                  value={details.email}
                  onChange={(event) =>
                    setDetails((prevUser) => ({
                      ...prevUser,
                      [event.target.id]: event.target.value,
                    }))
                  }
                  required
                  placeholder="Email"
                  className="w-full px-4 py-3 bg-inherit border-[1px] border-grayish rounded-[2px] text-grayish placeholder-grayish focus:outline-none"
                />
              </>
            )}
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full mt-6 px-4 py-2 bg-secondary text-white rounded-md hover:bg-green-600"
          >
            Continue
          </button>
        </form>

        {/* Footer */}
        <p className="mt-6 text-xs text-center text-grayish flex justify-center gap-x-1">
          By {type === 'login' ? 'clicking' : 'creating an account'}, I agree to
          QuickTime’s
          <Link
            to="#"
            className={`${role === 'user' ? 'text-black' : 'text-white'} underline outline-none`}
          >
            terms & conditions
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
