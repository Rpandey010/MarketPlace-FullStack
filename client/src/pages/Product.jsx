import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';
import ProductHd from '../components/ProductHd';
import ProductDisplay from '../components/ProductDisplay';
import ProductDescription from '../components/productDescription';
import RelatedProduct from '../components/RelatedProduct'; 

const Product = () => {
  const { all_products } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_products.find((e) => e.id === Number(productId));

  if (!product) {
    return <div>Oops! Product Not Found</div>;
  }

  return (
    <section className='max-padd-container py-28'>
      <div>
        <ProductHd product={product} />
        <ProductDisplay product={product} />
        <ProductDescription />
        <RelatedProduct />
      </div>
    </section>
  );
};

export default Product;