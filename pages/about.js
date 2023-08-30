import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Head from "next/head";
import Image from "next/image";

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
          <title>Gold Shield Home Inspection | Abouts</title>
          <meta name="description" content="Gold Shield Home Inspection is a home inspector servicing Fairfield County, Litchfield County & Surrounding Areas"/>
          <meta charSet="utf-8" />
          <meta name="robots" content="index, follow" />
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <link rel="icon" type="image/png" href="/goldshield-logo.webp" alt="Favicon" />
          <link rel="apple-touch-icon" href="/goldshield-logo.webp" /> 
          <link rel="canonical" href="https://goldshieldhomeinspection.com/about"/>
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
        <div className='about-content-div'>
          <section className='about-paragraph'>
          <h1 className='about-paragraph-content'><span className='header-color'>CLEO</span> Exteriors is the <br></br><br></br><b className='about-paragraph-content-bold'>Top Rated Home Exterior Service in Fairfield County</b></h1>          </section>
          <p className='about-paragraph-description'>
          Welcome to CLEO Exteriors, your trusted experts in pressure washing, gutter cleaning, and exterior work. We take pride in delivering impeccable services that not only meet but exceed your expectations. With years of experience and a passion for perfection, our skilled team goes above and beyond to restore the beauty and integrity of your home&apos;s exterior. From removing stubborn stains and grime with our state-of-the-art pressure washing equipment to ensuring clog-free gutters for efficient water drainage, we handle every project with utmost care and attention to detail. What sets us apart is our commitment to delivering fantastic results that speak for themselves. Whether your property requires a thorough cleaning, a fresh coat of paint, or an overall exterior facelift, we have the expertise to tackle any project, big or small. Our dedication to using top-quality materials and employing industry-leading techniques ensures exceptional and long-lasting results that stand the test of time.
          </p>
          <p className='about-paragraph-assist'>
          <b>Assisting Buyers, Sellers & Real Estate Professionals</b>
          </p>
          <p className='about-paragraph-description'>
          At CLEO, we understand that your home is a reflection of your personal style and investment. That&apos;s why we treat each project as if it were our own, meticulously working to enhance curb appeal and protect your property&apos;s value. Rest easy knowing that your exterior work is in the hands of true professionals who take pride in their craft.
              <br></br><br></br>
              Don&apos;t settle for anything less than outstanding. Experience the difference of working with a company that provides fantastic workmanship, reliable service, and customer satisfaction that exceeds all expectations. Trust CLEO Exteriors for all your pressure washing, gutter cleaning, and exterior work needs. Contact us today for a complimentary consultation, and let us bring out the true beauty of your home&apos;s exterior.
              {/* <br></br><br></br> */}
              {/* More Content *** */}
          </p>
          <div className="about-inspect-div">
          {/* <img src='/inspector.webp' className="about-page-inspector-img" alt='Home Inspector' /> */}
          </div>
         </div>
    </div>
    </div>
    <Footer />
  </div>
)

export default about;