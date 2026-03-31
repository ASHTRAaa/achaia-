import ServiceCard from "../../components/service-card/ServiceCard.jsx";
import { FaCode, FaMobileAlt, FaDatabase } from "react-icons/fa";
import "./Services.css"
function Services() {
  const services = [
    {
      icon: FaCode,
      title: "Web Development",
      description: `Shopify Store Development,
         WordPress Websites,
         Custom Web Applications,
         Landing Pages for Ads,
         Website Speed Optimization,
         Website Maintenance`,
      link: "/work",
    },
    {
      icon: FaMobileAlt,
      title: "Mobile App Development",
      description: `Android App Development,
              iOS App Development,
              Cross-Platform Apps,
              MVP App Development,
              App UI/UX Design`,
      link: "/work",
    },
    {
      icon: FaDatabase,
      title: "AI Automation & AI Development",
      description: `AI Chatbots for Businesses,
                  AI Workflow Automation,
                  AI Tools Integration,
                  AI Assistants for Businesses,
                  Knowledgebase Chatbots (RAG)`,
      link: "/work",
    },
    {
      icon: FaCode,
      title: "Custom Software Development",
      description: `SaaS Platforms,
                  Dashboards & Admin Panels,
                  Automation Tools,
                  API Development & Integrations`,
      link: "/work",
    },
    {
      icon: FaMobileAlt,
      title: "SEO & Growth",
      description: `
      Technical SEO,
      On-Page SEO,
      Website Speed Optimization,
      SEO Audits,
      Local SEO`,
      link: "/work",
    }
  ];
  return (
    <div className="services-bg">
      <div className="service-text">
        <h2>
          <span>Services</span> We Offer
        </h2>
        <p>
          We design and build digital solutions that help businesses grow,
          perform better, and stand out online.
        </p>
      </div>
      <div className="service-card-box">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
}

export default Services;