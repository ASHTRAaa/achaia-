import "./Socials.css"
import SocialCard from "../../components/social-card/SocialCard";

const Socials = () => {
    const socialdata = [
      {
        name: "Jackeline Jones",
        role: "UX Designer",
        company: "ORBIX",
        image: "https://i.pravatar.cc/60?img=5",
        testimonial:
          "Tisha Digital transformed our workflow with easy integrations and responsive support our productivity has soared!",
      },
      {
        name: "Jackeline Jones",
        role: "UX Designer",
        company: "ORBIX",
        image: "https://i.pravatar.cc/60?img=5",
        testimonial:
          "Tisha Digital transformed our workflow with easy integrations and responsive support our productivity has soared!",
      },
      {
        name: "Jackeline Jones",
        role: "UX Designer",
        company: "ORBIX",
        image: "https://i.pravatar.cc/60?img=5",
        testimonial:
          "Tisha Digital transformed our workflow with easy integrations and responsive support our productivity has soared!",
      },
    ];
  return (
    <div className="social-bg">
     
      <div className="social-text">
        <h2>
          What Our <span>Clients</span> Say?
        </h2>
      </div>
      <div className="card">
        {socialdata.map((socials, index) => {
          return <SocialCard key={index} {...socials} />;
        })}
      </div>
    </div>
  );
}

export default Socials
