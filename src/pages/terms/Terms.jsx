import { useEffect } from "react";

const Terms = () => {
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
            Rules & Regulations
          </span>
          <h1 className="font-display-xl text-4xl md:text-display-xl mb-6 font-semibold tracking-tight">
            Terms of Service
          </h1>
          <p className="font-subheading text-subheading text-on-surface-variant leading-relaxed max-w-2xl">
            Last Updated: June 26, 2026. Please read these Terms of Service carefully before using web platforms operated by Achaia Labs.
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
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing and using this website, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree, please refrain from using our platforms.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-white text-xl md:text-2xl font-semibold tracking-tight border-b border-white/5 pb-2">
              2. Intellectual Property Rights
            </h2>
            <p>
              Unless otherwise specified, Achaia Labs owns all intellectual property rights for the website design, layout, source code, logos, assets, copy, and visual design. You may not copy, republish, distribute, or modify our content without explicit prior permission.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-white text-xl md:text-2xl font-semibold tracking-tight border-b border-white/5 pb-2">
              3. User Conduct & Constraints
            </h2>
            <p>
              You agree not to use our websites for any unlawful activity, including but not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm">
              <li>Submitting spam, false information, or malicious scripts through our contact forms.</li>
              <li>Attempting to compromise the hosting servers, security layers, or database pipelines.</li>
              <li>Scraping website content to reuse for competing products or services.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-white text-xl md:text-2xl font-semibold tracking-tight border-b border-white/5 pb-2">
              4. Disclaimer & Limitation of Liability
            </h2>
            <p>
              All materials and information on this site are provided on an "as-is" and "as-available" basis without warranties of any kind. Achaia Labs is not responsible for direct, indirect, incidental, or consequential damages resulting from your use of, or inability to use, our web systems.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-white text-xl md:text-2xl font-semibold tracking-tight border-b border-white/5 pb-2">
              5. Governing Law
            </h2>
            <p>
              These Terms of Service shall be governed by and construed in accordance with the laws of West Bengal, India, without regard to conflict of law principles. Any dispute arising from these terms shall be subject to the exclusive jurisdiction of the competent courts in Kolkata, West Bengal, India.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-white text-xl md:text-2xl font-semibold tracking-tight border-b border-white/5 pb-2">
              6. Contact Information
            </h2>
            <p>
              If you have any questions or clarifications regarding these terms, please contact our administrative team:
            </p>
            <a href="mailto:contact@achaialabs.tech" className="text-[#A0D600] hover:underline text-sm font-semibold">
                  contact@achaialabs.tech
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Terms;
