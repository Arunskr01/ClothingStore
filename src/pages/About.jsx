import React from 'react';

function About() {
    return (
        <div className="container">
            <h1 className="text-center" style={{ fontSize: 24 }}>ABOUT US ---</h1>
            <div className="pt-5 d-flex align-items-center">
                <img
                    src='https://foreverbuy.in/assets/about_img-BAJyTXw9.png'
                    style={{ width: 450, height: 457.42, marginRight: '2rem' }}
                    alt="About Forever"
                />
                <div style={{ flex: 1 }}>
                    <p style={{ marginBottom: '1.5rem', fontSize: 16 }}>
                        Forever was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes.
                    </p>
                    <p style={{ marginBottom: '1.5rem', fontSize: 16 }}>
                        Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.
                    </p>
                    <p style={{ fontSize: 16, fontWeight: 600, marginBottom: '1.5rem' }}> Our Mission</p>
                    <p style={{ fontSize: 16 }}>Our mission at Forever is to empower customers with choice, convenience, and confidence. We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.</p>
                </div>
            </div>
            <div className="pt-5">
                <h5 className='text-start'>WHY CHOOSE US ---</h5>
                <div className="d-flex justify-content-between mt-4">
                    {/* Container 1 */}
                    <div className="card p-4" style={{ width: '30%' }}>
                        <p style={{ fontSize: 18, fontWeight: 600 }}>Convenience:</p>
                        <p style={{ fontSize: 16 }}>
                            We meticulously select and vet each product to ensure it meets our stringent quality standards.
                        </p>
                    </div>

                    {/* Container 2 */}
                    <div className="card p-4" style={{ width: '30%'}}>
                        <p style={{ fontSize: 18, fontWeight: 600 }}>Quality Assurance:</p>
                        <p style={{ fontSize: 16 }}>
                            We meticulously select and vet each product to ensure it meets our stringent quality standards.
                        </p>
                    </div>

                    {/* Container 3 */}
                    <div className="card p-4" style={{ width: '30%' }}>
                        <p style={{ fontSize: 18, fontWeight: 600 }}>Exceptional Customer Service:</p>
                        <p style={{ fontSize: 16 }}>
                            Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.
                        </p>
                    </div>
                </div>
            </div>
            <div className='text-center pt-5 mb-5'> {/* Added mb-5 for bottom margin */}
                <h4>Subscribe now & get 20% off</h4>
                <p style={{ fontWeight: 10 }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <div className="d-flex justify-content-center mt-3">
                    <div className="input-group" style={{ width: '600.36px' }}>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Enter your email" 
                            aria-label="Enter your email" 
                            style={{ 
                                height: '49.76px',
                                fontSize: '16px',
                                padding: '0 15px',
                                borderRadius: '0' // Added square edges
                            }}
                        />
                        <div className="input-group-append">
                            <button 
                                className="btn btn-outline-secondary" 
                                type="button"
                                style={{
                                    height: '49.76px',
                                     backgroundColor: 'black',
                                    padding: '0 20px',
                                    borderRadius: '0', // Added square edges
                                    borderLeft: '0' // Remove double border between input and button
                                }}
                            >
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;