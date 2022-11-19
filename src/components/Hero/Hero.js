import React from "react";
import { Container, Image } from "react-bootstrap";
import Navbar from "../Navbar/Navbar";

import "./Hero.css";
import leonardoStructure from "../../assets/img/leonardo-structure.png";

const Hero = () => {
  return (
    <Container
      fluid
      className='hero-container d-flex flex-column align-items-center justify-content-center px-0'
    >
      <Navbar />
      <div className='d-flex flex-column flex-lg-row align-items-center justify-content-center justify-content-lg-between hero__inner'>
        <div className='hero__texts d-flex flex-column gap-2'>
          <h1 className='hero__heading'>
            A Convergence of Art, Architecture and Affluence
          </h1>
          <p className='hero__subheading'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a
            porttitor odio. Vestibulum ante ipsum primis in faucibus orci luctus
            et ultrices posuere cubilia curae.
          </p>
        </div>
        <Image
          src={leonardoStructure}
          alt='leonardo-structure'
          className='leonardo-structure d-none d-lg-block'
        />
      </div>
    </Container>
  );
};

export default Hero;
