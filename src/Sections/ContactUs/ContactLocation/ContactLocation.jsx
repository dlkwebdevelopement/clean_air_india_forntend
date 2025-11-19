import ContactLocationStyle from "./ContactLocation.style";
import Data from "../../../assets/data/contact-us/location";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const ContactLocation = () => {
  return (
    <ContactLocationStyle>
      <ScrollAnimate>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="map-content">
                <ScrollAnimate delay={200}>
                  <div className="map-info-card">
                    <ul className="list">
                      {Data?.map((location, index) => (
                        <li key={index}>
                          <div className="list-item">
                            <div className="list-icon">
                              <img src={location.icon} alt="icon" />
                            </div>
                            <div className="list-text">
                              <h4>{location.title}</h4>
                              {location.address && <p>{location.address}</p>}
                              {location.phoneNumbers &&
                                location.phoneNumbers?.map((phoneNumber, i) => (
                                  <p key={i}>{phoneNumber}</p>
                                ))}
                             {Array.isArray(location.emails) &&
  location.emails.map((email, i) => (
    <p key={i}>
      <a
        href={`mailto:${email}`}
        style={{
          color: "#007bff",
          textDecoration: "none",
          fontWeight: "500",
        }}
        onMouseEnter={(e) => (e.target.style.textDecoration = "underline")}
        onMouseLeave={(e) => (e.target.style.textDecoration = "none")}
      >
        {email}
      </a>
    </p>
  ))}


                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollAnimate>

                <div className="contact-map">
                  <iframe
                    title="Google Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.6312552873487!2d80.21136729999999!3d13.0591277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5262fc070dfa65%3A0xd16e1fa6bbf02ff9!2sCLEAN%20AIR%20SYSTEMS!5e0!3m2!1sen!2sin!4v1756981330447!5m2!1sen!2sin"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>

                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimate>
    </ContactLocationStyle>
  );
};

export default ContactLocation;
