import TeamMainFeatureStyle from "./TeamMainFeature.style";

import shape1 from "../../../assets/images/team-collaboration/shape1.svg";
import shape2 from "../../../assets/images/team-collaboration/shape2.svg";
import ellipse1 from "../../../assets/images/team-collaboration/ellipse1.svg";
import ellipse2 from "../../../assets/images/team-collaboration/ellipse2.svg";
import ellipse3 from "../../../assets/images/team-collaboration/ellipse3.svg";
import coffeeIcon from "../../../assets/images/team-collaboration/coffee.svg";
import fingerScanIcon from "../../../assets/images/team-collaboration/finger-scan.svg";
import soundIcon from "../../../assets/images/team-collaboration/sound.svg";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const TeamMainFeature = () => {
  return (
    <TeamMainFeatureStyle className="main-feature-section">
      <div className="bg-shape">
        <div className="shape-img img-1">
          <img height="73" width="87" src={shape1} alt="shape-img" loading="lazy"/>
        </div>
        <div className="shape-img img-2">
          <img height="37" width="115" src={shape2} alt="shape-img" loading="lazy"/>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <ScrollAnimate delay={200}>
              <div className="main-feature-card card-1">
                <div className="overlay">
                  <img height="55" width="61" src={ellipse1} alt="ellipse" loading="lazy"/>
                </div>
                <div className="main-feature-card-content">
                  <img height="32" width="33" src={coffeeIcon} alt="feature-icon" loading="lazy"/>
                  <h2>One Click Meetings</h2>
                  <p>
                    There are many variations of passages of always available but
                    the majority human perception is tuned.
                  </p>
                </div>
              </div>
            </ScrollAnimate>
          </div>
          <div className="col-lg-4 col-md-6">
            <ScrollAnimate delay={225}>
            <div className="main-feature-card card-2">
              <div className="overlay">
                <img height="55" width="55" src={ellipse2} alt="ellipse" loading="lazy"/>
              </div>
              <div className="main-feature-card-content">
                <img height="32" width="32" src={fingerScanIcon} alt="feature-icon" loading="lazy"/>
                <h2>Meet Safely</h2>
                <p>
                  We use as filler text for layouts, non-readability is of great
                  importance: human perception is tuned to recognize
                </p>
              </div>
            </div>
            </ScrollAnimate>
          </div>
          <div className="col-lg-4 col-md-6">
            <ScrollAnimate delay={250}>
            <div className="main-feature-card card-3">
              <div className="overlay">
                <img height="72" width="60" src={ellipse3} alt="ellipse" loading="lazy"/>
              </div>
              <div className="main-feature-card-content">
                <img height="32" width="33" src={soundIcon} alt="feature-icon" loading="lazy"/>
                <h2>Share Your Screen</h2>
                <p>
                  Human perception is tuned to recognize certain patterns and
                  repetitions in texts. If the distribution of letters visual
                </p>
              </div>
            </div>
            </ScrollAnimate>
          </div>
        </div>
      </div>
    </TeamMainFeatureStyle>
  );
};

export default TeamMainFeature;
