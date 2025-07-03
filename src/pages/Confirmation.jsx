import React from "react";
import "../styles/Confirmation.css"; // optional if you split the styles out
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";

export default function Confirmation() {
  return (
    <>
      <header>
        <div className="container">
          <nav>
            <Link to="/" className="logo">StyleZen</Link>
            <div className="nav-links">
              <Link to="/">Home</Link>
              <Link to="/shop">Shop</Link>
              <Link to="/cart">Cart</Link>
            </div>
          </nav>
        </div>
      </header>

      <main>
        <section className="confirmation-section">
          <div className="container">
            <div className="confirmation-icon">
              <i className="fas fa-check-circle"></i>
            </div>
            <h1 className="confirmation-title">Thank you for your order!</h1>
            <p className="confirmation-message">
              Your order has been received and is being processed. We'll send you a confirmation email shortly with all the details.
            </p>

            <div className="order-details">
              <div className="order-number">
                Order number: <strong>#STZ-2023-45678</strong>
              </div>

              <div className="customer-info">
                <div className="info-block">
                  <h3>Customer Information</h3>
                  <p>
                    Jane Smith<br />
                    jane.smith@example.com<br />
                    (555) 123-4567
                  </p>
                </div>
                <div className="info-block">
                  <h3>Shipping Address</h3>
                  <p>
                    123 Zen Street<br />
                    Vancouver, BC V6B 1A1<br />
                    Canada
                  </p>
                </div>
              </div>

              <h3>Order Items</h3>
              <div className="order-items">
                <div className="order-item">
                  <span>Linen Summer Dress × 1</span>
                  <span>$79.99</span>
                </div>
                <div className="order-item">
                  <span>Linen Blouse × 2</span>
                  <span>$99.98</span>
                </div>
              </div>

              <div className="order-summary">
                <div className="summary-row">
                  <span>Subtotal</span>
                  <span>$179.97</span>
                </div>
                <div className="summary-row">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="summary-row">
                  <span>Tax (7%)</span>
                  <span>$12.60</span>
                </div>
                <div className="summary-row summary-total">
                  <span>Total</span>
                  <span>$192.57</span>
                </div>
              </div>
            </div>

            <div className="next-steps">
              <p className="delivery-info">
                Your order will be shipped <strong>within 1-2 business days </strong>.
              </p>
              <div className="action-buttons">
                <Link to="/shop" className="btn btn-primary">Continue Shopping</Link>
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
              <p>Minimalist clothing designed for comfort and sustainability.</p>
              <div className="social-links">
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-pinterest-p"></i></a>
              </div>
            </div>
            <div className="footer-column">
              <h3>Quick Links</h3>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/shop">Shop</Link></li>
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
