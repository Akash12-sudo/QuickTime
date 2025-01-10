// eslint-disable-next-line react/prop-types
const Slot = ({ slot, status, onSelect, isSelected }) => {
  console.log(slot, status);

  return (
    <div
      className={`w-[150px] h-[50px]  flex items-center justify-center text-center  rounded-[5px] ${isSelected ? 'bg-secondarylight' : 'bg-transparent'} ${status === 'Booked' ? 'border-imagebackground bg-[#d9d9d9] text-white' : 'border-[2px] border-secondarylight'} `}
      onClick={status === 'Booked' ? '' : onSelect}
    >
      <p className="antialiased font-mediumlight text-[2xl]">{slot}</p>
    </div>
  );
};

export default Slot;
