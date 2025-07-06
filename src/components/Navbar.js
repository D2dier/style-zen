import '../styles/Navbar.css';
import { FaShoppingCart, FaShoppingBag, FaSearch } from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
      <header>
        <div className="container">
          <nav>
            <Link to="/" className="logo">StyleZen</Link>
              <div className="nav-links">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "nav-link active-link" : "nav-link"
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to="/search"
                  className={({ isActive }) =>
                    isActive ? "nav-link active-link" : "nav-link"
                  }
                >
                  <FaSearch /> Search
                </NavLink>
                <NavLink
                  to="/shop"
                  className={({ isActive }) =>
                    isActive ? "nav-link active-link" : "nav-link"
                  }
                >
                  <FaShoppingBag /> Shop
                </NavLink>
                <NavLink
                  to="/cart"
                  className={({ isActive }) =>
                    isActive ? "nav-link active-link" : "nav-link"
                  }
                >
                  <FaShoppingCart /> Cart
                </NavLink>
              </div>
          </nav>
        </div>
      </header>
  );
};

export default Navbar;
