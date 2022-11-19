import React from "react";
import { Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

import hamburgerIcon from "../../assets/img/hamburger-icon.png";
import logo from "../../assets/img/logo.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <Container fluid className='navbar-container px-0 px-5'>
      <div className='navbar__inner d-flex justify-content-center justify-content-md-between align-items-center'>
        <Link to='/'>
          <Image src={logo} alt='logo' className='logo' />
        </Link>
        <Image
          src={hamburgerIcon}
          alt='hamburger-icon'
          className='hamburger-icon d-none d-md-block'
        />
        {/* <IoMenuOutline size={50} color='#d4b03a' /> */}
      </div>
    </Container>
  );
};

export default Navbar;
