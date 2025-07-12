import { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';
import React from 'react';

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  console.log(bestSeller);

  useEffect(() => {
    if (products) {
      const bestProduct = products.filter((product) => product.bestseller);
      setBestSeller(bestProduct.slice(0, 5));
    }
  }, []);

  function handleView(product) {
    <Link to={`/product/${product._id}`} />
  }

  return (
    <div className="my-10">
      <div className="text-center text-3xl py-8">
        <h3 className="font-bold" style={{ fontFamily: 'Times New Roman' }}>
          Best Sellers
        </h3>
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Our best-selling products that our customers can not get enough of.
          Shop the most popular items from our store.
        </p>
      </div>

      <div className='container'>
        <div className="d-flex flex-wrap justify-content-between gap-3 p-3">
          {bestSeller.map((product, idx) => (
            <div className="card" style={{ width: "18%", minWidth: "180px", borderRadius: "10px" }}>
              <div className="card-body text-start justify-content-between d-flex flex-column">
                <Link to={`/product/${product._id}`} className="text-decoration-none text-dark">
                  <div className="mb-3">
                    <img onClick={handleView} src={product.image} alt="img" className="img-fluid d-block" style={{ borderRadius: "10px" }} />
                  </div>
                </Link>
                <div className="card p-3 border-0" style={{ backgroundColor: "#f8f9fa" }}>
                  <hr />
                  <p>{product.name}</p>
                  <h5>${product.price}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div >
    </div>
  );
};

export default BestSeller;
