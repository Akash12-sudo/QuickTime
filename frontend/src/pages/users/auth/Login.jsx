import AuthForm from '../../../components/AuthForm';

const UserLogin = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      {/* <LoginForm route="" role="user" /> */}
      <AuthForm type="login" route="/users/otp-verify" role="user" />
    </div>
  );
};

export default UserLogin;
