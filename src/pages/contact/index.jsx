import React from "react";
import contactBg from "../../assets/housei.avif";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaMapMarkerAlt,
} from "react-icons/fa";
import MapSection from "../../components/mapSection";
import ContactForm from "../../components/contactForm";

const Contact = () => {
  return (
    <main className="w-full bg-gray-50 min-h-screen font-sans text-gray-800">
      {/* HERO SECTION */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center text-center text-white overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-1000 hover:scale-105"
          style={{ backgroundImage: `url(${contactBg})` }}
        ></div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60 z-10"></div>

        {/* Decorative Grid Pattern Overlay */}
        <div className="absolute inset-0 z-10 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

        {/* Content */}
        <div className="relative z-20 px-6 max-w-5xl mx-auto animate-fade-in-up">
          <span className="inline-block py-1 px-3 rounded-full bg-[#568F3A]/20 border border-[#568F3A] text-[#568F3A] font-semibold text-sm mb-4 backdrop-blur-sm">
            GET IN TOUCH
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-title font-bold mb-6 leading-tight drop-shadow-lg">
            Let's Build Your <br />
            <span className="text-[#568F3A]">Dream Landscape</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md">
            Our team needs just a few details to get started on your project.
            Contact us today for a free consultation.
          </p>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-1">
            <div className="w-1 h-2 bg-white rounded-full animate-scroll-down"></div>
          </div>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="py-24 px-6 lg:px-20 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* LEFT SIDE — CONTACT INFO */}
          <div className="space-y-10 lg:sticky lg:top-24">
            <div>
              <h2 className="text-4xl lg:text-5xl font-title font-bold text-[#142629] mb-6">
                Contact Information
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Have questions? We'd love to hear from you. Reach out to our
                team directly or fill out the form, and we'll get back to you as
                soon as possible.
              </p>
            </div>

            <div className="grid gap-6">
              {/* Phone Card */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 flex items-start gap-4 group">
                <div className="bg-[#EAF4E8] p-4 rounded-xl text-[#345C39] group-hover:bg-[#345C39] group-hover:text-white transition-colors duration-300">
                  <FaPhoneAlt size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-[#142629] text-xl mb-1">
                    Phone
                  </h3>
                  <p className="text-gray-600">
                    <span className="font-semibold text-[#568F3A]">
                      Español:
                    </span>{" "}
                    (559) 628-3191
                  </p>
                  <p className="text-gray-600">
                    <span className="font-semibold text-[#568F3A]">
                      English:
                    </span>{" "}
                    (559) 628-3122
                  </p>
                </div>
              </div>

              {/* Email Card */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 flex items-start gap-4 group">
                <div className="bg-[#EAF4E8] p-4 rounded-xl text-[#345C39] group-hover:bg-[#345C39] group-hover:text-white transition-colors duration-300">
                  <FaEnvelope size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-[#142629] text-xl mb-1">
                    Email
                  </h3>
                  <p className="text-gray-600">contact@jallandscaping.com</p>
                  <p className="text-sm text-gray-500 mt-1">
                    We reply within 24 hours.
                  </p>
                </div>
              </div>

              {/* Hours Card */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 flex items-start gap-4 group">
                <div className="bg-[#EAF4E8] p-4 rounded-xl text-[#345C39] group-hover:bg-[#345C39] group-hover:text-white transition-colors duration-300">
                  <FaClock size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-[#142629] text-xl mb-1">
                    Business Hours
                  </h3>
                  <p className="text-gray-600">Monday – Friday</p>
                  <p className="text-[#345C39] font-medium">
                    8:00 AM – 5:00 PM
                  </p>
                </div>
              </div>

              {/* Area Card */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 flex items-start gap-4 group">
                <div className="bg-[#EAF4E8] p-4 rounded-xl text-[#345C39] group-hover:bg-[#345C39] group-hover:text-white transition-colors duration-300">
                  <FaMapMarkerAlt size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-[#142629] text-xl mb-1">
                    Service Area
                  </h3>
                  <p className="text-gray-600">
                    Serving Reedley, Fresno, Clovis, <br /> and surrounding
                    areas.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE — CONTACT FORM */}
          <ContactForm />
        </div>
      </section>

      {/* MAP SECTION */}
      <MapSection />

      {/* CTA SECTION */}
      <section className="bg-white text-[#142629] mb-40 py-20 text-center px-6 relative overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto ">
          <h2 className="text-3xl lg:text-4xl font-title font-bold mb-6">
            Ready to Upgrade Your Outdoor Living?
          </h2>
          <p className="text-[#142629] text-lg mb-10 max-w-2xl mx-auto">
            Don't wait to create the garden of your dreams. Our experts are
            standing by to help you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="mailto:contact@jallandscaping.com"
              className="inline-flex items-center justify-center gap-2 bg-[#568F3A] hover:bg-[#4a7d32] text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-[#568F3A]/30 border border-transparent"
            >
              <FaEnvelope />
              Email Us
            </a>
            <a
              href="tel:5596283191"
              className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/10 text-[#142629] border-2 border-[#142629]/30 hover:border-[#142629] px-8 py-4 rounded-full font-bold transition-all"
            >
              <FaPhoneAlt />
              Call Now
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
