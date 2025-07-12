import React from 'react';


const Banner = () => {
    return (
        <div>
            <div className="container mt-5">
                <div className="row" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div className="col-md-12">
                        <h1 style={{ color: 'green', fontWeight: 'bold' }}>Welcome to Style Mint</h1>
                        <p style={{ color: 'darkgreen' }}>Your one-stop shop for the latest fashion trends.</p>
                    </div>
                    <div className="col-md-12 align-items-center d-flex justify-content-center">
                        <img src="https://www.baltana.com/files/wallpapers-25/Brand-Wallpaper-1440x750-67169.jpg" alt="Fashion Banner" className="img-fluid" style={{ width: '75%' }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner