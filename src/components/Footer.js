import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from '@mui/icons-material/X';
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <span data-testid="Instagram"><InstagramIcon /></span>
        <span data-testid="X"><XIcon /></span>
        <span data-testid="Facebook"><FacebookIcon /></span>
        <span data-testid="LinkedIn"><LinkedInIcon /></span>
      </div>
      <p> &copy; 2024 datadyktig.no</p>
    </div>
  );
}



export default Footer;