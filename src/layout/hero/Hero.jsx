import "./Hero.css"
import heroimg from "../../assets/heroimg.png";
import herovideo from "../../assets/herobg.mp4"
import { NavLink } from "react-router-dom";
import {motion,AnimatePresence} from "framer-motion";
import {useState,useEffect} from "react";

const words = ["Websites", "Mobile Apps", "AI Products"];
const variants = {
  enter: { y: 20, opacity: 0.3, filter: "blur(5px)" },
  center: { y: 0, opacity: 1, filter: "blur(0px)" },
  exit: { y: -20, opacity: 0, filter: "blur(5px)" },
};
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const child = {
  hidden: {
    opacity: 0,
    y: 20,
    filter: "blur(6px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};
const Hero = () => {

    const [index, setIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
      if (isPaused) return;

      const interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % words.length);
      }, 2200);

      return () => clearInterval(interval);
    }, [isPaused]);

    
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
        <h1>
          Build{" "}
          <span
            className="animated-word"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={words[index]}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                {words[index]}
              </motion.span>
            </AnimatePresence>
          </span>{" "}
          That Scale
        </h1>

        <motion.p
          className="hero-para"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {`We design and develop high-performance web apps, mobile apps, and AI solutions for startups and growing businesses.`
            .split(" ")
            .map((word, i) => (
              <motion.span key={i} variants={child}>
                {word}&nbsp;
              </motion.span>
            ))}
        </motion.p>

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
