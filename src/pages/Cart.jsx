import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar'; // if you have one
import './Cart.css'; // your cart-specific styles

export default function Cart() {
  return (
    <div className="cart-page">
      <header>
        <div className="container">
          <Navbar />
        </div>
      </header>

      <main>
        <section className="cart-section">
          <div className="container">
            <h1 className="cart-title">Your Shopping Cart</h1>

            <div className="cart-content">
              <table className="cart-items">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td data-label="Product">
                      <div className="cart-item">
                        <img src="https://picsum.photos/200/200?random=31" alt="Linen Summer Dress" className="cart-item-img" loading="lazy" />
                        <div className="cart-item-info">
                          <h3>Linen Summer Dress</h3>
                          <p>Size: M</p>
                        </div>
                      </div>
                    </td>
                    <td data-label="Price">$79.99</td>
                    <td data-label="Quantity">
                      <div className="quantity-selector">
                        <button className="quantity-btn">-</button>
                        <input type="number" defaultValue="1" min="1" className="quantity-input" />
                        <button className="quantity-btn">+</button>
                      </div>
                    </td>
                    <td data-label="Total">$79.99</td>
                    <td>
                      <button className="remove-item">Remove</button>
                    </td>
                  </tr>

                  <tr>
                    <td data-label="Product">
                      <div className="cart-item">
                        <img src="https://picsum.photos/200/200?random=32" alt="Linen Blouse" className="cart-item-img" loading="lazy" />
                        <div className="cart-item-info">
                          <h3>Linen Blouse</h3>
                          <p>Size: S</p>
                        </div>
                      </div>
                    </td>
                    <td data-label="Price">$49.99</td>
                    <td data-label="Quantity">
                      <div className="quantity-selector">
                        <button className="quantity-btn">-</button>
                        <input type="number" defaultValue="2" min="1" className="quantity-input" />
                        <button className="quantity-btn">+</button>
                      </div>
                    </td>
                    <td data-label="Total">$99.98</td>
                    <td>
                      <button className="remove-item">Remove</button>
                    </td>
                  </tr>
                </tbody>
              </table>

              <div className="cart-summary">
                <h3>Cart Summary</h3>
                <div className="summary-row">
                  <span>Subtotal</span>
                  <span>$179.97</span>
                </div>
                <div className="summary-row">
                  <span>Tax (7%)</span>
                  <span>$12.60</span>
                </div>
                <div className="summary-row summary-total">
                  <span>Total</span>
                  <span>$192.57</span>
                </div>
                <Link to="/checkout" className="btn">Proceed to Checkout</Link>
              </div>

              <div className="cart-actions">
                <Link to="/shop" className="continue-shopping">
                  <i className="fas fa-arrow-left"></i> Continue Shopping
                </Link>
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
            <p>&copy; 2023 StyleZen. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
