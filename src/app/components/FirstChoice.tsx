'use client';
import React from "react";
import architecture from "../../../public/icons/architecture.svg";
import excellentQuality from "../../../public/icons/excellent-quality.svg";
import location from "../../../public/icons/location.svg";
import offPlanDeal from "../../../public/icons/off-plan-deal.svg";
import over200ROI from "../../../public/icons/over-200-percent-roi.svg";
import toggle from "../../../public/icons/toggle.svg";
import worldClassInfrastructure from "../../../public/icons/world-class-infrastructure.svg";

import { scrollToElement } from "@/lib/utils";
import reasonsRightBanner from "../../../public/img/reason-right-banner.svg";
import Image from "next/image";

const FirstChoice = () => {
  const reasonsWhy = [
    {
      title: "Excellent Quality",
      icon: excellentQuality,
    },
    {
      title: "Architecture",
      icon: architecture,
    },
    {
      title: "Location",
      icon: location,
    },
    {
      title: "Off-Plan Deal",
      icon: offPlanDeal,
    },
    {
      title: "Over 200% ROI",
      icon: toggle,
    },
    {
      title: "World Class Infrastucture",
      icon: worldClassInfrastructure,
    },
    {
      title: "Over 200% ROI",
      icon: over200ROI,
    },
  ];
  return (
    <div className="min-w-screen w-screen h-auto flex justify-center items-center bg-[#232323]">
      <div className="w-full h-full pl-[7rem] grid grid-cols-10 py-[7rem]">
        <div className="col-span-10 lg:col-span-6 flex flex-col space-y-10 items-start">
          <h2 className="font-orchidea-pro font-medium text-[48px] text-white leading-[130%]">
            Reasons why the <span className="text-[#B56350]">Leonardo</span>{" "}
            Stands as 1st Choice Property.
          </h2>
          <div className="grid grid-cols-12 gap-5 items-start pr-20">
            {reasonsWhy.map((reason, index) => (
              <div
                className="flex flex-col space-y-5 col-span-3 justify-center items-center"
                key={index}
              >
                <div className="grid place-content-center aspect-square rounded-full bg-[#B56350] p-3">
                  <Image src={reason.icon} alt={reason.title} />
                </div>
                <p className="font-orchidea-pro font-medium text-[27.47px] leading-[130%] text-white text-center">
                  {reason.title}
                </p>
              </div>
            ))}
          </div>
          <div
            onClick={() => scrollToElement("reservation")}
            className="font-inter font-medium text-white text-[18px] py-3 px-20 rounded-full border border-white cursor-pointer text-decoration-none"
          >
            Book Now
          </div>
        </div>
        <div className="col-span-10 lg:col-span-4">
          <Image src={reasonsRightBanner} alt="right banner" />
        </div>
      </div>
    </div>
  );
};

export default FirstChoice;