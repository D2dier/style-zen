// src/pages/Shop.jsx
import "../styles/Shop.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer'
import products from '../data/products';
import Toast from "../components/Toast";

export default function Shop() {
  const { addToCart } = useCart();
  const [toastVisible, setToastVisible] = useState(false);

  const handleAddToCart = (product) => {
    addToCart(product);
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 2000);
  };

  return (
    <>
      <Navbar/>
      <Toast show={toastVisible} />

      <main>
        <section className="shop-page-header">
          <div className="container">
            <h1>Our Collection</h1>
            <p>
              Discover our carefully curated selection of minimalist clothing
              designed for comfort, quality, and timeless style.
            </p>
          </div>
        </section>

        <section className="shop-products-section">
          <div className="container">
            <div className="shop-products-grid">
              {products.map((product) => (
                <div className="shop-product-card" key={product.id}>
                  <img
                    src={product.image}
                    alt={product.alt}
                    className="shop-product-img"
                    loading="lazy"
                  />
                  <div className="shop-product-info">
                    <h3>{product.title}</h3>
                    <div className="shop-product-price">${product.price.toFixed(2)}</div>
                    <div className="shop-btn-group">
                      <button
                        className="shop-btn"
                        onClick={() => handleAddToCart(product)}
                      >
                        Add to Cart
                      </button>
                      <Link to={`/product/${product.id}`} className="shop-btn btn-outline">View Details</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

    <Footer/>
    </>
  );
}
