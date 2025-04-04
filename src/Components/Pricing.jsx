import React from "react";
import Section from "./Section";
import { smallSphere, stars } from "../assets";
import Heading from "./Heading";
import PricingList from "./PricingList";
import { RightLine, LeftLine } from "./design/Pricing";

const Pricing = () => {
  return (
    <Section className="overflow-hidden" id="pricing">  
      <div className="container relative z-2">
        <div className="relative justify-center mb-[6.5rem] lg:flex">
          <img
            src={smallSphere}
            width={255}
            height={255}
            className="relative z-1"
            alt="sphere"
          />
          
          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <img src={stars} className="w-full" width={950} height={400} alt="stars" />
          </div>
        </div>

        <div className="flex flex-col items-center text-center">
             <Heading className="text-4xl font-bold" tag="Get started with Brainwave" title="Pay Once Use Forever" />
        </div>


        <div className="relative">
          <PricingList />
          <LeftLine />
          <RightLine />
          <div className="flex justify-center mt-10">
            <a
              className="text-xs font-code font-bold -tracking-wider uppercase border-b"
              href="#pricing"  
            >
              See the full details
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Pricing;
