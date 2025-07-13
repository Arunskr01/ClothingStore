import { assets } from '../assets/assets';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="container mt-5">
      <div className="row my-5 mt-5 gy-4">
        {/* Column 1: Logo & Description */}
        <div className="col-12 col-md-6">
          <img src={assets.logo} alt="logo" className="mb-3" style={{ width: '130px' }} />
          <p className="text-muted" style={{ maxWidth: '70%' }}>
            Where minimal meets meaningful.
          </p>
        </div>

        {/* Column 2: Company Links */}
        <div className="col-6 col-md-3">
          <p className="h5 mb-3 fw-semibold" style={{color: 'green'}}>COMPANY</p>
          <ul className="list-unstyled text-muted">
            <li className="mb-2" role="button" onClick={() => window.location.href = '/'}>Home</li>
            <li className="mb-2" role="button" onClick={() => window.location.href = '/About'}>About Us</li>
            <li className="mb-2" role="button" onClick={() => window.location.href = '/Contact'}>Contact Us</li>
            <li className="mb-2" role="button" onClick={() => window.location.href = '/PrivacyPolicy'}>Privacy policy</li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div className="col-6 col-md-3">
          <p className="h5 mb-3 fw-semibold" style={{color: 'green'}}>GET IN TOUCH</p>
          <ul className="list-unstyled text-muted">
            <li className="mb-2">+91 9876543210</li>
            <li className="mb-2">stylemint@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <hr />
      <p className="text-center text-muted py-3 small">
        © 2025 stylemint.com — All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
