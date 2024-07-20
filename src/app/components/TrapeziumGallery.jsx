import React from 'react';

import trapezium001 from '../../../public/img/trapezium_001.png';
import trapezium002 from '../../../public/img/trapezium_002.png';

import TrapeziumGalleryItem from '@/app/components/TrapeziumGalleryItem';


const TrapeziumGallery = () => {
  const gallery = [
    {
      image: trapezium001,
    },
    // {
    //   image: trapezium002,
    // },
  ]
  return (
    <div>
      {gallery.map((item, index) => (
        <TrapeziumGalleryItem key={index} trapezium={item} />
      ))}
    </div>
  )
}

export default TrapeziumGallery