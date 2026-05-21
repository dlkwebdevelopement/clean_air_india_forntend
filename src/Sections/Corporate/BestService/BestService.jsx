import Slider from "react-slick";
import BestServiceStyleWrapper from "./BestService.style";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { serviceData } from "../../../assets/data/CorporateData/ServiceData";
import LazySlider from "../../../Components/LazySlider/LazySlider";

const SlickSlider = Slider.default || Slider;

const BestService = () => {
  const sliderSettings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    infinite: true,
    pauseOnHover: false,
    pauseOnFocus: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 3000,
    lazyLoad: "ondemand",
    responsive: [
      {
        breakpoint: 991,
        settings: {
          arrows: false,
          dots: true,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <BestServiceStyleWrapper className="best-services-section">
      <div className="overlay">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 pr-0">
              <div className="best-services-left">
                <SectionTitle
                  title="We Provide"
                  subtitle="Best Services"
                  parentClass="corporate mb-2 md-mb-0"
                  titleClass="mb-0"
                />
                <p>
                  We specialize in innovative cleanroom solutions, delivering reliable equipment and services to meet critical industry standards
                </p>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="row corporate-services-slider">
                <LazySlider fallbackHeight="350px" rootMargin="400px">
                  <SlickSlider {...sliderSettings}>
                    {serviceData.map((service) => (
                      <div key={service.id} className="col-md-12">
                        <div className="best-services-card">
                          <div className="best-services-img">
                            <img
                              src={service.imgSrc}
                              alt={`service-img-${service.id}`} loading="lazy"/>
                          </div>
                          <div className="best-services-text">
                            <h5 className="wt-700">
                              {service.title}
                            </h5>

                            {/* <p>{service.description}</p> */}
                          </div>
                        </div>
                      </div>
                    ))}
                  </SlickSlider>
                </LazySlider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BestServiceStyleWrapper>
  );
};

export default BestService;
