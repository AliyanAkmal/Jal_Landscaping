import { Link } from "react-router-dom";
import logoImage from "../../assets/header/Header.png";
import { useState } from "react";
import arrowIcon from "../../assets/icons/Vector.png";
import phoneIcon from "../../assets/icons/Vector (1).png";

const Header = () => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative w-full">
      {/* Center logo */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 z-20 w-full">
        <img
          src={logoImage}
          alt="JAL Landscaping Logo"
          className="w-full h-auto"
        />
      </div>

      {/* Blue header */}
      <div className="bg-[#0e2b3c] text-white h-[150px] flex items-center justify-between px-4 sm:px-6 lg:px-18">
        {/* LEFT NAV — desktop only */}
        <nav className="hidden lg:flex items-center space-x-6 font-body pl-10">
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
        <div className="hidden lg:flex items-center space-x-4">
          <div className="flex items-end space-x-2">
            <img
              src={phoneIcon}
              alt="phone"
              className="w-10 h-10 rounded-full bg-[#6C9458] p-2"
            />
            <div>
              <p className="text-sm">Call Us:</p>
              <p className="text-sm font-secondaryTitle">
                (559) 628-3191 Español
              </p>
              <p className="text-sm font-secondaryTitle">
                (559) 628-3122 English
              </p>
            </div>
          </div>

          <button className="bg-primary hover:bg-green-700 px-4 py-3 flex gap-2 items-center rounded font-bold">
            <img src={arrowIcon} alt="arrow" className="h-6 w-6" />
            <span>Get Your Free Estimate</span>
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="lg:hidden ml-auto">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="bg-[#6C9458] rounded-full p-3"
          >
            <span className="block w-5 h-[2px] bg-white mb-1"></span>
            <span className="block w-5 h-[2px] bg-white mb-1"></span>
            <span className="block w-5 h-[2px] bg-white"></span>
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0e2b3c] text-white px-6 py-6 space-y-4">
          <Link to="/services" className="block">
            Services
          </Link>
          <Link to="/about" className="block">
            About Us
          </Link>
          <Link to="/gallery" className="block">
            Gallery
          </Link>
          <Link to="/contact" className="block">
            Contact
          </Link>

          <div className="pt-4 border-t border-gray-600">
            <p className="text-sm">Call Us:</p>
            <p className="text-sm">(559) 628-3191 Español</p>
            <p className="text-sm">(559) 628-3122 English</p>
          </div>

          <button className="w-full bg-primary py-3 rounded font-bold mt-4">
            Get Your Free Estimate
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
