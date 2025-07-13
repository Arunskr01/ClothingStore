import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { assets } from '../assets/assets';
import { ShopContext } from '../Context/ShopContext';

const Product = () => {
  const { productId } = useParams();
  const { products, currency } = useContext(ShopContext);
  const [productsData, setProductsData] = useState(false);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');
  const navigate = useNavigate();

  const fetchProductsData = async () => {
    products.map((product) => {
      if (product._id === productId) {
        setProductsData(product);
        setImage(product.image[0]);

        return null;
      }
    });
  };

  function addToCart(id, size) {
    navigate("/cart", {
      state: {
        productId: productId
      }
    });
  }
  
  useEffect(() => {
    fetchProductsData();
  }, [productId, products]);

  return productsData ? (
    <div className="border-top pt-4">
      {/* Products Data*/}
      <div className="d-flex flex-column flex-sm-row gap-3">
        {/* products images */}
        <div className="d-flex flex-column-reverse flex-sm-row gap-3 flex-grow-1">
          {/* List */}
          <div className="d-flex flex-sm-column overflow-auto justify-content-between"
            style={{ maxWidth: '18.7%', width: '100%' }}>
            {productsData.image.map((item, index) => (
              <img
                key={index}
                src={item}
                alt="product"
                onClick={() => setImage(item)}
                className="ms-3 img-fluid mb-2 cursor-pointer"
              />
            ))}
          </div>

          {/* main image */}
          <div className="w-100" style={{ maxWidth: '80%' }}>
            <img
              src={image}
              alt="product"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* products details */}

        <div className="flex-grow-1 mt-3">
          <h1 className="fw-medium fs-4 mt-2">{productsData.name}</h1>

          <div className="d-flex align-items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" className="me-1" style={{ width: "1.5rem" }} />
            <img src={assets.star_icon} alt="" className="me-1" style={{ width: "1.5rem" }} />
            <img src={assets.star_icon} alt="" className="me-1" style={{ width: "1.5rem" }} />
            <img src={assets.star_icon} alt="" className="me-1" style={{ width: "1.5rem" }} />
            <img src={assets.star_dull_icon} alt="" className="me-1" style={{ width: "1.5rem" }} />

            <p className="ps-2 mb-0">(122)</p>
          </div>
          <p className="mt-4 h4 fw-medium">
            {currency}
            {productsData.price}
          </p>
          <p className="mt-4 text-muted" style={{ maxWidth: "80%" }}>
            {productsData.description}
          </p>

          <div className="d-flex flex-column gap-3 my-4">
            <p className="mb-1">Select Size</p>
            <div className="d-flex gap-2 flex-wrap">
              {productsData.sizes.map((item, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setSize(item);
                  }}
                  className={`btn border d-flex align-items-center justify-content-center px-3 py-2 ${item === size ? 'border-warning text-warning' : ''}`}
                  style={{ width: "2rem", height: "2rem", cursor: "pointer" }}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => {
              if (!size) {
                alert('Please select a size');
                return;
              }

              navigate('/cart', {
                state: {
                  productId: productsData._id,
                  size: size
                }
              });
            }}
            className="btn btn-success px-4 py-2 btn-sm"
          >
            ADD TO CART
          </button>


          <hr className="my-4" />

          <div className="d-flex flex-column gap-2 mt-3 text-muted small">
            <p className="mb-1">100% Original product </p>
            <p className="mb-1">Free delivery on order above $49</p>
            <p className="mb-1"> Easy return and exchange policy within 7 days </p>
          </div>
        </div>
      </div>

      {/* Description */}

      <div className="mt-5">
        <div className="d-flex border-bottom">
          <b className="px-3 py-2 border-end">Description</b>
          <p className="px-3 py-2 mb-0 text-muted small">Reviews (122)</p>
        </div>

        <div className="border px-4 py-4 mt-3 text-muted small">
          <p>
            An e-commerce website is an online platform that facilitates the
            buying and selling of products or services over the internet. It
            serves as a virtual marketplace where businesses and individuals can
            showcase their products, interact with customers, and conduct
            transactions without the need for a physical presence. E-commerce
            websites have gained immense popularity due to their convenience,
            accessibility, and the global reach they offer.
          </p>
          <p>
            E-commerce websites typically display products or services along
            with detailed descriptions, images, prices, and any available
            variations (eg, sizes colors). Each product usually has its own
            dedicated page with relevant information
          </p>
        </div>
      </div>

    </div >
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
