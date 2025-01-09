

const SearchBox = () => {
  return (
    <div className="flex justify-center items-center max-w-[326px] h-[50px] bg-white gap-1 text-grayish text-[16px] antialiased border rounded-lg">
      {/* Location Input */}
      <div className="flex w-1/3 h-full justify-center items-center border-r">
        <img
          src="/location.svg"
          className="w-[20px] h-[20px] object-contain mr-2"
          alt="Location Icon"
        />
        <input
          type="text"
          placeholder="Mysuru"
          className="flex-1 h-full bg-transparent outline-none text-center truncate"
        />
      </div>
      {/* Search Input */}
      <div className="flex w-2/3 h-full items-center px-2 bg-blue-300">
        <input
          type="text"
          placeholder="Search your turf"
          className="flex-1 h-full bg-transparent outline-none truncate"
        />
        <img
          src="/search-icon.svg"
          className="w-[20px] h-[20px] object-contain ml-2"
          alt="Search Icon"
        />
      </div>
    </div>
  );
};

export default SearchBox