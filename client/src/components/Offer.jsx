import React from 'react';
import Banner from '../assets/banner.png';

const Offer = () => {
  return (
    <section className="bg-gray-100 py-16 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src={Banner} alt="Background" className="object-cover w-full h-full" />
      </div>

      {/* Content */}
      <div className="max-w-4xl  relative z-10 text-black pl-8"> {/* Adjusted left padding */}
        <div className="max_padd_container text-left"> {/* Align content to the left */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-blue-600">Exclusive Holi Sale!</h2>
          <p className="text-lg md:text-xl mb-8">Limited Time Offer - <span className="font-bold text-blue-600">USE CODE: HOLI25</span></p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start justify-start text-left"> {/* Align grid items to the left */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">Act Fast!</h3>
              <p className="text-lg mb-4">Shop now and enjoy <span className="font-bold text-blue-600">FREE SHIPPING</span> on orders over $50.*</p>
              <p className="text-lg mb-4">Discover our wide range of products including clothing, accessories, and more!</p>
              <p className="text-sm mb-4">*Limited to standard shipping within India.</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Customer Satisfaction Guaranteed</h3>
              <p className="text-lg mb-4">We offer hassle-free returns within 30 days of purchase.</p>
              <p className="text-lg mb-4">Contact us for any inquiries or assistance - Your satisfaction is our priority!</p>
            </div>
          </div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold transition duration-300 mt-8">Explore Now</button>
        </div>
      </div>
    </section>
  );
};

export default Offer;
