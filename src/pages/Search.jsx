import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import { Link } from "react-router-dom";
import '../styles/Search.css';
import products from '../data/products';

//import { FaSearch } from "react-icons/fa";

export default function Search() {
    const [search, setSearch] = useState("");
    return (
        <>
            <Navbar/>

            <div className="container">
                <input
                    type="text"
                    placeholder="Search products..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="search-input"
                />
            </div>

            <div className="results-section">
            <div className="container search-results">
                {(() => {
                const filtered = products.filter((product) =>
                    product.title.toLowerCase().includes(search.toLowerCase())
                );

                if (search && filtered.length === 0) {
                    return <p className="no-results">No results found.</p>;
                }

                return filtered.map((product) => (
                    <Link to={`/product/${product.id}`} key={product.id} className="search-result-card">
                    <img src={product.image} alt={product.alt} />
                    <h3>{product.title}</h3>
                    <p>${product.price.toFixed(2)}</p>
                    </Link>
                ));
                })()}

            </div>

            </div>

            <Footer/>
        </>
    );
}