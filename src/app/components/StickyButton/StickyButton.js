import React from "react";
import { Container } from "react-bootstrap";

import "./StickyButton.css";

const StickyButton = () => {
  return (
    <Container
      fluid
      className='sticky-button__container fixed-bottom px-0 d-flex justify-content-end px-5'
    >
      <a href='#footer' style={{ textDecoration: "none" }}>
        <div className='trapezium-button-wrapper d-flex align-items-center justify-content-center py-2'>
          <p className='reserve-a-unit text-white my-0'>Reserve a Unit</p>
        </div>
      </a>
    </Container>
  );
};

export default StickyButton;
