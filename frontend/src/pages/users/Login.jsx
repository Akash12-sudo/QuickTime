import LoginForm from "../../components/LoginForm";


const UserLogin = () => {
  return (<div className="w-full h-screen flex flex-col justify-center items-center">
    <LoginForm 
      foreground="primary" 
      background="bg-black"
    />
  </div>);
};

export default UserLogin;
