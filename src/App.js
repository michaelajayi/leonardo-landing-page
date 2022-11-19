import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React from "react";
import { Container } from "react-bootstrap";

import Footer from "./components/Footer/Footer";
import Features from "./components/Features/Features";
import Copyright from "./components/Copyright/Copyright";
import ImageSection from "./components/ImageSection/ImageSection";
import StickyButton from "./components/StickyButton/StickyButton";
import Hero from "./components/Hero/Hero";

const App = () => {
  return (
    <Container fluid className='px-0'>
      <StickyButton />
      <Hero />
      <ImageSection />
      <Features />
      <Footer />
      <Copyright />
    </Container>
  );
};

export default App;
