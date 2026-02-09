import React, { useRef, useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

const reviews = [
  {
    name: "Daniel Thompson",
    date: "October 6, 2023",
    text: "Amazing service! They paid attention to every detail and delivered ahead of schedule. The only issue was a minor bug in the software, but they fixed it quickly. I appreciate their dedication!",
  },
  {
    name: "Olivia Bennett",
    date: "September 20, 2023",
    text: "Amazing service! They paid attention to every detail and delivered ahead of schedule. The only issue was a minor bug in the software, but they fixed it quickly. I appreciate their dedication!",
  },
  {
    name: "James Wilson",
    date: "August 8, 2023",
    text: "Amazing service! They paid attention to every detail and delivered ahead of schedule. The only issue was a minor bug in the software, but they fixed it quickly. I appreciate their dedication!",
  },
  {
    name: "Natalie Rodriguez",
    date: "July 30, 2023",
    text: "Amazing service! They paid attention to every detail and delivered ahead of schedule. The only issue was a minor bug in the software, but they fixed it quickly. I appreciate their dedication!",
  },
  {
    name: "Liam Scott",
    date: "June 18, 2023",
    text: "Amazing service! They paid attention to every detail and delivered ahead of schedule. The only issue was a minor bug in the software, but they fixed it quickly. I appreciate their dedication!",
  },
];

const Reviews = () => {
  const containerRef = useRef(null);
  const cardRef = useRef(null);

  const [index, setIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(320);
  const [visible, setVisible] = useState(1);

  useEffect(() => {
    const measure = () => {
      if (!containerRef.current || !cardRef.current) return;

      const gap = 24;
      const width = cardRef.current.offsetWidth + gap;
      setCardWidth(width);

      const count = Math.max(
        1,
        Math.floor(containerRef.current.offsetWidth / width),
      );
      setVisible(count);

      setIndex((i) => Math.min(i, Math.max(0, reviews.length - count)));
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const maxIndex = Math.max(0, reviews.length - visible);

  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Our Happy Customers
          </h2>

          <div className="mt-3 flex justify-center items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <FcGoogle size={22} />
              <span className="font-medium text-gray-700">
                5.0 Verified Reviews
              </span>
            </div>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} size={14} className="text-yellow-400" />
              ))}
            </div>
          </div>
        </div>

        {/* Carousel + Controls */}
        <div className="flex items-center gap-4">
          {/* LEFT BUTTON */}
          <button
            onClick={() => setIndex((i) => Math.max(0, i - 1))}
            disabled={index === 0}
            className="hidden md:flex p-3 rounded-full bg-gray-200 hover:bg-gray-300 disabled:opacity-40"
          >
            <IoChevronBack size={22} />
          </button>

          {/* CAROUSEL */}
          <div ref={containerRef} className="overflow-hidden flex-1">
            <div
              className="flex gap-6 transition-transform duration-500"
              style={{ transform: `translateX(-${index * cardWidth}px)` }}
            >
              {reviews.map((r, i) => (
                <article
                  key={i}
                  ref={i === 0 ? cardRef : null}
                  className="min-w-[300px] md:min-w-[340px] bg-white border rounded-lg p-5 shadow-sm"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-11 h-11 rounded-full bg-gray-100 flex items-center justify-center font-semibold">
                      {r.name
                        .split(" ")
                        .map((n) => n[0])
                        .slice(0, 2)
                        .join("")}
                    </div>

                    <div className="flex-1">
                      <div className="font-semibold">{r.name}</div>
                      <div className="text-xs text-gray-500">{r.date}</div>
                    </div>

                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} size={12} className="text-yellow-400" />
                      ))}
                    </div>
                  </div>

                  <p className="text-sm text-gray-700">{r.text}</p>
                </article>
              ))}
            </div>
          </div>

          {/* RIGHT BUTTON */}
          <button
            onClick={() => setIndex((i) => Math.min(maxIndex, i + 1))}
            disabled={index >= maxIndex}
            className="hidden md:flex p-3 rounded-full bg-gray-200 hover:bg-gray-300 disabled:opacity-40"
          >
            <IoChevronForward size={22} />
          </button>
        </div>

        {/* MOBILE BUTTONS */}
        <div className="flex justify-center gap-4 mt-6 md:hidden">
          <button
            onClick={() => setIndex((i) => Math.max(0, i - 1))}
            disabled={index === 0}
            className="p-3 bg-gray-200 rounded-full disabled:opacity-40"
          >
            <IoChevronBack />
          </button>
          <button
            onClick={() => setIndex((i) => Math.min(maxIndex, i + 1))}
            disabled={index >= maxIndex}
            className="p-3 bg-gray-200 rounded-full disabled:opacity-40"
          >
            <IoChevronForward />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
