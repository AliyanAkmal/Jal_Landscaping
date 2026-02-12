import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaStar,
} from "react-icons/fa";

import logoImage from "../../assets/Untitled design (4).png";
import bgImg from "../../assets/backgrounds/Rectangle 115.png";
import googleIcon from "../../assets/icons/google-logo-transparent 1.png";

const FooterHero = () => {
  return (
    <section
      className="relative w-full pt-32 sm:pt-60  bg-cover bg-center mt-20"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="absolute top-0 sm:-top-16 flex justify-center w-full z-40 xl:max-h-72">
        <img
          src={logoImage}
          alt="JAL Landscaping"
          style={{
            width: "100%",
            height: "auto",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 75%, transparent 100%)",
            maskImage:
              "linear-gradient(to bottom, black 70%, transparent 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 text-white text-center md:text-left">
        {/* Logo */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          {/* Left */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-[32px] font-semibold text-yellow-400 mb-3">
              Ready to Transform Your Yard?
            </h3>

            <p className="text-base text-gray-300 max-w-md mb-6">
              We offer free estimates Monday through Saturday. Let’s talk about
              your project.
            </p>

            {/* Google Reviews */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 text-sm">
              <span className="font-medium text-base">
                <img src={googleIcon} alt="Google" />
              </span>
              <span className="text-base text-gray-300">
                5.0 Verified Customer Reviews
              </span>
              <div className="flex gap-1 text-green-400">
                <FaStar size={14} />
                <FaStar size={14} />
                <FaStar size={14} />
                <FaStar size={14} />
                <FaStar size={14} />
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="space-y-4 text-base text-gray-300 flex flex-col items-center md:items-start">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <FaPhoneAlt size={20} className="text-yellow-400" />
              <div className="text-base">
                {" "}
                <p>(559) 628-3122 English</p>
                <p>(559) 628-3191 Español</p>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-3">
              <FaEnvelope size={20} className="text-yellow-400" />
              <span>jesusladorritz51@icloud.com</span>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-3">
              <FaMapMarkerAlt size={20} className="text-yellow-400" />
              <span>124 E Tuolumne St, Fresno, CA 93706</span>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-3">
              <FaClock size={20} className="text-yellow-400" />
              <span>Mon–Sat: 7:00 AM – 6:00 PM</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center md:items-start gap-4 text-md text-gray-400 text-center md:text-left">
          <p>Privacy Policy | Your Privacy Choices</p>
          <p>
            © 2025 JAL Landscaping and More. All Rights Reserved.{" "}
            <span className="text-green-400">Web Design by Lotin Branding</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FooterHero;
