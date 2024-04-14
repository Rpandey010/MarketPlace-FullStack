import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdHomeFilled, MdBed, MdCategory, MdContactSupport } from 'react-icons/md';

const Navbar = ({ containerStyles }) => {
  const [showRoomDropdown, setShowRoomDropdown] = useState(false);
  const [showProductDropdown, setShowProductDropdown] = useState(false);
  const roomDropdownRef = useRef(null);
  const productDropdownRef = useRef(null);

  const toggleRoomDropdown = () => {
    setShowRoomDropdown(!showRoomDropdown);
    setShowProductDropdown(false); // Close product dropdown when room dropdown is opened
  };

  const toggleProductDropdown = () => {
    setShowProductDropdown(!showProductDropdown);
    setShowRoomDropdown(false); // Close room dropdown when product dropdown is opened
  };

  // Close the dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (roomDropdownRef.current && !roomDropdownRef.current.contains(event.target)) {
        setShowRoomDropdown(false);
      }
      if (productDropdownRef.current && !productDropdownRef.current.contains(event.target)) {
        setShowProductDropdown(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className={`flex justify-between items-center px-6 py-4 ${containerStyles}`}>
      {/* Link for Home */}
      <Link
        to={'/'}
        className="flex items-center gap-x-2 text-gray-800 hover:text-blue-600 transition duration-300"
      >
        <MdHomeFilled size={24} /><span>Home</span>
      </Link>

      {/* Shop by Room Dropdown */}
      <div className="relative inline-block text-left" ref={roomDropdownRef}>
        <button onClick={toggleRoomDropdown} className="flex items-center gap-x-2 text-gray-800 hover:text-blue-600 transition duration-300">
          <MdBed size={24} /><span>Shop by Room</span>
        </button>
        {showRoomDropdown && (
          <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              <Link to="/shop-by-room/living-room" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Living Room</Link>
              <Link to="/shop-by-room/bedroom" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Bedroom</Link>
              {/* Add more room links as needed */}
            </div>
          </div>
        )}
      </div>

      {/* Shop by Product Dropdown */}
      <div className="relative inline-block text-left" ref={productDropdownRef}>
        <button onClick={toggleProductDropdown} className="flex items-center gap-x-2 text-gray-800 hover:text-blue-600 transition duration-300">
          <MdCategory size={24} /><span>Shop Product</span>
        </button>
        {showProductDropdown && (
          <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              <Link to="/furniture" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Furniture</Link>
              <Link to="/decor" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Decor</Link>
              {/* Add more product links as needed */}
            </div>
          </div>
        )}
      </div>

      {/* Link for About Us */}
      <Link
        to={'/About'}
        className="flex items-center gap-x-2 text-gray-800 hover:text-blue-600 transition duration-300"
      >
        <MdContactSupport size={24} /><span>About us</span>
      </Link>
    </nav>
  );
};

export default Navbar;
