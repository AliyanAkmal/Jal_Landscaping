import mapImg from "../../assets/Background Image (2).png";
import houseImg from "../../assets/Rectangle 108.png";

const steps = [
  {
    num: "01",
    title: "Free On-Site Estimate",
    text: "We evaluate your space, listen to your goals, and provide clear recommendations.",
  },
  {
    num: "02",
    title: "Design & Planning",
    text: "Every project is carefully planned to match your vision and budget.",
  },
  {
    num: "03",
    title: "Professional Execution",
    text: "Our experienced crew delivers clean, efficient, and durable results.",
  },
  {
    num: "04",
    title: "Final Walkthrough",
    text: "We ensure every detail meets our quality standards before completion.",
  },
];

const ProcessSection = () => {
  return (
    <section className="bg-[#e6f2df] py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* THREE COLUMN FLEX */}
        <div className="flex flex-col md:flex-row items-stretch gap-12">
          {" "}
          {/* LEFT IMAGE */}
          <div className="md:w-1/4 flex justify-end self-start pt-12">
            <img
              src={mapImg}
              alt="Landscape plan"
              className="w-[260px] shadow-md"
            />
          </div>
          {/* CENTER CONTENT */}
          <div className="md:w-2/4 relative">
            {" "}
            {/* TITLE */}
            <div className="text-center mb-10">
              <p className=" font-secondaryTitle text-[20px]">Our Process</p>

              <h2 className="mt-2 text-[38px] leading-tight md:text-4xl font-title text-gray-900">
                A Simple, Proven Way to Get <br />
                Your Project Done Right
              </h2>

              <p className="mt-4 text-[20px] text-gray-600">
                We make outdoor projects easy with a structured process focused
                on quality, communication, and results.
              </p>
            </div>
            {/* STEPS */}
            <div className="relative z-10 text-center flex flex-col items-center">
              {steps.map((step, index) => (
                <div key={step.num} className="flex flex-col items-center">
                  {/* STEP BOX (UNCHANGED) */}
                  <div className="bg-transparent border border-[#345C39] rounded-3xl p-5 text-center max-w-80 relative">
                    <div className="font-bold absolute top-0 left-0 bg-[#345C39] rounded-full transform -translate-y-1/2 text-white text-lg h-12 w-12 flex items-center justify-center">
                      {step.num}
                    </div>
                    <h4 className="font-semibold text-gray-900 mt-1">
                      {step.title}
                    </h4>
                    <p className="text-sm text-gray-600 mt-1 leading-tight">
                      {step.text}
                    </p>
                  </div>

                  {/* DOTTED CONNECTOR (ONLY BETWEEN BOXES) */}
                  {index !== steps.length - 1 && (
                    <div className="h-8 border-l-2 border-dotted border-green-400" />
                  )}
                </div>
              ))}
            </div>
          </div>
          {/* RIGHT IMAGE */}
          <div className="md:w-1/4 flex flex-col justify-end">
            <img
              src={houseImg}
              alt="Finished project"
              className="w-[260px] shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
