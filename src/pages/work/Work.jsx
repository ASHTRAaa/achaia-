import { useState } from "react";
import "./Work.css";
import image from "../../assets/heroimg.png"
import ProjectCard from "../../components/projectcard/ProjectCard.jsx";
import CardFilter from "../../components/cardfilter/CardFilter";
 const projects = 
   [
     {
       id: 1,
       title: "E-commerce Store Builder",
       category: "website",
       tags: "Web design · SaaS design",
       image: image,
       link: "#",
     },
     {
       id: 2,
       title: "Food Delivery App",
       category: "app",
       tags: "Mobile app · UI UX",
       image: image,
       link: "#",
     },
     {
       id: 3,
       title: "AI Chatbot",
       category: "ai",
       tags: "AI product · SaaS",
       image: image,
       link: "#",
     },
   ];

const Work = () => {
  const [category, setCategory] = useState("all");

  const filteredProjects =
    category === "all"
      ? projects
      : projects.filter((project) => project.category === category);

  return (
    <section className="work">
      <div className="work-header">
        <h2>Our Work</h2>
        <p>
          Explore some of the products we've designed and built for startups and
          businesses. From modern websites to AI-powered solutions, every
          project focuses on performance, usability, and real business impact.
        </p>
      </div>

      <CardFilter activeCategory={category} setCategory={setCategory} />

      <div className="work-grid">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Work;
