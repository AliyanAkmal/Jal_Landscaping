import img1 from "../../assets/Rectangle 13.png";
import img2 from "../../assets/Rectangle 14.png";
import img3 from "../../assets/Rectangle 15.png";
import img4 from "../../assets/Rectangle 16.png";
import img5 from "../../assets/Rectangle 17.png";

const OutdoorSolutions = () => {
  return (
    <section className="bg-white pt-32 mt-20 md:mt-none mb-14 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Small heading */}
        <p className="text-secondaryTitle font-semibold tracking-wide text-[#142629] mb-2">
          About Our Work
        </p>

        {/* Main heading */}
        <h2 className="text-3xl md:text-title font-title text-[#142629] leading-tight mb-4">
          OUTDOOR SOLUTIONS CRAFTED <br className="hidden sm:block" />
          WITH PRECISION AND CARE
        </h2>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-[#142629] text-sm md:text-base mb-12">
          At JAJ Landscaping and More, we focus on building outdoor spaces that
          are functional, durable, and visually balanced. Every service we offer
          is designed to improve how your property looks, feels, and performs—
          using proven methods and quality materials.
        </p>

        {/* Images */}
        <div className="flex justify-center gap-2 xs:gap-6">
          {/* LEFT SIDE IMAGE – hidden below L */}
          <img
            src={img1}
            className="hidden l:block w-48 xl:w-56 h-64 object-cover rounded-xl -translate-y-24"
            alt=""
          />

          <img
            src={img2}
            className="w-20 h-28 xs:w-28 sm:w-36 l:w-48 xl:w-56 xs:h-32 sm:h-40 l:h-64 object-cover rounded-xl -translate-y-5"
            alt=""
          />

          <img
            src={img3}
            className="w-20 h-28 xs:w-28 sm:w-36 l:w-48 xl:w-56 xs:h-32 sm:h-40 l:h-64 object-cover rounded-xl translate-y-6"
            alt=""
          />

          <img
            src={img4}
            className="w-20 h-28 xs:w-28 sm:w-36 l:w-48 xl:w-56 xs:h-32 sm:h-40 l:h-64 object-cover rounded-xl -translate-y-6"
            alt=""
          />

          {/* RIGHT SIDE IMAGE – hidden below L */}
          <img
            src={img5}
            className="hidden l:block w-48 xl:w-56 h-64 object-cover rounded-xl -translate-y-24"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default OutdoorSolutions;
