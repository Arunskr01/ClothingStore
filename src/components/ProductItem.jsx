import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link to={`/product/${id}`} className="text-decoration-none text-dark" style={{ cursor: 'pointer' }}>
      <div
        className="border rounded p-3 shadow-sm overflow-hidden"
        style={{ height: '300px' }}
      >
        <img
          src={image[0]}
          alt={name}
          className="img-fluid mb-2 rounded"
          style={{
            height: '12rem', 
            width: '100%',
            objectFit: 'cover',
          }}
        />
        <p className="pt-2 mb-1 small">{name}</p>
        <p className="small fw-medium">
          {currency}
          {price}
        </p>
      </div>
    </Link>
  );
};


export default ProductItem;
