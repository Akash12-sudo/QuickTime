

import backlogo from "../../public/backlogo.png";

const LoginForm = (props) => {
    const { foreground, background } = props;

  return (
    <form className={`w-[375px] h-[304px] absolute top-[328px] left-[532px] border-[1px] rounded-xl text-${foreground ? foreground : "primary"} ${background}`}>
        <div className="w-full h-auto flex flex-col p-2 justify-start items-center">
            <img src={backlogo} alt="back" className="w-[24px] h-[24px] pt-2 pl-2" />
        </div>
    </form>
  )
};

export default LoginForm;
