import '../styles/Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <div className="container">
        <nav>
          <a href="#" className="logo">StyleZen</a>
          <div className="nav-links">
            <a> <Link to="/">Home</Link> </a>
            <a> <Link to="/shop">Shop</Link> </a>
            <a href="#">Cart</a>
            <a href="#">My Account</a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
