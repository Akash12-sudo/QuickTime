<<<<<<< HEAD

import React from "react";
=======
import React from 'react';
>>>>>>> 066d7ddd43ea00badb117fa9624f8eea7cce065e

function QuickTimeUI() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-[90%] max-w-[1200px] bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header Section */}
        <header className="flex justify-between items-center p-5 bg-teal-50 border-b border-gray-300">
          <div className="text-2xl font-bold text-teal-500">
            Quick<span className="text-gray-700">Time.</span>
          </div>
          <div className="text-gray-600 text-sm">Owner</div>
        </header>

        <div className="flex p-5">
          {/* Left Section */}
          <div className="flex-2 pr-5 border-r border-gray-300">
            {/* Owner's Name Section */}
            <div className="mb-5">
              <h2 className="text-xl font-bold mb-2">Owner's Name</h2>
              <div className="w-14 h-7 bg-teal-500 rounded-full"></div>
            </div>

            {/* Sales Section */}
            <div className="bg-gray-200 h-36 flex justify-center items-center rounded-lg mb-5">
              <p className="text-gray-600">Sales this Month</p>
            </div>

            {/* Booking Slots Section */}
            <div>
              <h3 className="text-lg font-bold mb-3">Book Slots for yourself</h3>
              <div className="flex gap-2 mb-4">
                <button className="px-4 py-2 border border-teal-500 text-white bg-teal-500 rounded">12/1</button>
                <button className="px-4 py-2 border border-teal-500 text-teal-500 bg-white rounded">13/1</button>
                <button className="px-4 py-2 border border-teal-500 text-teal-500 bg-white rounded">14/1</button>
              </div>
              <div className="flex flex-wrap gap-2">
                <button className="px-4 py-2 border border-teal-500 text-teal-500 rounded">6am-7am</button>
                <button className="px-4 py-2 border bg-gray-300 text-gray-500 rounded cursor-not-allowed">
                  7am-8am
                </button>
                <button className="px-4 py-2 border bg-teal-500 text-white rounded">8am-9am</button>
                <button className="px-4 py-2 border border-teal-500 text-teal-500 rounded">11am-12pm</button>
                <button className="px-4 py-2 border border-teal-500 text-teal-500 rounded">12pm-1pm</button>
                <button className="px-4 py-2 border border-teal-500 text-teal-500 rounded">1pm-2pm</button>
                <button className="px-4 py-2 border border-teal-500 text-teal-500 rounded">2pm-3pm</button>
                <button className="px-4 py-2 border border-teal-500 text-teal-500 rounded">3pm-4pm</button>
                <button className="px-4 py-2 border border-teal-500 text-teal-500 rounded">6pm-7pm</button>
                <button className="px-4 py-2 border border-teal-500 text-teal-500 rounded">7pm-8pm</button>
                <button className="px-4 py-2 border border-teal-500 text-teal-500 rounded">8pm-9pm</button>
                <button className="px-4 py-2 border border-teal-500 text-teal-500 rounded">9pm-10pm</button>
              </div>
              <button className="px-4 py-2 mt-4 bg-teal-500 text-white rounded w-full">Book for you</button>
              <div className="flex gap-4 mt-4">
                <span className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-white border border-teal-500 rounded"></div> Available
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-teal-500 rounded"></div> Selected
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-gray-300 rounded"></div> Booked
                </span>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex-1 pl-5">
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

