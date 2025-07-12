import { assets } from '../assets/assets';
const About = () => {
  return (
    <div className="container py-4">
      {/* Title: About Us */}
      <div className="text-center pt-4 border-top">
        <hr />
        <h3 className='text-center py-8 text-3xl font-bold text-gray-700' style={{ color: 'gray' }}>
          About Us
        </h3>
        <hr />
      </div>

      {/* About Section */}
      <div className="row align-items-center my-5 g-4">
        <div className="col-md-6">
          <img
            src={assets.about_img}
            alt="About"
            className="img-fluid w-100"
            style={{ maxWidth: '450px' }}
          />
        </div>

        <div className="col-md-6 text-secondary d-flex flex-column justify-content-center gap-3">
          <p>
            Forever was born out of a passion for innovation and a desire to
            revolutionize the way people shop online. Our journey began with a
            simple idea to provide a platform where customers can easily
            discover, explore, and purchase a wide range of products from the
            comfort of their homes.
          </p>
          <p>
            Since our inception, we’ve worked tirelessly to curate a
            diverse selection of high-quality products that cater to every taste
            and preference. From fashion and beauty to electronics and home
            essentials, we offer an extensive collection sourced from trusted
            brands and suppliers.
          </p>
          <b className="text-dark">Our Mission</b>
          <p>
            Our mission at Forever is to empower customers with
            choice, convenience, and confidence. We’re dedicated to providing a
            seamless shopping experience that exceeds expectations—from
            browsing and ordering to delivery and beyond.
          </p>
        </div>
      </div>

      {/* Title: Why Choose Us */}
      <div className="text-center py-4">
        <hr />
        <h3 className='text-center py-8 text-3xl font-bold text-gray-700' style={{ color: 'gray' }}>
          Why Choose Us
        </h3>
        <hr />
      </div>

      {/* Feature Cards */}
      <div className="row text-secondary mb-5 g-4">
        <div className="col-md-4">
          <div className="border px-4 py-5 h-100 d-flex flex-column gap-2">
            <b className="text-dark">Quality Assurance</b>
            <p>
              We take pride in offering only the highest quality products that
              meet our stringent standards for durability, performance, and value.
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="border px-4 py-5 h-100 d-flex flex-column gap-2">
            <b className="text-dark">Convenience</b>
            <p>
              Our user-friendly website and mobile app make it easy to browse,
              compare, and purchase products on the go.
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="border px-4 py-5 h-100 d-flex flex-column gap-2">
            <b className="text-dark">Exceptional Customer Services</b>
            <p>
              Our dedicated team of customer service representatives is available
              around the clock to assist you with any queries or concerns you may
              have.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default About;
