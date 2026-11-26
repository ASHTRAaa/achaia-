import { useEffect } from "react";
import { useSEO } from "../../hooks/useSEO";

const Terms = () => {
  useSEO({
    title: "Terms of Service",
    description: "Terms of service and engagement conditions for Achaia Labs web platforms and engineering services.",
    path: "/terms",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative bg-[#0A0A0C] text-[#A6A6A6] min-h-screen">
      {/* Ambient Top Glow matching micro1 */}
      <div
        className="absolute inset-x-0 top-0 h-96 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(66, 66, 76, 0.22), transparent 75%)",
        }}
      />

      <main className="relative z-10 max-w-3xl mx-auto px-6 sm:px-8 pt-24 pb-32 md:pt-32 md:pb-40">
        {/* Centered Page Header */}
        <div className="text-center mb-14 md:mb-20">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-medium text-[#F5F5F3] tracking-tight mb-3">
            Terms of Service
          </h1>
          <p className="text-sm text-[#888888]">
            Last Updated: July 21, 2026
          </p>
        </div>

        {/* Clean Open Editorial Content - matching micro1 inspiration directly on the background */}
        <div className="text-sm sm:text-base text-[#A6A6A6] leading-relaxed space-y-6">
          <p>
            Please read these Terms of Service (&quot;Terms&quot;) carefully before using the web platforms, client portals, and software tools operated by Achaia Labs (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). Your access to and use of our platforms is conditioned on your acceptance of and compliance with these Terms.
          </p>
          <p className="text-xs uppercase tracking-wider text-[#888888] font-mono font-medium">
            BY ACCESSING OR USING OUR WEBSITE AND PLATFORMS, YOU AGREE TO BE BOUND BY THESE TERMS.
          </p>

          <div className="pt-4">
            <h2 className="text-xl sm:text-2xl font-medium text-[#F5F5F3] tracking-tight mb-4">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing and using this website, you acknowledge that you have read, understood, and agree to be legally bound by these Terms of Service and our Privacy Policy. If you do not agree with any part of these terms, you must not use our website or services.
            </p>
          </div>

          <div className="pt-4">
            <h2 className="text-xl sm:text-2xl font-medium text-[#F5F5F3] tracking-tight mb-4">
              2. Intellectual Property Rights
            </h2>
            <p>
              Unless otherwise explicitly indicated in writing, all content, code, interactive diagrams, visual assets, trademarks, logos, and platform architectures published on this website are the proprietary intellectual property of Achaia Labs. You may not copy, republish, distribute, mirror, or modify our content for commercial or competing purposes without prior written authorization.
            </p>
          </div>

          <div className="pt-4">
            <h2 className="text-xl sm:text-2xl font-medium text-[#F5F5F3] tracking-tight mb-4">
              3. User Conduct & Acceptable Use
            </h2>
            <p className="mb-4">
              You agree to use our digital properties only for lawful purposes. You must not:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm text-[#888888]">
              <li>Submit fraudulent, defamatory, or abusive information through our forms or contact channels.</li>
              <li>Attempt to compromise, probe, or breach the security, authentication, or infrastructure of the Site.</li>
              <li>Use automated scrapers, crawlers, or harvesting tools to extract proprietary data without consent.</li>
              <li>Interfere with or disrupt the normal operation or access of other visitors to our platforms.</li>
            </ul>
          </div>

          <div className="pt-4">
            <h2 className="text-xl sm:text-2xl font-medium text-[#F5F5F3] tracking-tight mb-4">
              4. Disclaimer & Limitation of Liability
            </h2>
            <p>
              The information and materials on this website are provided on an &quot;as-is&quot; and &quot;as-available&quot; basis without warranties of any kind, whether express or implied. To the maximum extent permitted by applicable law, Achaia Labs disclaims all liability for direct, indirect, incidental, consequential, or punitive damages resulting from your access to or reliance on any website content.
            </p>
          </div>

          <div className="pt-4">
            <h2 className="text-xl sm:text-2xl font-medium text-[#F5F5F3] tracking-tight mb-4">
              5. Governing Law & Jurisdiction
            </h2>
            <p>
              These Terms of Service and any dispute arising out of or related to your use of the website shall be governed by and construed in accordance with the laws of West Bengal, India, without giving effect to any principles of conflicts of law. The competent courts in Kolkata, West Bengal, India shall have exclusive jurisdiction over any legal proceedings.
            </p>
          </div>

          <div className="pt-4">
            <h2 className="text-xl sm:text-2xl font-medium text-[#F5F5F3] tracking-tight mb-4">
              6. Contact Information
            </h2>
            <p>
              If you have any questions or require clarification regarding these Terms of Service, please reach out to us at:{" "}
              <a href="mailto:contact@achaialabs.tech" className="text-[#F5F5F3] hover:underline font-medium">
                contact@achaialabs.tech
              </a>{" "}
              or by mail at Godrej Waterside, Salt Lake City, Kolkata, West Bengal - 700091, India.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Terms;
