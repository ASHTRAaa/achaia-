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
            <a href="">
              <FaInstagram />
            </a>
            <a href="">
              <FaLinkedin />
            </a>
            <a href="">
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
