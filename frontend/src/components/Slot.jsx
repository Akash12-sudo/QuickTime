// eslint-disable-next-line react/prop-types
const Slot = ({ slot, status, onSelect, isSelected }) => {
  console.log(slot, status);

  return (
    <div
      className={`w-[150px] h-[50px] flex items-center justify-center text-center  rounded-[5px] ${status === 'Booked' ? 'text-white bg-[#D9D9D999]' : 'border-[2px] border-secondarylight'} ${isSelected && 'bg-secondarylight' } hover:cursor-pointer`}
      onClick={status === 'Booked' ? '' : onSelect}
    >
      <p className="antialiased font-mediumlight text-[2xl]">{slot}</p>
    </div>
  );
};

export default Slot;
