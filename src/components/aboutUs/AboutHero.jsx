import React from "react";

const AboutHero = () => {
    return (
        <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center text-center text-white overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1598902108854-10e335adac99?q=80&w=2070&auto=format&fit=crop')` }}
            ></div>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60 z-10"></div>

            {/* Content */}
            <div className="relative z-20 px-6 max-w-5xl mx-auto">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-title font-bold mb-6 leading-tight drop-shadow-lg">
                    About Us
                </h1>
                <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto font-light leading-relaxed drop-shadow-md">
                    Since 2014, JAL Landscaping has been Fresno's premier choice for transforming ordinary outdoor spaces into extraordinary living environments. From precision maintenance and irrigation to complex hardscape engineering.
                </p>
            </div>
        </section>
    );
};

export default AboutHero;
