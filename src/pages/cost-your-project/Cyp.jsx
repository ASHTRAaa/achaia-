import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./Cyp.css";
import { useState, useEffect } from "react";
import { useSEO } from "../../hooks/useSEO";

const serviceList = [
  { val: "Shopify & E-Commerce", label: "Shopify & E-Commerce Platform" },
  { val: "ERP & Business Systems", label: "Custom ERP & Business Systems" },
  { val: "Android & Mobile Apps", label: "Android & Mobile App Development" },
  { val: "AI & Workflow Automation", label: "AI & Workflow Automation Systems" },
  { val: "Custom Software Engineering", label: "Custom Software Architecture & APIs" },
];

const Cyp = () => {
  useSEO({
    title: "Project Scope & Estimator — Achaia Labs",
    description:
      "Estimate and scope your software development project with Achaia Labs. Custom Shopify stores, business ERPs, mobile applications, and AI workflows.",
    path: "/cyp",
  });

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
    timeline: "Flexible",
    message: "",
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null,
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
        phone: phone || "Not provided",
        services: formData.services.length > 0 ? formData.services.join(", ") : "Not specified",
        budget: formData.budget ? `${currency} ${formData.budget}` : "Not specified (Open for discussion)",
        timeline: formData.timeline,
        message: formData.message,
      };

      const res = await fetch("https://www.sendmyform.live/api/f/contact-us", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
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
          timeline: "Flexible",
          message: "",
        });
        setPhone("");
      } else {
        const errData = await res.json();
        throw new Error(errData.message || "Failed to submit project request.");
      }
    } catch (err) {
      console.error(err);
      setStatus({
        submitting: false,
        success: false,
        error: err.message || "Network error. Please try again or email us directly.",
      });
    }
  };

  return (
    <main className="font-body-md text-[#F5F5F3] bg-[#111111] min-h-screen py-16 sm:py-20 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-margin-desktop">
        {/* Header */}
        <section className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-4">
          <span className="text-[#315EFB] font-mono text-xs uppercase tracking-widest block font-semibold">
            Project Scoping Tool
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#F5F5F3] tracking-tight leading-tight">
            Scope Your Project
          </h1>
          <p className="text-base sm:text-lg text-[#A6A6A6] leading-relaxed">
            Select the services you need and tell us about your operational requirements. Our technical team will review your specifications and prepare a formal proposal.
          </p>
        </section>

        {/* Card Form */}
        <div className="p-8 sm:p-12 rounded-3xl border border-[#303030] shadow-md bg-[#181818]">
          {status.success ? (
            <div className="text-center py-16 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-950/80 border border-emerald-800/60 text-emerald-400 flex items-center justify-center mx-auto mb-2">
                <span className="material-symbols-outlined text-3xl">check</span>
              </div>
              <h2 className="text-2xl font-semibold text-[#F5F5F3]">
                Project Scope Received
              </h2>
              <p className="text-[#A6A6A6] max-w-md mx-auto text-sm sm:text-base leading-relaxed">
                Thank you. We have received your project parameters. A technical lead will analyze your requirements and follow up with preliminary scoping within 24 hours.
              </p>
              <button
                onClick={() => setStatus({ submitting: false, success: false, error: null })}
                className="inline-flex items-center gap-2 bg-[#315EFB] text-white px-6 py-3 rounded-full text-xs font-semibold hover:bg-[#254EDB] transition-all mt-4"
              >
                Submit Another Project
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Contact Information */}
              <div>
                <h2 className="text-xs font-mono font-semibold text-[#777777] uppercase tracking-wider mb-4">
                  01 • Your Contact Details
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-semibold uppercase tracking-wider text-[#A6A6A6] block">
                      Full Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="form-input text-sm"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-semibold uppercase tracking-wider text-[#A6A6A6] block">
                      Email Address <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="e.g. rahul@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="form-input text-sm"
                    />
                  </div>
                </div>

                <div className="mt-6 space-y-1.5">
                  <label className="text-xs font-mono font-semibold uppercase tracking-wider text-[#A6A6A6] block">
                    Phone Number (Optional)
                  </label>
                  <PhoneInput
                    country={"in"}
                    value={phone}
                    onChange={(phoneVal) => setPhone(phoneVal)}
                    inputProps={{
                      name: "phone",
                    }}
                    enableSearch={true}
                    containerClass="w-full"
                    inputClass="!w-full !h-[48px] !rounded-xl !border-[#303030] !bg-[#141414] !text-[#F5F5F3]"
                  />
                </div>
              </div>

              {/* Services Required Checkboxes */}
              <div className="pt-6 border-t border-[#262626]">
                <h2 className="text-xs font-mono font-semibold text-[#777777] uppercase tracking-wider mb-4">
                  02 • Services Required
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {serviceList.map((service) => (
                    <label
                      key={service.val}
                      className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all ${
                        formData.services.includes(service.val)
                          ? "border-[#315EFB] bg-[#202020] text-[#315EFB]"
                          : "border-[#303030] bg-[#141414] text-[#F5F5F3] hover:border-[#444444]"
                      }`}
                    >
                      <input
                        type="checkbox"
                        name="services"
                        value={service.val}
                        checked={formData.services.includes(service.val)}
                        onChange={handleCheckbox}
                        className="w-4 h-4 text-[#315EFB] rounded border-[#303030] bg-[#181818] focus:ring-[#315EFB]"
                      />
                      <span className="text-sm font-medium">{service.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Budget and Timeline */}
              <div className="pt-6 border-t border-[#262626]">
                <h2 className="text-xs font-mono font-semibold text-[#777777] uppercase tracking-wider mb-4">
                  03 • Budget & Timeline (Optional)
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-semibold uppercase tracking-wider text-[#A6A6A6] block">
                      Approximate Budget (Optional)
                    </label>
                    <div className="flex gap-2">
                      <select
                        name="currency"
                        value={currency}
                        onChange={(e) => setCurrency(e.target.value)}
                        className="w-24 form-input text-sm"
                      >
                        <option value="INR">₹ INR</option>
                        <option value="USD">$ USD</option>
                        <option value="EUR">€ EUR</option>
                        <option value="GBP">£ GBP</option>
                      </select>
                      <input
                        type="text"
                        name="budget"
                        placeholder="e.g. 50,000 or Flexible"
                        value={formData.budget}
                        onChange={handleChange}
                        className="form-input text-sm flex-1"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-semibold uppercase tracking-wider text-[#A6A6A6] block">
                      Desired Timeline
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="form-input text-sm"
                    >
                      <option value="Immediate (< 1 month)">Immediate (&lt; 1 month)</option>
                      <option value="1 - 3 months">1 – 3 months</option>
                      <option value="3 - 6 months">3 – 6 months</option>
                      <option value="Flexible">Flexible / Planning Phase</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Project Description */}
              <div className="pt-6 border-t border-[#262626] space-y-1.5">
                <h2 className="text-xs font-mono font-semibold text-[#777777] uppercase tracking-wider mb-2">
                  04 • Project Overview
                </h2>
                <label className="text-xs font-mono font-semibold uppercase tracking-wider text-[#A6A6A6] block">
                  Describe what you want to build or automate <span className="text-red-400">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="form-input text-sm resize-none"
                  placeholder="Share details regarding your operational requirements, existing systems, or user workflows..."
                />
              </div>

              {status.error && (
                <div className="p-4 rounded-xl bg-red-950/80 border border-red-800/60 text-red-300 text-xs sm:text-sm">
                  {status.error}
                </div>
              )}

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status.submitting}
                  className="inline-flex items-center justify-center gap-2 bg-[#315EFB] hover:bg-[#254EDB] text-white px-9 py-4 rounded-full font-semibold text-sm transition-all shadow-md active:scale-95 disabled:opacity-60"
                >
                  {status.submitting ? (
                    <>
                      <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                      <span>Submitting Scope...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Project Scope</span>
                      <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </main>
  );
};

export default Cyp;
