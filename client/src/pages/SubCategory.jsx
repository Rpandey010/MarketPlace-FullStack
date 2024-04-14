import React, { useState, useRef, useEffect } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import all_products from '../assets/all_products';
import Item from '../components/Item';

const SubCategory = ({ subCategory, banner }) => {
  const [sortBy, setSortBy] = useState('none'); // 'none', 'asc', 'desc'
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Filter products based on the provided subCategory
  const filteredProducts = all_products.filter(item => item.SubCategory === subCategory);

  // Sort products based on the current sorting method
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'asc') {
      return a.new_price - b.new_price;
    } else if (sortBy === 'desc') {
      return b.new_price - a.new_price;
    }
    return 0;
  });

  // Function to handle sorting change
  const handleSortChange = (sortType) => {
    setSortBy(sortType);
    setDropdownOpen(false); // Close the dropdown after selection
  };

  // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    setDropdownOpen(prevState => !prevState);
  };

  // Close the dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <section className='max_padd_container py-12 xl:py-28'>
      <div>
        <div>
          <img src={banner} alt="banner" className='block my-9 mx-auto'/>
        </div>
        <div className='flex-between items-center my-8 mx-2'>
          <h5 className="text-center text-gray-700">
            <span className="text-blue-500 text-xl font-semibold">Showing</span> <span className="text-blue-500 text-xl font-semibold">1-{filteredProducts.length}</span> <span className="text-gray-600">out of</span> <span className="text-blue-500 text-xl font-semibold">{all_products.length}</span> <span className="text-gray-600">products</span>
          </h5>
          <div className="flex items-center">
            <div className="text-gray-600 mr-2">Sort by:</div>
            <div className="relative" ref={dropdownRef}>
              <button className="text-blue-500 cursor-pointer flex items-center" onClick={toggleDropdown}>
                <span>{sortBy === 'asc' ? 'Low to High' : 'High to Low'}</span>
                <MdOutlineKeyboardArrowDown className="ml-1" />
              </button>
              {dropdownOpen && (
                <div className="absolute bg-white border border-gray-200 rounded-lg shadow-md z-10 mt-2">
                  <button className="block w-full py-2 px-4 text-left hover:bg-blue-100" onClick={() => handleSortChange('asc')}>
                    Low to High
                  </button>
                  <button className="block w-full py-2 px-4 text-left hover:bg-blue-100" onClick={() => handleSortChange('desc')}>
                    High to Low
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* Container */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6'>
          {sortedProducts.map(item => (
            <Item
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
              old_price={item.old_price}
              new_price={item.new_price}
            />
          ))}
        </div>
        <div className='mt-16 flex justify-center'>
            <button className='bg-black hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-full shadow-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-black'>
              Load More</button>
        </div>
      </div>
    </section>
  );
}

export default SubCategory;
