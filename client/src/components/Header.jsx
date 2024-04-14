// import React, { useState, useEffect } from 'react';
// import { FaSearch, FaHome, FaInfoCircle, FaSignInAlt, FaBed, FaShoppingBag, FaShoppingCart } from 'react-icons/fa';
// import { Link, useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import logo from "../assets/logo.png";

// const Header = () => {
//   const { currentUser } = useSelector((state) => state.user);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [activeMenu, setActiveMenu] = useState(null);
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const urlParams = new URLSearchParams(window.location.search);
//     urlParams.set('searchTerm', searchTerm);
//     const searchQuery = urlParams.toString();
//     navigate(`/search?${searchQuery}`);
//   };

//   useEffect(() => {
//     const urlParams = new URLSearchParams(window.location.search);
//     const searchTermFromUrl = urlParams.get('searchTerm');
//     if (searchTermFromUrl) {
//       setSearchTerm(searchTermFromUrl);
//     }
//   }, [navigate]);

//   const toggleMenu = (menu) => {
//     setActiveMenu(activeMenu === menu ? null : menu);
//   };

//   const closeMenu = () => {
//     setActiveMenu(null);
//   };

//   return (
//     <header className='bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md py-4'>
//       <div className='container mx-auto flex flex-col lg:flex-row justify-between items-center'>
//         <div className="flex items-center justify-between lg:justify-start">
//           <Link to="/">
//             <img src={logo} alt='' height={60} width={128} />
//           </Link>
//           <form onSubmit={handleSubmit} className='flex items-center ml-6'>
//             <input
//               type='text'
//               placeholder='Search...'
//               className='bg-gray-100 text-gray-800 focus:outline-none px-6 py-3 ml-2 rounded-md border border-gray-300 shadow-md text-lg'
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//             <button type="submit" className='bg-blue-500 text-white px-8 py-3 ml-2 rounded-md hover:bg-blue-600 transition duration-300'>
//               <FaSearch className='text-xl' />
//             </button>
//           </form>
//         </div>
//         <nav className="flex items-center lg:ml-auto">
//           <ul className='flex items-center gap-8'>
//             <li>
//               <Link to='/' className='text-gray-100 hover:text-white font-semibold flex items-center transition duration-300' onClick={closeMenu}>
//                 <FaHome className='text-xl mr-2' />
//                 Home
//               </Link>
//             </li>
//             <li>
//               <div className="relative">
//                 <button 
//                   className={`text-gray-100 hover:text-white font-semibold flex items-center transition duration-300 ${activeMenu === 'shopByRoom' && 'text-blue-500'}`} 
//                   onClick={() => toggleMenu('shopByRoom')}
//                 >
//                   <FaBed className="text-xl mr-2" />
//                   Shop by Room
//                 </button>
//                 {activeMenu === 'shopByRoom' && (
//                   <ul className="absolute bg-gray-100 py-2 rounded-md shadow-lg mt-2 w-48 left-0 border border-gray-300">
//                   <li>
//                     <Link to='/bedroom' className="text-gray-800 hover:text-blue-500 block px-4 py-2 transition duration-300 rounded-t-md">Bedroom</Link>
//                   </li>
//                   <li>
//                     <Link to='/livingroom' className="text-gray-800 hover:text-blue-500 block px-4 py-2 transition duration-300">Living Room</Link>
//                   </li>
//                   <li>
//                     <Link to='/kitchen' className="text-gray-800 hover:text-blue-500 block px-4 py-2 transition duration-300 rounded-b-md">Kitchen</Link>
//                   </li>
//                 </ul>
//                 )}
//               </div>
//             </li>
//             <li>
//               <div className="relative">
//                 <button 
//                   className={`text-gray-100 hover:text-white font-semibold flex items-center transition duration-300 ${activeMenu === 'shopProducts' && 'text-blue-500'}`} 
//                   onClick={() => toggleMenu('shopProducts')}
//                 >
//                   <FaShoppingBag className="text-xl mr-2" />
//                   Shop Products
//                 </button>
//                 {activeMenu === 'shopProducts' && (
//                     <ul className="absolute bg-gray-100 py-2 rounded-md shadow-lg mt-2 w-48 left-0 border border-gray-300">
//                     <li>
//                       <Link to='/category1' className="text-gray-800 hover:text-blue-500 block px-4 py-2 transition duration-300 rounded-t-md">Category 1</Link>
//                     </li>
//                     <li>
//                       <Link to='/category2' className="text-gray-800 hover:text-blue-500 block px-4 py-2 transition duration-300">Category 2</Link>
//                     </li>
//                     <li>
//                       <Link to='/category3' className="text-gray-800 hover:text-blue-500 block px-4 py-2 transition duration-300 rounded-b-md">Category 3</Link>
//                     </li>
//                   </ul>
//                   )}
//               </div>
//             </li>
//             <li>
//               <Link to='/cart' className='text-gray-100 hover:text-white font-semibold flex items-center transition duration-300' onClick={closeMenu}>
//                 <FaShoppingCart className="text-xl mr-2" />
//                 Cart
//               </Link>
//             </li>
//             <li>
//               <Link to='/about' className='text-gray-100 hover:text-white font-semibold flex items-center transition duration-300' onClick={closeMenu}>
//                 <FaInfoCircle className="text-xl mr-2" />
//                 About
//               </Link>
//             </li>
//             <li>
//               <Link to='/profile' className='text-gray-100 hover:text-white font-semibold flex items-center transition duration-300' onClick={closeMenu}>
//                 {currentUser ? (
//                   <img
//                     className='rounded-full h-12 w-12 object-cover mr-2'
//                     src={currentUser.avatar}
//                     alt='profile'
//                   />
//                 ) : (
//                   <>
//                     <FaSignInAlt className="text-xl mr-2" />
//                     Sign in
//                   </>
//                 )}
//               </Link>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// };

import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../assets/logos.png";
import Navbar from "./Navbar";
import { MdClose, MdMenu } from "react-icons/md";
import { FaOpencart, FaSignInAlt } from "react-icons/fa";

const Header = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [menuOpened, setMenuOpened] = useState(false);
  const toggleMenu = () => setMenuOpened(!menuOpened);

  return (
    <header className="fixed top-0 left-0 m-auto max_padd_container w-full bg-white ring-1 ring-slate-900/5 z-10">
      <div className="px-4 flex items-center justify-between py-3 max-xs:px-2">
        <div>
          <Link to="/">
            <img src={logo} alt="Logo" height={60} width={138} />
          </Link>
        </div>
        <Navbar containerStyles={"font-bold hidden md:flex gap-x-5 xl:gap-x-10 medium-15"} />
        <Navbar containerStyles={`${menuOpened ? "flex items-start flex-col gap-y-12 fixed top-20 right-8 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300" : "flex items-start flex-col gap-y-12 fixed top-20 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300 -right-[100%]"}`} />
        <div className="flex sm:gap-x-6 text-bold-16">
          {!menuOpened ? 
          (<MdMenu className="md:hidden cursor-pointer hover:text-secondary mr-2 p-1 ring-1 ring-slate-900/30 h-8 w-8 rounded-full"
          onClick={toggleMenu}/>)
          : 
          (<MdClose className="md:hidden cursor-pointer hover:text-secondary mr-2 p-1 ring-1 ring-slate-900/30 h-8 w-8 rounded-full"
          onClick={toggleMenu}/>)
          }
          <div className="flex sm:gap-x-6">
            <NavLink to="/Cart" className="flex items-center relative">
              <FaOpencart className="p-1 h-8 w-8 ring-slate-900/30 ring-1 rounded-full" />
              <span className="absolute top-0 right-0 bg-secondary text-white w-5 h-5 flex items-center justify-center rounded-full text-sm">0</span>
            </NavLink>
          </div>

          <Link to='/profile' className='text-gray-100 hover:text-white font-semibold flex items-center transition duration-300'>
            {currentUser ? (
              <img
                className='rounded-full h-12 w-12 object-cover mr-2'
                src={currentUser.avatar}
                alt='profile'
              />
            ) : (
              <span className="flex items-center">
                <FaSignInAlt className="text-xl mr-2" />
                <span className="font-bold">Sign in</span>
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
