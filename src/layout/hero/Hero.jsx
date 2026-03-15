import "./Hero.css"
import heroimg from "../../assets/heroimg.png";
import herovideo from "../../assets/herobg.mp4"
const Hero = () => {
  return (
    <section className="hero">
      {/* background image fallback */}
      <img src={heroimg} alt="" className="hero-image" />

      {/* video background */}
      <video className="hero-video" autoPlay muted loop playsInline preload="none">
        <source src={herovideo} type="video/mp4" />
      </video>

      {/* dark overlay */}
      <div className="hero-overlay"></div>

      {/* hero content */}
      <div className="hero-content">
        <h1>Build Websites, Mobile Apps & AI Products That Scale</h1>

        <p>
          We design and develop high-performance web apps, mobile apps, and AI
          solutions for startups and growing businesses.
        </p>

        <div className="hero-buttons">
          <button className="btn-primary">View Work</button>

          <button className="btn-secondary">Start a Project</button>
        </div>
      </div>
    </section>
  );
}

export default Hero
