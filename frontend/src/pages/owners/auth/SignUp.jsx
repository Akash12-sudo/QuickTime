import SignUpForm from '../../../components/DarkSignupForm';

const OwnerSignUp = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <p className="text-black text-[36px] font-medium mb-5">Owner</p>
      <SignUpForm foreground="text-white" background="bg-black" />
    </div>
  );
};

export default OwnerSignUp;
