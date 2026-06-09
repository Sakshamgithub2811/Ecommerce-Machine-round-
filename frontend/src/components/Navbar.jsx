import { Link, useNavigate } from "react-router-dom";
import { FiSearch, FiHeart, FiShoppingCart, FiUser } from "react-icons/fi";

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <>
      <div className="top-bar">
        <p>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
          <b>ShopNow</b>
        </p>
        <span>English⌄</span>
      </div>

      <nav className="navbar">
        <h2 className="logo">Exclusive</h2>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <a>Contact</a>
          <a>About</a>
          {!token && <Link to="/register">Sign Up</Link>}
          {token && <button onClick={logoutHandler}>Logout</button>}
        </div>

        <div className="nav-right">
          <div className="search-box">
            <input type="text" placeholder="What are you looking for?" />
            <FiSearch />
          </div>

          <FiHeart />
          <Link to="/cart">
            <FiShoppingCart />
          </Link>
          <FiUser />
        </div>
      </nav>
    </>
  );
};

export default Navbar;