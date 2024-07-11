import React from "react";
import footerLogo from '../../../../public/footer-logo.svg';
import footerBg from "../../../../public/img/footer-bg.svg";
import logo from "../../../../public/logo.svg";
import Image from "next/image";

const NewFooter = () => {
  return (
    <div className='min-w-screen w-screen flex justify-center items-center relative'>
      <div className='w-full h-full absolute top-0 left-0 flex justify-center items-center -z-5'>
        <Image
          src={footerBg}
          alt='footer background'
          className='w-full h-full object-cover object-center'
        />
      </div>
      <div className='w-full h-auto absolute bottom-0 right-0 flex -z-5 justify-end px-10 py-10'>
        <Image src={logo} alt='logo' />
      </div>
      <div className='w-full h-auto grid grid-cols-10 py-[8rem] px-[7rem] z-10'>
        <div className='col-span-10 lg:col-span-6 flex flex-col space-y-10 items-start'>
          <Image src={footerLogo} alt='footer logo' className='w-[432px]' />
          <div className='flex flex-col space-y-5'>
            <p className='font-orchidea-pro text-[20px] font-light leading-[140%] text-white'>
              Sujimoto Group is the No.1 Luxury Real Estate Developer in Ikoyi
              and Banana Island, with breathtaking projects such as the
              GiulianoBySujimoto which is home to Nigerian-American singer,
              Davido; LucreziaBySujimoto - a 14-storey tower with incredibly
              premium features and
            </p>
            <p className='font-orchidea-pro text-[20px] font-light leading-[140%] text-white'>
              The Leonardo BySujimoto waterfront building - a 25 storey luxury
              tower with exceptional amenities; the QueenAminaBySujimoto, a
              first-of-its-kind luxury tower located in highbrow neighbourhood
              Abuja; and the developer of the proposed Sujimoto Tower in
              Downtown
            </p>
          </div>
          <a
            href='https://leonardobysujimoto.com/'
            target='_blank'
            className='font-inter font-medium text-[18px] text-white border border-[#D9D9D9] rounded-full px-20 py-3 text-decoration-none'
            rel='noreferrer'
          >
            View website
          </a>
        </div>
        <div className='col-span-10 lg:col-span-4'></div>
      </div>
    </div>
  );
};

export default NewFooter;
