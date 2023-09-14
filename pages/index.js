import React, { useState, Component, useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';
// import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import {MdLocationPin} from 'react-icons/md';
import {BsArrowRight} from 'react-icons/bs'
import Contact from '../components/Contact';
import LocationLinks from '../components/LocationLinks';
import {PiDotFill} from 'react-icons/pi'

// import Testimonials from '../components/Testimonials';
// import LocationLinks from '../components/LocationLinks';
// import ServicesGrid from '../components/ServicesGrid';


export default function Home() {

  return (
    <>
     {/* <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-W3Q83E2JE3"/>
        <Script
        id='google-analytics'
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
        __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-W3Q83E2JE3', {
        page_path: window.location.pathname,
        });
        `,
        }}
        /> */}
    <Head>
          <title>CLEO Painting | Top Exterior & Interior Home Painters</title>
          <meta name="description" content="CLEO Painting: Unparalleled Exterior and Interior Painting expertise serving all of Fairfield County and surrounding areas."/>
          <meta charSet="utf-8" />
          <meta name="robots" content="index, follow" />
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <link rel="icon" type="image/png" href="/favicon.png" alt="Favicon" />
          <link rel="apple-touch-icon" href="/favicon.png" /> 
          <link rel="canonical" href="https://cleoexteriors.com/"/>
          <meta property="og:type" content="article" />
          <meta property="og:title" content="CLEO Painting" />
          <meta property="og:description" content="CLEO Painting: Unparalleled Exterior and Interior Painting expertise serving all of Fairfield County and surrounding areas." />
          <meta property="og:image" content="/favicon.png" />
          <meta property="og:url" content="cleoexteriors.com" />
          <meta property="og:site_name" content="CLEO Painting" />
          <meta name="twitter:title" content="CLEO Painting" />
          <meta name="twitter:description" content="CLEO Painting: Unparalleled Exterior and Interior Painting expertise serving all of Fairfield County and surrounding areas." />
          <meta name="twitter:image" content="/favicon.png" />
          <meta name="twitter:site" content="@USERNAME" />
          <meta name="twitter:creator" content="@USERNAME" />
      </Head>

      <Navbar />
      <div className='landing-container'>
        <div className='test'>
        <h1 className='landing-header'><span className='header-color'>CLEO</span> Painting</h1>
        <h4 className='landing-subheader'>Elevate your homes appeal with the best Interior & Exterior Home Painting Contractor in Greenwich, Westport, Darien & surrounding towns in Fairfield County.</h4>
        {/* <div className='landing-location-div'>
          <MdLocationPin className='landing-location-icon'/> Fairfield County, CT
        </div>  */}
        <div className='landing-btns'>
        <Link href='/contact'><button type='button' className='landing-btn booking-btn'>Book Now</button></Link>
        <Link href='/about'><button type='button' className='landing-btn learn-btn'>Learn More</button></Link>
        </div>
        </div>
      </div>


      <div className='about-container'>
        {/* <p className='container-header about-header'>About</p> */}
        <div className='about-content-container'>
          <div className='about-img-container'>
        <img src='/logo.png' className='about-img' alt='Brand Logo'></img>
        </div>
        <div className='about-content-div'>
        <section className='about-paragraph'>
          <h3 className='about-paragraph-content'><span className='header-color'>CLEO</span> Painting<br></br><br></br>
          <b className='about-paragraph-content-bold'>Top Rated Home Painting & Exterior Cleaning Business in Fairfield County</b>
          </h3>
        </section>
        <p className='about-paragraph-description'>
        Welcome to CLEO Painting, your trusted experts in 
        </p>
        <ul className='about-page-menu'>
        <li><PiDotFill className="about-menu-dot"></PiDotFill>Exterior Painting</li>
          <li><PiDotFill className="about-menu-dot"></PiDotFill>Interior Painting</li>
          <li><PiDotFill className="about-menu-dot"></PiDotFill>Cabinet Painting</li>
          <li><PiDotFill className="about-menu-dot"></PiDotFill>Pressure Washing</li>
          <li><PiDotFill className="about-menu-dot"></PiDotFill>Roof Cleaning</li>
          <li><PiDotFill className="about-menu-dot"></PiDotFill>Gutter Cleaning</li>
          <li><PiDotFill className="about-menu-dot"></PiDotFill>Window Washing</li>
          <li><PiDotFill className="about-menu-dot"></PiDotFill>Air Duct Cleaning</li>
          <li><PiDotFill className="about-menu-dot"></PiDotFill>Dryer Vent Cleaning</li>
          </ul>
          <p>
          At CLEO Painting, we take immense pride in providing painting services that not only meet but surpass your highest expectations. 
          With a wealth of experience and an unwavering commitment to excellence, our talented team goes the extra mile to rejuvenate and enhance your home&apos;s interior and exterior. 
          From meticulously prepping surfaces and applying premium paints to delivering flawlessly smooth finishes, we approach every painting project with precision and meticulous attention to detail. 
          What distinguishes us is our steadfast dedication to achieving remarkable outcomes that truly shine. 
          Whether your property requires a complete transformation, a fresh color palette, or a simple touch-up, we possess the expertise to tackle projects of any scope. 
          Our commitment to using the finest materials and staying at the forefront of industry techniques guarantees outstanding and enduring results that will beautify your home for years to come.
          {/* Exterior Painting, Interior Painting, Cabinet Painting, Pressure Washing, Roof Cleaning, Window Washing, Gutter Cleaning, Air Duct Cleaning & Dryer Vent cleaning. */}
        </p>
        <p className='about-paragraph-assist'>
          <b>Exceeding Expectations: Elevating Your Home with Exceptional Painting Service</b>
        </p>
        <p className='about-paragraph-description'>
        At CLEO, we recognize that your home is not just a house; it&apos;s an embodiment of your style and an investment worth safeguarding. 
        That&apos;s why we approach every painting project with the same dedication and care as if it were our own home. 
        We painstakingly work to elevate your property&apos;s aesthetics while preserving its value. 
        Rest assured, your interior and exterior painting is entrusted to skilled professionals who take immense pride in their craft. 
        Settle for nothing less than exceptional. Discover the transformative difference of partnering with a company that delivers unparalleled workmanship, unwavering reliability, and a level of customer satisfaction that consistently exceeds expectations. 
        Trust CLEO Painting for all your interior and exterior painting needs. 
        Contact us today for a complimentary consultation, and let us reveal the true beauty of your home through our expert painting services.
        </p>
        </div>
        </div>
      </div>
      <div className='services-container'>
        <p className='container-header services-header'>Services</p>
        <div className='services-grid'>
        <Link href='/services/exterior-painting'>
        <div className='service-grid-item service-grid-1'>
            <h2 className='service-grid-title'>Exterior Painting</h2>
        </div>
        </Link>
        <Link href='/services/interior-painting'>
        <div className='service-grid-item service-grid-2'>
            <h2 className='service-grid-title'>Interior Painting</h2>
        </div>
        </Link>
        <Link href='/services/cabinet-painting'>
        <div className='service-grid-item service-grid-3'>
            <h2 className='service-grid-title'>Cabinet Painting</h2>
        </div>
        </Link>
        <Link href='/services/pressure-washing'>
        <div className='service-grid-item service-grid-4'>
            <h2 className='service-grid-title'>Pressure Washing</h2>
        </div>
        </Link>
        <Link href='/services/roof-cleaning'>
        <div className='service-grid-item service-grid-5'>
            <h2 className='service-grid-title'>Roof Cleaning</h2>
        </div>
        </Link>
        <Link href='/services/gutter-cleaning'>
        <div className='service-grid-item service-grid-6'>
            <h2 className='service-grid-title'>Gutter Cleaning</h2>
        </div>
        </Link>
        <Link href='/services/window-washing'>
        <div className='service-grid-item service-grid-7'>
        <h2 className='service-grid-title'>Window Washing</h2>
        </div>
        </Link>
        <Link href='/services/air-duct-cleaning'>
        <div className='service-grid-item service-grid-8'>
        <h2 className='service-grid-title'>Air Duct Cleaning</h2>
        </div>
        </Link>
        <Link href='/services/dryer-vent-cleaning'>
        <div className='service-grid-item service-grid-9'>
        <h2 className='service-grid-title'>Dryer Vent Cleaning</h2>
        </div>
        </Link>
        </div>
        {/* <ServicesGrid /> */}
      </div>
      <div className='locations-container'>
      <p className='container-header locations-header'>Locations</p>
      <div className='locations-container-wrapper'>
      <div className='location-img-container'>
        <h2 className='location-description-header'>Top Fairfield County House Painters & Exterior Cleaning</h2>
        <p className='location-description'>
          We proudly serve all areas of Fairfield County, CT, including Westport, Wilton, Weston, Darien, New Canaan, Greenwich, and surrounding communities.
         No matter where you are located in the county, we will bring our expertise to your doorstep. 
         At CLEO, we are proud to offer our exceptional commercial & residential home painting services as well as exterior cleaning services - pressure washing, gutter cleaning and roof cleaning services to the residents of Fairfield County, CT. 
         With our expertise and dedication to customer satisfaction, we have become the go-to choice for homeowners and businesses in the area.</p>
      </div>
      <div className='location-content-container'>  
        <div className='county-img'>
        <img src='/fairfield-county.png' className='location-img' alt='Fairfield County Graphic'></img>
        </div>
      </div>
      </div>
      <div className='counties-container'>
          <LocationLinks />
          </div>
      <div className='location-btn-div'>
      <Link href='/locations'><button type='button' className='view-locations-btn'>View All Locations<BsArrowRight className='arrow-icon'/></button></Link>
      </div>
      </div>
      <div className='testimonials-container'>
        <p className='container-header testimonial-header'>Testimonials</p>
        <p className='testimonial-subheader'>See what our clients have to say</p>
        <div className='testimonial-div'>
          <div className='testimonial-div-item'>
            <img className='testimonial-img' src='/profile.jpeg' width='50' alt='Testimonial Profile Picture'></img>
            <p className='testimonial-content'>They were professional, efficient, and cleaned everything up afterwards. The price was as expected. Their system sent an automated invoice and receipt. I am very satisfied and will use again.</p>
            <h2 className='testimonial-name'>Bradley Miller</h2>
            <p className='testimonial-date'>08/25/23</p>
          </div>
          <div className='testimonial-div-item'>
            <img className='testimonial-img' src='/profile-2.jpeg' width='50' alt='Testimonial Profile Picture'></img>
            <p className='testimonial-content'>CLEO Painting has consistently worked for us for many years now!! They give a fair price and always do a very professional job! I&apos;m always amazed at how clear our windows and how fresh our house looks after they leave!! Wish I could give them 6 stars!!!</p>
            <h2 className='testimonial-name'>Melinda Gracie</h2>
            <p className='testimonial-date'>06/14/23</p>
          </div>
          <div className='testimonial-div-item'>
            <img className='testimonial-img' src='/profile-3.jpeg' width='50' alt='Testimonial Profile Picture'></img>
            <p className='testimonial-content'>Lucky to have found this firm! Super professional, customer service oriented, did everything as promised and more. High quality results. Meticulously careful, protected exterior light fixtures, no damage. House/windows/ roof/patio all look great!</p>
            <h2 className='testimonial-name'>Joseph Carusso</h2>
            <p className='testimonial-date'>04/08/23</p>
          </div>
        </div>
        {/* <Testimonials /> */}
      </div>
      <div className='contact-container'>
      <p className='container-header contact-header'>Contact Us</p>
        <Contact /> 
      </div>
      <Footer />
    </>

  );
}
