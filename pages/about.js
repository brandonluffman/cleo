import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Head from "next/head";
import Image from "next/image";
import {PiDotFill} from 'react-icons/pi'
const about = () => (
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
          <link rel="canonical" href="https://cleoexteriors.com/about"/>
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
    <div className="about-page-container">
      <div className='about-content-container'>
        {/* <div className='about-img-container'>
          <img src='/logo.png' className='about-img about-page-img'  alt='Brand Logo'></img>
          <div className='about-stats about-page-stats'>
          <div className='about-stat about-page-stat'>
            <p className='about-stat-number'>2000+</p>
            <p className='about-stat-title'>Home Inspections</p>
          </div>
          <div className='about-stat middle-stat about-page-stat'>
            <p className='about-stat-number'>50+</p>
            <p className='about-stat-title'>Towns Serviced</p>
          </div>
          <div className='about-stat about-page-stat'>
            <p className='about-stat-number'>12+</p>
            <p className='about-stat-title'>Years In The Business</p>
          </div>
        </div>
        </div> */}
       
       <div className='about-content-div about-page-content-div'>
        <section className='about-paragraph'>
          <h1 className='about-paragraph-content'><span className='header-color'>CLEO</span> Painting</h1>
          <h2 className='about-paragraph-content-bold'><b>Top Rated Home Painting & Exterior Cleaning Business in Fairfield County</b>
          </h2>
        </section>

        <img className='about-paragraph-img' src='/home-exterior-work.jpeg'></img>
        <p className='about-paragraph-description'>
        Welcome to CLEO Painting, your trusted experts in 
        </p>
        <ul className="about-page-menu">
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
        <img className='about-paragraph-img about-p-img-2' src='/interior-paint-job.jpeg'></img>

        <p className='about-paragraph-assist'>
          <b>Exceeding Expectations: Elevating Your Home with Exceptional Exterior & Interior Painting Service</b>
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
    <Footer />
  </div>
)

export default about;