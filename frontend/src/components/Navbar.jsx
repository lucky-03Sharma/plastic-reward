import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  const toggleMenu = () => {

    setMenuOpen(!menuOpen);

  };

  const goHome = () => {

    navigate("/");

    setMenuOpen(false);

  };

  return (

    <header className="navbar">

      <div className="navbar-inner">

        {/* Logo */}
        <div className="logo" onClick={goHome}>
          <i className="fa-solid fa-recycle logo-icon"></i>
          EcoReward
        </div>

        {/* Hamburger */}
        <div
          className="hamburger"
          onClick={toggleMenu}
        >

          <span></span>
          <span></span>
          <span></span>

        </div>

      </div>

      {/* Dropdown */}
      <div className={`dropdown ${menuOpen ? "show" : ""}`}>

        <Link to="/dashboard" onClick={toggleMenu}>
          Dashboard
        </Link>

        <Link to="/leaderboard" onClick={toggleMenu}>
          Leaderboard
        </Link>

        <Link to="/login" onClick={toggleMenu}>
          Login
        </Link>

        <Link to="/signup" onClick={toggleMenu}>
          Signup
        </Link>

      </div>

    </header>

  );

}
