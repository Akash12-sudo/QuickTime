import AuthForm from '../../../components/AuthForm';

const OwnerLogin = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <p className="text-black text-[36px] font-medium mb-5">Owner</p>
      <AuthForm type="login" route="/owners/otp-verify" role="owner" />
    </div>
  );
};

export default OwnerLogin;
