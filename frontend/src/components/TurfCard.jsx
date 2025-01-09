import React from 'react';

const TurfCard = (props) => {
  const { turfName, sportType, address, rating, rate, distance } = props;

  return (
    <div className="w-[360px] h-[320px] flex flex-col justify-center p-2 bg-white shadow-md rounded-[14px] ">
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
          <p className="text-[22px]">{rating}</p>
          <p className="text-grayish text-[18px]">₹{rate}/hour</p>
          <p className="text-grayish text-[18px]">{distance}km</p>
        </div>
      </div>
    </div>
  );
};

export default TurfCard;
