import { useContext, useEffect, useState } from 'react';
import ProductItem from './ProductItem';
import { ShopContext } from '../Context/ShopContext';

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    if (products) {
      const bestProduct = products.filter((product) => product.bestseller);
      setBestSeller(bestProduct.slice(0, 4));
    }
  }, [products]);

  return (
    <div className="my-5">
      {/* Section Heading */}
      <div className="text-center py-4">
        <hr />
        <h3 className='text-center py-8 text-3xl font-bold text-gray-700' style={{ color: 'gray' }}>
          Best Seller
        </h3>
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Explore our best-selling products that have captured the hearts of our customers.
        </p>
        <hr />
      </div>

      {/* Product Grid */}
      <div className="container">
        <div className="row g-3 g-md-4">
          {bestSeller.map((product, idx) => (
            <div
              key={idx}
              className="col-3"
            >
              <ProductItem
                id={product._id}
                image={product.image}
                name={product.name}
                price={product.price}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
