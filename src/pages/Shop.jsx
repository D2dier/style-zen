// src/pages/Shop.jsx
import React from "react";
import "../styles/Shop.css"; // adjust path if needed
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Shop() {
  return (
    <>
      <header>
        <div className="container">
          <nav>
            <a href="/" className="logo">StyleZen</a>
            <div className="nav-links">
              <a href="/">Home</a>
              <a href="shop" className="active">Shop</a>
              <a href="cart">Cart</a>
            </div>
          </nav>
        </div>
      </header>

      <main>
        <section className="page-header">
          <div className="container">
            <h1>Our Collection</h1>
            <p>
              Discover our carefully curated selection of minimalist clothing
              designed for comfort, quality, and timeless style.
            </p>
          </div>
        </section>

        <section className="products-section">
          <div className="container">
            <div className="products-grid">

              {/* Product 1 */}
              <div className="product-card">
                <img
                  src="https://picsum.photos/400/500?random=11"
                  alt="Minimalist white cotton t-shirt with round neck"
                  className="product-img"
                  loading="lazy"
                />
                <div className="product-info">
                  <h3>Essential White Tee</h3>
                  <div className="product-price">$29.99</div>
                  <div className="btn-group">
                    <a href="#" className="btn">Add to Cart</a>
                    <a href="#" className="btn btn-outline">View Details</a>
                  </div>
                </div>
              </div>

              {/* Product 2 */}
              <div className="product-card">
                <img
                  src="https://picsum.photos/400/500?random=12"
                  alt="Beige linen relaxed-fit trousers with belt loops"
                  className="product-img"
                  loading="lazy"
                />
                <div className="product-info">
                  <h3>Linen Trousers</h3>
                  <div className="product-price">$59.99</div>
                  <div className="btn-group">
                    <a href="#" className="btn">Add to Cart</a>
                    <a href="#" className="btn btn-outline">View Details</a>
                  </div>
                </div>
              </div>

              {/* Product 3 */}
              <div className="product-card">
                <img
                  src="https://picsum.photos/400/500?random=13"
                  alt="Oversized blush pink cotton sweater with ribbed cuffs"
                  className="product-img"
                  loading="lazy"
                />
                <div className="product-info">
                  <h3>Oversized Sweater</h3>
                  <div className="product-price">$49.99</div>
                  <div className="btn-group">
                    <a href="#" className="btn">Add to Cart</a>
                    <a href="#" className="btn btn-outline">View Details</a>
                  </div>
                </div>
              </div>

              {/* Product 4 */}
              <div className="product-card">
                <img
                  src="https://picsum.photos/400/500?random=14"
                  alt="Black midi dress with square neckline and puff sleeves"
                  className="product-img"
                  loading="lazy"
                />
                <div className="product-info">
                  <h3>Midi Dress</h3>
                  <div className="product-price">$69.99</div>
                  <div className="btn-group">
                    <a href="#" className="btn">Add to Cart</a>
                    <a href="#" className="btn btn-outline">View Details</a>
                  </div>
                </div>
              </div>

              {/* Product 5 */}
              <div className="product-card">
                <img
                  src="https://picsum.photos/400/500?random=15"
                  alt="Light beige cotton shirt with button-down collar"
                  className="product-img"
                  loading="lazy"
                />
                <div className="product-info">
                  <h3>Classic Shirt</h3>
                  <div className="product-price">$45.99</div>
                  <div className="btn-group">
                    <a href="#" className="btn">Add to Cart</a>
                    <a href="#" className="btn btn-outline">View Details</a>
                  </div>
                </div>
              </div>

              {/* Product 6 */}
              <div className="product-card">
                <img
                  src="https://picsum.photos/400/500?random=16"
                  alt="High-waisted cream-colored wide-leg pants"
                  className="product-img"
                  loading="lazy"
                />
                <div className="product-info">
                  <h3>Wide-Leg Pants</h3>
                  <div className="product-price">$54.99</div>
                  <div className="btn-group">
                    <a href="#" className="btn">Add to Cart</a>
                    <a href="#" className="btn btn-outline">View Details</a>
                  </div>
                </div>
              </div>

              {/* Product 7 */}
              <div className="product-card">
                <img
                  src="https://picsum.photos/400/500?random=17"
                  alt="Soft grey cashmere blend turtleneck sweater"
                  className="product-img"
                  loading="lazy"
                />
                <div className="product-info">
                  <h3>Cashmere Turtleneck</h3>
                  <div className="product-price">$79.99</div>
                  <div className="btn-group">
                    <a href="#" className="btn">Add to Cart</a>
                    <a href="#" className="btn btn-outline">View Details</a>
                  </div>
                </div>
              </div>

              {/* Product 8 */}
              <div className="product-card">
                <img
                  src="https://picsum.photos/400/500?random=18"
                  alt="Lightweight sand-colored trench coat with belt"
                  className="product-img"
                  loading="lazy"
                />
                <div className="product-info">
                  <h3>Trench Coat</h3>
                  <div className="product-price">$89.99</div>
                  <div className="btn-group">
                    <a href="#" className="btn">Add to Cart</a>
                    <a href="#" className="btn btn-outline">View Details</a>
                  </div>
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
