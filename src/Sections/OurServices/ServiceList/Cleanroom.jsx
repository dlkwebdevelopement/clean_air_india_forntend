// ProductPage.js
import React, { useState } from "react";
import styled from "styled-components";
import { FaCheckCircle } from "react-icons/fa"; // ✅ Tick Icon
import picture1 from "../../../assets/images/about-us/modular-room2.webp";
import picture2 from "../../../assets/images/about-us/modular-room1.webp";
import picture3 from "../../../assets/images/about-us/modular-room3.webp";
import picture4 from "../../../assets/images/about-us/modular-room4.webp";
import picture5 from "../../../assets/images/about-us/modular-room5.jpg";
import picture6 from "../../../assets/images/about-us/modular-room6.jpeg";
import picture7 from "../../../assets/images/about-us/modular-room7.jpeg";

// import picture3 from "../../../assets/images/about-us/laminar8.webp";
// import picture4 from "../../../assets/images/about-us/laminar9.webp";
const ProductPage8 = () => {
  const images = [picture3,picture4,picture5,picture6,picture7, picture2, picture1];
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    city: "",
    country: "",
    product: "Modular Cleanroom"
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
            product: "Modular Cleanroom"
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
              <img src={selectedImage} alt="Modular Cleanroom" loading="lazy"/>
            </div>

            <div className="thumbnail-list">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Cleanroom ${index + 1}`}
                  className={selectedImage === img ? "active" : ""}
                  onClick={() => setSelectedImage(img)} loading="lazy"/>
              ))}
            </div>

            {/* Construction & Materials */}
            <div className="models-section">
              <h2>Construction & Materials</h2>
              <ul>
                <li>
                  <FaCheckCircle className="tick-icon" />
                  <strong>Wall & Ceiling Panels:</strong> Double-skin modular
                  panels with EPS or PUF infill for durability and insulation.
                </li>
                <li>
                  <FaCheckCircle className="tick-icon" />
                  <strong>Cleanroom Doors:</strong> Double-skin GI doors with
                  powder-coated finish, available with PUF, EPS, or honeycomb
                  infill.
                </li>
                <li>
                  <FaCheckCircle className="tick-icon" />
                  <strong>Softwall Cleanrooms & Clean Air Tents:</strong>{" "}
                  Flexible and cost-effective alternatives for temporary setups.
                </li>
              </ul>
            </div>

            {/* Special Features */}
            <div className="features-section">
              <h2>Special Features</h2>
              <ul>
                <li><FaCheckCircle className="tick-icon" /> High-efficiency HEPA filter terminals for clean air delivery</li>
                <li><FaCheckCircle className="tick-icon" /> Double-skin insulated modular wall and ceiling panels</li>
                <li><FaCheckCircle className="tick-icon" /> Air handling units (AHU) with integrated cooling and filtration</li>
                <li><FaCheckCircle className="tick-icon" /> Corner coving design to eliminate dust accumulation areas</li>
                <li><FaCheckCircle className="tick-icon" /> Double-glazed flush-mounted viewing windows</li>
                <li><FaCheckCircle className="tick-icon" /> Heavy-duty epoxy or vinyl flooring options</li>
                <li><FaCheckCircle className="tick-icon" /> Automated cleanroom interlocking door systems</li>
                <li><FaCheckCircle className="tick-icon" /> Digital monitoring systems for differential pressure and humidity</li>
                <li><FaCheckCircle className="tick-icon" /> Energy-efficient LED light fixtures for cleanrooms</li>
                <li><FaCheckCircle className="tick-icon" /> Compliance with ISO 14644-1 cleanroom standards (Class 5 to 8)</li>
              </ul>
            </div>
          </div>

          {/* RIGHT: Product Content */}
          <div className="col-lg-6 col-md-12 product-details">
            <h1>Modular Cleanroom</h1>

            <h2>Modular Cleanrooms – Clean Air Systems</h2>
            <p>
              Clean Air Systems designs and manufactures high-performance Modular Cleanrooms for critical industrial operations. Our Modular Cleanrooms are engineered to maintain controlled environments with strict temperature, humidity, and particle levels. As trusted Modular Cleanroom Manufacturers in Chennai, we deliver customized setups across Modular Cleanroom Chennai and Modular Cleanroom India. We also provide competitive Modular Cleanroom Price options directly from experienced Modular Cleanroom Manufacturers in India, ensuring quality, compliance, and long-term reliability.
            </p>

            <h2>What are Modular Cleanrooms?</h2>
            <p>
              Modular Cleanrooms are prefabricated structures designed to control dust particles, temperature, and microbial growth. These systems ensure process integrity and product safety using advanced HEPA filtration and HVAC designs. At Clean Air Systems, our Modular Cleanrooms are built with PUF/EPS panels and epoxy flooring for high durability. From Modular Cleanroom Chennai projects to nationwide Modular Cleanroom India installations, we provide customized cleanroom design and installation services. We also offer affordable Modular Cleanroom Price structures to fit different budgets.
            </p>

            <h2>Applications of Modular Cleanrooms</h2>
            <p>
              Modular Cleanrooms are widely used in pharmaceutical production, biotechnology laboratories, medical device packaging, microelectronics fabrication, and food processing. These environments are essential for protecting sensitive operations from cross-contamination. Our modular cleanroom installations support compliance with international quality standards (such as ISO and WHO-GMP). Industries across Modular Cleanroom Chennai and Modular Cleanroom India rely on our systems for safety and precision. We support clients with cost-effective solutions from leading Modular Cleanroom Manufacturers in Chennai.
            </p>

            <h2>Applications</h2>
            <ul>
              <li>Pharmaceutical manufacturing & packaging areas</li>
              <li>Biotechnology research and production</li>
              <li>Hospital operating theaters & isolation rooms</li>
              <li>Semiconductor & microelectronics production</li>
              <li>Food & beverage sterile processing zones</li>
            </ul>

            <h2>Why Choose Clean Air India?</h2>
            <p>
              With over three decades of expertise in cleanroom solutions, we provide custom-engineered modular cleanrooms designed to meet international standards. Our solutions ensure flexibility, durability, and contamination-free operations, with proven reliability across PAN India installations.
            </p>
            <ul>
              <li>Over three decades of cleanroom expertise</li>
              <li>
                Custom-engineered solutions based on site and process requirements
              </li>
              <li>Compliance with ISO 14644 international standards</li>
              <li>Wide range of construction options for cost-effectiveness</li>
              <li>Trusted PAN India installations</li>
            </ul>

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

export default ProductPage8;

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
          align-items: center;
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
    }
  }

  /* RIGHT SIDE: Product Details */
  .product-details {
    flex: 1;
    max-width: 50%;

    h1 {
      font-size: 42px;
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


