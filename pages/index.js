import React, { useState, Component, useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';
// import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import {MdLocationPin} from 'react-icons/md';
import {BsArrowRight} from 'react-icons/bs'
import Contact from '../components/Contact';
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
          <title>CLEO Exteriors | Pressure Washing, Gutter Cleaning, & Window Cleaning</title>
          <meta name="description" content="Cleo Exteriors is the most exceptional service in 2023."/>
          <meta charSet="utf-8" />
          <meta name="robots" content="index, follow" />
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <link rel="icon" type="image/png" href="/logo.png" alt="Favicon" />
          <link rel="apple-touch-icon" href="/logo.png" /> 
          <link rel="canonical" href="https://cleoexteriors.com/"/>
          <meta property="og:type" content="article" />
          <meta property="og:title" content="TITLE OF YOUR POST OR PAGE" />
          <meta property="og:description" content="DESCRIPTION OF PAGE CONTENT" />
          <meta property="og:image" content="LINK TO THE IMAGE FILE" />
          <meta property="og:url" content="PERMALINK" />
          <meta property="og:site_name" content="SITE NAME" />
          <meta name="twitter:title" content="TITLE OF POST OR PAGE" />
          <meta name="twitter:description" content="DESCRIPTION OF PAGE CONTENT" />
          <meta name="twitter:image" content="LINK TO IMAGE" />
          <meta name="twitter:site" content="@USERNAME" />
          <meta name="twitter:creator" content="@USERNAME" />
      </Head>

      <Navbar />
      <div className='landing-container'>
        <div className='test'>
        <h1 className='landing-header'><span className='header-color'>CLEO</span> Exteriors</h1>
        <h2 className='landing-subheader'>Elevate your homes appeal with the best Pressure Washing, Gutter Cleaning, & Window Washing services in Fairfield County.</h2>
        {/* <div className='landing-service-div'>
          <div className='landing-service'>
            Power Washing
          </div>
          <div className='landing-service'>
            Gutter Cleaning
          </div>
          <div className='landing-service'>
            Window Washing
          </div>
        </div>*/}
        <div className='landing-location-div'>
          <MdLocationPin className='landing-location-icon'/> Fairfield County, CT
        </div> 

        {/* <h2 className='landing-subheader'></h2> */}
        <div className='landing-btns'>
        <Link href='/contact'><button type='button' className='landing-btn booking-btn'>Book Now</button></Link>
        <Link href='/about'><button type='button' className='landing-btn learn-btn'>Learn More</button></Link>
        </div>
        </div>
      </div>
      <div className='stats-container'>

      </div>
      <div className='about-container'>
        {/* <p className='container-header about-header'>About</p> */}
        <div className='about-content-container'>
          <div className='about-img-container'>
        <img src='/logo.png' className='about-img' alt='Brand Logo'></img>
        </div>
        <div className='about-content-div'>
        <section className='about-paragraph'>
          <h3 className='about-paragraph-content'><span className='header-color'>CLEO</span> Exteriors is the <br></br><br></br><b className='about-paragraph-content-bold'>Top Rated Home Exterior Service in Fairfield County</b></h3>
        </section>
        <p className='about-paragraph-description'>
        Welcome to CLEO Exteriors, your trusted experts in pressure washing, gutter cleaning, and exterior work. We take pride in delivering impeccable services that not only meet but exceed your expectations. With years of experience and a passion for perfection, our skilled team goes above and beyond to restore the beauty and integrity of your home&apos;s exterior. From removing stubborn stains and grime with our state-of-the-art pressure washing equipment to ensuring clog-free gutters for efficient water drainage, we handle every project with utmost care and attention to detail. What sets us apart is our commitment to delivering fantastic results that speak for themselves. Whether your property requires a thorough cleaning, a fresh coat of paint, or an overall exterior facelift, we have the expertise to tackle any project, big or small. Our dedication to using top-quality materials and employing industry-leading techniques ensures exceptional and long-lasting results that stand the test of time.
        </p>
        <p className='about-paragraph-assist'>
          <b>Assisting Buyers, Sellers & Real Estate Professionals</b>
        </p>
        <p className='about-paragraph-description'>
        At CLEO, we understand that your home is a reflection of your personal style and investment. That&apos;s why we treat each project as if it were our own, meticulously working to enhance curb appeal and protect your property&apos;s value. Rest easy knowing that your exterior work is in the hands of true professionals who take pride in their craft.

          Don&apos;t settle for anything less than outstanding. Experience the difference of working with a company that provides fantastic workmanship, reliable service, and customer satisfaction that exceeds all expectations. Trust CLEO Exteriors for all your pressure washing, gutter cleaning, and exterior work needs. Contact us today for a complimentary consultation, and let us bring out the true beauty of your home&apos;s exterior.
        </p>
        </div>
        </div>
        {/* <div className='about-stats'>
          <div className='about-stat'>
            <p className='about-stat-number'>2000+</p>
            <p className='about-stat-title'>Home Inspections</p>
          </div>
          <div className='about-stat middle-stat'>
            <p className='about-stat-number'>50+</p>
            <p className='about-stat-title'>Towns Serviced</p>
          </div>
          <div className='about-stat'>
            <p className='about-stat-number'>12+</p>
            <p className='about-stat-title'>Years In The Business</p>
          </div>
        </div> */}
      </div>
      <div className='services-container'>
        <p className='container-header services-header'>Services</p>
        <div className='services-grid'>
        <Link href='/services/pressure-washing'>
        <div className='service-grid-item service-grid-1'>
            <h2 className='service-grid-title'>Pressure Washing</h2>
        </div>
        </Link>
        <Link href='/services/gutter-cleaning'>
        <div className='service-grid-item service-grid-2'>
            <h2 className='service-grid-title'>Gutter Cleaning</h2>
        </div>
        </Link>
        <Link href='/services/window-washing'>
        <div className='service-grid-item service-grid-3'>
        <h2 className='service-grid-title'>Window Washing</h2>
        </div>
        </Link>
        </div>
        {/* <ServicesGrid /> */}
      </div>
      <div className='locations-cosntainer'>
      <p className='container-header locations-header'>Locations</p>
      <div className='locations-container-wrapper'>
      <div className='location-img-container'>
        <h2 className='location-description-header'>Top Fairfield County Exterior Work</h2>
        <p className='location-description'>We proudly serve all areas of Fairfield County, CT, including Stamford, Norwalk, Bridgeport, Danbury, Greenwich, and surrounding communities. No matter where you are located in the county, we will bring our expertise to your doorstep. At CLEO, we are proud to offer our exceptional pressure washing and gutter cleaning services to the residents of Fairfield County, CT. With our expertise and dedication to customer satisfaction, we have become the go-to choice for homeowners and businesses in the area.</p>
        {/* <div className='location-description-img-div'>
        <img src='/exterior.jpeg' className='location-inspection-img' alt='Fairfield County Graphic'></img>
        </div> */}
      </div>
      <div className='location-content-container'>  
      <div className='county-img'>
      <img src='/fairfield-county.png' className='location-img' alt='Fairfield County Graphic'></img>
      </div>
      <div className='counties-container'>
        {/* <LocationLinks /> */}
        </div>
      </div>
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
            <img className='testimonial-img' src='/profile.jpeg' width='50'></img>
            <p className='testimonial-content'>They were professional, efficient, and cleaned everything up afterwards. The price was as expected. Their system sent an automated invoice and receipt. I am very satisfied and will use again.</p>
            <h2 className='testimonial-name'>Bradley Miller</h2>
            <p className='testimonial-date'>08/25/23</p>
          </div>
          <div className='testimonial-div-item'>
            <img className='testimonial-img' src='/profile-2.jpeg' width='50'></img>
            <p className='testimonial-content'>CLEO Exteriors has consistently worked for us for many years now!! They give a fair price and always do a very professional job! I&apos;m always amazed at how clear our windows and how fresh our house looks after they leave!! Wish I could give them 6 stars!!!</p>
            <h2 className='testimonial-name'>Melinda Gracie</h2>
            <p className='testimonial-date'>06/14/23</p>
          </div>
          <div className='testimonial-div-item'>
            <img className='testimonial-img' src='/profile-3.jpeg' width='50'></img>
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
