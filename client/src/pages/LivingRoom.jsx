import React from 'react';
import POPULAR from '../assets/popular';
import Item from '../components/Item';
import BannerImage from '../assets/Furnihub.png'; // Import your banner image

function LivingRoom() {
  return (
    <div className="mt-20"> {/* Added margin-top */}
      <img src={BannerImage} alt="Banner" className="w-full mb-4" /> {/* Added margin-bottom */}
      <section className='bg-primary'>
        <div className='max_padd_container py-12 xl:py-28 xl:w-[88%] mx-auto px-4'>
  
        <h3 className='text-center' style={{ fontWeight: 'bold', fontSize: '2.5rem', color: '#333' }}>Discover timeless treasures for your home </h3>
          <h3 className='text-center' style={{ fontWeight: 'semi-bold', fontSize: '2rem', color: '#333' }}>𓍊𓋼𓍊𓋼𓍊 where every piece has a story 𓍊𓋼𓍊𓋼𓍊</h3>
          <hr className='h-[3px] md:w-1/2 mx-auto bg-gradient-to-l from-transparent via-black to-transparent mb-16' />
  
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6'>
            {POPULAR.map((item) => (
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
        </div>
      </section>
    </div>
  );
}

export default LivingRoom;