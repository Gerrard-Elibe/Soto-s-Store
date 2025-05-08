import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-us">
      <div className="about-header">
        <h1>About Soto's Store</h1>
        <p>Your California destination for the finest Japanese cuisine and hospitality</p>
      </div>

      <section className="section origin">
        <h2>Our Origin</h2>
        <p>
          Soto's Store was born out of a deep love for authentic Japanese cuisine and culture. Founded by passionate food enthusiasts, our restaurant has grown from a humble idea to a beloved dining destination. Our chefs bring years of experience from Japan, crafting every dish with precision, heart, and the highest quality ingredients.
        </p>
      </section>

      <section className="section location">
        <h2>Our Location</h2>
        <p>
          Located in the vibrant heart of California, Soto's Store brings the essence of Japan to the West Coast. Our warm and inviting space reflects both traditional Japanese aesthetics and California charm.
        </p>
        <p>
          Whether you're enjoying a quiet evening or celebrating with friends, our location is the perfect place to experience Japanese dining like never before.
        </p>
        <p>
          Visit us at: <strong>123 Japan Street, Downtown Los Angeles, California</strong>
        </p>
      </section>

      <section className="section what-we-do">
        <h2>What We Do</h2>
        <p>
          At Soto's Store, we specialize in delivering a true Japanese dining experience. From fresh sushi and comforting ramen to expertly grilled meats and traditional desserts, every dish is a celebration of flavor and heritage.
        </p>
        <p>
          We also offer catering for special occasions and online ordering for pickup and delivery, ensuring our food can be enjoyed anywhere, anytime.
        </p>
      </section>

      <section className="section what-we-sell">
        <h2>What We Sell</h2>
        <p>
          Our menu includes a wide variety of Japanese dishes, prepared with fresh and authentic ingredients:
        </p>
        <ul>
          <li>Sushi & Sashimi – Fresh, beautifully crafted rolls and cuts</li>
          <li>Tempura – Lightly battered and crispy fried seafood & vegetables</li>
          <li>Ramen & Udon – Flavorful broths with handmade noodles</li>
          <li>Donburi – Hearty rice bowls topped with savory meats</li>
          <li>Grilled Meats – Tender yakitori and more, straight from the grill</li>
          <li>Japanese Sweets – Authentic treats like mochi and dorayaki</li>
        </ul>
      </section>

      <section className="section motto">
        <h2>Our Motto</h2>
        <p>
          “Bringing the Taste of Japan to Your Table” – Our goal is to create unforgettable dining moments with every dish. We blend traditional flavors with California warmth for a unique, satisfying experience.
        </p>
      </section>

      <section className="section inspiration">
        <h2>Our Inspiration</h2>
        <p>
          Soto’s Store is inspired by the Japanese principle of "Omotenashi" – wholehearted hospitality. More than just food, we aim to make every guest feel welcomed, appreciated, and satisfied. We channel the meticulous artistry of Japanese cooking into everything we serve.
        </p>
      </section>

      <section className="section goals">
        <h2>Our Mission</h2>
        <p>
          We're here to offer more than a meal — we provide a complete cultural and culinary experience. Our mission is to:
        </p>
        <ul>
          <li>Serve authentic Japanese dishes using top-quality ingredients</li>
          <li>Create a welcoming space for all our guests</li>
          <li>Promote sustainability through mindful sourcing</li>
          <li>Celebrate diversity through food and community</li>
          <li>Offer opportunities for growth to our team and partners</li>
        </ul>
        <p>
          Whether it’s your first visit or you’re a returning guest, Soto’s Store is here to make every experience memorable.
        </p>
      </section>

      <section className="cta">
        <h2>Join Us or Visit Us Today!</h2>
        <p>
          Passionate about food and service? Apply to join our dedicated team. Or come dine with us and explore the rich, comforting flavors of Japan — right here in California.
        </p>
        <div className="cta-buttons">
          <a href="/apply" className="cta-btn">Join Our Team</a>
          <a href="/contact" className="cta-btn">Contact Us</a>
        </div>
      </section>
    </div>
  );
}

export default About;
