import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/HomePage.css";

function HomePage() {
  /****************************************************
   * CAROUSEL STATE for the "About ELDO-POULTRY" section
   ****************************************************/
  const aboutSlides = [
    {
      heading: "About ELDO-POULTRY",
      subheading: "Experience the Best in Poultry Farming.",
      paragraph: `Transform your poultry shopping experience with ELDO-POULTRY, where we prioritize quality and transparency. 
                  Our commitment to providing healthy chickens and fresh eggs means you can now get all your poultry needs 
                  done straight from our farm to your table.`,
      buttonText: "Explore the Platform",
      cards: [
        {
          title: "Reliable Payment Methods",
          text: "Choose from multiple payment options, ensuring convenience.",
        },
        {
          title: "Tailored Experiences",
          text: "Manage your entire farm setup from one intuitive platform.",
        },
      ],
      backgroundImage:
        "https://media.istockphoto.com/id/1217649450/photo/chicken-or-hen-on-a-green-meadow.jpg?s=612x612&w=0&k=20&c=zRlZTkwoc-aWb3kI10OqlRLbiQw3R3_KUIchNVFgYgw=",
    },
    {
      heading: "About ELDO-POULTRY",
      subheading: "Experience the Best in Poultry Farming.",
      paragraph: `Transform your poultry shopping experience with ELDO-POULTRY, where we prioritize quality and transparency. 
                  Our commitment to providing healthy chickens and fresh eggs means you can now get all your poultry needs 
                  done straight from our farm to your table.`,
      buttonText: "Explore the Platform",
      cards: [
        {
          title: "Your Questions Answered",
          text: "Connect with farmers to answer your queries in real-time.",
        },
        {
          title: "Poultry Care Insights",
          text: "Discover more about our commitment to quality and sustainability.",
        },
      ],
      backgroundImage:
        "https://media.istockphoto.com/id/1217649450/photo/chicken-or-hen-on-a-green-meadow.jpg?s=612x612&w=0&k=20&c=zRlZTkwoc-aWb3kI10OqlRLbiQw3R3_KUIchNVFgYgw=",
    },
  ];

  const [aboutIndex, setAboutIndex] = useState(0);

  const handleAboutNext = () => {
    setAboutIndex((prev) => (prev + 1) % aboutSlides.length);
  };

  const handleAboutPrev = () => {
    setAboutIndex((prev) =>
      prev === 0 ? aboutSlides.length - 1 : prev - 1
    );
  };

  /****************************************************************
   * CAROUSEL STATE for the "Streamlined/Transform Purchasing" section
   ****************************************************************/
  const streamlinedSlides = [
    {
      leftHeading: "Transform Your Poultry Purchasing Journey",
      leftText: `Experience health and simplicity with ELDO-POULTRY. 
                 Where nutrition, delicious eggs and strong, energetic chicks come with ease, 
                 ensuring superior care and peace of mind.`,
      buttonText: "Request a Consultation",
      pagination: "1 / 2",
      rightHeading: "Elevate Your Dining Experience with ELDO-POULTRY",
      rightText: `Crafting your dream poultry experience is now simpler. 
                  For all across your meals by providing you with the finest eggs and chickens, 
                  ensuring great taste and flavor in every bite.`,
      leftImage:
        "https://media.istockphoto.com/id/1217649450/photo/chicken-or-hen-on-a-green-meadow.jpg?s=612x612&w=0&k=20&c=zRlZTkwoc-aWb3kI10OqlRLbiQw3R3_KUIchNVFgYgw=",
    },
    {
      leftHeading: "Streamlined Ordering Process for Fresh Produce",
      leftText: `Select your desired products and watch as your total price is calculated 
                 in real-time. You’ll receive immediate feedback upon your order.`,
      buttonText: "Request a Consultation",
      pagination: "2 / 2",
      rightHeading: "Elevate Your Dining Experience with ELDO-POULTRY",
      rightText: `Crafting your dream poultry experience is now simpler. 
                  For all across your meals by providing you with the finest eggs and chickens, 
                  ensuring great taste and flavor in every bite.`,
      leftImage:
        "https://media.istockphoto.com/id/1217649450/photo/chicken-or-hen-on-a-green-meadow.jpg?s=612x612&w=0&k=20&c=zRlZTkwoc-aWb3kI10OqlRLbiQw3R3_KUIchNVFgYgw=",
    },
  ];

  const [streamIndex, setStreamIndex] = useState(0);

  const handleStreamNext = () => {
    setStreamIndex((prev) => (prev + 1) % streamlinedSlides.length);
  };

  const handleStreamPrev = () => {
    setStreamIndex((prev) =>
      prev === 0 ? streamlinedSlides.length - 1 : prev - 1
    );
  };

  /****************************************************
   * RENDER
   ****************************************************/
  return (
    <div className="eldo-poultry-container">
      {/* =============== NAVBAR =============== */}
      <header className="navbar">
        <div className="navbar-left">
          <Link to="/">
            <h1 className="brand-name">ELDO-POULTRY</h1>
          </Link>
        </div>
        <div className="navbar-right">
          <ul className="nav-links">
            {/* Using Link for Login as per your Navbar formula */}
            <li>
              <Link to="/login">SignUp/LogIn</Link>
            </li>
            {/* Leaving Products link unchanged */}
            <li>
              <a href="#products">Products</a>
            </li>
            <li>
              <a href="#dashboard">Dashboard</a>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
          </ul>
          {/* Using Link for Order Now button */}
          <Link to="/order">
            <button className="order-now-btn">Order Now</button>
          </Link>
        </div>
      </header>

      {/* =============== HERO SECTION =============== */}
      <section className="hero-section">
        <div className="hero-text-area">
          <h2 className="hero-heading">
            Transforming Your Poultry Purchasing Experience
          </h2>
          <p className="hero-paragraph">
            On our platform, quality and transparency come together to ensure
            nutritious, healthy chickens and delicious eggs are right from our
            farm to your table. Discover our diverse range of products,
            including fresh eggs, day-old chicks, and fully grown chickens.
            Each product is carefully transported and dispatched with detailed
            descriptions, making it effortless to navigate your options.
          </p>
          <div className="hero-buttons">
            <button className="contact-us-btn">Contact Us Today</button>
          </div>
          <div className="poultry-perfection">
            <h3>Unlock Poultry Perfection</h3>
            <p>
              Discover a seamless farm-to-table experience with our intuitive
              ordering platform. Select premium products you want and place
              your orders.
            </p>
            <button className="view-products-btn">View Products</button>
          </div>
        </div>
        <div className="hero-image-area">
          <img
            src="https://media.istockphoto.com/id/1217649450/photo/chicken-or-hen-on-a-green-meadow.jpg?s=612x612&w=0&k=20&c=zRlZTkwoc-aWb3kI10OqlRLbiQw3R3_KUIchNVFgYgw="
            alt="Chickens"
            className="hero-image"
          />
        </div>
      </section>

      {/* =============== ABOUT SECTION (CAROUSEL) =============== */}
      <section className="about-carousel-section">
        <div className="about-slide-container">
          <div className="about-slide-content">
            <h2>{aboutSlides[aboutIndex].heading}</h2>
            <h3>{aboutSlides[aboutIndex].subheading}</h3>
            <p>{aboutSlides[aboutIndex].paragraph}</p>
            <button className="explore-products-btn">
              {aboutSlides[aboutIndex].buttonText}
            </button>

            <div className="about-cards-row">
              {aboutSlides[aboutIndex].cards.map((card, idx) => (
                <div className="about-card" key={idx}>
                  <h4>{card.title}</h4>
                  <p>{card.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Navigation */}
          <div className="about-carousel-nav">
            <button onClick={handleAboutPrev}>&lt;</button>
            <span>
              {aboutIndex + 1} / {aboutSlides.length}
            </span>
            <button onClick={handleAboutNext}>&gt;</button>
          </div>
        </div>
      </section>

      {/* =============== STREAMLINED ORDERING (CAROUSEL) =============== */}
      <section className="streamlined-section">
        <div className="streamlined-carousel">
          <div className="streamlined-left">
            <div className="streamlined-image">
              <img
                src={streamlinedSlides[streamIndex].leftImage}
                alt="Streamlined Slide"
              />
            </div>
            <h3>{streamlinedSlides[streamIndex].leftHeading}</h3>
            <p>{streamlinedSlides[streamIndex].leftText}</p>
            <button className="request-consultation-btn">
              {streamlinedSlides[streamIndex].buttonText}
            </button>
            <div className="pagination">
              {streamlinedSlides[streamIndex].pagination}
            </div>
          </div>
          <div className="streamlined-right">
            <h3>{streamlinedSlides[streamIndex].rightHeading}</h3>
            <p>{streamlinedSlides[streamIndex].rightText}</p>
          </div>
        </div>

        {/* Carousel Navigation */}
        <div className="streamlined-carousel-nav">
          <button onClick={handleStreamPrev}>&lt;</button>
          <button onClick={handleStreamNext}>&gt;</button>
        </div>
      </section>

      {/* =============== FARM-FRESH PRODUCTS SECTION =============== */}
      <section className="farm-fresh-section" id="products">
        <div className="farm-fresh-header">
          <div className="offerings-label">Our Offerings</div>
          <h2>Farm-Fresh Products</h2>
          <button className="explore-now-btn">Explore Now</button>
        </div>
        <div className="farm-fresh-cards">
          <div className="farm-card">
            <img
              src="https://media.istockphoto.com/id/1217649450/photo/chicken-or-hen-on-a-green-meadow.jpg?s=612x612&w=0&k=20&c=zRlZTkwoc-aWb3kI10OqlRLbiQw3R3_KUIchNVFgYgw="
              alt="Healthy Chickens"
            />
            <h4>Healthy Chickens</h4>
          </div>
          <div className="farm-card">
            <img
              src="https://media.istockphoto.com/id/1217649450/photo/chicken-or-hen-on-a-green-meadow.jpg?s=612x612&w=0&k=20&c=zRlZTkwoc-aWb3kI10OqlRLbiQw3R3_KUIchNVFgYgw="
              alt="Organic Eggs"
            />
            <h4>Organic Eggs</h4>
          </div>
          <div className="farm-card">
            <img
              src="https://media.istockphoto.com/id/1217649450/photo/chicken-or-hen-on-a-green-meadow.jpg?s=612x612&w=0&k=20&c=zRlZTkwoc-aWb3kI10OqlRLbiQw3R3_KUIchNVFgYgw="
              alt="Day-Old Chicks"
            />
            <h4>Day-Old Chicks</h4>
          </div>
          <div className="farm-card">
            <img
              src="https://media.istockphoto.com/id/1217649450/photo/chicken-or-hen-on-a-green-meadow.jpg?s=612x612&w=0&k=20&c=zRlZTkwoc-aWb3kI10OqlRLbiQw3R3_KUIchNVFgYgw="
              alt="Quality Chickens"
            />
            <h4>Quality Chickens</h4>
          </div>
        </div>
        <p className="farm-fresh-text">
          ELDO-POULTRY ensures you have an effortless shopping experience, from
          exploring premium products like healthy chickens and organic eggs to
          simplified ordering and secure payment options.
        </p>
      </section>

      {/* =============== DISCOVER QUALITY (VIDEO/IMAGE) SECTION =============== */}
      <section className="discover-quality-section">
        <div className="quality-image-container">
          <img
            src="https://media.istockphoto.com/id/1217649450/photo/chicken-or-hen-on-a-green-meadow.jpg?s=612x612&w=0&k=20&c=zRlZTkwoc-aWb3kI10OqlRLbiQw3R3_KUIchNVFgYgw="
            alt="Poultry Farm Interior"
            className="quality-image"
          />
          <div className="play-button">&#9658;</div>
        </div>
        <div className="quality-content">
          <h2>Discover Quality Poultry with ELDO-POULTRY</h2>
          <p>
            Experience something truly amazing when you shop farm-fresh
            offerings, fresh delicious eggs and superior chickens direct from
            our farm to your table.
          </p>
          <div className="stats-row">
            <div className="stat">
              <h3>350</h3>
              <p>Quality Chickens Offered</p>
            </div>
            <div className="stat">
              <h3>1200</h3>
              <p>Nutritional Eggs Sold</p>
            </div>
            <div className="stat">
              <h3>400</h3>
              <p>Satisfied Customers</p>
            </div>
            <div className="stat">
              <h3>50+</h3>
              <p>Decades in the Industry</p>
            </div>
          </div>
        </div>
      </section>

      {/* =============== 3-CARD SECTION =============== */}
      <section className="three-card-section">
        <div className="three-card">
          <h3>Transform Your Poultry Purchasing Experience</h3>
          <p>
            Discover poultry satisfaction with ELDO-POULTRY. Our farm ensures
            you get healthy chickens and delicious eggs, ensuring every product
            reaches your table with care and integrity.
          </p>
          <button>Explore Our Offerings</button>
        </div>
        <div className="three-card">
          <h3>Easily Browse Our Product Categories</h3>
          <p>
            Our platform features an intuitive browsing system to help you find
            the perfect products in no time.
          </p>
          <button>Start Ordering Today</button>
        </div>
        <div className="three-card">
          <h3>Simplified Ordering Process</h3>
          <p>
            Seamlessly place your desired products with dynamic price
            calculations in real-time. Confirmation of your order is immediate,
            ensuring your purchase interactions are frictionless.
          </p>
          <button>Learn More About Our Services</button>
        </div>
      </section>

      {/* =============== ELEVATE YOUR POULTRY SECTION =============== */}
      <section className="elevate-section">
        <div className="elevate-text">
          <h2>Elevate Your Poultry Experience with ELDO-POULTRY</h2>
          <h3>Why Choose Us for Your Poultry Needs?</h3>
          <p>
            Enjoy the healthiest chickens and freshest eggs delivered straight
            from our farm. With our ever-expanding catalog, choose a variety of
            products—nutritious eggs, lively day-old chicks, and fully grown
            chickens—with real-time pricing options and detailed descriptions.
          </p>
        </div>
        <div className="elevate-image">
          <img
            src="https://media.istockphoto.com/id/1217649450/photo/chicken-or-hen-on-a-green-meadow.jpg?s=612x612&w=0&k=20&c=zRlZTkwoc-aWb3kI10OqlRLbiQw3R3_KUIchNVFgYgw="
            alt="Chicks on the Farm"
          />
        </div>
      </section>

      {/* =============== FAQ SECTION =============== */}
      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-item">
          <button className="faq-question">
            How Do I Place an Order for Poultry Products?
          </button>
        </div>
        <div className="faq-item">
          <button className="faq-question">What Products Do You Offer?</button>
        </div>
        <div className="faq-item">
          <button className="faq-question">
            How Is My Information Secured?
          </button>
        </div>
        <div className="faq-item">
          <button className="faq-question">Can I Get Help with My Order?</button>
        </div>
        <div className="faq-item">
          <button className="faq-question">
            How Can ELDO-POULTRY Enhance My Meals?
          </button>
        </div>
        <div className="faq-item">
          <button className="faq-question">
            What Should I Know Before Placing an Order?
          </button>
        </div>
      </section>

      {/* =============== COMMUNITY SECTION =============== */}
      <section className="community-section">
        <h2>Discover Quality Poultry Products in Your Community</h2>
        <p>
          Experience the pinnacle of freshness with ELDO-POULTRY dedicated to
          delivering nutritious eggs and chickens right to your doorstep. Our
          platform ensures you browse an extensive selection of products,
          ensuring the highest quality while supporting sustainable farming
          practices. Enjoy effortless meal planning, a minimal ordering system,
          and real-time assistance, making your shopping experience smooth and
          enjoyable.
        </p>
        <h3>Connect with ELDO-POULTRY Today!</h3>
        <div className="community-images">
          <img
            src="https://media.istockphoto.com/id/1217649450/photo/chicken-or-hen-on-a-green-meadow.jpg?s=612x612&w=0&k=20&c=zRlZTkwoc-aWb3kI10OqlRLbiQw3R3_KUIchNVFgYgw="
            alt="Community Chicken 1"
          />
          <img
            src="https://media.istockphoto.com/id/1217649450/photo/chicken-or-hen-on-a-green-meadow.jpg?s=612x612&w=0&k=20&c=zRlZTkwoc-aWb3kI10OqlRLbiQw3R3_KUIchNVFgYgw="
            alt="Community Chicken 2"
          />
          <img
            src="https://media.istockphoto.com/id/1217649450/photo/chicken-or-hen-on-a-green-meadow.jpg?s=612x612&w=0&k=20&c=zRlZTkwoc-aWb3kI10OqlRLbiQw3R3_KUIchNVFgYgw="
            alt="Community Chicken 3"
          />
          <img
            src="https://media.istockphoto.com/id/1217649450/photo/chicken-or-hen-on-a-green-meadow.jpg?s=612x612&w=0&k=20&c=zRlZTkwoc-aWb3kI10OqlRLbiQw3R3_KUIchNVFgYgw="
            alt="Community Chicken 4"
          />
          <img
            src="https://media.istockphoto.com/id/1217649450/photo/chicken-or-hen-on-a-green-meadow.jpg?s=612x612&w=0&k=20&c=zRlZTkwoc-aWb3kI10OqlRLbiQw3R3_KUIchNVFgYgw="
            alt="Community Chicken 5"
          />
        </div>
      </section>

      {/* =============== FOOTER =============== */}
      <footer className="footer" id="contact">
        <div className="footer-top">
          <div className="footer-left">
            <h2>ELDO-POULTRY</h2>
            <p>
              At ELDO-POULTRY, we focus on quality poultry farming. Our
              dedication to healthy chickens and delicious eggs ensures that you
              receive the best products straight from our farm.
            </p>
            <p>
              <strong>Phone:</strong> +254 741937056
            </p>
            <p>
              <strong>Email:</strong> eldopoultry254@gmail.com
            </p>
            <p>
              <strong>Address:</strong> 2229-30100, Eldoret
            </p>
          </div>
          <div className="footer-links">
            <div className="quick-links">
              <h3>Quick Links</h3>
              <ul>
                <li>Home</li>
                <li>Products</li>
                <li>Order</li>
                <li>Login</li>
                <li>Sign Up</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className="user-portal">
              <h3>User Portal</h3>
              <ul>
                <li>Dashboard</li>
              </ul>
            </div>
            <div className="follow-us">
              <h3>Follow Us</h3>
              <div className="social-icons">
                <a href="#">
                  <i className="fa fa-facebook" />
                </a>
                <a href="#">
                  <i className="fa fa-twitter" />
                </a>
                <a href="#">
                  <i className="fa fa-instagram" />
                </a>
                <a href="#">
                  <i className="fa fa-youtube" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 ELDO-POULTRY. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
