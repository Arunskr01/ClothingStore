import React, { useState } from 'react';
import { Button, Navbar, Container, Row, Col, Form, Dropdown } from "react-bootstrap";

function Admin() {
    const [activeButton, setActiveButton] = useState('add');
    const [activeCategory, setActiveCategory] = useState('Men');
    const [mainCategory, setMainCategory] = useState('');
    const [subCategory, setSubCategory] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [selectedSizes, setSelectedSizes] = useState([]);

    const renderRightContent = () => {
        switch (activeButton) {
            case 'add':
                return (
                    <div className="mb-5">
                        <h4>Upload Image</h4>
                        <div className="d-flex gap-3 mb-4">
                            {[...Array(4)].map((_, i) => (
                                <div key={i} style={{ position: 'relative', cursor: 'pointer' }}>
                                    {/* Placeholder image or existing image */}
                                    <img
                                        src="data:image/png;base64,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"
                                        alt="Upload"
                                        style={{ width: '79.99px', height: '79.99px', objectFit: 'cover' }}
                                        onClick={() => document.getElementById(`fileInput-${i}`).click()}
                                    />
                                    {/* Hidden file input */}
                                    <input
                                        id={`fileInput-${i}`}
                                        type="file"
                                        accept="image/*"
                                        style={{ display: 'none' }}
                                        onChange={(e) => {
                                            // Handle file upload here
                                            const file = e.target.files[0];
                                            if (file) {
                                                // Process the file (upload, preview, etc.)
                                                console.log('Selected file:', file);
                                            }
                                        }}
                                    />
                                </div>
                            ))}
                        </div>

                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label><strong>Product name</strong></Form.Label>
                                <Form.Control style={{ width: 500, height: 41.77, borderColor: 'black' }} type="text" placeholder="Type here" />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label><strong>Product description</strong></Form.Label>
                                <Form.Control style={{ width: 500, height: 65.76, borderColor: 'black' }} as="textarea" rows={3} placeholder="Write content here" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <div className="d-flex gap-2 align-items-end">
                                    <div className="flex-grow-1">
                                        <Form.Label><strong>Product category</strong></Form.Label>
                                        <Dropdown>
                                            <Dropdown.Toggle variant="light" id="dropdown-basic" style={{ width: 123.45, height: 40.09, borderColor: 'black' }}>
                                                {mainCategory || 'Men'}
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item onClick={() => setMainCategory('Men')}>Men</Dropdown.Item>
                                                <Dropdown.Item onClick={() => setMainCategory('Women')}>Women</Dropdown.Item>
                                                <Dropdown.Item onClick={() => setMainCategory('Kids')}>Kids</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>

                                    <div className="flex-grow-1">
                                        <Form.Label><strong>Sub category</strong></Form.Label>
                                        <Dropdown>
                                            <Dropdown.Toggle variant="light" id="dropdown-basic" style={{ width: 132.92, height: 40.09, borderColor: 'black' }}>
                                                {subCategory || 'Top wear'}
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item onClick={() => setSubCategory('Top wear')}>Top wear</Dropdown.Item>
                                                <Dropdown.Item onClick={() => setSubCategory('Bottom wear')}>Bottom wear</Dropdown.Item>
                                                <Dropdown.Item onClick={() => setSubCategory('Winter wear')}>Winter wear</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>

                                    <div className="flex-grow-1">
                                        <Form.Label><strong>Product Price</strong></Form.Label>
                                        <Form.Control
                                            type="number"
                                            placeholder="25"
                                            value={productPrice}
                                            onChange={(e) => setProductPrice(e.target.value)}
                                            style={{ width: 119.99, height: 41.77, borderColor: 'black' }}
                                        />
                                    </div>
                                </div>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label><strong>Product sizes</strong></Form.Label>
                                <div className="d-flex gap-2">
                                    {['S', 'M', 'L', 'XL', 'XXL'].map(size => (
                                        <Button
                                            key={size}
                                            variant="outline-secondary"
                                            style={{
                                                backgroundColor: selectedSizes.includes(size) ? '#FFEBF5' : '',
                                                borderColor: selectedSizes.includes(size) ? '#FFEBF5' : '#6c757d',
                                                borderRadius:0
                                                
                                            }}
                                            onClick={() => {
                                                if (selectedSizes.includes(size)) {
                                                    setSelectedSizes(selectedSizes.filter(s => s !== size));
                                                } else {
                                                    setSelectedSizes([...selectedSizes, size]);
                                                }
                                            }}
                                        >
                                            {size}
                                        </Button>
                                    ))}
                                </div>
                            </Form.Group>
                            <Form.Check
                                type="checkbox"
                                label="Add to bestseller"
                                id="bestseller"
                                className="mb-4"
                                style={{borderColor: 'black' }}
                            />

                            <Button variant="dark" size="lg" style={{width:112,height:47.99,borderRadius:0,fontSize:'16px'}}>ADD</Button>
                        </Form>
                    </div>
                );
            case 'list':
                return <div className="mb-5"><h4>List Items Content</h4></div>;
            case 'orders':
                return <div className="mb-5"><h4>Orders Content</h4></div>;
            default:
                return <div className="mb-5"><h4>Add Items Content</h4></div>;
        }
    };

    return (
        <div className="d-flex flex-column" style={{ minHeight: '100vh' }}>
            {/* Navbar */}
            <Navbar bg="light" className="bg-body-tertiary ms-5">
                <Container fluid>
                    <Navbar.Brand href="#">
                        <img
                            src="https://admin.foreverbuy.in/assets/logo-BI5h54w2.png"
                            alt="Logo"
                            width="133.32"
                            height="55.41"
                            className="d-inline-block align-text-top"
                        />
                    </Navbar.Brand>
                    <Button variant="secondary" className="ms-auto">Logout</Button>
                </Container>
            </Navbar>

            {/* Main Content */}
            <Container fluid className="flex-grow-1">
                <Row className="h-100 g-0">
                    {/* Left Sidebar (col-2) */}
                    <Col xs={2} className="bg-light p-3">
                        <div className="h-100 d-flex flex-column">
                            <Button
                                style={{
                                    width: '207.24px',
                                    height: '40.26px',
                                    backgroundColor: activeButton === 'add' ? '#FFEBF5' : 'white',
                                    padding: '8px 12px',
                                    display: 'flex',
                                    alignItems: 'center'
                                }}
                                variant="Light"
                                className="w-100 mb-3"
                                onClick={() => setActiveButton('add')}
                            >
                                <img
                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAI5SURBVHgBtZZbS5RRFIZfzaKgIDrQUAbaiamgA3S6ncv6DXXRrwjGoAuDsh/RTXZRPyAJSu/0QlEQL2QuxtHxjEcURhTB93WtTx3Rz/3N4YVnDvvb31p7r31YqwFhaiYZ0kpaSMrbl0me5MhfMo8qdZ/8csPbZJz8Iz+d/6RAtsgG+e3vJNZ58pmskWnSQR6S00f0bfJnX8kiWfd3LyBQCl8/bEZt5BLCpYFmyQrpdVsnOtOaTJKnqFwvYOEfQ4xTja7POz5C9XpMimQEx4RXcVconqN2UpS23XaZtLO02FnUXlm3nT7YqO28AAtriFLYP4sn6RSZch+7ugo7Qx0IVxf5k6D/N9hyNTfy4zXsLP1IYOAsOZegfyds42Tk8C5syjnUT6Puo1UOb8POyybqp0330aJQXiSzMZ21Ob6jPIRP/LvnQFuJvCdzx9iRj1Sj/2lA9Qqy0eQjuhXTRyN7c6gtmlkG4VKkipqhYqs8dwb1k2xrUvnI4Q1UmMcCpVvmOsnJocKjvPcugYGSE6q3sJ3aFTXo2lGivRxo4JoTIl1tS7DKYU+asmb5CbVXm9tOH36gFKJU8gy100uyStqPeqhMMUBmUF22j6QEXCBDiMlCN2ElxgR5hcqlARfdVlBdMwgLxUfYoodKu/4DbGmGEeAskkKguGuxVfp9QXyZ+MD7FP2ddoQn8zJpZ+nIlHzUBVgh3Onoty4OFcKr3jcdZzD00r4Cu0/vkTuwDKN3dc/m3Wk3rLyM1Q7IrnrJFjF9QAAAAABJRU5ErkJggg=="
                                    alt="add icon"
                                    style={{
                                        width: '22px',
                                        height: '17px',
                                        marginRight: '8px',
                                    }}
                                />
                                Add items
                            </Button>
                            <Button
                                style={{
                                    width: '207.24px',
                                    height: '40.26px',
                                    backgroundColor: activeButton === 'list' ? '#FFEBF5' : 'white',
                                    padding: '8px 12px',
                                    display: 'flex',
                                    alignItems: 'center'
                                }}
                                variant="Light"
                                className="w-100 mb-3"
                                onClick={() => setActiveButton('list')}
                            >
                                <img
                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAcCAYAAACQ0cTtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEPSURBVHgB1ZaNDYIwEIWfhgEYoW7gCk7gCo7gBnQDR3AFnQA3kA3ACXADvJMDmyjaUo7EL3mQ8HMfR5umQIuh5JSa0kwYrneU+lg4Ij7fKQWmw0gqygZi5q/IoEMm9XPujFvljlbQgx1YUlK0bWrCQ5MuMSOJnNdox04LwwceswYz0XV2oeygx4myTpwLN+jBsx2zTpC/le0ph18PPZcSxGGlTjlwP5f70TLriAwiZKkkRuQtK78Usp4ib1k2UNDCX+Qt+yS0CBMFyVxhPUIULHOFoaJRMmY7QtTLksCXzoiAlytekQ10MeLp/6eFDlbqH7t94xXtSlF0XzARXJO3HBVk3wi8NqqNQnLoD9M7D/ctiPZPx1n1AAAAAElFTkSuQmCC"
                                    alt="list icon"
                                    style={{
                                        width: '22px',
                                        height: '17px',
                                        marginRight: '8px'
                                    }}
                                />
                                List items
                            </Button>
                            <Button
                                style={{
                                    width: '207.24px',
                                    height: '40.26px',
                                    backgroundColor: activeButton === 'orders' ? '#FFEBF5' : 'white',
                                    padding: '8px 12px',
                                    display: 'flex',
                                    alignItems: 'center'
                                }}
                                variant="Light"
                                className="w-100 mb-3"
                                onClick={() => setActiveButton('orders')}
                            >
                                <img
                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAcCAYAAACQ0cTtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEPSURBVHgB1ZaNDYIwEIWfhgEYoW7gCk7gCo7gBnQDR3AFnQA3kA3ACXADvJMDmyjaUo7EL3mQ8HMfR5umQIuh5JSa0kwYrneU+lg4Ij7fKQWmw0gqygZi5q/IoEMm9XPujFvljlbQgx1YUlK0bWrCQ5MuMSOJnNdox04LwwceswYz0XV2oeygx4myTpwLN+jBsx2zTpC/le0ph18PPZcSxGGlTjlwP5f70TLriAwiZKkkRuQtK78Usp4ib1k2UNDCX+Qt+yS0CBMFyVxhPUIULHOFoaJRMmY7QtTLksCXzoiAlytekQ10MeLp/6eFDlbqH7t94xXtSlF0XzARXJO3HBVk3wi8NqqNQnLoD9M7D/ctiPZPx1n1AAAAAElFTkSuQmCC"
                                    alt="orders icon"
                                    style={{
                                        width: '22px',
                                        height: '17px',
                                        marginRight: '8px'
                                    }}
                                />
                                Orders
                            </Button>
                            <div className="flex-grow-1"></div>
                        </div>
                    </Col>

                    {/* Main Content Area (col-10) */}
                    <Col xs={10} className="p-4">
                        {renderRightContent()}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Admin;