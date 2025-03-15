// src/pages/HomePage.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/HomePage.css";

// Responsive NavBar Component
function NavBar() {
  const [mobileMenuActive, setMobileMenuActive] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuActive((prev) => !prev);
  };

  return (
    <nav className="navbar">
      <div className="brand-name">
        <Link to="/">ELDO-POULTRY</Link>
      </div>
      {/* Desktop nav items */}
      <div className="nav-items desktop-only">
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
          <li>
            <Link to="/order">Place Order</Link>
          </li>
        </ul>
      </div>
      {/* Hamburger icon for mobile */}
      <div className="menu-toggle mobile-only" onClick={toggleMobileMenu}>
        <span>&#9776;</span>
      </div>
      {/* Mobile menu */}
      {mobileMenuActive && (
        <div className="mobile-menu">
          <ul className="nav-links">
            <li>
              <Link to="/" onClick={toggleMobileMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/login" onClick={toggleMobileMenu}>
                Login
              </Link>
            </li>
            <li>
              <Link to="/signup" onClick={toggleMobileMenu}>
                Sign Up
              </Link>
            </li>
            <li>
              <Link to="/order" onClick={toggleMobileMenu}>
                Place Order
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

function HomePage() {
  // Carousel state for About ELDO-POULTRY
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

  // Carousel state for Streamlined/Transform Purchasing
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
        "https://t4.ftcdn.net/jpg/01/80/06/15/360_F_180061581_X2dk6rx8IApmWMBIIO0wjjPX1A99iYn5.jpg",
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
        "https://files.ekmcdn.com/654da0/images/chicken-live-insect-food-pack-723-p.png",
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

  // FAQ Accordion
  const faqData = [
    {
      question: "How Do I Place an Order for Poultry Products?",
      answer:
        "Placing an order is easy! Simply navigate to our Order page, choose your desired products, specify quantities, and let our system calculate the total for you in real-time. Then confirm your order and choose a payment method.",
    },
    {
      question: "What Products Do You Offer?",
      answer:
        "Our farm boasts a variety of premium products including nutrient-rich eggs, day-old chicks, and fully grown chickens. Each product comes with thorough descriptions and real-time pricing visibility on our Products page.",
    },
    {
      question: "How Is My Information Secured?",
      answer:
        "We take security seriously. Our site uses encryption and authentication employing robust methods ensuring that your personal information is fully protected while you shop on our website.",
    },
    {
      question: "Can I Get Help with My Order?",
      answer:
        "Yes! We have a dedicated team here to assist you with questions regarding product selection, the ordering process, and delivery. Feel free to reach out anytime.",
    },
    {
      question: "How Can ELDO-POULTRY Enhance My Meals?",
      answer:
        "We provide fresh, nutritious chickens and eggs, making it easier for you to whip up delicious and healthy meals. Enjoy the best flavors and quality in every bite.",
    },
    {
      question: "What Should I Know Before Placing an Order?",
      answer:
        "It's important to review our product categories clearly and understand the specific types and ages of your chicks and chickens. Our Product page provides detailed information for an informed purchase.",
    },
  ];
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const toggleFaq = (index) => {
    setOpenFaqIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  // Contact modal state
  const [showContactModal, setShowContactModal] = useState(false);

  // Scroll to offerings section
  const scrollToProducts = () => {
    const section = document.getElementById("products");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Open WhatsApp with pre-typed message
  const openWhatsApp = () => {
    const message = encodeURIComponent("Hello! I would like to consult about your products.");
    const url = `https://api.whatsapp.com/send?phone=254741937056&text=${message}`;
    window.open(url, "_blank");
  };

  // Close contact modal when clicking outside modal content
  const handleModalOverlayClick = (e) => {
    if (e.target.className === "modal") {
      setShowContactModal(false);
    }
  };

  return (
    <div className="eldo-poultry-container">
      {/* NAVBAR */}
      <NavBar />

      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-text-area">
          <h2 className="hero-heading">
            Transforming Your Poultry Purchasing Experience
          </h2>
          <p className="hero-paragraph">
            On our platform, quality and transparency come together to ensure nutritious, healthy chickens and delicious eggs are right from our farm to your table. Discover our diverse range of products, including fresh eggs, day-old chicks, and fully grown chickens. Each product is carefully transported and dispatched with detailed descriptions, making it effortless to navigate your options.
          </p>
          <div className="hero-buttons">
            <button className="contact-us-btn" onClick={() => setShowContactModal(true)}>
              Contact Us Today
            </button>
          </div>
          <div className="poultry-perfection">
            <h3>Unlock Poultry Perfection</h3>
            <p>
              Discover a seamless farm-to-table experience with our intuitive ordering platform. Select premium products you want and place your orders.
            </p>
            <button className="view-products-btn" onClick={scrollToProducts}>
              View Products
            </button>
          </div>
        </div>
        <div className="hero-image-area">
          <img
            src="https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/630e6515-002a-45f3-9516-2387c64f3e00/public"
            alt="Chickens"
            className="hero-image"
          />
        </div>
      </section>

      {/* CONTACT MODAL */}
      {showContactModal && (
        <div className="modal" onClick={handleModalOverlayClick}>
          <div className="modal-content contact-modal">
            <h1>Contact Information</h1>
            <p><strong>Phone:</strong> +254 741937056</p>
            <p><strong>Email:</strong> eldopoultry254@gmail.com</p>
            <p><strong>WhatsApp:</strong> +254 741937056</p>
            <p>
              <strong>TikTok:</strong>{" "}
              <a href="https://www.tiktok.com/@eldopoultry" target="_blank" rel="noopener noreferrer">
                @eldopoultry
              </a>
            </p>
            <p><strong>Address:</strong> 2229-30100, Eldoret</p>
          </div>
        </div>
      )}

      {/* ABOUT SECTION (CAROUSEL) */}
      <section className="about-carousel-section">
        <div className="about-slide-container">
          <div className="about-slide-content">
            <h2>{aboutSlides[aboutIndex].heading}</h2>
            <h3>{aboutSlides[aboutIndex].subheading}</h3>
            <p>{aboutSlides[aboutIndex].paragraph}</p>
            <button className="explore-products-btn" onClick={scrollToProducts}>
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
          <div className="about-carousel-nav">
            <button onClick={handleAboutPrev}>&lt;</button>
            <span>
              {aboutIndex + 1} / {aboutSlides.length}
            </span>
            <button onClick={handleAboutNext}>&gt;</button>
          </div>
        </div>
      </section>

      {/* STREAMLINED ORDERING (CAROUSEL) */}
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
            <button
              className="request-consultation-btn"
              onClick={openWhatsApp}
            >
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
        <div className="streamlined-carousel-nav">
          <button onClick={handleStreamPrev}>&lt;</button>
          <button onClick={handleStreamNext}>&gt;</button>
        </div>
      </section>

      {/* FARM-FRESH PRODUCTS SECTION */}
      <section className="farm-fresh-section" id="products">
        <div className="farm-fresh-header">
          <div className="offerings-label">Our Offerings</div>
          <h2>Farm-Fresh Products</h2>
          <button className="explore-now-btn" onClick={scrollToProducts}>
            Explore Now
          </button>
        </div>
        <div className="farm-fresh-cards">
          <div className="farm-card">
            <img
              src="https://files.ekmcdn.com/654da0/images/chicken-live-insect-food-pack-723-p.png"
              alt="Healthy Chickens"
            />
            <h4>Healthy Chickens</h4>
          </div>
          <div className="farm-card">
            <img
              src="https://ganico.co.za/wp-content/uploads/2020/11/Farm-Eggs-04.jpg"
              alt="Organic Eggs"
            />
            <h4>Organic Eggs</h4>
          </div>
          <div className="farm-card">
            <img
              src="https://www.geldofpoultry.com/media/pages/day-old-chicks/644f31ddb7-1687438190/layer-55.jpg"
              alt="Day-Old Chicks"
            />
            <h4>Day-Old Chicks</h4>
          </div>
          <div className="farm-card">
            <img
              src="https://walktoeat.com/wp-content/uploads/2020/08/free-range-chickens.jpg"
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

      {/* THREE-CARD SECTION */}
      <section className="three-card-section">
        <div className="three-card">
          <h3>Transform Your Poultry Purchasing Experience</h3>
          <p>
            Discover poultry satisfaction with ELDO-POULTRY. Our farm ensures you
            get healthy chickens and delicious eggs, ensuring every product reaches
            your table with care and integrity.
          </p>
          <button onClick={scrollToProducts}>Explore Our Offerings</button>
        </div>
        <div className="three-card">
          <h3>Easily Browse Our Product Categories</h3>
          <p>
            Our platform features an intuitive browsing system to help you find the
            perfect products in no time.
          </p>
          <Link to="/order">
            <button>Start Ordering Today</button>
          </Link>
        </div>
        <div className="three-card">
          <h3>Simplified Ordering Process</h3>
          <p>
            Seamlessly place your desired products with dynamic price calculations
            in real-time. Confirmation of your order is immediate, ensuring your
            purchase interactions are frictionless.
          </p>
          <button onClick={openWhatsApp}>
            Learn More About Our Services
          </button>
        </div>
      </section>

      {/* ELEVATE YOUR POULTRY SECTION */}
      <section className="elevate-section">
        <div className="elevate-text">
          <h2>Elevate Your Poultry Experience with ELDO-POULTRY</h2>
          <h3>Why Choose Us for Your Poultry Needs?</h3>
          <p>
            Enjoy the healthiest chickens and freshest eggs delivered straight from
            our farm. With our ever-expanding catalog, choose a variety of products—
            nutritious eggs, lively day-old chicks, and fully grown chickens—with
            real-time pricing options and detailed descriptions.
          </p>
        </div>
        <div className="elevate-image">
          <img
            src="https://cdn.britannica.com/18/137318-050-29F7072E/rooster-Rhode-Island-Red-roosters-chicken-domestication.jpg"
            alt="Chicks on the Farm"
          />
        </div>
      </section>

      {/* FAQ SECTION (ACCORDION) */}
      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        {faqData.map((faq, index) => (
          <div key={index} className="faq-item">
            <button className="faq-question" onClick={() => toggleFaq(index)}>
              {faq.question}
              <span className="faq-arrow">
                {openFaqIndex === index ? "▲" : "▼"}
              </span>
            </button>
            {openFaqIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </section>

      {/* COMMUNITY SECTION */}
      <section className="community-section">
        <h2>Discover Quality Poultry Products in Your Community</h2>
        <p>
          Experience the pinnacle of freshness with ELDO-POULTRY dedicated to
          delivering nutritious eggs and chickens right to your doorstep. Our
          platform ensures you browse an extensive selection of products, ensuring
          the highest quality while supporting sustainable farming practices.
          Enjoy effortless meal planning, a minimal ordering system, and real-time
          assistance, making your shopping experience smooth and enjoyable.
        </p>
        <h3>Connect with ELDO-POULTRY Today!</h3>
        <div className="community-images">
          <img
            src="https://www.geldofpoultry.com/media/pages/day-old-chicks/644f31ddb7-1687438190/layer-55.jpg"
            alt="Community Chicken 1"
          />
          <img
            src="https://walktoeat.com/wp-content/uploads/2020/08/free-range-chickens.jpg"
            alt="Community Chicken 2"
          />
          <img
            src="https://cdn.britannica.com/18/137318-050-29F7072E/rooster-Rhode-Island-Red-roosters-chicken-domestication.jpg"
            alt="Community Chicken 3"
          />
          <img
            src="https://media.istockphoto.com/id/1217649450/photo/chicken-or-hen-on-a-green-meadow.jpg?s=612x612&w=0&k=20&c=zRlZTkwoc-aWb3kI10OqlRLbiQw3R3_KUIchNVFgYgw="
            alt="Community Chicken 4"
          />
          <img
            src="https://t4.ftcdn.net/jpg/01/80/06/15/360_F_180061581_X2dk6rx8IApmWMBIIO0wjjPX1A99iYn5.jpg"
            alt="Community Chicken 5"
          />
        </div>
      </section>

      {/* FOOTER (3 ROWS) */}
      <footer className="footer" id="contact">
        {/* Row 1: Brand and description */}
        <div className="footer-row footer-top">
          <h2>ELDO-POULTRY</h2>
          <p>
            At ELDO-POULTRY, we focus on quality poultry farming. Our dedication to healthy
            chickens and delicious eggs ensures that you receive the best products straight from
            our farm.
          </p>
        </div>
        {/* Row 2: Contact information */}
        <div className="footer-row contacts">
          <p>
            <strong>Phone:</strong> +254 741937056
          </p>
          <p>
            <strong>Email:</strong> eldopoultry254@gmail.com
          </p>
          <p>
            <strong>WhatsApp:</strong> +254 741937056
          </p>
          <p>
            <strong>TikTok:</strong>{" "}
            <a href="https://www.tiktok.com/@eldopoultry" target="_blank" rel="noopener noreferrer">
              @eldopoultry
            </a>
          </p>
          <p>
            <strong>Address:</strong> 2229-30100, Eldoret
          </p>
        </div>
        {/* Row 3: Quick Links */}
        <div className="footer-row quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/order">Order</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
