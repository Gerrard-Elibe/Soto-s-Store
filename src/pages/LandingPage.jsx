import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import './LandingPage.css';

// Import images
import japanese7 from '../../public/japanese7.jpg';
import japanese10 from '../../public/japanese10.jpg';
import japanese11 from '../../public/japanese11.jpg';
import japanese12 from '../../public/japanese12.jpg';
import japanese14 from '../../public/japanese14.jpg';
import japanese16 from '../../public/japanese16.jpg';
import japanese8 from '../../public/japanese8.jpg';
import japanese9 from '../../public/japanese9.jpg';
import japanesechair from '../../public/japanesechair.jpeg';
import japanesechef from '../../public/japanesechef.jpg';
import japanesedrill from '../../public/japanesedrill.jpg';
import japanesedrill3 from '../../public/japanesedrill3.jpg';
import newimage from '../../public/newimage.jpg';
import japaneselogo from '../../public/japaneselogo.jpg';
import japaneselook from '../../public/japaneselook.jpg';
import japanesemenu from '../../public/japanesemenu.jpg';
import japanesesea from '../../public/japanesesea.jpg';
import japaneseseafood from '../../public/japaneseseafood.jpg';
import japanesetable from '../../public/japanesetable.jpeg';

import AOS from 'aos';
import 'aos/dist/aos.css';

function LandingPage() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="landing-page">
      <Navbar />

      {/* Hero Section */}
      <section className="hero" style={{ backgroundImage: `url(${japaneselook})` }}>
        <div className="overlay">
          <img src={japaneselogo} alt="Soto's Store Logo" className="store-logo" />
          <h1>Welcome to Soto's Store</h1>
          <p>Experience Authentic Japanese Cuisine. Taste the Tradition.</p>
          <div className="cta-buttons">
            <a href="/apply" className="cta-btn">Join Our Team</a>
            <a href="/menu" className="cta-btn">View Menu</a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about" data-aos="fade-up">
        <h2>About Us</h2>
        <p>
          At Soto's Store, we take pride in delivering authentic flavors straight from Japan.
          Our chefs bring decades of culinary expertise to every dish, using only the freshest ingredients.
          Whether you're craving sushi, ramen, or seafood, we promise an unforgettable dining experience.
        </p>
      </section>

      {/* Featured Chef Section */}
      <section className="featured-chef" data-aos="fade-up">
        <h2>Meet Our Master Chef</h2>
        <div className="chef-profile">
          <img src={japanesechef} alt="Master Chef" className="chef-image" />
          <div className="chef-bio">
            <h3>Chef Satoshi Tanaka</h3>
            <p>
              With over 20 years of culinary excellence in Tokyo and Kyoto, Chef Satoshi brings the true
              essence of Japanese gastronomy to Soto's Store. His passion, creativity, and mastery turn
              every meal into a work of art.
            </p>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="image-gallery">
        {[japanese7, japanese10, japanese11, japanese12, japanese14, japanesechef, japaneselook, japanesemenu, japaneseseafood, japanesetable, japanesesea, newimage, japanesedrill3, japanesedrill, japanese9, japanesechair, japanese8, japanese16].map((img, idx) => (
          <div className="image-container" key={idx} data-aos="zoom-in">
            <img src={img} alt={`Gallery Image ${idx + 1}`} className="image" />
          </div>
        ))}
      </section>

      {/* Testimonials */}
      <section className="testimonials" data-aos="fade-up">
        <h2>What Our Customers Say</h2>
        <div className="testimonial-list">
          <div className="testimonial">
            <p>"An unforgettable dining experience! I felt like I was in Tokyo." - <strong>Maria R.</strong></p>
          </div>
          <div className="testimonial">
            <p>"Best sushi I’ve ever tasted! Amazing atmosphere." - <strong>Liam K.</strong></p>
          </div>
          <div className="testimonial">
            <p>"Friendly staff and authentic flavors. Highly recommend!" - <strong>Sarah W.</strong></p>
          </div>
        </div>
      </section>

      {/* Menu Preview */}
      <section className="menu-preview" data-aos="fade-up">
        <h2>Our Signature Dishes</h2>
        <div className="menu-items">
          <div className="menu-item">
            <img src={japaneseseafood} alt="Seafood Platter" />
            <h3>Seafood Platter</h3>
          </div>
          <div className="menu-item">
            <img src={japanesemenu} alt="Sushi Roll" />
            <h3>Sushi Special</h3>
          </div>
          <div className="menu-item">
            <img src={japanese12} alt="Grill" />
            <h3>Authentic Grill</h3>
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="location" data-aos="fade-up">
        <h2>Find Us</h2>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18..." 
          width="100%" 
          height="300" 
          style={{ border: 0 }}
          allowFullScreen="" 
          loading="lazy"
          title="Soto's Store Location"
        ></iframe>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Soto's Store. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default LandingPage;
