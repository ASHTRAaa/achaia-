import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./Cyp.css";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Cyp = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [currency, setCurrency] = useState("USD");
  const [phone, setPhone] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    services: [],
    budget: "",
    message: "",
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckbox = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData((prev) => ({
        ...prev,
        services: [...prev.services, value],
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        services: prev.services.filter((item) => item !== value),
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: null });

    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        phone: phone,
        services: formData.services.join(", "),
        budget: `${currency} ${formData.budget}`,
        message: formData.message,
      };

      const res = await fetch("https://www.sendmyform.live/api/f/contact-us", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setStatus({ submitting: false, success: true, error: null });
        setFormData({
          name: "",
          email: "",
          services: [],
          budget: "",
          message: "",
        });
        setPhone("");
      } else {
        const errData = await res.json();
        throw new Error(errData.message || "Failed to submit project parameters.");
      }
    } catch (err) {
      console.error(err);
      setStatus({ submitting: false, success: false, error: err.message || "Network error. Please try again." });
    }
  };

  return (
    <main className="page-container cyp-page">
      <div className="fixed top-[-10%] right-[-5%] w-[40%] h-[40%] bg-secondary-fixed/5 blur-[120px] rounded-full pointer-events-none z-0"></div>
      
      <section className="cyp-hero text-center max-w-3xl mx-auto pt-16 sm:pt-20 md:pt-24 mb-12 sm:mb-16">
        <span className="label-caps cyp-tag text-lime font-bold tracking-widest block mb-4">Laboratory Scoping</span>
        <h1 className="display-xl cyp-headline mb-6 font-semibold leading-tight">Cost Your Project</h1>
        <p className="subheading cyp-subtitle text-on-surface-variant leading-relaxed max-w-2xl mx-auto">
          Select your operational parameters below. Our architecture team will analyze your requirements and assemble a formal technical proposal.
        </p>
      </section>

      <section className="cyp-form-section max-w-3xl w-full mx-auto px-4 sm:px-6">
        <div className="glass-card cyp-form-card p-6 sm:p-8 md:p-12 relative overflow-hidden rounded-2xl mx-auto w-full">
          <div className="absolute top-0 left-0 w-64 h-64 bg-secondary-fixed/5 blur-[100px] pointer-events-none"></div>

          {status.success ? (
            <motion.div 
              className="success-overlay flex flex-col items-center justify-center text-center p-8 glass-card border-lime"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <span className="material-symbols-outlined success-icon text-lime mb-4">check_circle</span>
              <h3 className="headline-lg text-2xl mb-2">Parameters Logged</h3>
              <p className="body-md text-on-surface-variant max-w-sm">
                Project scoping metrics have been recorded. Our system architects will prepare a proposal draft within 24 hours.
              </p>
              <button 
                onClick={() => setStatus({ submitting: false, success: false, error: null })}
                className="border border-white/20 text-white font-label-caps text-label-caps px-8 py-3 rounded-full hover:bg-white/5 transition-all mt-8"
              >
                Submit New Project
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-10">
              {/* Contact Metadata */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="input-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>
                <div className="input-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>
              </div>

              {/* Phone Input with styled dropdown override */}
              <div className="input-group phone-group">
                <label className="label-caps text-on-surface-variant block mb-3">CONTACT PHONE</label>
                <PhoneInput
                  country={"us"}
                  value={phone}
                  onChange={(phoneVal) => setPhone(phoneVal)}
                  inputProps={{
                    name: "phone",
                    required: true,
                  }}
                  enableSearch={true}
                />
              </div>

              {/* Services Required Checkboxes */}
              <div className="input-group">
                <label className="label-caps text-on-surface-variant block mb-6">SERVICES REQUIRED</label>
                <div className="checkbox-grid">
                  {[
                    { val: "Website", label: "Web Platform Development" },
                    { val: "Mobile App", label: "Mobile App Development" },
                    { val: "Custom Software", label: "Custom Software Solutions" },
                    { val: "AI Integration", label: "Cognitive AI Integrations" }
                  ].map((service) => (
                    <label key={service.val} className="checkbox-label glass-card">
                      <input
                        type="checkbox"
                        name="services"
                        value={service.val}
                        checked={formData.services.includes(service.val)}
                        onChange={handleCheckbox}
                        className="checkbox-input"
                      />
                      <span className="checkbox-text body-md">{service.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Approx Budget */}
              <div className="input-group">
                <label className="label-caps text-on-surface-variant block mb-4">APPROXIMATE BUDGET</label>
                <div className="budget-row">
                  <select
                    name="currency"
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                    className="budget-currency-select"
                  >
                    <option value="USD">$ USD</option>
                    <option value="EUR">€ EUR</option>
                    <option value="GBP">£ GBP</option>
                    <option value="INR">₹ INR</option>
                  </select>

                  <input
                    type="number"
                    name="budget"
                    min="0"
                    value={formData.budget}
                    placeholder={currency === "INR" ? "5,00,000" : "15,000"}
                    onChange={handleChange}
                    className="form-input budget-input"
                    required
                  />
                </div>
              </div>

              {/* Project Details Description */}
              <div className="input-group">
                <label className="label-caps text-on-surface-variant block mb-4">PROJECT SYNOPSIS</label>
                <textarea
                  name="message"
                  placeholder="Describe your technical challenges, user flow goals, and specific integration points."
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="form-input form-textarea"
                ></textarea>
              </div>

              {status.error && (
                <div className="error-message text-red-500 font-semibold text-sm">
                  {status.error}
                </div>
              )}

              <button 
                type="submit" 
                disabled={status.submitting}
                className="w-full bg-secondary-fixed text-on-secondary-fixed font-label-caps text-label-caps py-4 rounded-full font-bold hover:scale-105 active:scale-95 transition-all glow-hover text-center flex items-center justify-center gap-2"
              >
                {status.submitting ? "Transmitting Scope..." : "Submit Project Scope"}
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
};

export default Cyp;
