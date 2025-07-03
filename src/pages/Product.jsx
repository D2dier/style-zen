// src/pages/Product.jsx
import React from "react";
import "../styles/Product.css"; // adjust if needed
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Product() {
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
        <section className="product-section">
          <div className="container">
            <div className="product-container">
              <div className="product-gallery">
                <img
                  src="https://picsum.photos/800/1000?random=21"
                  alt="Linen summer dress in beige with relaxed fit and midi length"
                  className="product-image"
                  loading="lazy"
                />
              </div>
              <div className="product-details">
                <h1 className="product-title">Linen Summer Dress</h1>
                <div className="product-price">$79.99</div>
                <p className="product-description">
                  Our signature linen dress features a relaxed silhouette with
                  subtle gathers at the waist. Made from 100% organic linen for
                  breathable comfort during warm weather.
                </p>

                <div className="product-option">
                  <span className="option-title">Size</span>
                  <div className="size-options">
                    <button className="size-btn active">S</button>
                    <button className="size-btn">M</button>
                    <button className="size-btn">L</button>
                    <button className="size-btn">XL</button>
                  </div>
                </div>

                <div className="product-option">
                  <span className="option-title">Quantity</span>
                  <div className="quantity-selector">
                    <button className="quantity-btn">-</button>
                    <input
                      type="number"
                      defaultValue="1"
                      min="1"
                      className="quantity-input"
                    />
                    <button className="quantity-btn">+</button>
                  </div>
                </div>

                <button className="btn">Add to Cart</button>
              </div>
            </div>

            <div className="product-info">
              <div className="info-section">
                <h3>Product Details</h3>
                <p>
                  - 100% organic linen<br />
                  - Relaxed fit with subtle waist definition<br />
                  - Midi length (hits mid-calf)<br />
                  - Machine wash cold, lay flat to dry<br />
                  - Model is 5'9" wearing size S
                </p>
              </div>

              <div className="info-section">
                <h3>Shipping & Returns</h3>
                <p>
                  Free shipping on all orders over $50. Returns accepted within
                  30 days. Please note that final sale items are not eligible
                  for returns.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="related-products">
          <div className="container">
            <h2 className="section-title">You may also like</h2>
            <div className="products-grid">
              <div className="product-card">
                <img
                  src="https://picsum.photos/400/500?random=22"
                  alt="White linen blouse with puff sleeves"
                  className="product-card-img"
                  loading="lazy"
                />
                <div className="product-card-info">
                  <h3>Linen Blouse</h3>
                  <div className="product-card-price">$49.99</div>
                </div>
              </div>

              <div className="product-card">
                <img
                  src="https://picsum.photos/400/500?random=23"
                  alt="Beige wide-leg linen trousers"
                  className="product-card-img"
                  loading="lazy"
                />
                <div className="product-card-info">
                  <h3>Wide-Leg Trousers</h3>
                  <div className="product-card-price">$59.99</div>
                </div>
              </div>

              <div className="product-card">
                <img
                  src="https://picsum.photos/400/500?random=24"
                  alt="Light blue linen button-down shirt"
                  className="product-card-img"
                  loading="lazy"
                />
                <div className="product-card-info">
                  <h3>Linen Shirt</h3>
                  <div className="product-card-price">$45.99</div>
                </div>
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
