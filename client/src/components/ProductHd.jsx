// ProductHd.jsx
import React from 'react';
import { BsArrowRight } from 'react-icons/bs';

const ProductHd = ({ product }) => {
  return (
    <div className="flex items-center text-black">
      <span className="mr-2 font-bold">Home</span>
      <BsArrowRight className="mx-2" />
      <span className="mr-2 font-bold">Shop by room</span>
      <BsArrowRight className="mx-2" />
      <span className="mr-2 font-bold">{product.SubCategory}</span>
      <BsArrowRight className="mx-2" />
      <span className="font-bold">{product.name}</span>
    </div>
  );
};

export default ProductHd;
