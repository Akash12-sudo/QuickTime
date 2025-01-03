
const Navbar = () => {
    return (
        <nav className="w-full md:w-[1200px] h-14 mx-auto mt-10 flex justify-between items-center px-4 bg-transparent">
            {/* QuickTime Logo */}
            <div className="text-2xl font-bold text-black">QuickTime</div>

            {/* Navbar Buttons */}
            <div className="flex space-x-6">
                {/* Partner with us button */}
                <button className="text-black hover:text-blue-500">Partner with us</button>

                {/* Get the App button with border and padding */}
                <button className="border border-black rounded-full px-6 py-2 text-black hover:bg-gray-200">
                    Get the App
                </button>
            </div>
        </nav>
    );
};

export default Navbar;