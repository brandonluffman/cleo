import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { FaRegDotCircle } from 'react-icons/fa';
import serviceInfo from "./api/services";
import ServicesGrid from "../components/ServicesGrid";

const services = ({ services }) => {
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
          <title>Gold Shield Home Inspection | Services</title>
          <meta name="description" content="Gold Shield Home Inspection provides a variety of Home Inspections within the Farifield County & Litchfield County areas."/>
          <meta charSet="utf-8" />
          <meta name="robots" content="index, follow" />
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <link rel="icon" type="image/png" href="/goldshield-logo.webp" alt="Favicon" />
          <link rel="apple-touch-icon" href="/goldshield-logo.webp" /> 
          <link rel="canonical" href="https://goldshieldhomeinspection.com/services"/>
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
      <div className='services-page-container'>
        <div className="service-page-headers">
        <img src='/logo.png' className="headers-logo" alt='Brand Logo'></img>
        <h1 className='container-header services-page-header'><span className='color-change'>Home Exterior Cleaning & Repair</span> Services in <span className='color-change'>Connecticut</span></h1>
        <h3 className='services-page-subheader'>Gold Shield offers a variety of inspections in Fairfield & Litchfield County, CT. Whether you&apos;re looking to test the radon or do a full home inspection, Gold Shield has you covered.</h3>
        {/* <div>
          <img src='/exterior.jpeg' className="cert-logo" alt='Home Inspection Certification'></img>
          <img src='/exterior.jpeg' className="cert-logo" alt='Home Inspection Certification'></img>
        </div> */}
        <Link href='/contact'><button className="services-page-btn">Book Appoinment</button></Link>
        </div>
        <ServicesGrid />
      </div>
      <Footer />
    </div>
  )
}


export async function getStaticProps() {
  const services = serviceInfo;

  return {
    props: { services }
  };
}



export default services;