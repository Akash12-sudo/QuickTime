import { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import Slot from '../../components/Slot';

// Dummy turf data for simulation
import { turfDetailsArray } from '../../../constants';
import { UserContext } from '../../context/UserContext';

const BookSlot = () => {

  const { fetchDate } = useContext(UserContext)
  const params = useParams();
  const turf = turfDetailsArray[params.id];
  // State to get the current selected sort
  const [selectedSlot, setSelectedSlot] = useState(null);

  const [slotDate, setSlotDate] = useState(0);

  const upcomingDates = [
    fetchDate(0), // Today's date
    fetchDate(1), // Tomorrow
    fetchDate(2), // Day after tomorrow
  ];

  console.log(upcomingDates);

  // handle slot selection
  const handleSlotSelect = (slot) => {
    setSelectedSlot((prev) => (prev === slot ? null : slot));
  };

  return (
    <div className="mt-[120px] w-full h-full flex flex-col items-center sm:items-start my-2 border-t-[0.8px] border-imagebackground">
      {/* Hero Section */}
      <div className="w-full h-[300px] bg-imagebackground mt-10" />

      {/* Turf Details Section */}
      <div className="w-full mt-8 flex flex-col">
        {/* Turf Header */}
        <div className="w-full flex flex-col items-center md:flex-row justify-between gap-x-4">
          <div className="w-full flex justify-start items-center gap-x-4">
            <p className="font-medium text-[40px] antialiased">
              {turf.turfName}
            </p>
            <img
              src="/arrow-curve-right-up.svg"
              alt="right-arrow"
              className="w-[46px] h-[46px] mb-1"
            />
          </div>
          <div className="flex w-full justify-start sm:justify-end items-center gap-x-8 mt-4 sm:mt-0">
            <p className="w-3/4 sm:w-full font-mediumlight text-[32px] antialiased">
              Book Slots
            </p>
            <div className="flex w-[300px] h-[50px] justify-between rounded-lg font-mediumlight text-[20px] antialiased bg-white mb-2">
                {upcomingDates.map((date, id) => (
                    <p
                      key={id}
                      onClick={() => setSlotDate(id)}
                      className={`w-full h-full flex items-center justify-center text-center ${id === slotDate && 'bg-secondarylight'} ${id === 0 && 'rounded-l-lg'} ${id === 2 && 'rounded-r-lg'}`}
                    >
                      {date}
                    </p>
                  ))}
            </div>
          </div>
        </div>

        {/* Slots Grid */}
        <div className="w-full grid place-items-center grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-y-8 gap-x-14 my-8">
          {turf.slots &&
            Object.entries(turf.slots).map(([slotKey, status]) => (
              <Slot
                key={`${slotKey}+${status}`}
                slot={slotKey}
                status={status}
                onSelect={() => handleSlotSelect(slotKey)}
                isSelected={selectedSlot === slotKey}
              />
            ))}
        </div>

        {/* Footer */}
        <div className="flex flex-col items-center lg:flex-row w-full lg:justify-between my-4">
          <div className="my-8 lg:my-0">
            <button className="bg-secondarylight w-[250px] h-[50px] flex justify-center items-center text-center font-mediumlight text-[20px] rounded-[5px]">
              Pay ₹{turf.rate}
            </button>
          </div>
          <div className="w-full sm:w-1/2 flex items-center justify-center sm:justify-end gap-x-2 sm:gap-x-16">
            {['Available', 'Selected', 'Booked'].map((item, id) => (
              <div key={id} className="flex gap-x-4 items-center ">
                <div
                  className={`w-[32px] h-[32px] rounded-[2px] border-[2px] ${item === 'Booked' ? 'border-imagebackground bg-imagebackground' : 'border-secondarylight'} ${item === 'Selected' && 'bg-secondarylight'} `}
                ></div>
                <p className="mt-1 font-extralight text-[20px] antialiased">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookSlot;
