// import React, { useId } from "react";
import Image from "next/image";
import React from "react";
import featuresBg from '../../../../public/img/features-banner.svg';

import { features } from "@/lib/constants";

const Features = () => {
  // const id = useId();

  return (
    <div
      className='min-w-screen w-screen h-auto flex justify-center items-center relative py-5 bg-[#232323]'
      id='features'
    >
      <div className='w-full h-full absolute left-0 top-0 -z-5'>
        <Image
          src={featuresBg}
          alt='features banner'
          className='w-full h-full object-cover object-center opacity-[20%]'
        />
      </div>
      <div className='w-full h-auto px-5 lg:p]x-[7rem] py-20 flex justify-center items-center flex-col space-y-10 lg:space-y-20 z-10 text-center'>
        <h3 className='font-orchidea-pro font-medium text-white text-[36px] lg:text-[48px]'>
          Features & Facilities
        </h3>
        <div className='w-full grid grid-cols-3 lg:grid-cols-5 gap-x-10 lg:gap-x-10 gap-y-10 lg:gap-y-20 items-center justify-ceter'>
          {features.map((feature, index) => (
            <div
              className='flex flex-col justify-center items-center space-y-0 lg:space-y-3'
              key={index}
            >
              <Image
                src={feature.icon}
                alt={feature.text}
                className='feature-icon scale-[.5] lg:scale-[.8]'
              />
              <p className='font-orchidea-pro text-[#DEDCD6] text-center text-[14px] lg:text-[16px]'>
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
