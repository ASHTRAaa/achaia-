import "./FaqModal.css"
import {FiChevronDown} from "react-icons/fi"
function FaqModal({ question, answer, isOpen, onToggle }) {
  return (
    <div className={`faq-card ${isOpen ? "open" : ""}`}>
      <div className="faq-header" onClick={onToggle}>
        <h3>{question}</h3>

        <div className="faq-toggle">
          <FiChevronDown />
        </div>
      </div>

      <div className="faq-body">
        <p>{answer}</p>
      </div>
    </div>
  );
}

export default FaqModal
