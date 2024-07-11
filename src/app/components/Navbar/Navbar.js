import React from "react";
import Link from "next/link";
import Image from "next/image";

import logo from '../../../../public/logo.svg';
import hamburgerIcon from '../../../../public/img/hamburger-icon.png';


import "./Navbar.css";

const Navbar = () => {
  return (
    <div fluid className='navbar-container px-5'>
      <div className='navbar__inner d-flex justify-content-center justify-content-md-between align-items-center'>
        <Link href='/'>
          <Image src={logo} alt='logo' className='logo' />
        </Link>
        <Image
          src={hamburgerIcon}
          alt='hamburger-icon'
          className='hamburger-icon d-none d-md-block'
        />
        {/* <IoMenuOutline size={50} color='#d4b03a' /> */}
      </div>
    </div>
  );
};

export default Navbar;
