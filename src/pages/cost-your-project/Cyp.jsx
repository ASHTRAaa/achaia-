import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./Cyp.css";
import { useState } from "react";

const Cyp = () => {
  const [currency, setCurrency] = useState("INR");
  const [phone, setPhone] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    services: "",
    budget: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  // handle text inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // handle checkboxes
  const handleCheckbox = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setFormData({
        ...formData,
        services: [...formData.services, value],
      });
    } else {
      setFormData({
        ...formData,
        services: formData.services.filter((item) => item !== value),
      });
    }
  };

  // submit
const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus("Sending...");

  try {
    const form = new FormData();

    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("phone", phone);
    form.append("services", formData.services.join(","));
    form.append("budget", `${currency} ${formData.budget}`);
    form.append("message", formData.message);

    const res = await fetch("https://www.sendmyform.live/api/f/contact-us", {
      method: "POST",
      body: form,
    });

    if (res.ok) {
      setStatus("Message sent successfully");
    } else {
      setStatus("Something went wrong");
    }
  } catch (err) {
    setStatus("Network error");
  } finally {
    setFormData({
      name: "",
      email: "",
      services: [],
      budget: "",
      message: "",
    });
    setPhone("");
  }
};

  return (
    <div className="cyp-bg">
      <div className="cyp-text">
        <h2>Tell us about your project</h2>
        <p className="subtext">
          Just share what you're thinking — we’ll figure out the rest together.
        </p>
      </div>

      <div className="form-container">
        <form onSubmit={handleSubmit} className="form">
          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          {/* Phone */}
          <PhoneInput
            country={"in"}
            value={phone}
            onChange={(phone) => setPhone(phone)}
            inputProps={{
              name: "phone",
              required: true,
            }}
            enableSearch={true}
          />

          {/* Services */}
          <div className="services">
            <label>Select what you need</label>
            <div className="checkbox-group">
              <label>
                <input
                  type="checkbox"
                  name="services"
                  value="Website"
                  onChange={handleCheckbox}
                />{" "}
                Website
              </label>
              <label>
                <input
                  type="checkbox"
                  name="services"
                  value="Mobile App"
                  onChange={handleCheckbox}
                />{" "}
                Mobile App
              </label>
              <label>
                <input
                  type="checkbox"
                  name="services"
                  value="Custom Software"
                  onChange={handleCheckbox}
                />{" "}
                Custom Software
              </label>
              <label>
                <input
                  type="checkbox"
                  name="services"
                  value="AI Integration"
                  onChange={handleCheckbox}
                />{" "}
                AI Integration
              </label>
            </div>
          </div>

          {/* Budget */}
          <div className="budget">
            <label>Approx budget</label>

            <div className="budget-row">
              <select
                name="currency"
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
              >
                <option value="INR">₹ INR</option>
                <option value="USD">$ USD</option>
              </select>

              <input
                type="number"
                name="budget"
                min="0"
                value={formData.budget}
                placeholder={currency === "INR" ? "50000" : "e.g. 1000"}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Message */}
          <textarea
            name="message"
            placeholder="Briefly describe your idea or problem"
            rows="4"
            value={formData.message}
            onChange={handleChange}
          />

          {/* Submit */}
          <button className="start-button" type="submit">
            Start Conversation
          </button>

          {/* Status */}
          <p>{status}</p>
        </form>
      </div>
    </div>
  );
};

export default Cyp;
