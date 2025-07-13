import { assets } from '../assets/assets';
const Contact = () => {
  // const scrollToTop = () => {
  //   window.scrollTo({
  //     top: 0,
  //     left: 0,
  //     behavior: 'smooth',
  //   });
  // };

  return (
    <div className="container py-4">

      <div className="pt-4 border-top text-2xl">
        <h3 className='text-center py-8 text-3xl font-bold text-gray-700' style={{ color: 'gray' }}>
          Contact Us
        </h3>
        <hr />
      </div>

      {/* Contact Section */}
      <div className="row align-items-center my-5 mb-5 g-4">
        <div className="col-md-6">
          <img
            src={assets.logo}
            alt="Contact"
            className="img-fluid w-100"
            style={{ maxWidth: '480px' }}
          />
        </div>

        <div className="col-md-6 d-flex flex-column justify-content-center gap-3">
          <p className="fw-semibold text-secondary">Our Store</p>
          <p className="text-muted mb-2">
            Style Mint <br />
            Karunagappally, Kollam 690542
          </p>

          <p className="text-dark">
            Tel: <span className="text-muted">+91 9876543210</span>
          </p>
          <p className="text-dark">
            Email: <span className="text-muted">stylemint@gmail.com</span>
          </p>

          <p className="text-muted">Contact to Learn more about our teams and job openings.</p>

          <a href="https://wa.me/qr/JHSXWLYKTHVBO1" target="_blank" rel="noopener noreferrer">
            <button
              className="btn btn-success px-4 py-2 btn-sm mt-2"
            >
              Message On What's App
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
