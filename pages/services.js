import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { FaRegDotCircle } from 'react-icons/fa';
import serviceInfo from "./api/services";
import ServicesGrid from "../components/ServicesGrid";
import {BsArrowDownShort} from 'react-icons/bs'
import { AiOutlineSchedule } from "react-icons/ai";
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
       <title>CLEO Painting | Top Exterior & Interior Home Painters</title>
          <meta name="description" content="CLEO Painting: Unparalleled Exterior and Interior Painting expertise serving all of Fairfield County and surrounding areas."/>
          <meta charSet="utf-8" />
          <meta name="robots" content="index, follow" />
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <link rel="icon" type="image/png" href="/favicon.png" alt="Favicon" />
          <link rel="apple-touch-icon" href="/favicon.png" /> 
          <link rel="canonical" href="https://cleoexteriors.com/services"/>
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
      <div className='services-page-container'>
        <div className="service-page-headers">
          <div className="service-page-headers-div">
                  <h1 className='container-header services-page-header'>Turn to <span className="color-change">CLEO Painting</span> for your Exterior & Interior Home Painting Needs</h1>
        <h3 className='services-page-subheader'>
          CLEO Painting is your trusted partner for a wide range of home improvement services in the picturesque Fairfield County, CT areas. 
        Our commitment to excellence extends beyond painting, encompassing a comprehensive array of inspection, repair & cleaning services designed to ensure the safety and quality of your home.
        </h3>
        <button  type='btn' className="services-page-btn">
          Book Appointment <AiOutlineSchedule className="nav-contact-btn-icon" />
        </button>
        </div>
        <div className="service-page-img-div">
        {/* <img src='/roller.png' className="headers-logo"></img> */}
        {/* <img src='/exterior-paint-job.webp' className="headers-logo h-logo-1"></img>
        <img src='/cabinet-finishing.jpeg' className="headers-logo h-logo-2"></img> */}


                {/* <img src='/exterior-job.webp' className="headers-logo" alt='Brand Logo'></img> */}
                </div>

        {/* <div>
          <img src='/exterior.jpeg' className="cert-logo" alt='Home Inspection Certification'></img>
          <img src='/exterior.jpeg' className="cert-logo" alt='Home Inspection Certification'></img>
        </div> */}
        {/* <Link href='/contact' className="service-page-btn-link"><button className="services-page-btn">Book Appoinment</button></Link> */}
        {/* <div class="arrow bounce"><BsArrowDownShort className="bounce-arrow-icon"/></div> */}
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