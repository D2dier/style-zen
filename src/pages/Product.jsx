// src/pages/Product.jsx
import { useParams } from 'react-router-dom';
import products from '../data/products';
import { useCart } from '../context/CartContext';
import { useEffect, useState } from 'react';

import "../styles/Product.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Toast from "../components/Toast";

export default function Product() {
  const {id} = useParams();
  const {addToCart} = useCart();
  const product = products.find((product) => product.id === parseInt(id));
  const [toastVisible, setToastVisible] = useState(false);
  const [relatedProducts, setRelatedProducts] = useState([]);

  const handleAddToCart = (product) => {
    addToCart(product);
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 2000);
  };

  useEffect(() => {
    const otherProducts = products.filter((p) => p.id !== parseInt(id));

    const shuffled = [...otherProducts].sort(() => 0.5 - Math.random());

    setRelatedProducts(shuffled.slice(0, 3));
  }, [id]);

  if (!product) {
    return (
      <>
        <Navbar/>
        <div classnaName="container">
          <h2>Item not found.</h2>
        </div>
        <Footer/>
      </>
    );

  }
  return (
    <>
      <Navbar/>
      <Toast show={toastVisible} />

      <main>
        <section className="product-section">
          <div className="container">
            <div className="product-container">
              <div className="product-gallery">
                <img
                  src={product.image}
                  alt={product.alt}
                  className="product-image"
                  loading="lazy"
                />
              </div>
              <div className="product-details">
                <h1 className="product-title">{product.title}</h1>
                <div className="product-price">${product.price} </div>
                <p className="product-description"> {product.description}</p>

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

                <button className="btn"                 
                  onClick={() => handleAddToCart(product)}>
                  Add to Cart
                  </button>
              </div>
            </div>
            {/*
            */}
            <div className="product-info">
              <div className="info-section">
                <h3>Product Details</h3>
                <p>
                  {/*- 100% organic linen<br />
                  - Relaxed fit with subtle waist definition<br />
                  - Midi length (hits mid-calf)<br />*/}
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
              {relatedProducts.map((item) => (
                <Link to={`/product/${item.id}`} key={item.id} className="product-card">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="product-card-img"
                    loading="lazy"
                  />
                  <div className="product-card-info">
                    <h3>{item.title}</h3>
                    <div className="product-card-price">${item.price}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

    <Footer/>
    </>
  );
}
