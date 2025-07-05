import '../styles/Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
      <header>
        <div className="container">
          <nav>
            <Link to="/" className="logo">StyleZen</Link>
            <div className="nav-links">
              <Link to="/">Home</Link>
              <Link to="/shop">Shop</Link>
              <Link to="/cart">Cart</Link>
            </div>
          </nav>
        </div>
      </header>
  );
};

export default Navbar;
