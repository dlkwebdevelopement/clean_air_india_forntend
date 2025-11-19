import { useEffect, useState } from 'react';
import SayHelloStyle from "./SayHello.style";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

import ContactImg from "../../../assets/images/contact/contact-img.png";
import ShapeImg1 from "../../../assets/images/contact/shape-1.svg";
import ShapeImg2 from "../../../assets/images/contact/shape-2.svg";
import SmsTrackingImg from "../../../assets/images/icons/sms-tracking-2.svg";
import CallOutgoingImg from "../../../assets/images/icons/call-outgoing.svg";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const SayHello = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [formData, setFormData] = useState({
    'user-name': '',
    'email-address': '',
    'phone-number': '',
    'company-name': '',
    city: '',
    country: '',
    products: [],
    message: ''
  });

  useEffect(() => {
    // Load reCAPTCHA script
    const script = document.createElement('script');
    script.src = 'https://www.google.com/recaptcha/api.js';
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      setFormData(prev => {
        const products = checked 
          ? [...prev.products, value]
          : prev.products.filter(product => product !== value);
        return { ...prev, products };
      });
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    // Validate reCAPTCHA
    const recaptchaResponse = grecaptcha.getResponse();
    if (!recaptchaResponse) {
      setSubmitMessage('Please complete the reCAPTCHA verification');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('https://api.cleanairindia.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          'g-recaptcha-response': recaptchaResponse
        })
      });

      const data = await response.json();

      if (data.success) {
        setSubmitMessage(data.message);
        // Reset form
        setFormData({
          'user-name': '',
          'email-address': '',
          'phone-number': '',
          'company-name': '',
          city: '',
          country: '',
          products: [],
          message: ''
        });
        // Reset reCAPTCHA
        grecaptcha.reset();
      } else {
        setSubmitMessage(data.message || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitMessage('Network error. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SayHelloStyle>
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-6">
            <ScrollAnimate delay={200}>
              <div className="contact-img">
                <img src={ContactImg} alt="contact-img" />
                <div className="overlay-item shape-1">
                  <img src={ShapeImg1} alt="shape-img" />
                  <div className="icon">
                    <img src={SmsTrackingImg} alt="icon" />
                  </div>
                </div>
                <div className="overlay-item shape-2">
                  <img src={ShapeImg2} alt="shape-img" />
                  <div className="icon">
                    <img src={CallOutgoingImg} alt="icon" />
                  </div>
                </div>
              </div>
            </ScrollAnimate>
          </div>

          <div className="col-lg-6">
            <div className="contact-content">
              <ScrollAnimate>
                <SectionTitle
                  subtitle="Say Hello!"
                  title="We'd pleased to hear"
                />
              </ScrollAnimate>

              <ScrollAnimate>
                <div className="contact-content-body">
                  <form onSubmit={handleSubmit}>
                    <div className="form-input-between">
                      <div className="form-input mb-20">
                        <label htmlFor="user-name">Your Name *</label>
                        <input
                          type="text"
                          name="user-name"
                          id="user-name"
                          value={formData['user-name']}
                          onChange={handleInputChange}
                          placeholder="e.g. Roe Smith"
                          required
                        />
                      </div>
                      <div className="form-input mb-20">
                        <label htmlFor="email-address">Email Address *</label>
                        <input
                          type="email"
                          name="email-address"
                          id="email-address"
                          value={formData['email-address']}
                          onChange={handleInputChange}
                          placeholder="e.g. example@mail.com"
                          required
                        />
                      </div>
                    </div>
                    <div className="form-input-between">
                      <div className="form-input mb-20">
                        <label htmlFor="phone-number">Phone Number</label>
                        <input
                          type="tel"
                          name="phone-number"
                          id="phone-number"
                          value={formData['phone-number']}
                          onChange={handleInputChange}
                          placeholder="e.g. +91 1234567890"
                        />
                      </div>
                      <div className="form-input mb-20">
                        <label htmlFor="company-name">Company Name</label>
                        <input
                          type="text"
                          name="company-name"
                          id="company-name"
                          value={formData['company-name']}
                          onChange={handleInputChange}
                          placeholder="Your company name"
                        />
                      </div>
                    </div>
                    <div className="form-input-between">
                      <div className="form-input mb-20">
                        <label htmlFor="city">City</label>
                        <input
                          type="text"
                          name="city"
                          id="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          placeholder="Your city"
                        />
                      </div>
                      <div className="form-input mb-20">
                        <label htmlFor="country">Country</label>
                        <input
                          type="text"
                          name="country"
                          id="country"
                          value={formData.country}
                          onChange={handleInputChange}
                          placeholder="Your country"
                        />
                      </div>
                    </div>
                    <div className="form-input mb-20">
                      <label>Products of Interest</label>
                      <div className="checkbox-group">
                        {[
                          "Laminar Airflow",
                          "Biosafety Cabinet",
                          "Air Shower Entry System",
                          "Pass Boxes",
                          "Fan Filter Units",
                          "Powder Containment Booth",
                          "Sterile Garment Cabinet",
                          "Fume Exhaust Hoods",
                          "Modular Rooms"
                        ].map((product) => (
                          <div key={product} className="checkbox-item">
                            <input
                              type="checkbox"
                              id={product.toLowerCase().replace(/\s+/g, '-')}
                              name="products"
                              value={product}
                              checked={formData.products.includes(product)}
                              onChange={handleInputChange}
                            />
                            <label htmlFor={product.toLowerCase().replace(/\s+/g, '-')}>
                              {product}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="form-input mb-20">
                      <label htmlFor="message">Message *</label>
                      <textarea
                        name="message"
                        id="message"
                        cols="30"
                        rows="5"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Type your message"
                        required
                      ></textarea>
                    </div>
                    <div className="form-input mb-30 recaptcha-container">
                      <div className="g-recaptcha" data-sitekey="6Ld-nWQjAAAAAPoruQKdSsp3u9qe4zNRTgTqiFkP"></div>
                    </div>
                    
                    {submitMessage && (
                      <div className={`submit-message ${submitMessage.includes('successfully') ? 'success' : 'error'}`}>
                        {submitMessage}
                      </div>
                    )}
                    
                    <div className="item-button">
                      <button
                        type="submit"
                        className="template-btn primary-bg"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Sending...' : 'Submit Message'}
                      </button>
                    </div>
                  </form>
                </div>
              </ScrollAnimate>
            </div>
          </div>
        </div>
      </div>
    </SayHelloStyle>
  );
};

export default SayHello;