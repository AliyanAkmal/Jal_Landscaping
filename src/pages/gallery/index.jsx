import React from "react";
import Wrapper from "../../components/wrapper";
import GalleryImage1 from "../../assets/gallery/custom-1.webp";
import GalleryImage2 from "../../assets/gallery/custom-2.avif";
import GalleryImage3 from "../../assets/gallery/custom-5.webp";
import GalleryImage4 from "../../assets/gallery/custom-7.jpg";
import GalleryImage5 from "../../assets/gallery/custom-78.jpg";
import GalleryImage6 from "../../assets/gallery/custommm.jpg";
import bgCal from "../../assets/backgrounds/bgcal.jpg";

const galleryData = [
  {
    category: "Landscaping & Outdoor Design",
    images: [GalleryImage1, GalleryImage2, GalleryImage3],
  },
  {
    category: "Hardscape & Construction",
    images: [GalleryImage4, GalleryImage5, GalleryImage1],
  },
  {
    category: "Property Maintenance & Services",
    images: [GalleryImage6, GalleryImage2, GalleryImage3],
  },
];

const faqData = [
  {
    question: "Do you offer design consultations before starting a project?",
    answer:
      "Yes! Every project begins with a free consultation to understand your goals, space, and budget.",
  },
  {
    question:
      "Can I request a similar design to a project I see in the gallery?",
    answer:
      "Absolutely. We can create a custom plan inspired by any of our completed projects.",
  },
  {
    question: "Are these projects only in Fresno, CA?",
    answer:
      "While most of our work is local to Fresno, we occasionally take projects in nearby communities. Contact us to discuss your location.",
  },
  {
    question: "How do I know which service is right for my property?",
    answer:
      "Our team will assess your space and recommend the best combination of landscaping, hardscape, and maintenance services for lasting results.",
  },
];

const GalleryPage = () => {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero / Intro */}
      <section
        className="relative text-center py-28 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgCal})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-white">
            Transforming Outdoor Spaces: See Our Work
          </h1>
          <p className="text-lg lg:text-xl text-white leading-relaxed">
            Explore our portfolio of completed landscaping, hardscape, and
            property maintenance projects. Every image reflects our commitment
            to quality, craftsmanship, and attention to detail—showcasing how we
            elevate homes and businesses across Fresno, CA.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <Wrapper>
        {galleryData.map((category, idx) => (
          <section key={idx} className="py-16">
            <h2 className="text-3xl lg:text-4xl font-semibold text-center mb-12">
              {category.category}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.images.map((img, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-lg shadow-lg group"
                >
                  <img
                    src={img}
                    alt={`${category.category} project ${index + 1}`}
                    className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-25 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                    <p className="text-white font-semibold text-lg">
                      {category.category}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* CTA Section */}
        <section className="bg-[#345C39] py-16 text-center rounded-lg mx-4 lg:mx-0 mt-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Outdoor Space?
          </h2>
          <p className="text-white text-lg mb-6 max-w-2xl mx-auto">
            Schedule a free estimate today and let our team bring your vision to
            life.
          </p>
          <button className="bg-white text-[#345C39] font-bold px-6 py-3 rounded-md hover:bg-gray-100 transition">
            Get Your Free Estimate
          </button>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <h2 className="text-3xl lg:text-4xl font-semibold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {faqData.map((faq, index) => (
              <details
                key={index}
                className="border border-gray-200 rounded-lg p-4 group"
              >
                <summary className="cursor-pointer font-semibold text-lg group-open:text-[#568F3A]">
                  {faq.question}
                </summary>
                <p className="mt-2 text-gray-700">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </Wrapper>
    </div>
  );
};

export default GalleryPage;
