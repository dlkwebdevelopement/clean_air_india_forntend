import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import CorporateBannerStyle from "./CorporateBanner.style";
import BgVideoMP4 from "../../../assets/images/videos/10800_optimized.mp4";
import BgVideoWebM from "../../../assets/images/videos/10800_optimized.webm";
import PosterImg from "../../../assets/images/corporate/corporate-banner-bg.webp";
import PosterImgMobile from "../../../assets/images/corporate/corporate-banner-bg-mobile.webp";

const CorporateBanner = () => {
  const [canPlayVideo, setCanPlayVideo] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  useEffect(() => {
    // Only load background video on desktop/tablet to save mobile bandwidth & battery
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    if (isMobile) return;

    // Delay video loading significantly (3.5 seconds) to guarantee LCP completes on the responsive WebP poster
    const timer = setTimeout(() => {
      if ("requestIdleCallback" in window) {
        window.requestIdleCallback(() => setCanPlayVideo(true));
      } else {
        window.requestAnimationFrame(() => setCanPlayVideo(true));
      }
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

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

        {/* Video Background - Loaded and played only after initial LCP paint */}
        {canPlayVideo && (
          <video
            className={`video-bg ${isVideoPlaying ? "loaded" : ""}`}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster={PosterImgMobile}
            onPlay={() => setIsVideoPlaying(true)}
          >
            <source src={BgVideoWebM} type="video/webm" />
            <source src={BgVideoMP4} type="video/mp4" />
          </video>
        )}

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