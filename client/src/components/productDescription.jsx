import React from 'react';

const ProductDescription = () => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      <div className="px-6 py-4 bg-gray-200">
        <h2 className="text-lg font-semibold text-gray-800">Product Description</h2>
      </div>
      <div className="px-6 py-4">
        <p className="text-gray-700 mb-4">
          This piece of furniture has been carefully inspected and is in good condition for its age. 
          It may show some signs of wear and tear, adding to its charm and character. 
        </p>
        <p className="text-gray-700">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam numquam ex soluta repellendus velit dolorum aliquam suscipit,
          neque assumenda rerum illum consequuntur! Nemo reiciendis iure itaque beatae magni quos?
        </p>
      </div>
    </div>
  );
};

export default ProductDescription;
