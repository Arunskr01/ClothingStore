import { assets } from '../assets/assets';
const About = () => {
  return (
    <div className="container py-4">
      {/* Title: About Us */}
      <div className="text-center pt-4 border-top">
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
            className="img-fluid"
            style={{ maxWidth: '450px', width: '400px' }}
          />
        </div>

        <div className="col-md-6 text-secondary d-flex flex-column justify-content-center gap-3">
          <p>
            Style Mint is a modern clothing brand that blends simplicity with
            sophistication. Focused on timeless design and clean aesthetics,
            Style Mint offers carefully curated fashion essentials for those who value
            effortless style. With subtle colors, sharp cuts, and a minimal vibe,
            it's where fashion meets clarity.
          </p>
          <p>
            Every piece at Style Mint is designed with versatility and comfort
            in mind, making it easy to dress up or down for any occasion. Whether
            you're curating a capsule wardrobe or just love clean lines and modern silhouettes,
            Style Mint helps you express your personal style without the noise—just refined,
            everyday fashion that lasts.

          </p>
          <b className="text-dark">Our Mission</b>
          <p>
            At Style Mint, our mission is to redefine everyday fashion through minimalism. 
            We aim to create clothing that inspires confidence, simplicity, and 
            sustainability—empowering individuals to express themselves through timeless, 
            well-crafted pieces. We believe in quality over quantity, and design that speaks 
            softly but leaves a lasting impression.
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
          <div className="px-4 py-5 h-100 d-flex flex-column gap-2">
            <b className="text-dark">Quality Assurance</b>
            <p>
              We take pride in offering only the highest quality products that
              meet our stringent standards for durability, performance, and value.
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="px-4 py-5 h-100 d-flex flex-column gap-2">
            <b className="text-dark">Convenience</b>
            <p>
              Our user-friendly website and mobile app make it easy to browse,
              compare, and purchase products on the go.
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="px-4 py-5 h-100 d-flex flex-column gap-2">
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
