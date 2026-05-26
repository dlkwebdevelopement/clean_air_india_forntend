import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import CorporateBannerStyle from "./CorporateBanner.style";
import BgVideoMP4 from "../../../assets/images/videos/10800_optimized.mp4";
import BgVideoWebM from "../../../assets/images/videos/10800_optimized.webm";
import PosterImg from "../../../assets/images/corporate/corporate-banner-bg.webp";
import PosterImgMobile from "../../../assets/images/corporate/corporate-banner-bg-mobile.webp";

const CorporateBanner = () => {
  return (
    <>
      <Helmet>
        {/* Preload LCP image (responsive) */}
        <link
          rel="preload"
          as="image"
          href={PosterImgMobile}
          imagesrcset={`${PosterImgMobile} 800w, ${PosterImg} 1600w`}
          imagesizes="(max-width: 767px) 800px, 1600px"
          fetchpriority="high"
        />
      </Helmet>

      <CorporateBannerStyle className="coroprate-banner-section">
        {/* Instant LCP Image (responsive) */}
        <img
          src={PosterImg}
          srcSet={`${PosterImgMobile} 800w, ${PosterImg} 1600w`}
          sizes="(max-width: 767px) 800px, 1600px"
          alt="Clean Air Systems"
          className="banner-poster"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />

        {/* Video Background */}
        <video
          className="video-bg"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster={PosterImgMobile}
        >
          <source src={BgVideoWebM} type="video/webm" />
          <source src={BgVideoMP4} type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="overlay">
          <div className="corporate-banner-text">
            <h1 className="text-white text-center">
              We are <br />
              Clean Air <br />
              Systems
            </h1>

            <p className="text-white text-center">
              Clean Air Systems – Trusted cleanroom solutions with 35+ years
              expertise.
            </p>

            <NavLink
              to="/contact-us"
              className="corporate-banner-btn"
            >
              <span className="btn-inner">
                <span className="btn-normal-text">
                  Contact Us
                </span>
                <span className="btn-hover-text">
                  Contact Us
                </span>
              </span>
            </NavLink>
          </div>
        </div>
      </CorporateBannerStyle>
    </>
  );
};

export default CorporateBanner;