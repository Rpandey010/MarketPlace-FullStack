import React from 'react';
import POPULAR from '../assets/popular';
import Item from '../components/Item';

function Popular() {
  return (
    <section className='bg-primary'>
      <div className='max_padd_container py-12 xl:py-28 xl:w-[88%] mx-auto px-4'>

        <h3 className='text-center' style={{ fontWeight: 'bold', fontSize: '2.5rem', color: '#333' }}>🔥 Check Out Our Popular Products 🔥</h3>
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
  );
}

export default Popular;