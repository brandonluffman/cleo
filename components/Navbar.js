import Link from "next/link";
import { useState, useEffect } from "react";
import { MdMenu, MdClear } from 'react-icons/md';
import Image from "next/image";
import {AiOutlineSchedule} from 'react-icons/ai';

function Nav() {

    const [showMe, setShowMe] = useState(false);
    const [isActive, setIsActive] = useState(false);

    function toggleNav(){
      setShowMe(!showMe);
      setIsActive(!isActive);
    }

    const [navbar, setNavbar] = useState(false);

  
    const changeBackground = () => {
      if (window.scrollY >= 40) {
        setNavbar(true);

      } else {
        setNavbar(false);
  
      }
    };

    useEffect(() => {
      window.addEventListener('scroll', changeBackground, true);
      return () => window.removeEventListener('scroll', changeBackground);
    }, []);


  return (

    <header className="header">
      <nav className={navbar ? 'scroll fixed-top' : 'navbar fixed-top'} id="navbar">
        <Link href="/" className="nav-logo">
          <div className="brand-img" id="brand-img">
          <img src='/logo.png' className="absolute-ghost" alt='Logo'></img>
          </div>
        </Link>
        <div className="nav-buttons">
          {/* <button className="nav-lang-btn" type='button'>En</button> */}
          {/* <Link href='/project'><button className='nav-contact-btn' type='button'><img src='/ranki-transp-logo.png' width='20'></img>RankiAI <span className='beta-tag'>Beta</span></button></Link> */}
          <Link href='/contact'><button className='nav-contact-btn' type='button'>Book Appointment <AiOutlineSchedule className="nav-contact-btn-icon" /></button></Link>
          {isActive? <MdClear className='hamburger-btn hamburger-close-btn' onClick={toggleNav}/>:<MdMenu className='hamburger-btn' onClick={toggleNav} />}
        </div>
        <ul className="nav-menu" id='nav-menu' style={{right: showMe? "0":"-100%"}}>
          <li className="nav-item"><p className="nav-menu-header">Menu</p></li>
          <Link href='/' className="nav-link">
          <li className="nav-item" onClick={toggleNav}>
            Home
          </li>
          </Link>
          <Link href='/about' className="nav-link">
          <li className="nav-item" onClick={toggleNav}>
              About
          </li>
          </Link>
          {/* <Link href='/services' className="nav-link">
          <li className="nav-item" onClick={toggleNav}>
              Services
          </li>
          </Link> */}
          <Link href='/services' className="nav-link">
          <li className="nav-item" onClick={toggleNav}>
              Services
          </li>
          </Link>
          <Link href='/locations' className="nav-link">
          <li className="nav-item" onClick={toggleNav}>
              Locations
          </li>
          </Link>
          <Link href='/contact' className="nav-link">
          <li className="nav-item nav-item-margin" onClick={toggleNav}>
              Contact
          </li>
          </Link>
          <Link href='/contact'><button className='nav-contact-menu-btn' type='button'>Book Appointment <AiOutlineSchedule className="nav-contact-btn-icon" /></button></Link>

          <li className="nav-item brand-img-nav-item">
          <div className="dropdown-brand-div">
            <Image className='dropdown-brand-img' src='/logo.png' alt='Brand Logo' height='65' width='50' />
          </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;