import { useEffect } from "react";
import { useSEO } from "../../hooks/useSEO";

const Cookies = () => {
  useSEO({
    title: "Cookie Policy",
    description: "Achaia Labs Cookie Policy - Learn how we use cookies and manage your preferences.",
    path: "/cookies",
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
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-[#F5F5F3] tracking-tight mb-3">
            Cookie Policy
          </h1>
          <p className="text-sm text-[#888888]">
            Last Updated: July 21, 2026
          </p>
        </div>

        {/* Clean Open Editorial Content - matching micro1 inspiration directly on the background */}
        <div className="text-sm sm:text-base text-[#A6A6A6] leading-relaxed space-y-6">
          <p>
            This Cookie Policy explains how Achaia Labs (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; and &quot;our&quot;) uses cookies and similar technologies to recognize you when you visit our website at https://achaialabs.tech (&quot;Website&quot;). It explains what these technologies are and why we use them, as well as your rights to control our use of them.
          </p>
          <p>
            In some cases we may use cookies to collect personal information, or that becomes personal information if we combine it with other information.
          </p>

          <div className="pt-4">
            <h2 className="text-xl sm:text-2xl font-medium text-[#F5F5F3] tracking-tight mb-4">
              What are cookies?
            </h2>
            <p className="mb-4">
              Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
            </p>
            <p>
              Cookies set by the website owner (in this case, Achaia Labs) are called &quot;first-party cookies.&quot; Cookies set by parties other than the website owner are called &quot;third-party cookies.&quot; Third-party cookies enable third-party features or functionality to be provided on or through the website (e.g., advertising, interactive content, and analytics). The parties that set these third-party cookies can recognize your computer both when it visits the website in question and also when it visits certain other websites.
            </p>
          </div>

          <div className="pt-4">
            <h2 className="text-xl sm:text-2xl font-medium text-[#F5F5F3] tracking-tight mb-4">
              Why do we use cookies?
            </h2>
            <p className="mb-4">
              We use first- and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our Website to operate, and we refer to these as &quot;essential&quot; or &quot;strictly necessary&quot; cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our Online Properties. Third parties serve cookies through our Website for advertising, analytics, and other purposes. This is described in more detail below.
            </p>
            <p>
              Essential cookies allow core features such as secure network requests, CSRF validation, and form delivery. Analytics cookies (such as anonymized Google Analytics 4 tags) help us understand visitor navigation trends to continuously improve our software engineering content and platform speed.
            </p>
          </div>

          <div className="pt-4">
            <h2 className="text-xl sm:text-2xl font-medium text-[#F5F5F3] tracking-tight mb-4">
              How can I control cookies?
            </h2>
            <p className="mb-4">
              You have the right to decide whether to accept or reject cookies. You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website, though your access to some functionality and areas of our website may be restricted.
            </p>
            <p className="mb-4">
              As the means by which you can refuse cookies through your web browser controls vary from browser to browser, you should visit your browser&apos;s help menu for more information. Popular browser guides include:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm text-[#888888]">
              <li>Google Chrome (Settings &gt; Privacy and Security &gt; Cookies)</li>
              <li>Apple Safari (Preferences &gt; Privacy &gt; Manage Website Data)</li>
              <li>Mozilla Firefox (Settings &gt; Privacy &amp; Security &gt; Cookies and Site Data)</li>
              <li>Microsoft Edge (Settings &gt; Cookies and Site Permissions)</li>
            </ul>
          </div>

          <div className="pt-4">
            <h2 className="text-xl sm:text-2xl font-medium text-[#F5F5F3] tracking-tight mb-4">
              How often will you update this Cookie Policy?
            </h2>
            <p>
              We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal, or regulatory reasons. Please therefore re-visit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
            </p>
          </div>

          <div className="pt-4">
            <h2 className="text-xl sm:text-2xl font-medium text-[#F5F5F3] tracking-tight mb-4">
              Where can I get further information?
            </h2>
            <p>
              If you have any questions about our use of cookies or other technologies, please email us at{" "}
              <a href="mailto:contact@achaialabs.tech" className="text-[#F5F5F3] hover:underline font-medium">
                contact@achaialabs.tech
              </a>{" "}
              or by post to: Godrej Waterside, Salt Lake City, Kolkata, West Bengal - 700091, India.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cookies;
