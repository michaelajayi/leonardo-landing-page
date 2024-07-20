import Image from "next/image";
import React from "react";
import trapeziumCover from "../../../public/img/trapezium.svg";

const TrapeziumGalleryItem = ({ trapezium }) => {
  return (
    <div className='w-full h-auto'>
      {/* <Image src={trapeziumCover} alt='trapezium cover' className='relative w-auto h-auto' /> */}

      <div className='relative w-[851px] h-[755px] overflow-hidden'>
        <div className='absolute inset-0 transform skew-x-12 origin-top-right bg-gray-200'></div>
        {/* <Image
          src={trapezium.image}
          alt='trapezium image'
          className=' absolute top-0 left-0 object-cover'
        /> */}
      </div>
    </div>
  );
};

export default TrapeziumGalleryItem;
