import React, { useState, useEffect } from 'react';
import { Button, Container, Navbar, Table, Form } from 'react-bootstrap';

function Admin() {
  const [activeTab, setActiveTab] = useState('orders');
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    size: '',
    image: '',
  });

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem('orders')) || [];
    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    setOrders(storedOrders);
    setProducts(storedProducts);
  }, [activeTab]);

  const handleBought = (indexToRemove) => {
    const updatedOrders = orders.filter((_, index) => index !== indexToRemove);
    localStorage.setItem('orders', JSON.stringify(updatedOrders));
    setOrders(updatedOrders);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setNewProduct((prev) => ({ ...prev, image: reader.result }));
    };
    reader.readAsDataURL(file);
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    if (!newProduct.name || !newProduct.price || !newProduct.image) return;

    const updatedProducts = [...products, newProduct];
    localStorage.setItem('products', JSON.stringify(updatedProducts));
    setProducts(updatedProducts);
    setNewProduct({ name: '', price: '', size: '', image: '' });
    alert('Product added!');
  };

  const renderOrdersTable = () => (
    <>
      <h4 className="mb-3">Orders</h4>
      {orders.length === 0 ? (
        <p>No orders yet.</p>
      ) : (
        <Table bordered responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Product</th>
              <th>Image</th>
              <th>Size</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{order.name}</td>
                <td>
                  <img
                    src={order.image[0]}
                    alt={order.name}
                    style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                  />
                </td>
                <td>{order.size}</td>
                <td>{order.quantity}</td>
                <td>₹{order.price}</td>
                <td>₹{order.price * order.quantity}</td>
                <td>
                  <Button
                    variant="success"
                    size="sm"
                    onClick={() => handleBought(index)}
                  >
                    Bought
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );

  const renderAddProduct = () => (
    <div>
      <h4 className="mb-3">Add Product</h4>
      <Form onSubmit={handleAddProduct}>
        <Form.Group className="mb-3">
          <Form.Label>Product Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={newProduct.name}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            name="price"
            value={newProduct.price}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Size</Form.Label>
          <Form.Control
            type="text"
            name="size"
            value={newProduct.size}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Upload Image</Form.Label>
          <Form.Control type="file" accept="image/*" onChange={handleImageUpload} />
          {newProduct.image && (
            <img
              src={newProduct.image}
              alt="preview"
              className="mt-2"
              style={{ width: '100px', height: '100px', objectFit: 'cover' }}
            />
          )}
        </Form.Group>

        <Button variant="primary" type="submit">
          Add Product
        </Button>
      </Form>
    </div>
  );

  return (
    <div>
      <Navbar bg="light">
        <Container>
          <Navbar.Brand>Admin Panel</Navbar.Brand>
          <div className="d-flex gap-2">
            <Button
              variant={activeTab === 'orders' ? 'secondary' : 'outline-secondary'}
              onClick={() => setActiveTab('orders')}
            >
              Orders
            </Button>
            <Button
              variant={activeTab === 'add' ? 'secondary' : 'outline-secondary'}
              onClick={() => setActiveTab('add')}
            >
              Add Product
            </Button>
          </div>
        </Container>
      </Navbar>

      <Container className="mt-4">
        {activeTab === 'orders' && renderOrdersTable()}
        {activeTab === 'add' && renderAddProduct()}
      </Container>
    </div>
  );
}

export default Admin;
