import React, { useId } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

import { features } from "../../utils/constants";
import "./Features.css";

const Features = () => {
  const id = useId();

  return (
    <Container
      fluid
      className='px-0 features-container d-flex flex-column justify-content-around align-items-center'
      id='features'
    >
      <h3 className='features-heading text-center text-white'>
        Features & Facilities
      </h3>
      <div className='features-wrapper px-0'>
        <div className='features-icon__container'>
          {features.map((feature, index) => (
            <div
              className='d-flex flex-column align-items-center justify-content-center gap-3'
              key={index}
            >
              <Image
                src={feature.icon}
                alt={feature.text}
                className='feature-icon'
              />
              <p className='feature-text text-center'>
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Features;
