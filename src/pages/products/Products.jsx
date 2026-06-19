import { Link } from "react-router-dom";

const products = [
  {
    id: "helios",
    category: "AI PLATFORM",
    name: "Helios",
    icon: "lightbulb",
    desc: "Premium AI prompt generation and organization product, branded around a cosmic creative universe.",
  },
  {
    id: "sendmyform",
    category: "DEVELOPER TOOL",
    name: "SendMyForm",
    icon: "mail",
    desc: "No-backend form submission service built for developers to receive and manage submissions instantly.",
  },
  {
    id: "holdon",
    category: "MOBILE SECURITY",
    name: "Hold On",
    icon: "security",
    desc: "Anti-theft mobile alarm app designed to protect your phone from theft and tampering in public spaces.",
  },
];

const Products = () => {
  return (
    <div className="bg-background text-on-background selection:bg-secondary-fixed selection:text-on-secondary-fixed">
      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center pt-32 pb-20 px-6 md:px-margin-desktop text-center overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{ background: "radial-gradient(circle at 50% 50%, rgba(160, 214, 0, 0.05) 0%, transparent 70%)" }}
        />
        <div className="max-w-3xl mx-auto space-y-6">
          <span className="font-label-caps text-label-caps text-secondary-fixed tracking-[0.2em]">IN-HOUSE ECOSYSTEM</span>
          <h1 className="font-display-xl text-display-xl text-on-surface">
            Products <span className="text-secondary-fixed">Built to Last</span>
          </h1>
          <p className="font-subheading text-subheading text-on-surface-variant max-w-xl mx-auto">
            Our in-house platforms represent the cutting edge of what we build for our clients — available to the world.
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-section-gap px-6 md:px-margin-desktop max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {products.map((p) => (
            <Link to={`/products/${p.id}`} key={p.id} className="glass-card p-10 flex flex-col justify-between group h-[420px]">
              <div>
                <span className="font-label-caps text-[10px] text-secondary-fixed mb-4 block">{p.category}</span>
                <h2 className="font-headline-lg text-3xl mb-4 text-on-surface">{p.name}</h2>
                <p className="text-on-surface-variant leading-relaxed">{p.desc}</p>
              </div>
              <div className="flex items-center justify-between mt-8">
                <span className="material-symbols-outlined text-4xl text-white/20 group-hover:text-secondary-fixed transition-colors">{p.icon}</span>
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-secondary-fixed group-hover:text-black transition-all">
                  <span className="material-symbols-outlined">north_east</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Products;
