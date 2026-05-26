import BrandSliderStyleWrapper from "./BrandSlider.style";
import SliderImg1 from "../../assets/images/brands/1.webp";
import SliderImg2 from "../../assets/images/brands/2.webp";
import SliderImg3 from "../../assets/images/brands/3.webp";
import SliderImg4 from "../../assets/images/brands/4.webp";
import SliderImg5 from "../../assets/images/brands/5.webp";
import SliderImg6 from "../../assets/images/brands/6.webp";
import ScrollAnimate from "../ScrollAnimate";

const BrandSlider = ({ titleClass, sliderClass }) => {
  const brandImages = [
    SliderImg1,
    SliderImg2,
    SliderImg3,
    SliderImg4,
    SliderImg5,
    SliderImg6,
    SliderImg1,
    SliderImg2,
    SliderImg3,
    SliderImg4,
    SliderImg5,
    SliderImg6,
  ];

  return (
    <BrandSliderStyleWrapper className="brands-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <ScrollAnimate delay={200}>
              <div className={titleClass}>
                <h2>Big & Small business trusted us</h2>
              </div>
            </ScrollAnimate>
            <ScrollAnimate delay={200}>
              <div className={`brands-slider ${sliderClass}`}>
                <div className="brands-slider-container">
                  {brandImages.map((src, index) => (
                    <div key={index} className="slider-item">
                      <img src={src} alt={`slider-img-${index}`} loading="lazy"/>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollAnimate>
          </div>
        </div>
      </div>
    </BrandSliderStyleWrapper>
  );
};

export default BrandSlider;
