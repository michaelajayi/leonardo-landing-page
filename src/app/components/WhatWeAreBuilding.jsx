import React from "react";
import transparentYellowEllipse from "../../../public/img/transparent-yellow-ellipse.png";
import trapezium from "../../../public/img/trapezium.svg";
import whatWeAreBuildingBanner from "../../../public/img/what-we-are-building-banner.svg";

import Image from "next/image";
import placeholderForSwiper from "../../../public/img/placeholder-for-swiper.svg";

const WhatWeAreBuilding = () => {
  return (
    <div className="min-w-screen w-screen h-auto flex justify-center items-center relative py-5">
      <div className="w-full h-full absolute top-0 left-0 flex justify-center items-center -z-[5]">
        <Image
          src={whatWeAreBuildingBanner}
          alt="what we are building banner"
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="w-full h-auto absolute bottom-0 right-0 flex justify-center items-center -z-[5] py-2">
        <Image
          src={transparentYellowEllipse}
          alt="what we are building banner"
        />
      </div>
      <div className="w-full h-auto grid grid-cols-10 px-[7rem] z-10 py-[8rem]">
        <div className="col-span-10 lg:col-span-5 flex flex-col space-y-5">
          <h2 className="font-orchidea-pro font-light text-[48px] text-white leading-[98%]">
            What are we building?
          </h2>
          <p className="font-orchidea-pro font-medium text-[20px] text-white leading-[40px] lg:w-[95%]">
            The LeonardoBySujimoto waterfront project draws Inspiration from the
            16th-century artist and Renaissance icon, Leonardo Da Vinci,
            embodying a standard of luxury that is rarely witnessed, standing at
            the very core of sophistication, art, and architecture.
          </p>
          <p className="font-italianno text-[#B56350] text-[40px] leading-[40px] tracking-[4%] lg:w-[95%]">
            &quot;Own a Piece of Nigeria&apos;s 1st Vertical City, the Tallest
            and Most Luxurious Building in Sub-Saharan Africa.&quot;
          </p>
        </div>
        <div className="col-span-10 lg:col-span-5 flex justify-center items-center">
          <Image src={placeholderForSwiper} alt="gallery" />
        </div>
      </div>
    </div>
  );
};

export default WhatWeAreBuilding;
