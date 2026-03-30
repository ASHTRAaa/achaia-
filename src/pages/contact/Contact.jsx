import "./Contact.css";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    industry: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="contact-bg">
      {/* Existing Code (UNCHANGED) */}
      <div className="contact-text">
        <h2>Tell Us About Your Needs</h2>
        <p>
          Got a project in mind or just exploring options? Fill few quick
          details, our team will reach you out within 1 business day to help you
          get started.
        </p>
      </div>

      {/* ✅ NEW FORM SECTION */}
      <div className="contact-form-wrapper">
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="industry"
            placeholder="Industry / Profession"
            value={formData.industry}
            onChange={handleChange}
          />

          <textarea
            name="message"
            placeholder="Describe your project..."
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
