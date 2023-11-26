import { useState } from "react";

import Button from "@components/Button";

import familyMobile from "@images/homepage/family-gathering-mobile.jpg";
import familyMobile2x from "@images/homepage/family-gathering-mobile@2x.jpg";
import familyTablet from "@images/homepage/family-gathering-tablet.jpg";
import familyTablet2x from "@images/homepage/family-gathering-tablet@2x.jpg";
import familyDesktop from "@images/homepage/family-gathering-desktop.jpg";
import familyDesktop2x from "@images/homepage/family-gathering-desktop@2x.jpg";

import specialMobile from "@images/homepage/special-events-mobile.jpg";
import specialMobile2x from "@images/homepage/special-events-mobile@2x.jpg";
import specialTablet from "@images/homepage/special-events-tablet.jpg";
import specialTablet2x from "@images/homepage/special-events-tablet@2x.jpg";
import specialDesktop from "@images/homepage/special-events-desktop.jpg";
import specialDesktop2x from "@images/homepage/special-events-desktop@2x.jpg";

import socialMobile from "@images/homepage/social-events-mobile.jpg";
import socialMobile2x from "@images/homepage/social-events-mobile@2x.jpg";
import socialTablet from "@images/homepage/social-events-tablet.jpg";
import socialTablet2x from "@images/homepage/social-events-tablet@2x.jpg";
import socialDesktop from "@images/homepage/social-events-desktop.jpg";
import socialDesktop2x from "@images/homepage/social-events-desktop@2x.jpg";

import patterLines from "@images/patterns/pattern-lines.svg";
import topRightPattern from "@images/patterns/pattern-curve-top-right.svg";

const content = [
  {
    name: "Family Gathering",
    images: {
      mobile: familyMobile,
      mobile2x: familyMobile2x,
      tablet: familyTablet,
      tablet2x: familyTablet2x,
      desktop: familyDesktop,
      desktop2x: familyDesktop2x,
    },
    text: "We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.",
  },
  {
    name: "Special Events",
    images: {
      mobile: specialMobile,
      mobile2x: specialMobile2x,
      tablet: specialTablet,
      tablet2x: specialTablet2x,
      desktop: specialDesktop,
      desktop2x: specialDesktop2x,
    },
    text: "We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.",
  },
  {
    name: "Social Events",
    images: {
      mobile: socialMobile,
      mobile2x: socialMobile2x,
      tablet: socialTablet,
      tablet2x: socialTablet2x,
      desktop: socialDesktop,
      desktop2x: socialDesktop2x,
    },
    text: "Are you looking to have a larger social event? No problem! We’re more than happy to cater for big parties. We’ll work with you to make your event a hit with everyone.",
  },
];

const BookTable = () => {
  const [currentType, setCurrentType] = useState(content[0]);

  return (
    <section className="relative px-[2.4rem] pt-32 pb-[12.4rem] text-center desktop:flex desktop:flex-row desktop:px-[16.5rem] desktop:gap-[12.5rem] desktop:text-left">
      <img
        className="absolute hidden w-[50%] h-[320px] tablet:block tablet:left-0 tablet:top-0"
        src={topRightPattern.src}
      />
      <div className="relative z-10">
        <picture>
          <source
            media="(min-width:1440px)"
            srcSet={`${currentType.images.desktop.src} 1x, ${currentType.images.desktop2x.src} 2x`}
          />
          <source
            media="(min-width:758px)"
            srcSet={`${currentType.images.tablet.src} 1x, ${currentType.images.tablet2x.src} 2x`}
          />
          <img
            className="shadow-drop mx-auto z-10"
            srcSet={`${currentType.images.mobile.src} 1x, ${currentType.images.mobile2x.src} 2x`}
            alt="Family gathering"
          />
        </picture>
        <img
          className="absolute -top-14 desktop:-left-16"
          src={patterLines.src}
          alt="Pattern lines"
        />
      </div>
      <div className="flex flex-col">
        <ul
          className="
            mt-20 mb-[2.7rem] max-w-[689px] flex flex-col gap-[1.6rem]
            tablet:mt-24 tablet:flex-row tablet:w-full tablet:justify-around tablet:gap-4 
            desktop:order-3 desktop:flex-col desktop:gap-[1.6rem]
         "
        >
          {content.map((item) => {
            return (
              <li>
                <button
                  key={`${item.name}-button`}
                  className={`relative text-[1.7rem] leading-[1.64] font-semibold tracking-[2.5px] uppercase text-[#4C4C4C] 
                 transition-opacity after:transition-all before:hidden
                 desktop:after:bg-transparent
                ${
                  item.name !== currentType.name &&
                  "opacity-50 after:opacity-0 hover:opacity-100 hover:after:opacity-100 hover:after:w-full"
                }
                ${
                  item.name === currentType.name &&
                  `
                  after:absolute after:m-auto after:bottom-[-.5rem] after:left-0 after:right-0 after:content-[''] after:w-[48px] after:h-[1px] after:bg-[#9E7F66] 
                  desktop:before:block desktop:before:absolute desktop:before:content-[''] desktop:before:w-[150px] desktop:before:h-[1px]
                desktop:before:bg-gold desktop:before:-left-[183px] desktop:before:top-[14px] desktop:before:-z-0
                  `
                }
                `}
                  onClick={() => setCurrentType(item)}
                >
                  {item.name}
                </button>
              </li>
            );
          })}
        </ul>
        <h2 className="mt-[2.7rem] tablet:mt-[5.5rem]">{currentType.name}</h2>
        <p className="max-w-[45.7rem] mx-auto mt-[1.3rem] desktop:mx-0 desktop:min-h-[120px]">
          {currentType.text}
        </p>
        <Button
          href="/booking"
          tailwind="w-fit bg-[#111] hover:border-black mt-[27px] tablet:mt-24 mx-auto desktop:mx-0"
        >
          Book a table
        </Button>
      </div>
    </section>
  );
};

export default BookTable;
