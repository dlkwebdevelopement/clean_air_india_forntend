import StartMeetingStyleWrapper from "./StartMeeting.style";

import appScreenImage from "../../../assets/images/team-collaboration/app-screen.svg";
import appStoreIcon from "../../../assets/images/icons/app-store.svg";
import playStoreIcon from "../../../assets/images/icons/play-store.svg";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const StartMeeting = () => {
  return (
    <StartMeetingStyleWrapper className="meeting-anytime-section">
      <div className="container">
        <ScrollAnimate delay={200}>
          <div className="row">
            <div className="col-md-12">
              <div className="meeting-anytime-card">
                <div className="overlay">
                  <ScrollAnimate delay={250}>
                    <img height="500" width="362" src={appScreenImage} alt="meeting-img" loading="lazy"/>
                  </ScrollAnimate>
                </div>
                <div className="meeting-anytime-card-content">
                  <ScrollAnimate delay={270}>
                    <div className="meeting-anytime-card-text">
                      <h2>Start meeting</h2>
                      <h2>Anytime anywhere</h2>
                      <p>Startco Meet iOS and android app available now.</p>
                    </div>
                    <div className="meeting-anytime-card-buttons">
                      <a href="#">
                        <img height="50" width="160" src={appStoreIcon} alt="App Store icon" loading="lazy"/>
                      </a>
                      <a href="#">
                        <img height="50" width="160" src={playStoreIcon} alt="Play Store icon" loading="lazy"/>
                      </a>
                    </div>
                  </ScrollAnimate>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimate>
      </div>
    </StartMeetingStyleWrapper>
  );
};

export default StartMeeting;
