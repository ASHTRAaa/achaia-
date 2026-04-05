import "./Footer.css";
import { FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-section">
        <div className="cont-socials">
          <div className="cont">
            <span>
              Ready to take your business <br />
              communication to the next level, <br />
              with unbeateable speed?
            </span>
          </div>
          <div className="socials">
            <a href="https://www.instagram.com/achaialabs?igsh=MTF5ZXVxbDEyZnlrOQ==">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/search/results/all/?keywords=achaia%20labs&origin=RICH_QUERY_SUGGESTION&spellCorrectionEnabled=false&heroEntityKey=urn%3Ali%3Aorganization%3A112998902&position=0">
              <FaLinkedin />
            </a>
            <a href="https://x.com/achaialabs">
              <FaTwitter />
            </a>
          </div>
        </div>
        <div className="contact-business">
          <div className="business">
            <h6>business</h6>
            <div className="business-link">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/contact">About Us</NavLink>
              <NavLink to="/work">Our Work</NavLink>
              <NavLink to="/contact-us">Contact Us</NavLink>
              <NavLink to="/cyp">Cost Your Project</NavLink>
            </div>
          </div>
          <div className="contact">
            <h6>contact us</h6>
            <ul>
              <li>Email:achaialabs@gmail.com</li>
              <li>Phone: 7761029458</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="copyright">
        <p>
          Copyright {new Date().getFullYear()}, agency, All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
