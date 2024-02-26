import React, { useState } from "react";
import Logo from "../assets/aiLogo.webp";
import { Link } from "react-router-dom";
import ReorderIcon from "@mui/icons-material/Reorder";
import "../styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} alt="AI logo" />
        <div className="hiddenLinks">
          <Link to="/"> Hjem </Link>
          <Link to="/courese"> Kurs </Link>
          <Link to="/about"> Om oss </Link>
          <Link to="/contact"> Kontakt </Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/"> Hjem </Link>
        <Link to="/courses"> Kurs </Link>
        <Link to="/about"> Om oss </Link>
        <Link to="/contact"> Kontakt </Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;