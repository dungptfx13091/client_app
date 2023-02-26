import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = ({ isLogin }) => {
  const loginEmail = window.localStorage.getItem("loginEmail");
  const handleLogout = () => {
    window.localStorage.setItem("loginEmail", "");
  };
  if (!isLogin)
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
  else
    return (
      <div className="navbar">
        <div className="navContainer">
          <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
            <span className="logo">Booking Website</span>
          </Link>
          <div className="navItems">
            <span>{loginEmail}</span>
            <a href="/user/transactions">
              <button className="navButton"> Transactions</button>
            </a>
            <a href="/">
              <button className="navButton" onClick={handleLogout}>
                Logout
              </button>
            </a>
          </div>
        </div>
      </div>
    );
};

export default Navbar;
