import ServiceCard from "../../components/service-card/servicecard"
import { FaCode, FaMobileAlt, FaDatabase } from "react-icons/fa";
import "./Services.css"
function Services() {
  const services = [
    {
      icon: FaCode,
      title: "Web Development",
      description:
        "Building responsive and modern websites using latest technologies kdkdkkdkdk kdkdkd kd kdkkdkd kdkdk",
      link: "/service/web",
    },
    {
      icon: FaMobileAlt,
      title: "Mobile Friendly",
      description: "Designing layouts that work perfectly across all devices.",
      link: "/service/web",
    },
    {
      icon: FaDatabase,
      title: "Backend Systems",
      description: "Creating scalable APIs and database architectures.",
      link: "/service/web",
    },
    {
      icon: FaCode,
      title: "Web Development",
      description:
        "Building responsive and modern websites using latest technologies kdkdkkdkdk kdkdkd kd kdkkdkd kdkdk",
      link: "/service/web",
    },
    {
      icon: FaMobileAlt,
      title: "Mobile Friendly",
      description: "Designing layouts that work perfectly across all devices.",
      link: "/service/web",
    },
    {
      icon: FaDatabase,
      title: "Backend Systems",
      description: "Creating scalable APIs and database architectures.",
      link: "/service/web",
    },
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