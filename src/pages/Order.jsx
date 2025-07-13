import { useEffect, useState } from 'react';

const Order = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem('orders')) || [];
    setOrders(storedOrders);
  }, []);

  const handleBought = (indexToRemove) => {
    const updatedOrders = orders.filter((_, index) => index !== indexToRemove);
    localStorage.setItem('orders', JSON.stringify(updatedOrders));
    setOrders(updatedOrders);
  };

  return (
    <div className="container py-4">
      <h2 className="mb-4">Your Orders</h2>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        orders.map((item, index) => (
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
                <p className="mb-1 text-muted">Quantity: {item.quantity}</p>
              </div>
            </div>
            <div className="text-end">
              <p className="fw-bold mb-2">₹{item.price * item.quantity}</p>
              <button
                className="btn btn-success btn-sm"
                onClick={() => handleBought(index)}
              >
                Bought
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Order;
