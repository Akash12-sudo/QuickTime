import { useNavigate } from 'react-router-dom';

const TurfCard = (props) => {
  // eslint-disable-next-line react/prop-types
  const { index, turfName, sportType, address, rating, rate, distance } = props;
  const navigate = useNavigate();

  const ratingBG = () => {
    console.log(rating);
    if (rating === 'New')
      return 'border-[#267E3E] border-[2px] bg-[#267E3E]/50';
    else if (parseInt(rating) >= 4) return 'bg-[#267E3F]';
    else if (parseInt(rating) < 4) return 'bg-[#A9AF2F]';
  };
  const getbg = ratingBG();

  const handleClick = () => {
    navigate(`/users/bookslot/${index}`);
  };

  return (
    <div
      onClick={handleClick}
      className="w-[360px] h-[320px] flex flex-col justify-center p-2 bg-white shadow-md rounded-[14px] cursor-pointer"
    >
      <div className="flex  items-center justify-center h-[210px] bg-imagebackground rounded-[14px]">
        <img src="/" alt="turf" className="" />
      </div>
      <div className="my-2 flex justify-between items-center antialiased">
        <div className="flex flex-col  items-start font-light">
          <p className="text-[22px]">{turfName}</p>
          <p className="text-grayish  text-[18px]">{sportType}</p>
          <p className="text-grayish text-[18px]">{address}</p>
        </div>
        <div className="flex flex-col items-end font-light">
          <p
            className={`flex items-center justify-center font-medium text-[14px] text-white px-2 rounded-md ${getbg}`}
          >
            {rating}
          </p>
          <p className="text-grayish text-[18px]">₹{rate}/hour</p>
          <p className="text-grayish text-[18px]">{distance}km</p>
        </div>
      </div>
    </div>
  );
};

export default TurfCard;
