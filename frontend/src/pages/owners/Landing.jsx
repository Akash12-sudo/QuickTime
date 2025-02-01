import { useState } from 'react';
import { ownerSlots } from '../../../constants';
import Slot from '../../components/Slot';
import { useSelector } from 'react-redux';

function QuickTimeUI() {

  const { user } = useSelector(state => state.auth)
  const slots = ownerSlots.slots;
  // State to get the current selected sort
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled((prevState) => !prevState);
  };

  // handle slot selection
  const handleSlotSelect = (slot) => {
    setSelectedSlot((prev) => (prev === slot ? null : slot));
  };

  return (
    <div className="flex w-full justify-center items-center min-h-screen">
      <div className="w-full rounded-lg overflow-hidden">

        <div className="flex flex-col items-center md:flex-row mt-[100px]  py-8 ">
          {/* Left Section */}
          <div className="flex-2 p-10 pr-5 md:p-0 ">
            {/* Owner's Name Section */}
            <div className="mb-4 flex flex-row justify-start items-start gap-x-4 ">
              <h2 className="text-[40px] mt-1 font-mediumlight">
                {user ? user.name : 'Owner&apos;s Name'}
              </h2>
              <label className="relative w-1/4 mt-3 mx-2 h-full flex items-center justify-center">
                {/* Hidden Checkbox */}
                <input
                  type="checkbox"
                  className="peer hidden"
                  checked={isToggled}
                  onChange={handleToggle}
                />
                {/* Background (Track) */}
                <span
                  className={`absolute top-0 left-0 z-1 h-[38px] w-[76px] rounded-full border-[1px] border-secondarylight transition-all duration-300 bg-white`}
                ></span>
                {/* Toggle Ball */}
                <span
                  className={`absolute top-1 left-1 z-1 h-[30px] w-[30px] rounded-full  transition-all duration-300 ${
                    isToggled
                      ? 'translate-x-[38px] bg-secondarylight'
                      : 'translate-x-0 bg-imagebackground'
                  }`}
                ></span>
              </label>
            </div>

            {/* Sales Section */}
            <div className="bg-imagebackground w-[660px] h-[300px] flex justify-center items-center mb-20">
              <p className="text-graytext font-mediumlight text-[40px] antialiased">
                Sales this Month
              </p>
            </div>

            {/* Booking Slots Section */}
            <div className={`${!isToggled && 'bg-[#D9D9D999]/60 pointer-events-none'}`}>
              <div className="flex justify-start items-center gap-x-8 pt-8">
                <p className="font-mediumlight text-[32px] antialiased">
                  Book Slots for yourself
                </p>
                <div className="flex w-[300px] h-[50px] justify-between rounded-lg font-mediumlight text-[20px] antialiased bg-secondarylight mb-2">
                  <p className="w-full h-full flex items-center justify-center text-center">
                    12-1
                  </p>
                  <p className="w-full h-full flex items-center justify-center text-center bg-white">
                    13-1
                  </p>
                  <p className="w-full h-full flex items-center justify-center text-center bg-white rounded-r-lg">
                    14-1
                  </p>
                </div>
              </div>
              <div className="w-full grid sm:grid-cols-4 gap-y-4 gap-x-2 my-8">
                {slots &&
                  Object.entries(slots).map(([slotKey, status]) => (
                    <Slot
                      key={`${slotKey}+${status}`}
                      slot={slotKey}
                      status={status}
                      onSelect={() => handleSlotSelect(slotKey)}
                      isSelected={selectedSlot === slotKey}
                    />
                  ))}
              </div>
              <div className="mt-4 flex flex-row justify-between items-center">
                <button className="w-[200px] h-[50px] font-mediumlight text-[20px] antialiased px-4 py-2 bg-secondarylight rounded">
                  Book for you
                </button>
                <div className="w-1/2 flex items-center justify-end gap-x-10 px-2">
                  {['Available', 'Selected', 'Booked'].map((item, id) => (
                    <div key={id} className="flex gap-x-2 items-center">
                      <div
                        className={`w-[32px] h-[32px] rounded-[2px] border-[2px] ${item === 'Booked' ? 'border-imagebackground bg-imagebackground' : 'border-secondarylight'} ${item === 'Selected' && 'bg-secondarylight'} `}
                      ></div>
                      <p className="mt-1 text-[20px] font-extralight">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex w-full justify-center my-10 md:justify-end md:my-0">
            <div
              className={`flex flex-col w-[405px] rounded-xl px-6 py-4 text-grayish ${isToggled ? 'bg-white' : 'bg-[#D9D9D999]/60 pointer-events-none'} `}
            >
              <h3 className="text-[18px] text-black font-medium mb-2">
                Your Turf Details
              </h3>
              <p className="text-[14px] text-grayish mb-4">
                Enter all the necessary details
              </p>
              <div className="flex gap-2 mb-10">
                <div className="w-[160px] h-[150px] flex-1 flex items-center justify-center text-graytext bg-imagebackground">
                  Photo Library
                </div>
                <div className="w-[160px] h-[150px] flex-1 flex items-center justify-center text-graytext bg-imagebackground">
                  Add Photo
                </div>
              </div>
              <form className="w-full text-[14px] font-light antialiased space-y-6">
                <div className="flex w-full justify-center items-center">
                  <label className="w-1/3 pl-2">Owner Name</label>
                  <input
                    type="text"
                    value={user.name}
                    className="w-full max-w-[260px] p-2 border border-grayish rounded bg-inherit"
                  />
                </div>

                <div className="flex w-full justify-between items-center">
                  <label className="w-1/3 pl-2">Phone</label>
                  <input
                    type="text"
                    value={user.mobile}
                    className="w-full max-w-[260px] p-2 border border-grayish rounded bg-inherit"
                  />
                </div>

                <div className="flex w-full justify-between items-center">
                  <label className="w-1/3 pl-2">Name</label>
                  <input
                    type="text"
                    className="w-full max-w-[260px] p-2 border border-grayish rounded bg-inherit"
                  />
                </div>

                <div className="flex w-full justify-between items-center">
                  <label className="w-1/3 pl-2">Type</label>
                  <select className="w-full max-w-[260px] p-2 border border-grayish rounded bg-inherit">
                    <option>Select the type of Sport</option>
                  </select>
                </div>

                <div className="flex w-full justify-between items-center">
                  <label className="w-1/3 pl-2">Address</label>
                  <textarea className="w-full max-w-[260px] p-2 border border-grayish rounded bg-inherit" />
                </div>

                <div className="flex w-full justify-between items-center">
                  <label className="w-1/3 pl-2">Google Maps</label>
                  <input
                    type="text"
                    className="w-full max-w-[260px] p-2 border border-grayish rounded bg-inherit"
                    placeholder="Link"
                  />
                </div>

                <div className="flex w-full justify-between items-center">
                  <label className="w-1/3 pl-2">Timings</label>
                  <div className="w-full max-w-[260px] rounded flex justify-between gap-x-2">
                    <input
                      type="text"
                      className="w-[120px] border p-2 border-grayish rounded bg-inherit"
                      placeholder="From"
                    />
                    <input
                      type="text"
                      className="w-[120px] p-2 border border-grayish rounded bg-inherit"
                      placeholder="To"
                    />
                  </div>
                </div>

                <div className="flex w-full justify-between items-center">
                  <label className="w-1/3 pl-2">Price</label>
                  <input
                    type="text"
                    className="w-full max-w-[260px] p-2 border border-grayish rounded bg-inherit"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full p-3 bg-secondarylight text-white rounded"
                >
                  SAVE
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuickTimeUI;
