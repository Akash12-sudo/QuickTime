import { useState } from 'react';
import { turfDetailsArray } from '../../constants';
import { useDispatch } from 'react-redux';
import { updateTurflist } from '../redux/features/turfs/turfSlice';

const SearchBox = () => {
  const dispatch = useDispatch();
  const [location, setLocation] = useState();
  const [query, setQuery] = useState(null);

  const handleLocationSelect = (event) => {
    const loc = event.target.value;
    setLocation(loc);

    // Handle "Other" selection or empty value
    if (loc === 'Other' || !loc) {
      dispatch(updateTurflist(turfDetailsArray));
      return;
    }

    const updatedlist = turfDetailsArray.filter((item) =>
      item.address.toLowerCase().includes(loc.toLowerCase())
    );
    console.log(updatedlist);

    dispatch(updateTurflist(updatedlist));
  };

  const handleSearchQuery = (event) => {
    const searchValue = event.target.value;
    setQuery(searchValue);

    if (!searchValue.trim()) {
      dispatch(updateTurflist(turfDetailsArray));
      return;
    }

    const searchLower = searchValue.toLowerCase();
    const updatedlist = turfDetailsArray.filter((item) => {
      // Check all relevant fields
      return Object.entries(item).some(([key, value]) => {
        if (key === 'rating' || key === 'distance' || key === 'location')
          return false;

        // Convert all values to string for searching
        const stringValue = String(value).toLowerCase();
        return stringValue.includes(searchLower);
      });
    });

    dispatch(updateTurflist(updatedlist));
  };

  return (
    <div className="flex justify-center items-center max-w-[326px] h-[50px] bg-white gap-1 text-grayish text-[16px] antialiased border rounded-lg">
      {/* Location Input */}
      <div className="flex w-1/3 h-full justify-center items-center border-r gap-x-1">
        <img
          src="/location.svg"
          className="w-[20px] h-[20px]"
          alt="Location Icon"
        />
        <select
          defaultValue="Mysuru"
          value={location}
          onChange={handleLocationSelect}
          className="flex w-[70%] mt-1 h-auto bg-transparent outline-none text-left truncate"
        >
          <option value="Chandigarh">Chandigarh</option>
          <option value="Bangalore">Bangalore</option>
          <option value="Bhopal">Bhopal</option>
          <option value="Chennai">Chennai</option>
          <option value="Delhi">Delhi</option>
          <option value="Hyderabad">Hyderabad</option>
          <option value="Indore">Indore</option>
          <option value="Jaipur">Jaipur</option>
          <option value="Kanpur">Kanpur</option>
          <option value="Kolkata">Kolkata</option>
          <option value="Lucknow">Lucknow</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Mysuru">Mysuru</option>
          <option value="Nagpur">Nagpur</option>
          <option value="Patna">Patna</option>
          <option value="Pune">Pune</option>
          <option value="Surat">Surat</option>
          <option value="Thane">Thane</option>
          <option value="Vijaynagar">Vijaynagar</option>
          <option value="Other">Other</option>
        </select>
      </div>
      {/* Search Input */}
      <div className="flex w-2/3 h-full items-center px-2 gap-x-2">
        <img
          src="/search-icon.svg"
          className="w-[20px] h-[20px]"
          alt="Search Icon"
        />
        <input
          type="text"
          placeholder="Search for turf"
          value={query}
          onChange={handleSearchQuery}
          className="flex-1 w-[60%] mt-1 h-full bg-transparent outline-none text-left truncate"
        />
      </div>
    </div>
  );
};

export default SearchBox;
