import { NavLink } from "react-router-dom";
import CorporateBannerStyle from "./CorporateBanner.style";
import BgVideoMP4 from "../../../assets/images/videos/10800_optimized.mp4";
import BgVideoWebM from "../../../assets/images/videos/10800_optimized.webm";

const CorporateBanner = () => {
  return (
    <>
      <CorporateBannerStyle className="coroprate-banner-section">
        {/* Video Background - Loaded and played instantly on mount */}
        <video
          className="video-bg loaded"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
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