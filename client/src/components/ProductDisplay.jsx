import React, { useState } from 'react';
import StarIcon from '../assets/star_icon.png';
import StarDullIcon from '../assets/star_dull_icon.png';
import ReactImageMagnify from 'react-image-magnify';

const ProductDisplay = (props) => {
    const { product } = props;
    const [selectedSize, setSelectedSize] = useState(null);

    // Function to handle size selection
    const handleSizeSelect = (size) => {
        setSelectedSize(size);
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
            {/* Product Images Section */}
            <div className="flex flex-col items-center justify-center">
                {/* Main product image */}
                <ReactImageMagnify
                    {...{
                        smallImage: {
                            alt: 'Main Product',
                            isFluidWidth: true,
                            src: product.image
                        },
                        largeImage: {
                            src: product.image,
                            width: 1200,
                            height: 1800
                        },
                        shouldHideHintAfterFirstActivation: false
                    }}
                    className="rounded-md shadow-md mb-4"
                />
                {/* Image thumbnails */}
                <div className="grid grid-cols-4 gap-4">
                    {[...Array(4)].map((_, index) => (
                        <img key={index} src={product.image} alt={`Product ${index}`} className="w-16 h-16 rounded-md shadow-md cursor-pointer" />
                    ))}
                </div>
            </div>
            {/* Product Details Section */}
            <div>
                {/* Product name */}
                <h1 className="text-3xl font-semibold mb-4">{product.name}</h1>
                {/* Star ratings */}
                <div className="flex items-center mb-4">
                    {[...Array(4)].map((_, index) => (
                        <img key={index} src={StarIcon} alt={`Star ${index}`} className="w-6 h-6 mr-1" />
                    ))}
                    <img src={StarDullIcon} alt="Dull Star" className="w-6 h-6" />
                    <p className="text-gray-600 ml-2">(122)</p>
                </div>
                {/* Price and description */}
                <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                        {/* Old and new price */}
                        <div className="text-xl text-gray-700 line-through">${product.old_price}</div>
                        <div className="text-2xl font-semibold text-green-600">${product.new_price}</div>
                    </div>
                    {/* Product description */}
                    <p className="text-gray-600 mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis natus, et, excepturi tempore nesciunt neque obcaecati commodi, ratione ea consequatur quidem? Nobis quia, natus quisquam dolor itaque voluptate? Dolorem, modi.</p>
                    {/* Size selection */}
                     <div className="flex flex-wrap gap-3 mb-4">
                        {/* {['S', 'M', 'L', 'XL', 'XXL'].map((size, index) => (
                            <div key={index} className={`w-10 h-10 flex items-center justify-center border-2 border-gray-500 rounded-full cursor-pointer ${selectedSize === size ? 'bg-gray-500' : ''}`} onClick={() => handleSizeSelect(size)}>
                                {size}
                            </div>
                        ))} */}
                    </div> 
                    {/* Buttons */}
                    <div className="flex gap-4 mb-4">
                        {/* Add to cart button */}
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">Add to cart</button>
                        {/* Buy now button */}
                        <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300">Buy now</button>
                    </div>
                </div>
                {/* Product category and tags */}
                <p className="text-gray-600 mb-2"><span className="font-semibold">SubCategory:</span> Living room -- sofa</p>
                <p className="text-gray-600 mb-2"><span className="font-semibold">Tags:</span> Modern, latest</p>
            </div>
        </div>
    );
}

export default ProductDisplay;
