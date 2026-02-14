import React from "react";
import contactBg from "../../assets/housei.avif";
const Contact = () => {
  return (
    <main className="w-full">
      {/* HERO SECTION */}
      <section className="relative min-h-[80vh] px-6 lg:px-20 text-center text-white overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${contactBg})` }}
        ></div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70 z-10"></div>

        {/* Optional Gradient on Top for Depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-20"></div>

        {/* Enhanced Bottom Fade to White */}
        <div
          className="absolute bottom-0 left-0 w-full h-40 z-20"
          style={{
            background:
              "linear-gradient(to top, rgba(255,255,255,1) 0%, rgba(255,255,255,0.8) 20%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0) 100%)",
          }}
        ></div>

        {/* Content */}
        <div className="relative z-30 max-w-4xl mx-auto pt-32">
          <h1 className="text-[40px] lg:text-[52px] font-title leading-tight">
            <span className="text-[#568F3A]">Contact JAL Landscaping</span> and
            More
          </h1>

          <p className="mt-6 text-[18px] lg:text-[21px] max-w-3xl mx-auto text-justify">
            Ready to improve your outdoor space? Whether you need professional
            landscaping, hardscape installation, or reliable property
            maintenance, our team is here to help.
          </p>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="py-20 px-6 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* LEFT SIDE — CONTACT INFO */}
          <div className="space-y-10">
            <div>
              <h2 className="text-[32px] lg:text-[36px] font-title mb-4 text-[#142629]">
                Get in Touch
              </h2>
              <p className="text-[18px] leading-relaxed">
                We believe great results begin with clear communication. Contact
                us directly or fill out the estimate request form and we’ll
                respond promptly.
              </p>
            </div>

            <div className="bg-[#345C39] text-white rounded-[40px] p-10 space-y-6">
              <div>
                <p className="font-semibold">Phone (Español)</p>
                <p>(559) 628-3191</p>
              </div>

              <div>
                <p className="font-semibold">Phone (English)</p>
                <p>(559) 628-3122</p>
              </div>

              <div>
                <p className="font-semibold">Business Hours</p>
                <p>Monday – Friday</p>
                <p>8:00 AM – 5:00 PM</p>
              </div>

              <div>
                <p className="font-semibold">Service Area</p>
                <p>Serving local homeowners throughout our region.</p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE — CONTACT FORM */}
          <div className="relative bg-white rounded-[40px] shadow-2xl p-10 lg:p-12 overflow-hidden">
            {/* Decorative Accent Gradient */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[#345C39] to-[#6C9458] rounded-full opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tr from-[#345C39] to-[#6C9458] rounded-full opacity-20 translate-x-1/2 translate-y-1/2"></div>

            <h2 className="text-[28px] lg:text-[32px] text-[#142629] font-title mb-8">
              Request a Free Estimate
            </h2>

            <form className="space-y-6">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border border-gray-300 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#345C39] transition"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-gray-300 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#345C39] transition"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border border-gray-300 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#345C39] transition"
              />

              <select className="w-full border border-gray-300 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#345C39] transition">
                <option>Select Service</option>
                <option>Landscaping & Outdoor Design</option>
                <option>Hardscape & Construction</option>
                <option>Property Maintenance</option>
              </select>

              <textarea
                rows="5"
                placeholder="Tell us about your project..."
                className="w-full border border-gray-300 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#345C39] transition"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#345C39] to-[#6C9458] hover:from-[#6C9458] hover:to-[#345C39] text-white py-4 rounded-xl font-semibold transition-all shadow-md"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-[#0e2b3c] text-white py-16 text-center px-6 mb-52 mt-20">
        <h2 className="text-[28px] lg:text-[32px] font-title mb-4">
          Ready to Upgrade Your Outdoor Space?
        </h2>

        <p className="mb-6 text-[18px]">
          Contact today and schedule your free consultation.
        </p>

        <a
          href="tel:5596283191"
          className="inline-block bg-[#345C39] hover:bg-green-700 px-8 py-4 rounded-full font-semibold transition"
        >
          Email Us
        </a>
      </section>
    </main>
  );
};

export default Contact;
