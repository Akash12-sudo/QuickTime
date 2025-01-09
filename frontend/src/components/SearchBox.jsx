// For User's Landing Page
const SearchBox = () => {
  return (
    <div className="flex justify-center items-center w-[326px] h-[50px] p-1 gap-2 bg-white text-grayish text-[16px] antialiased ">
      <div className="flex gap-2 h-full justify-center items-center px-4 border-r ">
        <img src="/location.svg" className="w-[24px] h-[24px]" />
        <p className="pt-1 truncate">Mysuru</p>
      </div>
      <img src="/search-icon.svg" className="w-[24px] h-[24px]" />
      <input
        type="text"
        placeholder="Search your turf"
        className="h-full pt-1  outline-none justify-center items-center truncate"
      />
    </div>
  );
};

export default SearchBox;
