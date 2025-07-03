import { Link } from 'react-router-dom';
import '../styles/Home.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="home-page">
      <Navbar /> {/*No need to place in a container - Avery*/}

      <main>
        <section className="hero">
          <div className="container">
            <h1>Express your style with StyleZen</h1>
            <p>Discover minimalist, high-quality clothing designed for your everyday comfort and elegance.</p>
            <Link to="/shop" className="btn">Shop Now</Link>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2 className="section-title">Our Collections</h2>
            <div className="collections-grid">
              <div className="collection-card">
                <img src="https://picsum.photos/400/500?random=1" alt="Minimalist T-shirts collection" className="collection-img" loading="lazy" />
                <div className="collection-info">
                  <h3>Essential Tees</h3>
                  <p>Soft, breathable basics for every day</p>
                </div>
              </div>
              <div className="collection-card">
                <img src="https://picsum.photos/400/500?random=2" alt="Relaxed loungewear collection" className="collection-img" loading="lazy" />
                <div className="collection-info">
                  <h3>Loungewear</h3>
                  <p>Comfortable styles for relaxing at home</p>
                </div>
              </div>
              <div className="collection-card">
                <img src="https://picsum.photos/400/500?random=3" alt="Elegant dresses collection" className="collection-img" loading="lazy" />
                <div className="collection-info">
                  <h3>Dresses</h3>
                  <p>Flowing silhouettes for effortless style</p>
                </div>
              </div>
              <div className="collection-card">
                <img src="https://picsum.photos/400/500?random=4" alt="Sustainable outerwear collection" className="collection-img" loading="lazy" />
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
                <p>Get your order within 2-3 business days with our express shipping.</p>
              </div>
              <div className="commitment-card">
                <div className="commitment-icon">
                  <i className="fas fa-undo"></i>
                </div>
                <h3>Free Returns</h3>
                <p>Not satisfied? Return within 30 days for free, no questions asked.</p>
              </div>
              <div className="commitment-card">
                <div className="commitment-icon">
                  <i className="fas fa-lock"></i>
                </div>
                <h3>Secure Payment</h3>
                <p>Your payment information is processed securely with encryption.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer/>
    </div>
  );
}
