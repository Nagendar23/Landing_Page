import React from "react";
import Section from "./Section";
import Heading from "./Heading";
import { benefits } from "../constants";
import Arrow from "../assets/svg/Arrow";
import GradientLight from "../Components/design/Benefits";
import ClipPath from "../assets/svg/ClipPath";

const Benefits = () => {
  return (
    <Section id="features">
      <div className="container relative z-2 text-center">
        <Heading
          className="md:max-w-md lg:max-w-2xl text-4xl mx-auto"
          title="Chat Smarter, Not Harder with Brainwave"
        />

        <div className="flex flex-wrap justify-center gap-10 mb-10">
          {benefits.map((item) => (
            <div
              key={item.id}
              className="relative p-0.5 bg-no-repeat bg-cover md:max-w-[24rem] rounded-2xl mx-auto"
              style={{ backgroundImage: `url(${item.backgroundUrl})` }}
            >
              <div className="relative z-2 flex flex-col items-center min-h-[22rem] p-[2.4rem] text-center">
                <h5 className="h5 bold text-xl mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>

                <div className="flex items-center w-full mt-auto">
                  <img
                    src={item.iconUrl}
                    width={48}
                    height={48}
                    alt={item.title}
                  />
                  <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                    Explore more
                  </p>
                  <Arrow />
                </div>
              </div>

              {item.light && <GradientLight />}

              <div
                className="absolute inset-0.5 bg-n-8 rounded-2xl"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  )}
                </div>
              </div>

              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
