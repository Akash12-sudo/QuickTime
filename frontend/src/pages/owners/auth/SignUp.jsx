import AuthForm from '../../../components/AuthForm';

const OwnerSignUp = () => {
  return (
    <div className="pt-16 w-full h-screen flex flex-col justify-center items-center">
      <p className="text-black text-[36px] font-medium mb-5">Owner</p>
      <AuthForm type="signup" route="/owners/signup" role="owner" />
    </div>
  );
};

export default OwnerSignUp;
