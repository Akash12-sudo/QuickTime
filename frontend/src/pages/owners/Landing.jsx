import { useState } from 'react';
import { ownerSlots } from '../../../constants';
import Slot from '../../components/Slot';

function QuickTimeUI() {

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
        {/* Header Section */}
        {/* <header className="flex justify-between items-center p-5 bg-teal-50 border-b border-gray-300">
          <div className="text-2xl font-bold text-teal-500">
            Quick<span className="text-gray-700">Time.</span>
          </div>
          <div className="text-gray-600 text-sm">Owner</div>
        </header> */}

        <div className="flex mt-[200px] ">
          {/* Left Section */}
          <div className="flex-2 pr-5 ">
            {/* Owner's Name Section */}
            <div className="mb-5 flex flex-row justify-start items-center gap-x-4">
              <h2 className="text-xl font-mediumlight mb-2">Owner&apos;s Name</h2>
              <label className="relative w-[76px] h-[38px] flex items-center justify-center">
                {/* Hidden Checkbox */}
                <input
                  type="checkbox"
                  className="peer hidden"
                  checked={isToggled}
                  onChange={handleToggle}
                />
                {/* Background (Track) */}
                <span
                  className={`absolute top-0 left-0 h-6 w-12 rounded-full  transition-all duration-300 bg-white`}
                ></span>
                {/* Toggle Ball */}
                <span
                  className={`absolute top-[3px] left-[3px] h-5 w-5 rounded-full  transition-all duration-300 ${
                    isToggled ? "translate-x-6 bg-secondarylight" : "translate-x-0 bg-imagebackground"
                  }`}
                ></span>
              </label>
            </div>

            {/* Sales Section */}
            <div className="bg-gray-200 w-[660px] h-[300px] flex justify-center items-center rounded-lg mb-5">
              <p className="text-gray-600">Sales this Month</p>
            </div>

            {/* Booking Slots Section */}
            <div>
            <div className="flex justify-start items-center gap-x-8">
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
              <div className="w-full grid sm:grid-cols-4 gap-y-12 gap-x-12 my-8">
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
        <div className='mt-20 flex flex-row justify-between items-center'>
        <button className="w-[200px] h-[50px] px-4 py-2 bg-secondarylight rounded">Book for you</button>
        <div className="w-1/2 flex items-center justify-end gap-x-16">
            {['Available', 'Selected', 'Booked'].map((item, id) => (
              <div key={id} className="flex gap-x-4 items-center">
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

          {/* Right Section */}
          <div className="flex-1 bg-white rounded-xl p-4 ">
            <div>
              <h3 className="text-xl font-bold mb-2">Your Turf Details</h3>
              <p className="text-sm text-gray-600 mb-4">Enter all the necessary details</p>
              <div className="flex gap-2 mb-5">
                <div className="flex-1 h-24 border-2 border-dashed border-teal-500 flex items-center justify-center rounded text-gray-600">
                  Photo Library
                </div>
                <div className="flex-1 h-24 border-2 border-dashed border-teal-500 flex items-center justify-center rounded text-gray-600">
                  Add Photo
                </div>
              </div>
              <form>
                <label className="block text-sm mb-1">Owner Name</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded mb-3"
                  placeholder="Owner Name"
                />
                <label className="block text-sm mb-1">Phone</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded mb-3"
                  placeholder="Phone"
                />
                <label className="block text-sm mb-1">Name</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded mb-3"
                  placeholder="Name"
                />
                <label className="block text-sm mb-1">Type</label>
                <select className="w-full p-2 border border-gray-300 rounded mb-3">
                  <option>Select the type of Sport</option>
                </select>
                <label className="block text-sm mb-1">Address</label>
                <textarea
                  className="w-full p-2 border border-gray-300 rounded mb-3"
                  placeholder="Address"
                ></textarea>
                <label className="block text-sm mb-1">Google Maps</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded mb-3"
                  placeholder="Link"
                />
                <label className="block text-sm mb-1">Timings</label>
                <div className="flex gap-2 mb-3">
                  <input
                    type="text"
                    className="flex-1 p-2 border border-gray-300 rounded"
                    placeholder="From"
                  />
                  <input
                    type="text"
                    className="flex-1 p-2 border border-gray-300 rounded"
                    placeholder="To"
                  />
                </div>
                <label className="block text-sm mb-1">Price</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded mb-5"
                  placeholder="Price"
                />
                <button
                  type="submit"
                  className="w-full p-3 bg-teal-500 text-white rounded"
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

