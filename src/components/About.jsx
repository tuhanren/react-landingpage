import React from "react";
import AboutCard from "./AboutCard";
import { aboutData } from "../data";

const About = () => {
  return (
    <div className="w-full bg-black text-white text-center">
      <div className="max-w-[1240px] mx-auto px-4 py-16 ">
        <div>
          <h1 className="py-4">A Growing Protocol Ecosystem</h1>
          <p className="py-4 text-xl">
            The Defi protocol system empowers developers, liquidity providers,
            and traders to participate in a financial marketplace that is open
            and accessible to all.
          </p>

          {/* Card Container */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Card */}
            {aboutData.map((card, index) => {
              const { icon, heading, text } = card;
              return (
                <AboutCard
                  key={index}
                  icon={icon}
                  heading={heading}
                  text={text}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
