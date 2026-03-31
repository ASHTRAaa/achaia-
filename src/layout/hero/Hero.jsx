import "./Hero.css"
import heroimg from "../../assets/heroimg.png";
import herovideo from "../../assets/herobg.mp4"
import { NavLink } from "react-router-dom";
const Hero = () => {
  return (
    <section className="hero">
      <img src={heroimg} alt="" className="hero-image" />

      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="none"
      >
        <source src={herovideo} type="video/mp4" />
      </video>

      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1>Build Websites, Mobile Apps & AI Products That Scale</h1>

        <p>
          We design and develop high-performance web apps, mobile apps, and AI
          solutions for startups and growing businesses.
        </p>

        <div className="hero-buttons">
          <NavLink to="/work">
            <button className="btn-primary">View Work</button>
          </NavLink>
          <NavLink to="/cyp">
            <button className="btn-secondary">Start a Project</button>
          </NavLink>
        </div>
      </div>
    </section>
  );
}

export default Hero
