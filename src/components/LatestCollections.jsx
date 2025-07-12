import React from 'react';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const LatestCollections = () => {

  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    const latest = products.slice(0, 10);
    setLatestProducts(latest);
  }, []);

  function handleView(product) {
    <Link to={`/product/${product._id}`} />
  }

  return (
    <div className='container'>
      <div className='my-10'>
        <h3 className='text-center py-8 text-3xl font-bold' style={{ fontFamily: 'Times New Roman' }}>
          Latest Collections
        </h3>
        <div className="d-flex flex-wrap justify-content-between gap-3 p-3">
          {latestProducts.map(product => (
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
      </div>
    </div>
  )
}

export default LatestCollections
// <div key={product.id} className='border p-4'>
//   <h3 className='font-bold'>{product.name}</h3>
//   <p>{product.description}</p>
//   <p className='text-lg font-semibold'>${product.price}</p>
// </div>