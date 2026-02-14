import React from "react";
import Wrapper from "../wrapper";

const AboutAchievements = () => {
    const achievements = [
        { number: "11+", label: "Years of Experience" },
        { number: "500+", label: "Projects Completed" },
        { number: "100%", label: "Client Satisfaction" },
        { number: "24/7", label: "Support Available" }
    ];

    return (
        <div className="bg-[#345C39] text-white py-20">
            <Wrapper>
                <div className="text-center mb-12">
                    <h2 className="text-[36px] md:text-[44px] lg:text-[48px] font-title leading-tight mb-4">
                        Proven Results You Can Trust
                    </h2>
                    <p className="text-lg md:text-xl text-gray-300 font-secondaryTitle">
                        Real numbers from over a decade of service in Fresno
                    </p>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {achievements.map((achievement, index) => (
                        <div key={index} className="text-center">
                            <div className="text-4xl md:text-5xl lg:text-6xl font-title text-white mb-2 font-bold">
                                {achievement.number}
                            </div>
                            <div className="text-sm md:text-base lg:text-lg font-secondaryTitle text-gray-300">
                                {achievement.label}
                            </div>
                        </div>
                    ))}
                </div>
            </Wrapper>
        </div>
    );
};

export default AboutAchievements;
