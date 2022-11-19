import React from "react";
import { Container, Image } from "react-bootstrap";

import "./ImageSection.css";
import imageSectionImg from "../../assets/img/image-section-img.png";
import imageSectionEllipse from "../../assets/img/image-section-ellipse.png";

const ImageSection = () => {
  return (
    <Container
      fluid
      className='image-section__container d-flex align-items-center justify-content-center px-0 py-5'
    >
      <div className='image-section__inner'>
        <div className='d-flex flex-column gap-4 image-section__text-wrapper'>
          <p className='image-section__text'>
            We studied and researched the iconic works and lifestyle of Leonardo
            Da Vinci and applied our learnings, with the same level of
            dedication, creativity, mystery and attention to detail, into
            creating Africa’s most exclusive waterfront high-rise development –
            the LeonardoBySujimoto. The Leonardo will come with unrivalled
            features and top of the range facilities such as IMAX Cinema, Indoor
            Virtual Golf where you can play on over 2500 golf courses in the
            world, Crèche for the residents - first of its kind, Award Winning
            Zaha Hadid Bathroom, designer Kitchen by Kohler, Interactive Lobby,
            Full Home Automation where you can control your door, curtain,
            music, light and TV from the touch of a button, Indoor salon, Club
            House, Mini-Mart, Tennis Court, State of the art Techno gym,
            Infinity Swimming Pool, Squash, Badminton and many more exclusive
            features.
          </p>
          <a href='#!' className='text-accent image-section__more-btn'>
            Read more...
          </a>
        </div>
        <Image
          src={imageSectionImg}
          alt='img-section-img'
          className='image-section-img'
        />
        <h4 className='image-section__heading'>
          “We have studied the best and what we are building beats the best!”
        </h4>
      </div>
      <Image
        src={imageSectionEllipse}
        alt='image-section-ellipse'
        className='image-section__ellipse'
      />
    </Container>
  );
};

export default ImageSection;
