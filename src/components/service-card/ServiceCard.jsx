import {Link} from "react-router-dom"
import "./ServiceCard.css"
const ServiceCard = ({icon:Icon,title,link,description}) => {
  return (
    <div className="servicecard">
      <Link to={link} className="card-link" >↗</Link>
      <div className="card-icon">
        <Icon size={29} />
      </div>

      <div className="content">
        <h3>{title}</h3>

        <p>{description}</p>
      </div>
    </div>
  );
}

export default ServiceCard
