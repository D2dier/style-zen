import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <header>
      <div className="container">
        <nav>
          <a href="#" className="logo">StyleZen</a>
          <div className="nav-links">
            <a href="#">Home</a>
            <a href="#">Shop</a>
            <a href="#">Cart</a>
            <a href="#">My Account</a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
