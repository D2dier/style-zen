import { Link } from 'react-router-dom';
import '../styles/Footer.css';

function Footer() {
    return (
      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="footer-column">
              <h3>About StyleZen</h3>
              <p>
                Minimalist clothing designed for comfort and sustainability.
              </p>
              <div className="social-links">
                <button><i className="fab fa-instagram"></i></button>
                <button><i className="fab fa-facebook-f"></i></button>
                <button><i className="fab fa-pinterest-p"></i></button>
              </div>
            </div>
            <div className="footer-column">
              <h3>Quick Links</h3>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/shop">Shop</Link></li>
                <li><button>About Us</button></li>
                <li><button>Contact</button></li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Customer Service</h3>
              <ul>
                <li><button>Shipping Policy</button></li>
                <li><button>Returns & Exchanges</button></li>
                <li><button>Size Guide</button></li>
                <li><button>FAQs</button></li>
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
            <p>&copy; 2025 StyleZen. All rights reserved. | Website by
                <a className="avery" href="https://didier-ngoie-portfolio.netlify.app/" target="_blank" rel="noopener noreferrer"> Didier Ngoie </a>
                     &
                <a className="avery" href="https://ngavery.github.io/averyng.github.io/" target="_blank" rel="noopener noreferrer"> Avery Ng </a>
            </p>
          </div>
        </div>
      </footer>
    )
}

export default Footer;