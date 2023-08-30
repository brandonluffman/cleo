import {BsInstagram, BsFacebook, BsLinkedin, BsTwitter} from 'react-icons/bs';
import {FaInstagram} from 'react-icons/fa'
import Link from 'next/link';
import {GoMail } from 'react-icons/go';
import {IoIosPhonePortrait} from 'react-icons/io';

const Footer = () => {
  return (
    <div>
    <div className="footer-container">
      <div className='footer-brand-div'>
      <img src='/logo.png' className='footer-img' alt='Brand Logo'></img>
      <div className='footer-socials'>
      <FaInstagram className='footer-social instagram-icon'/>
      <BsFacebook className='footer-social facebook-icon'/>
      <BsLinkedin className='footer-social linkedin-icon' />
      <BsTwitter className='footer-social twitter-icon'/>
      </div>
      </div>
      <div className='footer-links-container'>
      <div className='footer-links'>
        <div className='footer-links-header'><p className='footer-link-header'>CLEO</p></div>
        <div className='footer-link'><Link href='/'>Home</Link></div>
        <div className='footer-link'><Link href='/about'>About</Link></div>
        <div className='footer-link'><Link href='/services'>Services</Link></div>
        <div className='footer-link'><Link href='/locations'>Locations</Link></div>
        <div className='footer-link'><Link href='/booking'>Contact Us</Link></div>
      </div>
      <div className='footer-links'>
        <div className='footer-links-header'><p className='footer-link-header'>Support</p></div>
        <div className='footer-link'><Link href='/'>Privacy Policy</Link></div>
        <div className='footer-link'><Link href='/'>Terms of Use</Link></div>
        {/* <div className='footer-link'><Link href='/'>FAQs</Link></div> */}
      </div>
      <div className='footer-links'>
        <p className='footer-contact-content-header footer-link-header'>Contact</p>
        <p className='footer-contact'><GoMail className='footer-contact-icon' /> info@cleoexteriors.com</p>
        <p className='footer-contact'><IoIosPhonePortrait className='footer-contact-icon' /> (203) 822-2311</p>
      </div>
    </div>
    </div>
    <div className='footer-copyright'>
      <p className='footer-copyright-content'>Copyright © {new Date().getFullYear()} CLEO Exteriors - All Rights Reserved.</p>
    </div>
    </div>
  )
}

export default Footer;