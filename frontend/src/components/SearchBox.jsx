const SearchBox = () => {
  return (
    <div className="flex justify-center items-center max-w-[326px] h-[50px] bg-white gap-1 text-grayish text-[16px] antialiased border rounded-lg">
      {/* Location Input */}
      <div className="flex w-1/3 h-full justify-center items-center border-r gap-x-1">
        <img
          src="/location.svg"
          className="w-[20px] h-[20px]"
          alt="Location Icon"
        />
        <input
          type="text"
          placeholder="Mysuru"
          className="flex w-[60%] mt-1 h-auto bg-transparent outline-none text-left truncate"
        />
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
          className="flex-1 w-[60%] mt-1 h-full bg-transparent outline-none text-left truncate"
        />
      </div>
    </div>
  );
};

export default SearchBox;
