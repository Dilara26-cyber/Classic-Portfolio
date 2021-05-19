import React from 'react';
import { SiMaterialdesignicons } from 'react-icons/si';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { IoMdClose } from 'react-icons/io';
import '../styles/navbar.scss';
const Navbar = ({ toggle, handleToggle, scrolled }) => {
  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <a href="/">
        <SiMaterialdesignicons />
      </a>
      <ul className={toggle ? 'nav__list active' : 'nav__list'}>
        <li>
          <a href="/#about">Hakkımda</a>
        </li>

        <li>
          <a href="/#projects">Projeler </a>
        </li>

        <li>
          <a href="/#comments">Yorumlar </a>
        </li>

        <li>
          <a href="/#contact">iletişim</a>
        </li>
      </ul>
      <HiOutlineMenuAlt3
        className={toggle ? 'open_btn' : 'open_btn active'}
        onClick={handleToggle}
      />
      <IoMdClose
        className={toggle ? 'close_btn active' : 'close_btn'}
        onClick={handleToggle}
      />
    </nav>
  );
};

export default Navbar;
