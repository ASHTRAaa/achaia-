import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg?react";
import { FaInstagram, FaLinkedin, FaXTwitter, FaRedditAlien } from "react-icons/fa6";
import { HiOutlineMapPin, HiOutlineEnvelope } from "react-icons/hi2";

const Footer = () => {
  return (
    <footer className="bg-[#000000] border-t border-white/5 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pt-24 pb-10">

        {/* Top Section */}
        <div className="grid lg:grid-cols-12 gap-y-16 gap-x-12">

          {/* Statement */}
          <div className="lg:col-span-7">

            <p
              className="
                text-white
                text-4xl
                md:text-5xl
                lg:text-4xl
                leading-[1.08]
                tracking-[-0.03em]
                font-light
                max-w-xl
                text-balance
              "
            >
              Ready to take your business communication to the next level,
              with unbeatable speed?
            </p>

            <div className="flex items-center gap-6 mt-10">

              <a
                href="https://www.instagram.com/achaialabs?igsh=MTF5ZXVxbDEyZnlrOQ=="
                target="_blank"
                rel="noreferrer"
                className="
                  text-white/80
                  text-3xl
                  hover:text-[#A0D600]
                  transition-colors
                "
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.linkedin.com/search/results/all/?keywords=achaia%20labs&origin=RICH_QUERY_SUGGESTION&spellCorrectionEnabled=false&heroEntityKey=urn%3Ali%3Aorganization%3A112998902&position=0"
                target="_blank"
                rel="noreferrer"
                className="
                  text-white/80
                  text-3xl
                  hover:text-[#A0D600]
                  transition-colors
                "
              >
                <FaLinkedin />
              </a>

              <a
                href="https://x.com/achaialabs"
                target="_blank"
                rel="noreferrer"
                className="
                  text-white/80
                  text-3xl
                  hover:text-[#A0D600]
                  transition-colors
                "
              >
                <FaXTwitter />
              </a>

              <a
                href="https://reddit.com"
                target="_blank"
                rel="noreferrer"
                className="
                  text-white/80
                  text-3xl
                  hover:text-[#A0D600]
                  transition-colors
                  duration-300
                "
              >
                <FaRedditAlien />
              </a>

            </div>
          </div>

          {/* Navigation */}
          <div
            className="
              lg:col-span-5
              grid
              sm:grid-cols-3
              gap-12
              lg:pl-8
            "
          >

            {/* Ecosystem */}
            <div>
              <h6
                className="
                  uppercase
                  text-sm
                  tracking-[0.15em]
                  font-semibold
                  text-white
                  mb-6
                "
              >
                Ecosystem
              </h6>

              <ul className="space-y-4">

                <li>
                  <Link
                    to="/about"
                    className="text-white/60 hover:text-[#A0D600] transition-colors"
                  >
                    About Us
                  </Link>
                </li>

                <li>
                  <Link
                    to="/work"
                    className="text-white/60 hover:text-[#A0D600] transition-colors"
                  >
                    Case Studies
                  </Link>
                </li>

                <li>
                  <Link
                    to="/blogs"
                    className="text-white/60 hover:text-[#A0D600] transition-colors"
                  >
                    Blogs
                  </Link>
                </li>

                <li>
                  <Link
                    to="/faq"
                    className="text-white/60 hover:text-[#A0D600] transition-colors"
                  >
                    FAQ
                  </Link>
                </li>


              </ul>
            </div>

            {/* Products */}
            <div>
              <h6
                className="
                  uppercase
                  text-sm
                  tracking-[0.15em]
                  font-semibold
                  text-white
                  mb-6
                "
              >
                Products
              </h6>

              <ul className="space-y-4">

                <li>
                  <Link
                    to="/products/sendmyform"
                    className="text-white/60 hover:text-[#A0D600] transition-colors"
                  >
                    SendMyForm
                  </Link>
                </li>

                <li>
                  <Link
                    to="/products/helios"
                    className="text-white/60 hover:text-[#A0D600] transition-colors"
                  >
                    Helios
                  </Link>
                </li>

                <li>
                  <Link
                    to="/products/holdon"
                    className="text-white/60 hover:text-[#A0D600] transition-colors"
                  >
                    Hold On
                  </Link>
                </li>

              </ul>
            </div>

            {/* Let's Talk */}
            <div>
              <h6
                className="
                  uppercase
                  text-sm
                  tracking-[0.15em]
                  font-semibold
                  text-white
                  mb-6
                "
              >
                Let's Talk
              </h6>

              <ul className="space-y-4">

                <li>
                  <Link
                    to="/contact"
                    className="text-white/60 hover:text-[#A0D600] transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>

                <li>
                  <Link
                    to="/cyp"
                    className="text-white/60 hover:text-[#A0D600] transition-colors"
                  >
                    Cost Your Project
                  </Link>
                </li>

              </ul>
            </div>

          </div>
        </div>

        {/* Contact Strip */}
        <div
          className="
            mt-24
            py-8
            border-t border-white/10
            flex
            flex-col
            md:flex-row
            justify-between
            gap-6
            text-sm
            text-white/50
          "
        >

          <div className="flex items-center gap-2">
            <HiOutlineMapPin className="text-lg text-[#A0D600] shrink-0" />
            <span>Kolkata, West Bengal, India</span>
          </div>

           <a
            href="mailto:achaialabs@gmail.com"
            className="
              flex items-center gap-2
              hover:text-[#A0D600]
              transition-colors duration-300
            "
          >
            <HiOutlineEnvelope className="text-lg shrink-0" />
            <span>achaialabs@gmail.com</span>
          </a>
          

        </div>

        {/* Giant Logo */}
        <div className="mt-8">

          <Logo
            className="
              w-[110%]
              -ml-[2%]
              h-auto
              text-white
              opacity-95
              pointer-events-none
              select-none
            "
          />

        </div>

        {/* Bottom Bar */}
        <div
          className="
            -mt-2
            flex
            flex-col
            md:flex-row
            justify-between
            items-center
            gap-6
          "
        >

          <Logo
            className="
              w-20
              h-auto
              text-white/10
            "
          />

          <div
            className="
              flex
              items-center
              gap-8
              text-sm
              text-white/50
            "
          >
            <span>
              © {new Date().getFullYear()} Achaia Labs
            </span>

            <Link
              to="/privacy"
              className="hover:text-[#A0D600] transition-colors"
            >
              Privacy
            </Link>

            <Link
              to="/terms"
              className="hover:text-[#A0D600] transition-colors"
            >
              Terms
            </Link>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;