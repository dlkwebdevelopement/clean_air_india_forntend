import PeopleUsingStyle from "./PeopleUsing.style";
import TitleStyleWrapper from "../../../Components/Title/Title.style";
import { avatarImages } from "../../../assets/data/about-us/aboutData";
import { GoArrowRight } from "react-icons/go";
import CustomerImg from "../../../assets/images/about-us/customer-img.svg";
import PlusIcon from "../../../assets/images/icons/plus-blue.svg";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const PeopleUsing = () => {
  return (
    <PeopleUsingStyle>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <div className="customer-img">
              <ScrollAnimate delay={200}><img height="450" width="450" src={CustomerImg} alt="customer-img" loading="lazy"/></ScrollAnimate>
            </div>
          </div>
          <div className="col-lg-7">
            <ScrollAnimate delay={250}>
              <div className="customer-content">
                {/* <ul className="users-list">
                  {avatarImages.map((avatar, index) => (
                    <li key={index}>
                      <a href="#">
                        <img src={avatar} alt={`user-img-${index}`} loading="lazy"/>
                      </a>
                    </li>
                  ))}
                  <li>
                    <button>
                      <img height="12" width="12" src={PlusIcon} alt="add-user" loading="lazy"/>
                    </button>
                  </li>
                </ul> */}
                <div className="customer-content-text">
                  <TitleStyleWrapper>
                    <div className="section-title">
                      <h2 className="title mb-0">
                        About Us  <br/>
                        <span className="marketing-badge"> Clean Air Systems</span> 
                      </h2>
                    </div>
                  </TitleStyleWrapper>
                  <p>
                    At Clean Air Systems, we specialize in the design and manufacturing of high-quality cleanroom equipment trusted by pharmaceutical, biotechnology, research, healthcare, food, and semiconductor industries across India. Since 1991, our mission has been simple yet uncompromising: deliver reliable cleanroom solutions that ensure sterile, contamination-free environments for critical operations.
                  </p>
                  <p>
                    From a small-scale setup, we have grown into a leading cleanroom equipment manufacturer with a reputation for quality, innovation, and strong after-sales support. Our product portfolio includes laminar airflow units, biosafety cabinets, fume exhaust hoods, air shower system, Powder Dispensing Booths, pass boxes, sterile storage cabinets, modular cleanrooms, and more, all engineered to meet international standards and industry requirements.
                  </p>
                  {/* <a href="#" className="text-link">
                    <span>View Case Studies</span>
                    <GoArrowRight />
                  </a> */}
                </div>
              </div>
            </ScrollAnimate>
          </div>
        </div>
      </div>
    </PeopleUsingStyle>
  );
};

export default PeopleUsing;
