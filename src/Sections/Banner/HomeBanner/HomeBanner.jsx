import HomeBannerStyle from "./HomeBanner.style";
import { FaCheck } from "react-icons/fa6";

import bannerShape1 from "../../../assets/images/main-demo/banner-shape1.png";
import bannerShape2 from "../../../assets/images/main-demo/banner-shape2.png";
import bannerShape3 from "../../../assets/images/main-demo/banner-shape3.png";
import getDemoSvg from "../../../assets/images/main-demo/get-demo.svg";
import arrowRightSvg from "../../../assets/images/icons/arrow-right.svg";
import heroImg from "../../../assets/images/main-demo/hero-img.webp";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const HomeBanner = () => {
  return (
    <HomeBannerStyle className="hero-section">
      <div className="bg-shape">
        <div className="shape-img img-1">
          <ScrollAnimate delay={250}><img height="200" width="248" src={bannerShape1} alt="shpae1" /></ScrollAnimate>
        </div>
        <div className="shape-img img-2">
          <ScrollAnimate delay={220}><img height="155" width="291" src={bannerShape2} alt="shape2" /></ScrollAnimate>
        </div>
        <div className="shape-img img-3">
          <ScrollAnimate delay={240}><img height="480" width="234" src={bannerShape3} alt="shape3" /></ScrollAnimate>
        </div>
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 col-md-12">
            <div className="hero-content">
              <div className="hero-content-text">
                <ScrollAnimate>
                  <h1 className="uig-banner-title white-color">
                    One <span className="hero-badge">Platform</span>
                    <br />
                    All kinds solution
                  </h1>
                </ScrollAnimate>

                <ScrollAnimate delay={200}>
                  <p>
                    Staco is the dedicated platform for human management that
                    helps to grow your startup business quickly
                  </p>
                </ScrollAnimate>
              </div>
              <div className="hero-content-button mb-30">
                <ScrollAnimate delay={250}>
                  <a href="/sign-up" className="bg-blue-btn">
                    <span className="btn-inner">
                      <span className="btn-normal-text">
                        Get Start for Free
                      </span>
                      <span className="btn-hover-text">Get Start for Free</span>
                    </span>
                  </a>
                </ScrollAnimate>
              </div>
              <ScrollAnimate delay={300}>
                <ul className="hero-content-list">
                  <li>
                    <div className="list-item">
                      <FaCheck />
                      <p className="wt-700">No cards required</p>
                    </div>
                  </li>
                  <li>
                    <div className="list-item">
                      <FaCheck />
                      <p className="wt-700">30 day free trial</p>
                    </div>
                  </li>
                </ul>
              </ScrollAnimate>
            </div>
          </div>
          <div className="col-lg-5 col-md12">
            <ScrollAnimate>
              <div className="hero-img">
                <div className="overlay">
                  <a href="#" className="get-demo-btn">
                    <img height="120" width="120" src={getDemoSvg} alt="get-demo" />
                    <span className="icon">
                      <img height="29" width="29" src={arrowRightSvg} alt="icon" />
                    </span>
                  </a>
                </div>
                <img height="500" width="400" src={heroImg} alt="hero-img" />
              </div>
            </ScrollAnimate>
          </div>
        </div>
      </div>
    </HomeBannerStyle>
  );
};

export default HomeBanner;
