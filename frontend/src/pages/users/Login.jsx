import LoginForm from "../../components/LoginForm";


const UserLogin = () => {
  return (<div className="w-full h-screen flex flex-col justify-center items-center">
    <LoginForm 
      foreground="text-primary" 
      background="bg-white"
    />
  </div>);
};

export default UserLogin;
