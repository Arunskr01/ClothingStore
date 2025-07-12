import { assets } from '../assets/assets';
const Contact = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="container py-4">
      {/* Title */}
      <div className="pt-4 border-top text-2xl">
        <hr />
        <h3 className='text-center py-8 text-3xl font-bold text-gray-700' style={{ color: 'gray' }}>
          Contact Us
        </h3>
        <hr />
      </div>

      {/* Contact Section */}
      <div className="row align-items-center my-5 mb-5 g-4">
        <div className="col-md-6">
          <img
            src={assets.contact_img}
            alt="Contact"
            className="img-fluid w-100"
            style={{ maxWidth: '480px' }}
          />
        </div>

        <div className="col-md-6 d-flex flex-column justify-content-center gap-3">
          <p className="fw-semibold text-secondary">Our Store</p>
          <p className="text-muted mb-2">
            7298 King Lodge <br />
            North Elton, Illinois 78154
          </p>

          <p className="text-dark">
            Tel: <span className="text-muted">+1 800 123 1234</span>
          </p>
          <p className="text-dark">
            Email: <span className="text-muted">admin@forever.com</span>
          </p>

          <p className="text-muted mt-2 mb-0">Careers at Forever</p>
          <p className="text-muted">Learn more about our teams and job openings.</p>

          <button
            className="btn btn-outline-dark px-4 py-2 btn-sm mt-2"
            onClick={scrollToTop}
          >
            Explore Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
