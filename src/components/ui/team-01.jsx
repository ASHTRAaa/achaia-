"use client";
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Globe } from "lucide-react";
import { motion } from "motion/react";

const LinkedinIcon = ({ size = 16 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip-linkedin-team01)">
      <path
        d="M13.633 13.633h-2.37V9.92c0-.885-.017-2.025-1.234-2.025-1.235 0-1.424.965-1.424 1.96v3.778h-2.37V5.998H8.51v1.043h.031a2.5 2.5 0 0 1 2.246-1.233c2.403 0 2.846 1.58 2.846 3.637zM3.56 4.954a1.376 1.376 0 1 1 0-2.751 1.376 1.376 0 0 1 0 2.751m1.185 8.679H2.372V5.998h2.373zM14.815.001H1.18A1.17 1.17 0 0 0 0 1.154v13.691A1.17 1.17 0 0 0 1.18 16h13.635A1.17 1.17 0 0 0 16 14.845V1.153A1.17 1.17 0 0 0 14.815 0"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="clip-linkedin-team01">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const XIcon = ({ size = 14 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export const defaultTeamData = [
  {
    name: "Logan Dang",
    role: "WordPress Developer",
    image:
      "https://cdn.21st.dev/assets/localized/a15173e6535b3403cf75d3a251b152b66cb158540ae6fe0cef584477d25c296d.png",
    socials: {
      website: "#",
      linkedin: "#",
    },
  },
  {
    name: "Ana Belić",
    role: "Social Media Specialist",
    image:
      "https://cdn.21st.dev/assets/localized/642c6a86e5fbd3b161614c1493159ed72ba9f28fd64bbd3dac1aaf902841acbb.png",
    socials: {
      website: "#",
      linkedin: "#",
    },
  },
  {
    name: "Brian Hanley",
    role: "Product Designer",
    image:
      "https://cdn.21st.dev/assets/localized/16f617e9aa4511f685dd437418d90bcb53817ed5031cd822d60db98848ad536f.png",
    socials: {
      website: "#",
      linkedin: "#",
    },
  },
  {
    name: "Darko Stanković",
    role: "UI Designer",
    image:
      "https://cdn.21st.dev/assets/localized/90f8eb479a4a56a4da83ebf6be45a9ff73515b0af2cff481f665ea40189a8137.png",
    socials: {
      website: "#",
      linkedin: "#",
    },
  },
];

// Creative geometric backdrop shapes matching 21st.dev preview
const creativeBackdrops = [
  {
    bg: "from-[#315EFB]/80 to-[#1d3fb8]/90",
    shape: "rounded-[44px] rounded-tl-[16px]",
  },
  {
    bg: "from-[#e06d3b]/85 to-[#c2410c]/90",
    shape: "rounded-t-[90px] rounded-b-[24px]",
  },
  {
    bg: "from-[#d99b26]/85 to-[#b45309]/90",
    shape: "rounded-full",
  },
  {
    bg: "from-[#0284c7]/85 to-[#0369a1]/90",
    shape: "rounded-[36px] rounded-br-[64px]",
  },
];

const Team = ({
  badge = "Founding Engineering Team",
  heading = "The builders behind Achaia Labs.",
  subtitle = "A focused team of engineers, operators, and strategists working directly on your systems.",
  teamData = defaultTeamData,
  className = "",
  showShapes = true,
}) => {
  return (
    <section className={className}>
      <div className="lg:py-20 sm:py-16 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-16 flex flex-col items-center justify-center gap-8 md:gap-14">
          <motion.div
            initial={{ y: -40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
            className="max-w-2xl mx-auto flex flex-col items-center justify-center text-center gap-3.5"
          >
            {badge && (
              <Badge variant={"outline"} className="px-3.5 py-1 h-auto text-xs font-mono font-semibold text-[#315EFB] uppercase tracking-wider border-[#303030] bg-[#181818]">
                {badge}
              </Badge>
            )}
            {heading && (
              <h2 className="text-3xl md:text-5xl font-semibold text-foreground tracking-tight leading-tight">
                {heading}
              </h2>
            )}
            {subtitle && (
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl">
                {subtitle}
              </p>
            )}
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
            {teamData?.map((value, index) => {
              const backdrop = creativeBackdrops[index % creativeBackdrops.length];

              return (
                <motion.div
                  key={index}
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.1,
                    ease: [0.21, 0.47, 0.32, 0.98],
                  }}
                  className="group flex flex-col items-center justify-between gap-6"
                >
                  {/* Portrait with creative geometry */}
                  <div className="w-full max-w-[260px] aspect-[4/5] relative flex items-end justify-center overflow-hidden p-2">
                    {showShapes && (
                      <div
                        className={`absolute inset-2 bg-gradient-to-b ${backdrop.bg} ${backdrop.shape} transition-transform duration-500 group-hover:scale-[1.02] shadow-xl`}
                      />
                    )}
                    <img
                      className={`relative z-10 w-full h-full object-cover object-top ${
                        showShapes ? backdrop.shape : "rounded-3xl"
                      } group-hover:grayscale transition-all duration-500`}
                      src={value.image}
                      alt={value.name}
                    />
                  </div>

                  {/* Member info & socials */}
                  <div className="w-full flex flex-col gap-3 items-center justify-center text-center">
                    <div className="flex flex-col items-center justify-center gap-1">
                      <h3 className="text-2xl font-semibold text-foreground tracking-tight">
                        {value.name}
                      </h3>
                      <p className="text-xs font-mono font-medium text-[#315EFB] uppercase tracking-wider">
                        {value.role}
                      </p>
                      {value.bio && (
                        <p className="text-xs text-muted-foreground leading-relaxed mt-2 line-clamp-3 max-w-xs">
                          {value.bio}
                        </p>
                      )}
                    </div>
                    <div className="flex items-center gap-2 pt-1 text-[#A6A6A6]">
                      {value.socials?.website && (
                        <a
                          href={value.socials.website}
                          className="p-2.5 hover:bg-accent/80 hover:text-white rounded-full transition-colors border border-transparent hover:border-[#303030]"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${value.name} Website`}
                        >
                          <Globe size={16} />
                        </a>
                      )}
                      {(value.socials?.x || value.socials?.twitter) && (
                        <a
                          href={value.socials.x || value.socials.twitter}
                          className="p-2.5 hover:bg-accent/80 hover:text-white rounded-full transition-colors border border-transparent hover:border-[#303030]"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${value.name} X / Twitter`}
                        >
                          <XIcon size={14} />
                        </a>
                      )}
                      {value.socials?.linkedin && (
                        <a
                          href={value.socials.linkedin}
                          className="p-2.5 hover:bg-accent/80 hover:text-white rounded-full transition-colors border border-transparent hover:border-[#303030]"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${value.name} LinkedIn`}
                        >
                          <LinkedinIcon size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
