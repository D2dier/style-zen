import { Link } from 'react-router-dom';
// import './Home.css'; // Optional: create a Home.css if you want to separate styles
import Navbar from '../components/Navbar';

// src/pages/Home.jsx
import React from "react";
import "../styles/Home.css"; // adjust path as needed
import "@fortawesome/fontawesome-free/css/all.min.css"; // make sure Font Awesome is installed

export default function Home() {
  return (
    <>
      <header>
        <div className="container">
          <nav>
            <a href="/" className="logo">StyleZen</a>
            <div className="nav-links">
              <a href="/">Home</a>
              <a href="shop">Shop</a>
              <a href="cart">Cart</a>
            </div>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container">
            <h1>Express your style with StyleZen</h1>
            <p>
              Discover minimalist, high-quality clothing designed for your
              everyday comfort and elegance.
            </p>
            <a href="shop" className="btn">Shop Now</a>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2 className="section-title">Our Collections</h2>
            <div className="collections-grid">
              <div className="collection-card">
                <img
                  src="https://picsum.photos/400/500?random=1"
                  alt="Minimalist T-shirts collection"
                  className="collection-img"
                  loading="lazy"
                />
                <div className="collection-info">
                  <h3>Essential Tees</h3>
                  <p>Soft, breathable basics for every day</p>
                </div>
              </div>
              <div className="collection-card">
                <img
                  src="https://picsum.photos/400/500?random=2"
                  alt="Relaxed loungewear collection"
                  className="collection-img"
                  loading="lazy"
                />
                <div className="collection-info">
                  <h3>Loungewear</h3>
                  <p>Comfortable styles for relaxing at home</p>
                </div>
              </div>
              <div className="collection-card">
                <img
                  src="https://picsum.photos/400/500?random=3"
                  alt="Elegant dresses collection"
                  className="collection-img"
                  loading="lazy"
                />
                <div className="collection-info">
                  <h3>Dresses</h3>
                  <p>Flowing silhouettes for effortless style</p>
                </div>
              </div>
              <div className="collection-card">
                <img
                  src="https://picsum.photos/400/500?random=4"
                  alt="Sustainable outerwear collection"
                  className="collection-img"
                  loading="lazy"
                />
                <div className="collection-info">
                  <h3>Outerwear</h3>
                  <p>Light layers for transitional weather</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section commitments">
          <div className="container">
            <h2 className="section-title">Our Commitments</h2>
            <div className="commitments-grid">
              <div className="commitment-card">
                <div className="commitment-icon">
                  <i className="fas fa-truck"></i>
                </div>
                <h3>Fast Delivery</h3>
                <p>
                  Get your order within 2-3 business days with our express
                  shipping.
                </p>
              </div>
              <div className="commitment-card">
                <div className="commitment-icon">
                  <i className="fas fa-undo"></i>
                </div>
                <h3>Free Returns</h3>
                <p>
                  Not satisfied? Return within 30 days for free, no questions
                  asked.
                </p>
              </div>
              <div className="commitment-card">
                <div className="commitment-icon">
                  <i className="fas fa-lock"></i>
                </div>
                <h3>Secure Payment</h3>
                <p>
                  Your payment information is processed securely with
                  encryption.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="footer-column">
              <h3>About StyleZen</h3>
              <p>
                Minimalist clothing designed for comfort and sustainability.
              </p>
              <div className="social-links">
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-pinterest-p"></i></a>
              </div>
            </div>
            <div className="footer-column">
              <h3>Quick Links</h3>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="shop">Shop</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Customer Service</h3>
              <ul>
                <li><a href="#">Shipping Policy</a></li>
                <li><a href="#">Returns & Exchanges</a></li>
                <li><a href="#">Size Guide</a></li>
                <li><a href="#">FAQs</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Contact Us</h3>
              <ul>
                <li><i className="fas fa-envelope"></i> hello@stylezen.com</li>
                <li><i className="fas fa-phone"></i> (123) 456-7890</li>
                <li><i className="fas fa-map-marker-alt"></i> 123 Zen Street, CA</li>
              </ul>
            </div>
          </div>
          <div className="copyright">
            <p>&copy; 2025 StyleZen. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
