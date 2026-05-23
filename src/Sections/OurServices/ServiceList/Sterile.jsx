// ProductPage.js
import React, { useState } from "react";
import styled from "styled-components";
import { FaCheckCircle } from "react-icons/fa"; // ✅ Tick Icon
import picture2 from "../../../assets/images/about-us/Ste2.webp";
import picture1 from "../../../assets/images/about-us/Ste1.webp";
import picture3 from "../../../assets/images/about-us/Ste3.webp";
import picture4 from "../../../assets/images/about-us/Ste4.webp";
import picture5 from "../../../assets/images/about-us/Ste5.webp";
// import picture3 from "../../../assets/images/about-us/laminar8.webp";
// import picture4 from "../../../assets/images/about-us/laminar9.webp";
import { useNavigate } from "react-router-dom"; // ✅ for navigation

const ProductPage7 = () => {
  const images = [picture3,picture5,picture4,picture2, picture1];
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    city: "",
    country: "",
    product: "Sterile Garment Storage Cabinet"
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({...formData, [name]: value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL || 'https://api.cleanairindia.com/api'}/product-catalogue`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data.success) {
        setSubmitMessage(data.message);
        setTimeout(() => {
          setShowModal(false);
          setFormData({
            name: "",
            email: "",
            company: "",
            city: "",
            country: "",
            product: "Sterile Garment Storage Cabinet"
          });
        }, 3000);
      } else {
        setSubmitMessage(data.message || 'Failed to submit request');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitMessage('Network error. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ProductSection>
      <div className="container">
        <div className="row">
          {/* LEFT: Product Images + Features */}
          <div className="col-lg-6 col-md-12 product-images">
            <div className="main-image">
              <img src={selectedImage} alt="Sterile Garment Storage Cabinet" loading="lazy"/>
            </div>

            <div className="thumbnail-list">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Cabinet ${index + 1}`}
                  className={selectedImage === img ? "active" : ""}
                  onClick={() => setSelectedImage(img)} loading="lazy"/>
              ))}
            </div>

            {/* Working Principle */}
            <div className="models-section">
              <h2>Working Principle</h2>
              <p>
                Air inside the cabinet is continuously re-circulated through a
                pre-filter and HEPA filter assembly to achieve ISO Class 5
                (Class 100) conditions. The UV germicidal lamp ensures microbial
                control, while the IR lamp aids in drying garments if required.
                Together, these features maintain sterile garments, reduce
                contamination risks, and extend garment usability.
              </p>
            </div>

            {/* Special Features */}
            <div className="features-section">
              <h2>Special Features</h2>
              <ul>
                <li><FaCheckCircle className="tick-icon" /> Constant HEPA-filtered vertical laminar airflow for clean storage</li>
                <li><FaCheckCircle className="tick-icon" /> UV germicidal lamp for effective bacterial sterilization</li>
                <li><FaCheckCircle className="tick-icon" /> Infrared (IR) drying lamp for moisture control and sterilization</li>
                <li><FaCheckCircle className="tick-icon" /> Stainless steel construction (SS 304 or SS 316) or powder-coated GI</li>
                <li><FaCheckCircle className="tick-icon" /> Toughened glass or polycarbonate doors with clear view panels</li>
                <li><FaCheckCircle className="tick-icon" /> Adjustable hanging rods and shelves for organized storage</li>
                <li><FaCheckCircle className="tick-icon" /> Differential pressure gauge to monitor filter efficiency</li>
                <li><FaCheckCircle className="tick-icon" /> Low noise operation with energy-saving blowers</li>
                <li><FaCheckCircle className="tick-icon" /> LED status indicators and light controls</li>
                <li><FaCheckCircle className="tick-icon" /> Customizable sizes to fit cleanroom gowning areas</li>
              </ul>
            </div>
          </div>

          {/* RIGHT: Product Content */}
          <div className="col-lg-6 col-md-12 product-details">
            <h1>Sterile Garment Storage Cabinet</h1>

            <h2>Sterile Garment Storage Cabinet – Clean Air Systems</h2>
            <p>
              Clean Air Systems designs and manufactures high-performance Sterile Garment Storage Cabinets for controlled environments. Our Sterile Garment Storage Cabinets are engineered to keep cleanroom apparel free from contamination during storage. As trusted Sterile Garment Storage Cabinet Manufacturers in Chennai, we deliver advanced storage solutions across Sterile Garment Storage Cabinet Chennai and Sterile Garment Storage Cabinet India. We also provide competitive Sterile Garment Storage Cabinet Price options directly from leading manufacturers, ensuring reliability, safety, and hygiene compliance.
            </p>

            <h2>What is a Sterile Garment Storage Cabinet?</h2>
            <p>
              A Sterile Garment Storage Cabinet is a specialized cleanroom enclosure designed to maintain the sterility of protective clothing. It utilizes continuous HEPA filtration and UV sterilization to prevent dust and microbial growth on stored garments. At Clean Air Systems, our Sterile Garment Cabinets provide a steady flow of class 100 air to preserve gowning integrity. From Sterile Garment Storage Cabinet Chennai to installations across Sterile Garment Storage Cabinet India, we supply high-quality and durable cabinets. We also ensure cost-effective Sterile Garment Storage Cabinet Price options for various laboratory setups.
            </p>

            <h2>Applications of Sterile Garment Cabinets</h2>
            <p>
              Sterile Garment Storage Cabinets are essential in pharmaceutical manufacturing, biotechnology laboratories, hospital surgery units, and semiconductor cleanrooms. These cabinets protect masks, coveralls, and hoods from airborne particulates before use. Our systems support compliance with strict cleanroom clothing storage regulations. Industries across Sterile Garment Storage Cabinet Chennai and Sterile Garment Storage Cabinet India rely on our solutions to maintain process control. We offer customizable designs from trusted Sterile Garment Storage Cabinet Manufacturers in Chennai and Sterile Garment Storage Cabinet Manufacturers in India.
            </p>

            <h2>Technical Specifications</h2>
            <ul>
              <li>
                <strong>Cleanliness Level:</strong> ISO Class 5 (as per ISO 14644-1)
              </li>
              <li>
                <strong>Filtration:</strong> Pre-filter (Washable) + HEPA filter (99.99% efficiency at 0.3 µm)
              </li>
              <li>
                <strong>Sterilization:</strong> UV Germicidal Lamp + IR Lamp
              </li>
              <li>
                <strong>Air Velocity:</strong> Approx. 90 ± 20 FPM
              </li>
              <li>
                <strong>Illumination:</strong> Diffused LED Lighting
              </li>
              <li>
                <strong>Noise Level:</strong> &lt; 65 dB (A) ± 5
              </li>
              <li>
                <strong>Construction Options:</strong> SS 304 / SS 316 / GI with Powder Coating
              </li>
              <li>
                <strong>Power Supply:</strong> 230V, Single Phase, 50 Hz
              </li>
            </ul>

            <h2>Applications</h2>
            <ul>
              <li>Pharmaceutical & Biotechnology cleanrooms</li>
              <li>Hospitals and healthcare facilities</li>
              <li>Food & Beverage sterile processing zones</li>
              <li>Research laboratories</li>
              <li>Semiconductor and microelectronics industries</li>
            </ul>

            <h2>Why Choose Clean Air India?</h2>
            <p>
              Built to <strong>ISO 14644 cleanroom standards</strong>, our cabinets provide multi-layer protection with filtration, UV, and IR sterilization. They enhance compliance, ensure garment sterility, and are trusted across pharma, biotech, research, and healthcare facilities PAN India.
            </p>

            {/* ✅ BUTTON at the end */}
            <div className="interest-btn-wrap">
              <button
                className="interest-btn"
                onClick={() => setShowModal(true)}
              >
                Yes I'm Interested
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Form */}
      {showModal && (
        <ModalOverlay>
          <ModalContent>
            <CloseButton onClick={() => setShowModal(false)}>×</CloseButton>
            <h3>Request Information for {formData.product}</h3>
            
            {submitMessage && (
              <Message className={submitMessage.includes('Thank you') ? 'success' : 'error'}>
                {submitMessage}
              </Message>
            )}
            
            <form onSubmit={handleSubmit}>
              <FormGroup>
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                />
              </FormGroup>
              
              <FormGroup>
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                />
              </FormGroup>
              
              <FormGroup>
                <label htmlFor="company">Company Name</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                />
              </FormGroup>
              
              <FormGroup>
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                />
              </FormGroup>
              
              <FormGroup>
                <label htmlFor="country">Country</label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                />
              </FormGroup>
              
              <FormGroup>
                <label htmlFor="product">Selected Product</label>
                <input
                  type="text"
                  id="product"
                  name="product"
                  value={formData.product}
                  readOnly
                  className="read-only"
                />
              </FormGroup>
              
              <SubmitButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Processing...' : 'Submit Request'}
              </SubmitButton>
            </form>
          </ModalContent>
        </ModalOverlay>
      )}
    </ProductSection>
  );
};

export default ProductPage7;

// Styled Components
const ProductSection = styled.section`
  padding: 80px 0;

  .row {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    gap: 40px;
  }

  /* LEFT SIDE: Product Images + Features */
  .product-images {
    flex: 1;
    max-width: 50%;

    .main-image {
      border: 1px solid #ddd;
      border-radius: 10px;
      padding: 10px;
      margin-bottom: 15px;

      img {
        width: 100%;
        border-radius: 10px;
        object-fit: cover;
      }
    }

    .thumbnail-list {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
      margin-bottom: 25px;

      img {
        width: 80px;
        height: 80px;
        border: 2px solid transparent;
        border-radius: 8px;
        cursor: pointer;
        object-fit: cover;
        transition: border-color 0.3s;

        &:hover {
          border-color: #007bff;
        }

        &.active {
          border-color: #007bff;
        }
      }
    }

    .models-section,
    .features-section {
      margin-top: 20px;

      h2 {
        font-size: 20px;
        margin-bottom: 12px;
        color: #0061a6;
      }

      ul {
        list-style: none;
        padding-left: 0;

        li {
          display: flex;
          align-items: flex-start;
          margin-bottom: 10px;
          color: ${({ theme }) => theme.colors.textColor || "#555"};
          font-size: 15px;

          .tick-icon {
            color: #28a745;
            margin-right: 8px;
            flex-shrink: 0;
          }
        }
      }

      p {
        font-size: 15px;
        line-height: 1.6;
        color: ${({ theme }) => theme.colors.textColor || "#555"};
        text-align: justify;
      }
    }
  }

  /* RIGHT SIDE: Product Details */
  .product-details {
    flex: 1;
    max-width: 50%;

    h1 {
      font-size: 38px;
      margin-bottom: 15px;
      color: black;
    }

    h2 {
      font-size: 20px;
      margin: 20px 0 10px;
      color: #0061a6;
    }

    p {
      line-height: 1.6;
      margin-bottom: 15px;
      color: ${({ theme }) => theme.colors.textColor || "#555"};
      text-align: justify;
    }

    ul {
      padding-left: 20px;
      margin-bottom: 15px;

      li {
        margin-bottom: 8px;
        color: ${({ theme }) => theme.colors.textColor || "#555"};
      }
    }
       /* ✅ Button style */
    .interest-btn-wrap {
      margin-top: 30px;
    }

    .interest-btn {
      background-color: #007bff;
      color: #fff;
      padding: 12px 25px;
      border: none;
      border-radius: 5px;
      font-size: 16px;
      cursor: pointer;
      transition: background-color 0.3s ease;
      &:hover {
        background-color: #0056b3;
      }
    }
  }

  /* Responsive */
  @media screen and (max-width: 768px) {
    .row {
      flex-direction: column;
    }

    .product-images,
    .product-details {
      max-width: 100%;
    }

    .thumbnail-list {
      justify-content: center;
    }
  }
`;

// Modal Styles
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 30px;
  border-radius: 10px;
  width: 90%;
  max-width: 500px;
  position: relative;
  max-height: 80vh;
  overflow-y: auto;

  h3 {
    margin-bottom: 20px;
    color: #0061a6;
    text-align: center;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #666;
  
  &:hover {
    color: #000;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
  
  label {
    display: block;
    margin-bottom: 5px;
    font-weight: 500;
  }
  
  input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    
    &.read-only {
      background-color: #f5f5f5;
      cursor: not-allowed;
    }
    
    &:disabled {
      background-color: #f5f5f5;
      cursor: not-allowed;
    }
  }
`;

const SubmitButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  width: 100%;
  margin-top: 10px;
  transition: background-color 0.3s;
  
  &:hover:not(:disabled) {
    background-color: #0056b3;
  }
  
  &:disabled {
    background-color: #6c757d;
    cursor: not-allowed;
  }
`;

const Message = styled.div`
  padding: 10px 15px;
  margin-bottom: 20px;
  border-radius: 5px;
  text-align: center;
  
  &.success {
    background-color: #d4edda;
    color: #155724;
    border: 1px solid #c3e6cb;
  }
  
  &.error {
    background-color: #f8d7da;
    color: #721c24;
    border: 1px solid #f5c6cb;
  }
`;


