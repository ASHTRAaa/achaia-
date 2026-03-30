
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./Cyp.css";
import { useState } from "react";
const Cyp = () => {
    const [currency, setCurrency] = useState("INR");
    const [phone, setPhone] = useState("");
  return (
    <div className="cyp-bg">
      <div className="cyp-text">
        <h2>Tell us about your project</h2>
        <p className="subtext">
          Just share what you're thinking — we’ll figure out the rest together.
        </p>
      </div>
      <div className="form-container">
        <form className="form">
          {/* Name */}
          <input type="text" placeholder="Your name" required />

          {/* Email */}
          <input type="email" placeholder="Your email" required />

          <PhoneInput
            country={"in"} // default country
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
                <input type="checkbox" /> Website
              </label>
              <label>
                <input type="checkbox" /> Mobile App
              </label>
              <label>
                <input type="checkbox" /> Custom Software
              </label>
              <label>
                <input type="checkbox" /> AI Integration
              </label>
            </div>
          </div>

          {/* Budget */}
          <div className="budget">
            <label>Approx budget</label>

            <div className="budget-row">
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
              >
                <option value="INR">₹ INR</option>
                <option value="USD">$ USD</option>
              </select>

              <input
                type="number"
                min="0"
                placeholder={currency === "INR" ? "e.g. 50000" : "e.g. 1000"}
                onInput={(e) => {
                  if (e.target.value < 0) e.target.value = 0;
                }}
              />
            </div>
          </div>

          {/* Message */}
          <textarea
            placeholder="Briefly describe your idea or problem"
            rows="4"
          />

          {/* Submit */}
          <button className="start-button" type="submit">
            Start Conversation
          </button>
        </form>
      </div>
    </div>
  );
}

export default Cyp
