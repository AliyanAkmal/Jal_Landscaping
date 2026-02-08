import man from "../../assets/image 1.png";
import Wrapper from "../../components/wrapper";
import heroImg from "../../assets/backgrounds/WhatsApp Image 2026-01-21 at 3.20.18 PM 1.png";
import iconImg from "../../assets/icons/Vector.png";
import floBorder from "../../assets/borders/Untitled_design__6_-removebg-preview.png";
import EstimateForm from "../../components/estimateForm";
const HeroSection = () => {
  return (
    <div
      className="bg-cover bg-center h-[120vh]"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <Wrapper>
        <div className="flex justify-between items-center py-10">
          <div className="flex flex-col space-y-4  w-2/3 justify-between">
            <div className="text-title font-title text-white leading-tight">
              Outdoor Spaces Built with{" "}
              <span className="text-[#568F3A]">Care, Craft, and Character</span>
            </div>
            <div className="text-secondaryTitle font-secondaryTitle text-white">
              Landscaping, hardscape, and property solutions designed to elevate
              your home or business in Fresno, CA.
            </div>
            <div className="text-paragraph font-paragraph text-white">
              At JAL Landscaping and More, we specialize in creating functional,
              beautiful outdoor environments that last. As a family-owned
              business with over 11 years of hands-on experience, we deliver
              reliable workmanship, clean results, and honest service—from small
              upgrades to complete outdoor transformations.
            </div>
            <div className="flex space-x-8">
              <button className="flex gap-2 items-center bg-primary h-10 px-2.5 font-secondaryTitle rounded-md text-white">
                <img src={iconImg} alt="" className="h-7 w-7" /> Get Your Free
                Estimate
              </button>
              <button className="flex gap-2 items-center font-secondaryTitle h-10 px-3 rounded-md text-white">
                <img src={iconImg} alt="" className="h-7 w-7" />
                View Our Services
              </button>
            </div>
          </div>
          <div>
            <img src={man} alt="Man" width="100%" />
          </div>
        </div>
      </Wrapper>
      <div className="relative">
        <div className="absolute -right-0 -top-20 z-50">
          <EstimateForm />
        </div>
      </div>
      <div className=" transform -translate-y-36 left-0 w-full z-20 overflow-x-hidden">
        <img src={floBorder} alt="" width="100%" />
      </div>
    </div>
  );
};

export default HeroSection;
