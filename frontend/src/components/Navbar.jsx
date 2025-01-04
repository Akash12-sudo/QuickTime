
const Navbar = ({ type }) => {
    return (
        <nav className="w-full md:w-[1200px] h-14 mx-auto mt-10 flex justify-between items-center px-4 bg-transparent font-mediumlight">
            {/* QuickTime Logo */}
            <div className="flex flex-row text-[32px] font-bold text-black">
                <p>QuickT</p>
                <p className="text-secondary">ime.</p>
            </div>

            {/* Navbar Buttons */}
            <div className="flex space-x-6">
                {/* Partner with us button */}
                {type === "home" && (<button className="text-black">Partner with us</button>)}

                {/* Get the App button with border and padding */}
                <button className="border-[1.2px] border-black rounded-[12px] px-6 py-2 text-black">
                    Get the App
                </button>
            </div>
        </nav>
    );
};

export default Navbar;