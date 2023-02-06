import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
          <span className="logo">Booking Website</span>
        </Link>
        <div className="navItems">
          <a href="/register">
            <button className="navButton"> Sign Up</button>
          </a>
          <a href="/login">
            <button className="navButton">Login</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
