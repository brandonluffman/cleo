import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Link from 'next/link';
import {MdLocationPin} from 'react-icons/md';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import serviceTowns from './api/towns';
import Head from 'next/head';
import LocationLinks from '../components/LocationLinks';

const locations = ({ towns }) => {

  return (
    <div>    
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
      <div className='location-page-container'> 
      <div className='location-page-content-container'>
      <div className='location-page-content'>
        <h1 className='location-page-header'>Home Exterior & Interior Painting Services in Fairfield County & Litchfield County</h1>
      </div>
      </div>
      <div className='location-page-graphic-container'>
        <div className='location-page-graphic'>
          <div className='locations-page-desc'>
            <h4>Top Fairfield County Painting Contractor Servicing all of Fairfield County & Surrounding Areas</h4>
            <p className='desc-desc'>We proudly serve all areas of Fairfield County, CT, including Darien, Westport, New Cannan, Greenwich, and surrounding communities. No matter where you are located in the county, we will bring our expertise to your doorstep. At CLEO, we are proud to offer our exceptional pressure washing and gutter cleaning services to the residents of Fairfield County, CT. With our expertise and dedication to customer satisfaction, we have become the go-to choice for homeowners and businesses in the area.</p>
            {/* <div className='about-stats'>
                <div className='about-stat about-page-stat'>
                  <p className='about-stat-number'>12+</p>
                  <p className='about-stat-title'>Years In Business</p>
                </div>
                <div className='about-stat middle-stat'>
                  <p className='about-stat-number'>50+</p>
                  <p className='about-stat-title'>Towns Serviced</p>
                </div>
            </div> */}
          </div>
          <div className='locations-page-img'>
            <img src='/logo.png' className='location-page-img' alt='Brand Logo'></img>
          </div>
        </div>
      </div>
      <div className='all-loc-div'>
      <hr className='location-hr'></hr>
      <h3 className='all-locations-header'>All Locations We Service</h3>
      <LocationLinks />
        </div>
      </div>
      <Footer />
  </div>
  )
}

export async function getStaticProps() {
  const towns = serviceTowns;

  return {
    props: { towns }
  };
}

export default locations;