import ConsultationStyleWrapper from "./Consultation.style";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import outgoingCallImage from "../../../assets/images/corporate/call-outgoing-big.svg";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const Consultation = () => {
  return (
    <ConsultationStyleWrapper className="consultation-section">
      <div className="container">
        <ScrollAnimate>
        <div className="consultation-card">
          <div className="row">
            <div className="col-md-6">
              <div className="consultation-left">
                <ScrollAnimate delay={200}>
                <SectionTitle
                  title="Consultation"
                  subtitle="Request A free"
                  parentClass="corporate md-mb-0"
                  subtitleClass="text-white"
                  titleClass="text-white"
                />
                </ScrollAnimate>
                <div className="consultation-img">
                  <ScrollAnimate delay={230}>
                  <img height="126" width="126" src={outgoingCallImage} alt="Outgoing Call" loading="lazy"/>
                  </ScrollAnimate>
                </div>
                <ScrollAnimate delay={250}>
                <div className="consultation-text">
                  <p className="text-white wt-700 uppercase">
                    Contact us for immediate
                  </p>
                  <h5 className="text-white wt-700">(+91) 98410 74504</h5>
                  <h5 className="text-white wt-700 mb-0">
                    <a href="mailto:someone@example.com">ravi@cleanairindia.com</a>
                  </h5>
                </div>
                </ScrollAnimate>
              </div>
            </div>
            <div className="col-md-6">
              <ScrollAnimate delay={300}>
              <div className="consultation-form">
                <form>
                  <label>Your Name *</label>
                  <input type="text" placeholder="e.g.  Roe Smith" />
                  <label>Phone Number</label>
                  <input type="text" placeholder="e.g.  (+91) 98410 74504" />
                  <label>Subject</label>
                  <div className="consultation-dropdown">
                    <select>
                      <option value={1}>Laminar Airflow</option>
                      <option value={2}>Biosafety Cabinet</option>
                      <option value={3}>Fume Exhaust Hood</option>
                      <option value={4}>Air Shower System</option>
                    </select>
                  </div>
                  <button className="consultation-btn">
                    <span className="btn-inner">
                      <span className="btn-normal-text">
                        Get Start for Free
                      </span>
                      <span className="btn-hover-text">Get Start for Free</span>
                    </span>
                  </button>
                </form>
              </div>
              </ScrollAnimate>
            </div>
          </div>
        </div>
        </ScrollAnimate>
      </div>
    </ConsultationStyleWrapper>
  );
};

export default Consultation;
