const OverlayCardSection = ({
  bgImage,
  align = "right", // "left" | "right"
  title,
  description,
  tags = [],
}) => {
  return (
    <section
      className="relative w-full min-h-[420px] bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Content wrapper – FULL WIDTH */}
      <div
        className={`relative z-10 w-full flex
          ${align === "right" ? "justify-end" : "justify-start"}`}
      >
        {/* Text card – fixed width, flush to edge */}
        <div className="bg-[#0b2530]/85 text-white p-6 md:p-8 rounded-l-md w-full max-w-3xl">
          <h3 className="text-xl md:text-[40px] font-title mb-3">{title}</h3>

          <p className="text-sm text-gray-200 mb-4">{description}</p>

          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="bg-yellow-400 text-black text-xs font-semibold px-3 py-1 rounded-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverlayCardSection;
