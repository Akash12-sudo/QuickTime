import AuthForm from '../../../components/AuthForm';

const UserSignUp = () => {
  return (
    <div className="pt-16 w-full h-screen flex flex-col justify-center items-center">
      <AuthForm type="signup" route="users/signup" role="user" />
    </div>
  );
};

export default UserSignUp;
