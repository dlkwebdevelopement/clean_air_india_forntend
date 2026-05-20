import { useEffect, useRef } from "react";
import HomeMarketingStyleWrapper from "./HomeMarketing.style";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import TitleWithBadge from "../../../Components/Title/TitleWithBadge";
import TitleStyleWrapper from "../../../Components/Title/Title.style";
import CustomPieProgress from "../../../Components/CustomPieProgress";

import ChartImage from "../../../assets/images/shape/chart-1.svg";
import EmojiIconsImage from "../../../assets/images/shape/emoji.svg";
import Star1Image from "../../../assets/images/shape/star1.svg";
import Star2Image from "../../../assets/images/shape/star2.svg";
import Star3Image from "../../../assets/images/shape/star3.svg";
import M1Image from "../../../assets/images/main-demo/m1.webp";
import Ellipse1Image from "../../../assets/images/main-demo/ellipse1.png";
import Ellipse2Image from "../../../assets/images/main-demo/ellipse2.png";
import Ellipse3Image from "../../../assets/images/main-demo/ellipse3.png";
import Ellipse4Image from "../../../assets/images/main-demo/ellipse4.png";
import ManImage from "../../../assets/images/main-demo/man.png";
import M2Image from "../../../assets/images/main-demo/m2.webp";
import Star4Image from "../../../assets/images/shape/star-4.svg";
import ItemShapeImage from "../../../assets/images/shape/item-shape.svg";
import WaveShapeImage from "../../../assets/images/shape/wave-shape.svg";
import { FaCheck } from "react-icons/fa6";
import { GoArrowRight } from "react-icons/go";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const HomeOneMarketingSection = () => {
  // counter up
  const sectionRef = useRef(null);

  useEffect(() => {
    let isAnimated = 0;
    function counterUp() {
      if (isAnimated == 0) {
        const counterItem = document.querySelectorAll(".counter");
        counterItem.forEach((item) => {
          var counterText = item.innerText;
          item.innerText = "0";
          const updateCounter = () => {
            let dataTarget = +item.getAttribute("datatarget");
            if (dataTarget > 999) {
              dataTarget = dataTarget / 1000;
            }
            counterText = +item.innerText;
            let increment = dataTarget / 1000;
            if (counterText < dataTarget) {
              item.innerText = `${Math.ceil(counterText + increment)}`;
              setTimeout(updateCounter, 1);
            }
          };
          updateCounter();
        });
      }
    }

    const handleScroll = () => {
      if (!sectionRef.current) return;
      const y = window.scrollY;
      const x = sectionRef.current.offsetTop - 400;
      if (y > x && y < x + window.innerHeight) {
        counterUp();
        isAnimated++;
      } else {
        isAnimated = 0;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <HomeMarketingStyleWrapper>
      {/* marketing section start */}
      <div className="marketing-section">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-xl-5 col-lg-6">
              <ScrollAnimate delay={200}>
                <div className="marketing-img">
                  <div className="overlay">
                    <div className="overlay-item chart">
                      <img height="53" width="158" src={ChartImage} alt="chart-img" loading="lazy"/>
                    </div>
                    <div className="overlay-item emoji-icons">
                      <img height="31" width="163" src={EmojiIconsImage} alt="emoji-icons" loading="lazy"/>
                    </div>
                    <div className="overlay-item star-1">
                      <img height="38" width="36" src={Star1Image} alt="star" loading="lazy"/>
                    </div>
                    <div className="overlay-item star-2">
                      <img height="36" width="35" src={Star2Image} alt="star" loading="lazy"/>
                    </div>
                    <div className="overlay-item star-3">
                      <img height="26" width="25" src={Star3Image} alt="star" loading="lazy"/>
                    </div>
                  </div>
                  <img height="380" width="400" src={M1Image} alt="marketing-img" loading="lazy"/>
                </div>
              </ScrollAnimate>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="marketing-content">
                <div className="marketing-content-title">
                  <TitleStyleWrapper>
                    <ScrollAnimate delay={250}>
                      <div className="section-title">
                        <span className="sub-title">Powerful alone</span>
                        <h2 className="title">
                          Powerful alone,
                          <br /> unbeatable
                          <span className="marketing-badge">marketing</span>
                        </h2>
                      </div>
                    </ScrollAnimate>
                  </TitleStyleWrapper>
                </div>
                <div className="marketing-content-body">
                  <ScrollAnimate delay={300}>
                    <p>
                      We use as filler text for layouts, non-readability is of
                      great importance but because those who do not know how to
                      pursue pleasure rationally encounter consequences that are
                      extremely painful. Nor again is there anyone who loves or
                      pursues or desires to obtain.
                    </p>
                  </ScrollAnimate>
                  <ScrollAnimate delay={300}>
                    <ul className="list">
                      <li>
                        <div className="list-item">
                          <FaCheck />
                          <p className="w-700">
                            Share multiple screens at a time
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="list-item">
                          <FaCheck />
                          <p className="w-700">High-Quality screen</p>
                        </div>
                      </li>
                    </ul>
                  </ScrollAnimate>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="marketing-section marketing-section2 md-pt-60"
        ref={sectionRef}
      >
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-xl-6 col-lg-6 order-lg-1 order-2">
              <div className="marketing-content">
                <ScrollAnimate delay={200}>
                  <SectionTitle
                    subtitle="Team Management"
                    title="Manage team increase productivity"
                    parentClass="md-mb-0"
                  />
                </ScrollAnimate>

                <div className="marketing-content-body">
                  <ScrollAnimate delay={250}>
                    <div className="mb-30">
                      <p>
                        We use as filler text for layouts, non-readability is of
                        great importance but because those who do not know how
                        to pursue pleasure rationally encounter consequences
                        that are extremely painful. Nor again is there anyone
                        who loves or pursues or desires to obtain. Nor again is
                        there anyone who loves or pursues or desires to obtain.
                      </p>
                    </div>
                  </ScrollAnimate>
                  <ScrollAnimate delay={300}>
                    <a href="#" className="text-link">
                      <span>View Case Studies</span>
                      <GoArrowRight />
                    </a>
                  </ScrollAnimate>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 order-lg-2 order-1">
              <div className="marketing-img v2">
                <img height="380" width="400" src={M2Image} alt="marketing-img" loading="lazy"/>
                <div className="overlay">
                  <div className="overlay-item reduction-time">
                    <div className="reduction-time-top">
                      <h2>
                        <span className="counter" datatarget="40">
                          40
                        </span>
                        %
                      </h2>
                      <img height="26" width="25" src={Star4Image} alt="star" loading="lazy"/>
                    </div>
                    <p>Reduction in time</p>
                  </div>
                  <div className="overlay-item success-rate">
                    <img height="170" width="170" className="rotate-icon"
                      src={ItemShapeImage}
                      alt="icon" loading="lazy"/>
                    <div className="success-rate-content">
                      <div className="progress pie_progress">
                        <CustomPieProgress
                          Text="Success rate"
                          TextColor="#444444"
                          Percentage={85}
                          ValueColor="#000000"
                          PathColor="#00CEC9"
                          TrailColor="rgba(0, 206, 201, 0.2)"
                        />
                        <p>Success rate</p>
                      </div>
                    </div>
                  </div>
                  <div className="overlay-item wave-shape">
                    <img height="37" width="96" src={WaveShapeImage} alt="shape" loading="lazy"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* marketing section end */}
    </HomeMarketingStyleWrapper>
  );
};

export default HomeOneMarketingSection;
