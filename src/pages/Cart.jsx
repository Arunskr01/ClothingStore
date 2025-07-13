import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';

const Cart = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { productId, size } = location.state || {};
  const { products } = useContext(ShopContext);

  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem('cartItems');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    if (productId && size) {
      const product = products.find((p) => p._id === productId);
      if (product) {
        setCartItems((prevCart) => {
          const exists = prevCart.find(
            (item) => item._id === product._id && item.size === size
          );

          let updatedCart;
          if (exists) {
            updatedCart = prevCart.map((item) =>
              item._id === product._id && item.size === size
                ? { ...item, quantity: item.quantity }
                : item
            );
          } else {
            updatedCart = [...prevCart, { ...product, size, quantity: 1 }];
          }

          localStorage.setItem('cartItems', JSON.stringify(updatedCart));
          return updatedCart;
        });
      }
    }
  }, [productId, size, products]);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const updateQuantity = (id, size, action) => {
    const updated = cartItems.map((item) => {
      if (item._id === id && item.size === size) {
        const newQty =
          action === 'increase' ? item.quantity + 1 : item.quantity - 1;
        return { ...item, quantity: Math.max(1, newQty) };
      }
      return item;
    });
    setCartItems(updated);
  };

  const handleRemove = (id, size) => {
    const updatedCart = cartItems.filter(
      (item) => !(item._id === id && item.size === size)
    );
    setCartItems(updatedCart);
  };

  const saveOrderToLocalStorage = (newOrders) => {
    const existingOrders = JSON.parse(localStorage.getItem('orders')) || [];
    const updatedOrders = [...existingOrders, ...newOrders];
    localStorage.setItem('orders', JSON.stringify(updatedOrders));
  };

  const handleOrderNow = (item) => {
    saveOrderToLocalStorage([item]);
    navigate('/order');
  };

  const handleOrderAll = () => {
    saveOrderToLocalStorage(cartItems);
    navigate('/order');
  };

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="container py-4">
      <h2 className="mb-4">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="d-flex justify-content-between align-items-center border p-3 mb-3"
            >
              <div className="d-flex align-items-center gap-3">
                <img
                  src={item.image[0]}
                  alt={item.name}
                  style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                />
                <div>
                  <h5 className="mb-1">{item.name}</h5>
                  <p className="mb-1 text-muted">Size: {item.size}</p>
                  <div className="d-flex align-items-center gap-2">
                    <button
                      className="btn btn-outline-secondary btn-sm"
                      onClick={() => updateQuantity(item._id, item.size, 'decrease')}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className="btn btn-outline-secondary btn-sm"
                      onClick={() => updateQuantity(item._id, item.size, 'increase')}
                    >
                      +
                    </button>
                  </div>
                  <div className="d-flex gap-2 mt-2">
                    <button
                      onClick={() => handleRemove(item._id, item.size)}
                      className="btn btn-outline-danger btn-sm"
                    >
                      Remove
                    </button>
                    <button
                      className="btn btn-outline-primary btn-sm"
                      onClick={() => handleOrderNow(item)}
                    >
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
              <div className="text-end">
                <p className="mb-1 fw-bold">₹{item.price * item.quantity}</p>
              </div>
            </div>
          ))}

          <div className="text-end mt-4">
            <h4>Total: ₹{total}</h4>
            <div className="d-flex justify-content-end gap-3">
              <button
                className="btn btn-danger"
                onClick={() => {
                  setCartItems([]);
                  localStorage.removeItem('cartItems');
                }}
              >
                Clear Cart
              </button>
              <button className="btn btn-success" onClick={handleOrderAll}>
                Order All
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
