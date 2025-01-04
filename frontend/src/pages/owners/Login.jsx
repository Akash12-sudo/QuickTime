import DarkLoginForm from "../../components/DarkLoginForm";

const OwnerLogin = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      {/* Owner Text */}
      <p className="text-black text-[36px] font-medium mb-5">Owner</p>

      {/* Dark Login Form */}
      <DarkLoginForm />
    </div>
  );
};

export default OwnerLogin;
