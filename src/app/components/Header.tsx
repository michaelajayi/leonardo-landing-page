'use client';
import { scrollToElement } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import headerBg from "../../../public/img/header-bg.jpg";
import logo from "../../../public/logo.svg";
import Link from "next/link";
import statue from '../../../public/img/statue.svg';



const Header = () => {
  return (
    <div className="h-screen w-screen flex flex-col relative justify-center">
      <div className="w-screen h-screen flex justify-center items-center absolute top-0 left-0 -z-[5]">
        <Image
          src={headerBg}
          alt="header bg"
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="w-full h-auto absolute left-0 bottom-0 flex justify-end px:5 lg:px-20 py-20 pointer-events-none">
        <Image src={statue} alt='statue' />
      </div>
      <div className="w-screen h-auto absolute top-0 left-0 px-20 lg:px-[7rem] py-3">
        <Link href="/">
          <Image src={logo} alt="header logo" />
        </Link>
      </div>
      <div className="w-full flex flex-col space-y-5 self-center">
        <div className="grid grid-cols-10 px-20 lg:px-[7rem]">
          <div className="col-span-10 lg:col-span-7 flex flex-col space-y-5 items-start">
            <h1 className="font-orchidea-pro text-white text-[58px] leading-[130%] font-medium">
              Welcome to Africa&apos;s Most Exclusive Luxury Waterfront
              High-rise Building!
            </h1>
            <div className="flex flex-col space-y-5">
              <p className="font-inter font-medium text-[16px] leading-[146%] text-white uppercase w-[60%]">
                Own your dream 2-3 and 4 bed luxurious apartments at
                Nigeria&apos;s tallest and most iconic building.
              </p>
              <p className="font-inter font-bold text-[24px] leading-[146%] text-white">
                Starting at - 250k (30% Initial Deposit)
              </p>
            </div>
            <button
              onClick={() => scrollToElement("reservation")}
              className="font-inter font-medium text-[18px] text-white px-20 py-3 rounded-[50px] border border-white bg-transparent cursor-pointer text-decoration-none"
            >
              Book Now
            </button>
          </div>
          <div className="col-span-0 lg:col-span-3"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
