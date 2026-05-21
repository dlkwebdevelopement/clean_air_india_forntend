import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import CorporateBannerStyle from "./CorporateBanner.style";
import ScrollAnimate from "../../../Components/ScrollAnimate";
import BgVideoMP4 from "../../../assets/images/videos/10800_optimized.mp4";
import BgVideoWebM from "../../../assets/images/videos/10800_optimized.webm";
import PosterImg from "../../../assets/images/corporate/corporate-banner-bg.webp";

const CorporateBanner = () => {
  return (
    <CorporateBannerStyle className="coroprate-banner-section">
      <Helmet>
        <link rel="preload" as="image" href={PosterImg} fetchpriority="high" />
      </Helmet>
      {/* video background */}
      <video
        className="video-bg"
        autoPlay
        loop
        muted
        playsInline
        preload="none"
        poster={PosterImg}
      >
        <source src={BgVideoWebM} type="video/webm" />
        <source src={BgVideoMP4} type="video/mp4" />
      </video>

      <div className="overlay">
        <ScrollAnimate delay={200}>
          <div className="corporate-banner-text">
            <h1 className="text-white text-center">
              We are <br />
              Clean Air <br />
              Systems
            </h1>
            <p className="text-white text-center">
              Clean Air Systems – Trusted cleanroom solutions with 35+ years expertise.
            </p>
            <NavLink to={"/contact-us"} className="corporate-banner-btn">
              <span className="btn-inner">
                <span className="btn-normal-text">Contact Us</span>
                <span className="btn-hover-text">Contact Us</span>
              </span>
            </NavLink>
          </div>
        </ScrollAnimate>
      </div>
    </CorporateBannerStyle>
  );
};

export default CorporateBanner;
