// src/pages/Checkout.jsx
import React, { useRef } from "react";
import "../styles/Checkout.css"; // adjust path as needed
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { useCart } from '../context/CartContext';



export default function Checkout() {
    const formRef = useRef();
    const navigate = useNavigate();

    const handleCheckout = (e) => {
      e.preventDefault();
      if (formRef.current && formRef.current.checkValidity()) {
        navigate('/confirmation');
      } else {
        alert("Please complete all required fields before placing your order.");
      } 
    };

    const { cartItems, subtotal, tax, total } = useCart();
    const safeItems = cartItems || [];

    const calculateSubtotal = () => {
      return safeItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
    };

    const calculateTax = () => {
      return (calculateSubtotal() * 0.07).toFixed(2); // 7% tax
    };

    const calculateTotal = () => {
      return (parseFloat(calculateSubtotal()) + parseFloat(calculateTax())).toFixed(2);
    };



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
        <section className="checkout-section">
          <div className="container">
            <h1 className="checkout-title">Checkout</h1>

            <div className="checkout-grid">
              <div className="checkout-form">
                <form id="checkoutForm" ref={formRef}>
                  {/* Billing & Shipping Information */}
                  <div className="form-section">
                    <h3>Billing & Shipping Information</h3>

                    <div className="form-group">
                      <label htmlFor="fullName" className="required">Full Name</label>
                      <input type="text" id="fullName" name="fullName" required />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email" className="required">Email Address</label>
                      <input type="email" id="email" name="email" required />
                    </div>

                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input type="tel" id="phone" name="phone" />
                    </div>

                    <div className="form-group">
                      <label htmlFor="address" className="required">Street Address</label>
                      <input type="text" id="address" name="address" required />
                    </div>

                    <div className="form-group">
                      <label htmlFor="city" className="required">City</label>
                      <input type="text" id="city" name="city" required />
                    </div>

                    <div className="form-group">
                      <label htmlFor="province" className="required">Province/State</label>
                      <input type="text" id="province" name="province" required />
                    </div>

                    <div className="form-group">
                      <label htmlFor="postalCode" className="required">Postal/Zip Code</label>
                      <input type="text" id="postalCode" name="postalCode" required />
                    </div>

                    <div className="form-group">
                      <label htmlFor="country" className="required">Country</label>
                      <select id="country" name="country" required>
                        <option value="">Select Country</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="UK">United Kingdom</option>
                        <option value="AU">Australia</option>
                      </select>
                    </div>

                    <div className="checkbox-group">
                      <input type="checkbox" id="sameAsShipping" name="sameAsShipping" />
                      <label htmlFor="sameAsShipping">Billing address same as shipping</label>
                    </div>
                  </div>

                  {/* Payment Information */}
                  <div className="form-section">
                    <h3>Payment Information</h3>

                    <div className="radio-group">
                      <div className="radio-option">
                        <input type="radio" id="creditCard" name="paymentMethod" value="creditCard" defaultChecked />
                        <label htmlFor="creditCard">Credit Card</label>
                      </div>
                      <div className="radio-option">
                        <input type="radio" id="paypal" name="paymentMethod" value="paypal" />
                        <label htmlFor="paypal">PayPal</label>
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="cardName" className="required">Cardholder Name</label>
                      <input type="text" id="cardName" name="cardName" required />
                    </div>

                    <div className="form-group">
                      <label htmlFor="cardNumber" className="required">Card Number</label>
                      <input type="text" id="cardNumber" name="cardNumber" placeholder="1234 5678 9012 3456" required />
                    </div>

                    <div className="card-elements">
                      <div className="form-group">
                        <label htmlFor="expDate" className="required">Expiration Date</label>
                        <input type="text" id="expDate" name="expDate" placeholder="MM/YY" required />
                      </div>
                      <div className="form-group">
                        <label htmlFor="cvv" className="required">CVV</label>
                        <input type="number" id="cvv" name="cvv" placeholder="123" required />
                      </div>
                    </div>
                  </div>
                </form>
              </div>

              <div className="order-summary">
                <h3>Order Summary</h3>

                <div className="order-items">
                  {safeItems.length === 0 ? (
                    <p>Your cart is empty.</p>
                  ) : (
                    safeItems.map((item, index) => (
                      <div className="order-item" key={index}>
                        <span>{item.title} × {item.quantity}</span>
                        <span>${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    ))
                  )}
                </div>


                <div className="order-item">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="order-item">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="order-item">
                  <span>Tax (7%)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="order-item order-total">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>


                <button type="submit" form="checkoutForm" className="btn" onClick={(e) => handleCheckout(e)}>Place Order</button>
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
