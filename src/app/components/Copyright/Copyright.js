import React from "react";
import { Container } from "react-bootstrap";

import "./Copyright.css";

const Copyright = () => {
  return (
    <Container
      fluid
      className='copyright-container d-flex justify-content-center align-items-center px-0 py-3 font-inter font-medium text-[20px]'
    >
      <p className='my-0'>
        &copy; {new Date().getFullYear()} {""}
        <span className='text-[#B56350]'>www.sujimotonig.com</span> All Right
        Reserved
      </p>
    </Container>
  );
};

export default Copyright;
