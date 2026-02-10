import man from "../../assets/image 1.png";
import Wrapper from "../../components/wrapper";
import heroImg from "../../assets/backgrounds/WhatsApp Image 2026-01-21 at 3.20.18 PM 1.png";
import iconImg from "../../assets/icons/Vector.png";
import floBorder from "../../assets/borders/Untitled_design__6_-removebg-preview.png";
import EstimateForm from "../../components/estimateForm";

const HeroSection = () => {
  return (
    <div
      className="bg-cover bg-bottom relative pb-32"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <Wrapper>
        <div className="flex flex-col  l:flex-row justify-between items-center py-10 relative z-10">
          {/* Left Text */}
          <div className="flex flex-col space-y-4 w-full lg:w-2/3 justify-center l:justify-between">
            <div className="md:text-title text-[36px] font-title text-white leading-tight">
              Outdoor Spaces Built with{" "}
              <span className="text-[#568F3A]">Care, Craft, and Character</span>
            </div>
            <div className="md:text-secondaryTitle text-[20px] font-secondaryTitle text-white">
              Landscaping, hardscape, and property solutions designed to elevate
              your home or business in Fresno, CA.
            </div>
            <div className="md:text-paragraph text-[18px] font-paragraph text-white">
              At JAL Landscaping and More, we specialize in creating functional,
              beautiful outdoor environments that last. As a family-owned
              business with over 11 years of hands-on experience, we deliver
              reliable workmanship, clean results, and honest service—from small
              upgrades to complete outdoor transformations.
            </div>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8 mt-4">
              <button className="flex gap-2 items-center bg-primary h-10 py-3 md:px-2.5 font-semibold md:font-secondaryTitle rounded-md text-white justify-center">
                <img src={iconImg} alt="" className="h-7 w-7" /> Get Your Free
                Estimate
              </button>
              <button className="flex gap-2 flex-nowrap items-center font-secondaryTitle h-10 px-3 rounded-md text-white justify-center border border-white">
                <img src={iconImg} alt="" className="h-7 w-7" /> View Our
                Services
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="absolute md:relative md:top-20 xl:top-16 md:right-0  md:flex  md:justify-end mt-0">
            <img
              src={man}
              alt="Man"
              className=" md:max-w-[600px] l:max-w-none w-2/3 md:w-full object-contain"
            />
          </div>
        </div>
      </Wrapper>

      {/* Estimate Form */}
      <div className="absolute right-0  -bottom-10 z-50 l:px-0 md:px-10">
        <EstimateForm />
      </div>

      {/* Bottom Border */}
      <div className="absolute -bottom-10 left-0 w-full z-20 overflow-x-hidden">
        <img src={floBorder} alt="" className="w-full object-cover" />
      </div>
    </div>
  );
};

export default HeroSection;
