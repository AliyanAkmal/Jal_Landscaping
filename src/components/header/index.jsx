import { Link } from "react-router-dom";
import logoImage from "../../assets/header/Header.png";
import { useState } from "react";
import arrowIcon from "../../assets/icons/Vector.png";
import phoneIcon from "../../assets/icons/Vector (1).png";

const Header = () => {
  const [servicesOpen, setServicesOpen] = useState(false);
  return (
    <header className="relative  w-full">
      {/* Center image (logo + white shield) */}
      <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-[100] w-full ">
        <img
          src={logoImage}
          alt="JAL Landscaping Logo"
          className="w-full h-auto"
        />
      </div>

      {/* Blue header */}
      <div className="bg-[#0e2b3c] text-white h-[150px] pt-8 flex items-center justify-between  mx-auto px-4 sm:px-6 lg:px-18">
        {/* Left nav */}

        <nav className="flex items-center space-x-6 text-normal font-body pl-10">
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

          <Link
            to="/about"
            className="hover:text-gray-300 hover:cursor-pointer"
          >
            About Us
          </Link>
          <Link
            to="/gallery"
            className="hover:text-gray-300 hover:cursor-pointer"
          >
            Gallery
          </Link>
          <Link
            to="/contact"
            className="hover:text-gray-300 hover:cursor-pointer"
          >
            Contact
          </Link>
        </nav>

        {/* Right contact */}
        <div className="flex items-center space-x-4 text-right">
          <div className="flex items-end space-x-2">
            <img
              src={phoneIcon}
              alt="phone"
              className="w-10 h-10 rounded-full bg-[#6C9458] p-2"
            />

            <div>
              <p className="text-sm">Call Us:</p>
              <p className="font-secondaryTitle text-base">
                (559) 628-3191 Español
              </p>
              <p className="font-secondaryTitle text-base">
                (559) 628-3122 English
              </p>
            </div>
          </div>
          <button className="bg-primary hover:bg-green-700 px-3 py-3 flex gap-2 items-center rounded text-[20px] font-[800]">
            <img src={arrowIcon} alt="arrow" className="h-7 w-7" />
            <p>Get Your Free Estimate</p>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
