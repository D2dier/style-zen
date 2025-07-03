import '../styles/Shop.css';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Shop() {
    return (
        <div>
            <Navbar/>
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
            <Footer/>
        </div>

    );
}

export default Shop