import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showManage, setShowManage] = useState(false);

  // Custom preferences state
  const [preferences, setPreferences] = useState({
    necessary: true, // Always required
    analytics: true,
    marketing: false,
  });

  useEffect(() => {
    // Show banner after a slight delay if no consent is saved
    const consent = localStorage.getItem("achaia_cookie_consent");
    if (!consent) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const updateConsent = (type, consentValue, customPrefs = null) => {
    // Save to localStorage
    localStorage.setItem("achaia_cookie_consent", consentValue);
    if (customPrefs) {
      localStorage.setItem("achaia_cookie_consent_prefs", JSON.stringify(customPrefs));
    }

    // Update Google Consent Mode v2 dynamically
    if (window.gtag) {
      const analyticsState = type === "all" ? "granted" : type === "decline" ? "denied" : (customPrefs?.analytics ? "granted" : "denied");
      const marketingState = type === "all" ? "granted" : type === "decline" ? "denied" : (customPrefs?.marketing ? "granted" : "denied");

      window.gtag("consent", "update", {
        analytics_storage: analyticsState,
        ad_storage: marketingState,
        personalization_storage: marketingState,
      });
    }

    setIsVisible(false);
  };

  const handleAcceptAll = () => {
    updateConsent("all", "accepted", { necessary: true, analytics: true, marketing: true });
  };

  const handleDeclineAll = () => {
    updateConsent("decline", "declined", { necessary: true, analytics: false, marketing: false });
  };

  const handleSavePreferences = () => {
    updateConsent("custom", "custom", preferences);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 120, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 80, opacity: 0, scale: 0.95 }}
          transition={{ type: "spring", damping: 20, stiffness: 100 }}
          className="fixed bottom-6 right-6 left-6 md:left-auto md:max-w-md z-50 rounded-2xl bg-white border border-slate-200 shadow-2xl p-6 text-slate-800"
        >
          {/* Banner Layout */}
          <div className="flex flex-col gap-4">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#0062FF] flex items-center justify-center">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5Z" />
                    <path d="M8.5 8.5v.01" />
                    <path d="M16 15.5v.01" />
                    <path d="M12 12v.01" />
                    <path d="M11 16v.01" />
                    <path d="M7 13v.01" />
                  </svg>
                </div>
                <h4 className="font-semibold text-slate-900 text-sm">Cookie Preferences</h4>
              </div>

              {/* Close Button */}
              <button
                onClick={handleDeclineAll}
                className="text-slate-400 hover:text-slate-700 transition-colors p-1 rounded-lg"
                aria-label="Decline and close"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Description / Settings */}
            {!showManage ? (
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We use cookies to ensure site functionality and analyze performance. Read our{" "}
                <Link to="/privacy" className="text-[#0062FF] hover:underline font-medium">
                  Privacy Policy
                </Link>
                .
              </p>
            ) : (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="flex flex-col gap-2.5 my-1"
              >
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                  <div>
                    <h5 className="text-xs font-semibold text-slate-900">Strictly Necessary</h5>
                    <p className="text-[11px] text-slate-500">Required for website functionality.</p>
                  </div>
                  <span className="text-xs font-semibold text-slate-400">Required</span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                  <div>
                    <h5 className="text-xs font-semibold text-slate-900">Analytics</h5>
                    <p className="text-[11px] text-slate-500">Anonymous traffic performance data.</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={preferences.analytics}
                    onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                    className="w-4 h-4 text-[#0062FF] rounded border-slate-300"
                  />
                </div>
              </motion.div>
            )}

            {/* Actions */}
            <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-100">
              {!showManage ? (
                <>
                  <button
                    onClick={() => setShowManage(true)}
                    className="text-xs font-semibold text-slate-500 hover:text-slate-800 px-3 py-2 rounded-lg transition-colors"
                  >
                    Manage
                  </button>
                  <button
                    onClick={handleDeclineAll}
                    className="text-xs font-semibold text-slate-600 hover:text-slate-900 px-3 py-2 rounded-lg transition-colors"
                  >
                    Decline
                  </button>
                  <button
                    onClick={handleAcceptAll}
                    className="text-xs font-semibold text-white bg-[#0062FF] hover:bg-[#0052CC] px-4 py-2 rounded-full transition-all shadow-xs"
                  >
                    Accept All
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => setShowManage(false)}
                    className="text-xs font-semibold text-slate-500 hover:text-slate-800 px-3 py-2 rounded-lg transition-colors"
                  >
                    Back
                  </button>
                  <button
                    onClick={handleSavePreferences}
                    className="text-xs font-semibold text-white bg-slate-800 hover:bg-slate-900 px-4 py-2 rounded-full transition-all"
                  >
                    Save Selection
                  </button>
                </>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
