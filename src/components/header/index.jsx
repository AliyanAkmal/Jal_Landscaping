import { Link } from "react-router-dom";
import logoImage from "../../assets/header/Header.png";
import { useState } from "react";
import arrowIcon from "../../assets/icons/Vector.png";
import phoneIcon from "../../assets/icons/Vector (1).png";
import menuLgo from "../../assets/Frame 9.png";

const Header = () => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative w-full z-30">
      {/* Center logo */}
      {/* <div className="absolute left-1/2 -translate-x-1/2 top-0 z-10 w-full"> */}
      <img
        src={logoImage}
        alt="JAL Landscaping Logo"
        className=" h-auto absolute left-1/2 -translate-x-1/2 top-0 z-10 w-full"
      />
      {/* </div> */}

      {/* Blue header */}
      <div className="bg-[#0e2b3c] text-white h-[40px]  xs:h-[60px] sm:h-[75px] md:h-[85px] l:h-[110px] lg:h-[140px] flex items-end pb-0 sm:pb-1 l:pb-4 lg:pb-8 justify-between px-4 sm:px-6 lg:px-18">
        {/* LEFT NAV — desktop only */}
        <nav className="hidden l:flex items-center md:space-x-3 lg:space-x-6 font-body pl-3 lg:pl-10">
          <div className="relative">
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="hover:text-gray-300"
            >
              Services ▾
            </button>

            {servicesOpen && (
              <div className="absolute mt-2 bg-[#0e2b3c] border border-gray-700 rounded shadow-lg z-50 w-[250px]">
                <Link
                  to="/services"
                  className="block px-4 py-2 hover:bg-gray-800"
                >
                  Landscaping & Outdoor Design
                </Link>
                <Link
                  to="/hardscape"
                  className="block px-4 py-2 hover:bg-gray-800"
                >
                  Hardscape & Construction
                </Link>
                <Link
                  to="/maintenance"
                  className="block px-4 py-2 hover:bg-gray-800"
                >
                  Property Maintenance & Services
                </Link>
              </div>
            )}
          </div>

          <Link to="/about" className="hover:text-gray-300">
            About Us
          </Link>
          <Link to="/gallery" className="hover:text-gray-300">
            Gallery
          </Link>
          <Link to="/contact" className="hover:text-gray-300">
            Contact
          </Link>
        </nav>

        {/* RIGHT — desktop only */}
        <div className="hidden l:flex items-center space-x-4 self-end">
          <div className="flex items-end space-x-2">
            <img
              src={phoneIcon}
              alt="phone"
              className="w-10 h-10 rounded-full bg-[#6C9458] p-2"
            />
            <div>
              <p className="text-sm">Call Us:</p>
              <p className="l:text-xs  lg:text-sm font-secondaryTitle">
                (559) 628-3191 Español
              </p>
              <p className="l:text-xs  lg:text-sm font-secondaryTitle">
                (559) 628-3122 English
              </p>
            </div>
          </div>

          <button className="bg-primary hover:bg-green-700 l:px-2 lg:px-4 l:py-2 lg:py-4 flex gap-2 items-center rounded font-bold">
            <img src={arrowIcon} alt="arrow" className="h-6 w-6" />
            <span className="text-sm l:text-16px">Get Your Free Estimate</span>
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="l:hidden ml-auto relative z-50">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="max-w-10 xs:max-w-16 sm:max-w-20"
          >
            <img src={menuLgo} alt="" className="w-full h-auto" />
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN */}
      {mobileMenuOpen && (
        <div className="l:hidden bg-[#0F2530] text-white px-6 pb-10 pt-20 text-center space-y-6">
          {/* SERVICES DROPDOWN */}
          <div>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="w-full text-xl font-semibold flex justify-center items-center gap-2"
            >
              Services
              <span
                className={`transition-transform ${servicesOpen ? "rotate-180" : ""} font-thin`}
              >
                ˅
              </span>
            </button>

            {servicesOpen && (
              <div className="mt-4 space-y-3 text-lg">
                <Link to="/services" className="block opacity-90">
                  Landscaping & Outdoor Design
                </Link>
                <Link to="/hardscape" className="block opacity-90">
                  Hardscape & Construction
                </Link>
                <Link to="/maintenance" className="block opacity-90">
                  Property Maintenance & Services
                </Link>
              </div>
            )}
          </div>

          {/* OTHER LINKS */}
          <Link to="/about" className="block text-lg font-semibold">
            About Us
          </Link>

          <Link to="/gallery" className="block text-lg font-semibold">
            Gallery
          </Link>

          <Link to="/contact" className="block text-lg font-semibold">
            Contact
          </Link>

          {/* CALL SECTION */}
          <div className="pt-6">
            <p className="text-sm mb-3 opacity-80">Call Us:</p>

            <div className="flex justify-center items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-full bg-[#6C9458] flex items-center justify-center">
                <img src={phoneIcon} alt="phone" className="w-5 h-5" />
              </div>
              <div className="text-left text-sm">
                <p className="font-semibold">(559) 628-3191 Español</p>
                <p className="font-semibold">(559) 628-3122 English</p>
              </div>
            </div>
          </div>

          {/* CTA BUTTON */}
          <button className="mt-6 bg-[#6C9458] hover:bg-green-700 px-6 py-3 rounded-md font-semibold inline-flex items-center gap-2">
            <img src={arrowIcon} alt="arrow" className="w-4 h-4" />
            Get Your Free Estimate
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
