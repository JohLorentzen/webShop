import React, { useState } from "react";
import Logo from "../assets/DatadyktigLogo.webp";
import { Link } from "react-router-dom";
import ReorderIcon from "@mui/icons-material/Reorder";
import "../styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  const closeNavbar = () => {
    setOpenLinks(false);
  };
/**
 * The Navbar component is a simple navigation bar with a logo and a toggle button. 
 */
  return (
    <div className="navbar">
      <div className="leftSide">
        <img src={Logo} alt="AI logo" />
      </div>
      <div className="rightSide">
        <button onClick={toggleNavbar} className="navbarToggle">
          <ReorderIcon />
        </button>
      </div>
      <div className={openLinks ? "navLinks open" : "navLinks"}>
        <Link to="/" onClick={closeNavbar}> Hjem </Link>
        <Link to="/courses" onClick={closeNavbar}> Kurs </Link>
        <Link to="/about" onClick={closeNavbar}> Om oss </Link>
        <Link to="/contact" onClick={closeNavbar}> Kontakt </Link>
      </div>
    </div>
  );
}
export default Navbar;
