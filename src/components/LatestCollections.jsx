import { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../Context/ShopContext';
import ProductItem from '../components/ProductItem';

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    const latest = products.slice(0, 8);
    setLatestProducts(latest);
  }, [products]);

  return (
    <div className="my-5">
      {/* Section Title */}
      <div className="py-4 text-center">
        <hr />
        <h3 className='text-center py-8 text-3xl font-bold text-gray-700' style={{ color: 'gray' }}>
          Latest Collections
        </h3>
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Discover our newest arrivals that blend style and comfort. Explore the
          latest trends in fashion, curated just for you.
        </p>
        <hr />
      </div>

      {/* Product Grid */}
      <div className='container'>
        <div className="row g-3 g-md-4">
          {latestProducts.map((product, idx) => (
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

export default LatestCollection;
