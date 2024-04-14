import React, { useState } from 'react';
import axios from 'axios'; // Import axios for making HTTP requests

const NewsLetter = () => {
  const [email, setEmail] = useState('');

  const subscribe = async () => {
    try {
      await axios.post('/api/subscribe', { email });
      alert('Subscription successful! Please check your email for confirmation.');
    } catch (error) {
      console.error('Error subscribing:', error);
      alert('Subscription failed. Please try again later.');
    }
  };

  return (
    <section className="max_padd_container py-9 xl:py-28 bg-gradient-to-b from-blue-100 to-blue-200">
      <div className="mx-auto xl:w-[80%] flexCenter flex-col gap-y-8 w-full max-w-[666px]">
        <h3 className="text-center text-2xl lg:text-3xl font-bold text-gray-800 mb-4">Discover timeless treasures for your home – where every piece has a story</h3>
        <h4 className="text-center uppercase text-lg font-semibold text-gray-700 mb-8">Get Exclusive Offers in Your Inbox</h4>
        <div className="flex justify-center items-center gap-4 max-w-[588px] mx-auto p-2 bg-white rounded-full shadow-lg">
          <input type="email" placeholder="Your email address" className="w-full py-3 px-4 bg-transparent border-none outline-none text-gray-800 placeholder-gray-500" value={email} onChange={(e) => setEmail(e.target.value)} />

          <button onClick={subscribe} className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-full transition duration-300 ease-in-out">Subscribe</button>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
