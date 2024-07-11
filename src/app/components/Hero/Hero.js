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
            In coming up with the LeonardoBySujimoto, we spoke with clients and
            off-takers, Architects and Engineers, to come up with a fusion of
            architectural masterpiece with innovative features and facilities,
            inspired by the works of the iconic Leonardo Da Vinci.
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
