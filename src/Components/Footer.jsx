import React from "react";
import Section from "./Section";
import { socials } from "../constants";

const Footer = () => {
  return (
    <Section className="!px-0 !py-10 bg-n-9 text-white">
      <div className="container flex flex-col items-center text-center gap-6">
        <p className="caption text-n-4">
          © {new Date().getFullYear()} All rights reserved.
        </p>

        <ul className="flex gap-5 flex-wrap justify-center">
          {socials.map((item) => (
            <li key={item.id}>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.title}
                className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-all hover:bg-n-4 hover:scale-110"
              >
                <img
                  src={item.iconUrl}
                  width={20}
                  height={20}
                  alt={item.title}
                  className="opacity-80 transition-opacity hover:opacity-100"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Footer;
