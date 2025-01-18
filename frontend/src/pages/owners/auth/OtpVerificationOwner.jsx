import OTPForm from '../../../components/OTPForm';

const OtpVerificationOwner = () => {
  return (
    <div className="pt-8 w-full h-screen flex flex-col justify-center items-center">
      <p className=" text-black text-[36px] font-medium mb-5">Owner</p>
      <OTPForm role="owner" />
    </div>
  );
};

export default OtpVerificationOwner;
