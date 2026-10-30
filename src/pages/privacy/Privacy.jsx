import { useEffect } from "react";
import { useSEO } from "../../hooks/useSEO";

const Privacy = () => {
  useSEO({
    title: "Privacy Policy",
    description: "Achaia Labs Website Privacy Policy - Learn how we collect, protect, and handle data transmitted through our website.",
    path: "/privacy",
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
          <h1 className="text-xl sm:text-5xl md:text-6xl font-medium text-[#F5F5F3] tracking-tight mb-3">
            Website Privacy Policy
          </h1>
          <p className="text-sm text-[#888888]">
            Last Updated: July 21, 2026
          </p>
        </div>

        {/* Clean Open Editorial Content - matching micro1 inspiration directly on the background */}
        <div className="text-sm sm:text-base text-[#A6A6A6] leading-relaxed space-y-6">
          <p>
            This Website Privacy Policy describes the data privacy practices of Achaia Labs (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) with respect to information we collect and use when you access or use our website (https://achaialabs.tech), or when we otherwise interact with you in connection with the website or our software engineering activities (the website and related activities are collectively referred to herein as the &quot;Site&quot;).
          </p>
          <p className="text-xs uppercase tracking-wider text-[#888888] font-mono font-medium">
            PLEASE READ THIS PRIVACY POLICY CAREFULLY TO UNDERSTAND HOW WE HANDLE YOUR INFORMATION.
          </p>

          <div className="pt-4">
            <h2 className="text-xl sm:text-2xl font-medium text-[#F5F5F3] tracking-tight mb-4">
              1. Information We Collect
            </h2>
            <h3 className="text-base sm:text-lg font-medium text-[#D4D4D8] mb-3">
              Information You Provide to Us
            </h3>
            <p className="mb-4">
              We collect information that you provide directly to us when you use the Site. For example, we collect information from you when you fill out a form on the Site, contact us via email, request a project scope estimate, respond to a survey, or apply to join our engineering team:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm text-[#888888]">
              <li>Contact information, including your name, email address, and phone number.</li>
              <li>Professional information, such as your job title, company name, portfolio, or GitHub profile.</li>
              <li>Project scoping parameters, budget requirements, technical specifications, and architectural goals.</li>
              <li>Records and copies of your correspondence when you reach out to our team.</li>
            </ul>
          </div>

          <div className="pt-4">
            <h2 className="text-xl sm:text-2xl font-medium text-[#F5F5F3] tracking-tight mb-4">
              2. How We Use Your Information
            </h2>
            <p className="mb-4">
              We use the information we collect to operate, provide, and enhance our services:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm text-[#888888]">
              <li>To evaluate project scopes, prepare architectural proposals, and provide transparent cost estimates.</li>
              <li>To communicate with you regarding client inquiries, technical consultations, or job applications.</li>
              <li>To maintain, analyze, and optimize the speed, security, and performance of our web infrastructure.</li>
              <li>To prevent fraudulent transactions, monitor against security incidents, and protect user rights.</li>
            </ul>
          </div>

          <div className="pt-4">
            <h2 className="text-xl sm:text-2xl font-medium text-[#F5F5F3] tracking-tight mb-4">
              3. Data Security & Storage
            </h2>
            <p>
              We implement industry-standard administrative, technical, and physical safeguards to protect the personal information we receive. Data submitted through our web forms is encrypted in transit using Transport Layer Security (TLS/HTTPS). We do not sell, rent, or trade your personal information to third-party data brokers.
            </p>
          </div>

          <div className="pt-4">
            <h2 className="text-xl sm:text-2xl font-medium text-[#F5F5F3] tracking-tight mb-4">
              4. Analytics & Tracking Technologies
            </h2>
            <p>
              We use privacy-respecting analytics tools (such as Google Analytics 4) to monitor aggregate, anonymous traffic trends and system health. These tools record telemetry such as browser type, referring pages, and session duration without associating individual identities. For more details on cookie management, please consult our Cookie Policy.
            </p>
          </div>

          <div className="pt-4">
            <h2 className="text-xl sm:text-2xl font-medium text-[#F5F5F3] tracking-tight mb-4">
              5. Your Rights & Choices
            </h2>
            <p>
              Depending on your location, you may have rights under applicable data protection laws, including the right to access, correct, update, or request the deletion of your personal data held by us. To submit a request, please reach out to us at contact@achaialabs.tech.
            </p>
          </div>

          <div className="pt-4">
            <h2 className="text-xl sm:text-2xl font-medium text-[#F5F5F3] tracking-tight mb-4">
              6. Contact Us
            </h2>
            <p>
              If you have any questions or feedback about this Privacy Policy or our privacy practices, please contact us at:{" "}
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

export default Privacy;
