import "./SocialCard.css"

const SocialCard = ({ name, role, company, image, testimonial }) => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-header">
        <img src={image} alt={name} className="testimonial-avatar" />

        <div className="testimonial-user">
          <h3>{name}</h3>
          <p>
            {role}, {company}
          </p>
        </div>
      </div>

      <div className="testimonial-content">
        <p className="testimonial-text">“{testimonial}”</p>
      </div>

      
    </div>
  );
};

export default SocialCard
