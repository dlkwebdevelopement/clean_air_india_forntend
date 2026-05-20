import CorporateValuesStyle from "./CorporateValues.style";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

import colorSwatchIcon from "../../../assets/images/corporate/color-swatch.svg";
import bookmarkIcon from "../../../assets/images/corporate/bookmark-2.svg";
import documentSketchIcon from "../../../assets/images/corporate/document-sketch.svg";
import codeIcon from "../../../assets/images/corporate/code.svg";
// import shieldIcon from "../../../assets/images/corporate/shield.svg";   // New Icon Example
// import supportIcon from "../../../assets/images/corporate/support.svg"; // New Icon Example
import rotateCircleImage from "../../../assets/images/corporate/our-value-rotate-circle.png";
import mainImage from "../../../assets/images/corporate/our-value-img.png";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const CorporateValues = () => {
  return (
    <CorporateValuesStyle className="our-values-section">
      <div className="container">
        <div className="our-values-top">
          <ScrollAnimate delay={200}>
            <SectionTitle
              subtitle="Product"
              title="Our Values of the Product"
              alignment="center"
              parentClass="corporate md-mb-0"
            />
          </ScrollAnimate>
          <ScrollAnimate delay={250}>
            <p>
             We don’t just build products we deliver innovation, quality, and care. Our values define the standards you can count on.
            </p>
          </ScrollAnimate>
        </div>

        <div className="row">
          {/* LEFT SIDE */}
          <div className="col-lg-3 col-md-4">
            <ScrollAnimate delay={200}>
              <div className="our-value-text text-right">
                <div className="our-value-icon our-value-icon1">
                  <img height="20" width="20" src={colorSwatchIcon} alt="icon" loading="lazy"/>
                </div>
                <h5>Quality</h5>
                <p>
                  Designed for consistent performance and durability.
                </p>
              </div>
            </ScrollAnimate>

            <ScrollAnimate delay={220}>
              <div className="our-value-text text-right">
                <div className="our-value-icon our-value-icon2">
                  <img height="20" width="20" src={bookmarkIcon} alt="icon" loading="lazy"/>
                </div>
                <h5>Compliance</h5>
                <p>
                  Meets ISO 14644, GMP, and WHO cleanroom standards.
                </p>
              </div>
            </ScrollAnimate>

            {/* NEW FEATURE 1 */}
            <ScrollAnimate delay={240}>
              <div className="our-value-text text-right">
                <div className="our-value-icon our-value-icon5">
                  <img height="20" width="20" src={codeIcon} alt="icon" loading="lazy"/>
                </div>
                <h5>Innovation</h5>
                <p>
                  Customized solutions for modern research and production needs.
                </p>
              </div>
            </ScrollAnimate>
          </div>

          {/* CENTER IMAGE */}
          <div className="col-lg-6 col-md-4">
            <ScrollAnimate delay={250}>
              <div className="our-values-img-section">
                <div className="our-values-img-border">
                  <img height="470" width="470" src={rotateCircleImage}
                    alt="loader"
                    className="loader-img" loading="lazy"/>
                  <div className="our-values-img">
                    <img height="250" width="250" src={mainImage} alt="img" loading="lazy"/>
                  </div>
                </div>
              </div>
            </ScrollAnimate>
          </div>

          {/* RIGHT SIDE */}
          <div className="col-lg-3 col-md-4">
            <ScrollAnimate delay={270}>
              <div className="our-value-text text-left">
                <div className="our-value-icon our-value-icon3">
                  <img height="20" width="19" src={documentSketchIcon} alt="icon" loading="lazy"/>
                </div>
                <h5>Sustainability</h5>
                <p>
                  Energy-efficient equipment with minimal environmental impact
                </p>
              </div>
            </ScrollAnimate>

            <ScrollAnimate delay={300}>
              <div className="our-value-text text-left">
                <div className="our-value-icon our-value-icon4">
                  <img height="20" width="20" src={codeIcon} alt="icon" loading="lazy"/>
                </div>
                <h5>Customer Focus</h5>
                <p>
                  End-to-end support, from design to operation.
                </p>
              </div>
            </ScrollAnimate>

            {/* NEW FEATURE 2 */}
            <ScrollAnimate delay={320}>
              <div className="our-value-text text-left">
                <div className="our-value-icon our-value-icon6">
                  <img height="20" width="20" src={codeIcon} alt="icon" loading="lazy"/>
                </div>
                <h5>24/7 Support</h5>
                <p>
                  Our dedicated support team is always available to help you
                  anytime, anywhere without delays.
                </p>
              </div>
            </ScrollAnimate>
          </div>
        </div>
      </div>
    </CorporateValuesStyle>
  );
};

export default CorporateValues;
