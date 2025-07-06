import React, { useState } from "react";
import "../styles/Confirmation.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";
import { useCart } from '../context/CartContext';
import Navbar from "../components/Navbar";

export default function Confirmation() {
  const [feedback, setFeedback] = useState({
    experience: 0,
    ease: 0,
    satisfaction: 0,
    comments: "",
  });

  const handleStarClick = (field, value) => {
    setFeedback((prev) => ({ ...prev, [field]: value }));
  };

  const { clearCart } = useCart();

  const handleCommentsChange = (e) => {
    setFeedback((prev) => ({ ...prev, comments: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Feedback submitted:", feedback);
    alert("Thank you for your feedback!");
    clearCart();

    window.location.href = "/"; // redirect to home
  };

  const renderStars = (field, value) => {
    return [...Array(5)].map((_, index) => {
      const starValue = index + 1;
      return (
        <i
          key={starValue}
          className={`fas fa-star ${starValue <= value ? "selected" : ""}`}
          onClick={() => handleStarClick(field, starValue)}
          style={{ cursor: "pointer", color: starValue <= value ? "#E8B4B8" : "#ccc", marginRight: "5px" }}
        ></i>
      );
    });
  };

  return (
    <>
      <Navbar/>

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

            <p className="delivery-info">
              Your order will be shipped <strong>within 1-2 business days</strong>.
            </p>

            <div className="feedback-section">
              <h3>Please let us know how we did by filling out the following survey:</h3>
              <form onSubmit={handleSubmit} className="feedback-form">
                <div className="feedback-question">
                  <label>How was your overall experience?</label>
                  <div>{renderStars("experience", feedback.experience)}</div>
                </div>

                <div className="feedback-question">
                  <label>How easy was it to complete your purchase?</label>
                  <div>{renderStars("ease", feedback.ease)}</div>
                </div>

                <div className="feedback-question">
                  <label>How satisfied are you with the products?</label>
                  <div>{renderStars("satisfaction", feedback.satisfaction)}</div>
                </div>

                <div className="feedback-question">
                  <label>Additional Comments:</label>
                  <textarea
                    rows="4"
                    placeholder="Let us know if you have any feedback!"
                    value={feedback.comments}
                    onChange={handleCommentsChange}
                  ></textarea>
                </div>

                <button type="submit" className="btn">Submit Feedback</button>
              </form>
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
