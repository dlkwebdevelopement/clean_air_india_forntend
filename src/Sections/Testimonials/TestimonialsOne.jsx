import { useEffect, useRef, useState } from "react";
import TestimonialsStyleWrapper from "./Testimonials.style";
import Slider from "react-slick";
import LazySlider from "../../Components/LazySlider/LazySlider";
import Data from "../../assets/data/TestimonialsOne";
import { FaHeart } from "react-icons/fa";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

import testimonialShape1 from "../../assets/images/shape/testimonial-shape1.png";
import testimonialShape2 from "../../assets/images/shape/testimonial-shape2.png";
import testimonialShape3 from "../../assets/images/shape/testimonial-shape3.png";
import QuoteShapeImg from "../../assets/images/shape/quote-shape.svg";
import QuoteIconImg from "../../assets/images/shape/quote-icon.png";
import ScrollAnimate from "../../Components/ScrollAnimate";

const TestimonialsOne = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);

  const [currentSlide, setCurrentSlide] = useState(0);

  const settingsFor = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 6000,
    infinite: true,
    pauseOnHover: false,
    pauseOnFocus: false,
    lazyLoad: "ondemand",
    afterChange: (current) => setCurrentSlide(current),
  };

  const settingsNav = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    infinite: true,
    pauseOnHover: false,
    pauseOnFocus: false,
    lazyLoad: "ondemand",
  };

  const handleSliderLeft = () => {
    sliderRef1.slickPrev();
  };

  const handleSliderRight = () => {
    sliderRef1.slickNext();
  };

  const CustomSliderInfo = () => {
    return (
      <div className="slider-info">
        <button className="slider-arrow left" onClick={handleSliderLeft}>
          <FaArrowLeftLong />
        </button>

        <div className="slider-counter">
          <p>{currentSlide + 1}/5</p>
        </div>

        <button className="slider-arrow right" onClick={handleSliderRight}>
          <FaArrowRightLong />
        </button>
      </div>
    );
  };

  const testimonialRef = useRef(null);
  const rotateIconRef = useRef(null);
  // Cache offsetTop to avoid forced reflow on every scroll event
  const cachedOffsetTop = useRef(0);

  useEffect(() => {
    // Read offsetTop ONCE after mount (not on every scroll)
    // Reading layout properties inside scroll handlers causes forced reflow (233ms penalty)
    const updateOffsetTop = () => {
      if (testimonialRef.current) {
        cachedOffsetTop.current = testimonialRef.current.getBoundingClientRect().top + window.scrollY;
      }
    };

    updateOffsetTop();

    // Update cached value on resize only (not scroll)
    window.addEventListener("resize", updateOffsetTop);

    const handleScroll = () => {
      if (!rotateIconRef.current) return;

      // Use cached value — no layout read, no reflow
      const y = window.scrollY;
      const x = cachedOffsetTop.current - 400;

      let animationValue = (y - x) / 4;
      const animationStop = 45;

      animationValue = Math.max(0, Math.min(animationValue, animationStop));

      rotateIconRef.current.style.transform =
        y > x
          ? `rotate(-${animationValue}deg)`
          : `rotate(${animationValue}deg)`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateOffsetTop);
    };
  }, []);

  return (
    <TestimonialsStyleWrapper ref={testimonialRef}>
      <div className="container">
        <ScrollAnimate delay={250}>
          <div className="row">
            <div className="col-md-12">
              {/* LazySlider defers slick init until section is near viewport */}
              {/* Prevents slick's offsetWidth reads from blocking initial page render */}
              <LazySlider fallbackHeight="450px" rootMargin="400px">
                <div className="testimonial-card">
                  <div className="testimonial-card-left">
                    <div className="bg-shape">
                      <div className="shape-img img-1">
                        <ScrollAnimate delay={200}>
                          <img height="204" width="286" src={testimonialShape1} alt="shape-img" loading="lazy"/>
                        </ScrollAnimate>
                      </div>
                      <div className="shape-img img-2">
                        <ScrollAnimate delay={220}>
                          <img height="170" width="248" src={testimonialShape2} alt="shape-img" loading="lazy"/>
                        </ScrollAnimate>
                      </div>
                      <div className="shape-img img-3">
                        <ScrollAnimate delay={240}>
                          <img height="143" width="135" src={testimonialShape3} alt="shape-img" loading="lazy"/>
                        </ScrollAnimate>
                      </div>
                      <div className="shape-img img-4">
                        <img height="70" width="70" className="rotate-icon"
                          src={QuoteShapeImg}
                          alt="shape-img"
                          ref={rotateIconRef} loading="lazy"/>
                        <div className="icon">
                          <img height="17" width="27" src={QuoteIconImg} alt="shape-img" loading="lazy"/>
                        </div>
                      </div>
                    </div>

                    <Slider
                      {...settingsNav}
                      className="testimonial-slider-nav"
                      asNavFor={nav1}
                      ref={(slider) => (sliderRef2 = slider)}
                    >
                      {Data?.map((item, i) => (
                        <div className="slider-item" key={i}>
                          <img src={item.image} alt="slider-img" loading="lazy"/>
                        </div>
                      ))}
                    </Slider>
                  </div>

                  <div className="testimonial-card-right">
                    <ScrollAnimate delay={250}>
                      <div className="section-title">
                        <span className="sub-title">Testimonials</span>
                        <h2 className="title white-color love-icon">
                          We
                          <FaHeart />
                          Feedback
                        </h2>
                      </div>
                    </ScrollAnimate>

                    <ScrollAnimate delay={300}>
                      <Slider
                        {...settingsFor}
                        className="testimonial-slider-for"
                        asNavFor={nav2}
                        ref={(slider) => (sliderRef1 = slider)}
                      >
                        {Data?.map((item, i) => (
                          <div className="slider-item" key={i}>
                            <p>{item.review}</p>
                            <div className="slider-item-user">
                              <div className="author-info">
                                <span className="name">{item.name},</span>
                                <span className="duration">
                                  {item.designation}
                                </span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </Slider>

                      {<CustomSliderInfo />}
                    </ScrollAnimate>
                  </div>
                </div>
              </LazySlider>
            </div>
          </div>
        </ScrollAnimate>
      </div>
    </TestimonialsStyleWrapper>
  );
};

export default TestimonialsOne;
