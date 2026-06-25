import { useEffect } from "react";

const Privacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-body-md text-on-surface selection:bg-secondary-fixed selection:text-on-secondary-fixed min-h-screen">
      {/* Ambient Background Blooms */}
      <div
        className="fixed top-[-10%] left-[-5%] w-[40%] h-[40%] rounded-full pointer-events-none z-0"
        style={{ background: "rgba(189,245,0,0.03)", filter: "blur(120px)" }}
      />
      <div
        className="fixed bottom-[10%] right-[-5%] w-[30%] h-[30%] rounded-full pointer-events-none z-0"
        style={{ background: "rgba(131,66,251,0.04)", filter: "blur(120px)" }}
      />

      <main className="relative z-10 pt-16 pb-14 sm:pt-20 md:pt-24 px-6 md:px-margin-desktop max-w-4xl mx-auto">
        {/* Hero */}
        <section className="mb-10 md:mb-16 text-left">
          <span className="font-label-caps text-label-caps text-secondary-fixed tracking-widest uppercase mb-4 block">
            Compliance & Transparency
          </span>
          <h1 className="font-display-xl text-4xl md:text-display-xl mb-6 font-semibold tracking-tight">
            Privacy Policy
          </h1>
          <p className="font-subheading text-subheading text-on-surface-variant leading-relaxed max-w-2xl">
            Last Updated: June 26, 2026. Achaia Labs values your privacy. This policy describes how we collect, protect, and handle data transmitted through our website.
          </p>
        </section>

        {/* Content Card */}
        <section className="glass-card p-8 md:p-12 rounded-xl relative overflow-hidden space-y-10 leading-relaxed text-on-surface-variant">
          <div
            className="absolute top-0 right-0 w-64 h-64 pointer-events-none"
            style={{ background: "rgba(189,245,0,0.02)", filter: "blur(100px)" }}
          />

          <div className="space-y-4">
            <h2 className="text-white text-xl md:text-2xl font-semibold tracking-tight border-b border-white/5 pb-2">
              1. Information We Collect
            </h2>
            <p>
              We collect personal details that you voluntarily submit to us when interacting with our contact forms, team application forms, or project cost scoping forms. This information may include:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm">
              <li>Contact details such as your Name and Email Address.</li>
              <li>Professional references, portfolio, or GitHub links when applying to join our team.</li>
              <li>Project scope, budget constraints, services requested, and business descriptions.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-white text-xl md:text-2xl font-semibold tracking-tight border-b border-white/5 pb-2">
              2. How We Use Your Data
            </h2>
            <p>
              The information we gather is used specifically for operations relating to your inquiry:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm">
              <li>To evaluate project scopes and compile tailored cost proposals.</li>
              <li>To contact you regarding potential collaborations, support requests, or employment applications.</li>
              <li>To perform site optimization and track general visitors' metrics via analytics software.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-white text-xl md:text-2xl font-semibold tracking-tight border-b border-white/5 pb-2">
              3. Data Submission & Storage
            </h2>
            <p>
              For our contact and team submission forms, we leverage <strong className="text-secondary-fixed">SendMyForm.live</strong>, a secure form processing service. Data transmitted through these forms is securely encrypted in transit (HTTPS) and stored in accordance with modern security standards. We do not sell, rent, or distribute your personal data to third parties.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-white text-xl md:text-2xl font-semibold tracking-tight border-b border-white/5 pb-2">
              4. Analytics & Tracking
            </h2>
            <p>
              We monitor anonymous visitors' interactions through basic web analytics utilities to improve user experience, page speed, and navigation layouts. These scripts do not record personally identifying information without your consent.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-white text-xl md:text-2xl font-semibold tracking-tight border-b border-white/5 pb-2">
              5. Your Choices & Deletion Rights
            </h2>
            <p>
              You have the right to inspect, update, or request the deletion of any personal information you have submitted to us. If you would like us to purge your details from our records, please reach out to us at:
            </p>
            <p className="text-secondary-fixed font-semibold">
              achaialabs@gmail.com
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Privacy;
