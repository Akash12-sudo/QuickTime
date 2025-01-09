import SignUpForm from '../../../components/SignupForm';

const UserSignUp = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <SignUpForm foreground="text-primary" background="bg-white" />
    </div>
  );
};

export default UserSignUp;
