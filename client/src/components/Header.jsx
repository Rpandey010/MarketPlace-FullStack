// import { FaSearch } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";

// export default function Header() {
//     const { currentUser } = useSelector((state) => state.user);
//     return (
//         <header className="bg-slate-200 shadow-md">
//             <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
                // <Link to="/">
                //     <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
                //         <span className="text-slate-500">Furni</span>
                //         <span className="text-rose-500">Hub</span>
                //     </h1>
                // </Link>

//                 <form className="bg-slate-100 p-3 rounded-lg flex items-center">
//                     <input
//                         type="text"
//                         placeholder="Search..."
//                         className="bg-transparent focus:outline-none w-24 sm:w-64"
//                     />
//                     <FaSearch className="text-slate-600" />
//                 </form>
//                 <ul className="flex gap-4">
//                     <Link to="/">
//                         <li className="hidden sm:inline text-slate-700 hover:underline">
//                             Home
//                         </li>
//                     </Link>
//                     <Link to="/about">
//                         <li className="hidden sm:inline text-slate-700 hover:underline">
//                             About
//                         </li>
//                     </Link>
//                     <Link to="/profile">
//                         {currentUser ? (
//                             <img
//                                 className="rounded-full h-7 w-7 object-cover"
//                                 src={currentUser.avatar}
//                                 alt="profile"
//                             />
//                         ) : (
//                             <li className=" text-slate-700 hover:underline"> Sign in</li>
//                         )}
//                     </Link>
//                 </ul>
//             </div>
//         </header>
//     );
// }


// ---------------------------------git (aove code has some errors)---------------------------------
import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [navigate]);

  return (
    <header className='bg-amazon text-black shadow-md py-4'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link to="/">
          <h1 className="font-bold text-xl">
            <span className="text-slate-500">Furni</span>
            <span className="text-rose-500">Hub</span>
          </h1>
        </Link>
        <form onSubmit={handleSubmit} className='flex items-center ml-4'>
          <input
            type='text'
            placeholder='Search...'
            className='bg-gray-800 text-white focus:outline-none px-16 py-3 ml-9 rounded-md border border-gray-700 shadow-md'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit" className='bg-blue-500 text-white px-6 py-3 ml-2 rounded-md hover:bg-blue-600 transition duration-300'>
            <FaSearch />
          </button>
        </form>
        <ul className='flex items-center gap-4'>
          
        <li>
          <Link to='/' className='text-gray-300 hover:text-white font-bold'  style={{ color: 'black', fontSize: '18px' }}>
            Home
          </Link> 
        </li>
        <li>
          <Link to='/about' className='text-gray-300 hover:text-white font-bold' style={{ color: 'black', fontSize: '18px' }}>
            About
          </Link>
        </li>
        <li>
          <Link to='/profile' className='text-gray-300 hover:text-white font-bold flex items-center' style={{ color: 'black', fontSize: '18px' }}>
            {currentUser ? (
              <img
                className='rounded-full h-10 w-10 object-cover mr-2'  // Adjusted size: h-10 and w-10, added margin
                src={currentUser.avatar}
                alt='profile'
              />
            ) : (
              'Sign in'
            )}
          </Link>
        </li>
      </ul>
      </div>
    </header>
  );
};

export default Header;
