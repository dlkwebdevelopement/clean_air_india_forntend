import React, { useState } from "react";
import styled from "styled-components";
import { FaCheckCircle } from "react-icons/fa"; // ✅ Tick Icon
import picture1 from "../../../assets/images/gallery/laminar6n.webp";
import picture2 from "../../../assets/images/gallery/laminar8.webp";

const ProductPage13 = () => {
  const images = [picture1, picture2];
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    city: "",
    country: "",
    product: "Fan Filter Units"
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
            product: "Fan Filter Units"
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
              <img src={selectedImage} alt="Fan Filter Unit" loading="lazy" />
            </div>

            <div className="thumbnail-list">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Fan Filter Unit ${index + 1}`}
                  className={selectedImage === img ? "active" : ""}
                  onClick={() => setSelectedImage(img)}
                  loading="lazy"
                />
              ))}
            </div>

            {/* Key Advantages */}
            <div className="models-section">
              <h2>Key Advantages</h2>
              <ul>
                <li>
                  <FaCheckCircle className="tick-icon" />
                  <strong>Integrated Design:</strong> Combines blower, pre-filter, and HEPA filter in one package.
                </li>
                <li>
                  <FaCheckCircle className="tick-icon" />
                  <strong>Energy Efficiency:</strong> High-efficiency backward-curved motorized impellers.
                </li>
                <li>
                  <FaCheckCircle className="tick-icon" />
                  <strong>Modular Layout:</strong> Easy to place in standard T-bar ceiling grids.
                </li>
                <li>
                  <FaCheckCircle className="tick-icon" />
                  <strong>Quiet Operation:</strong> Designed to run quietly under 55 dBA.
                </li>
              </ul>
            </div>

            {/* Special Features */}
            <div className="features-section">
              <h2>Special Features</h2>
              <ul>
                <li><FaCheckCircle className="tick-icon" /> Integrated fan and HEPA filtration system</li>
                <li><FaCheckCircle className="tick-icon" /> Uniform laminar airflow distribution</li>
                <li><FaCheckCircle className="tick-icon" /> Energy-efficient motor design</li>
                <li><FaCheckCircle className="tick-icon" /> Low noise operation for cleanroom environments</li>
                <li><FaCheckCircle className="tick-icon" /> Easy installation and maintenance</li>
                <li><FaCheckCircle className="tick-icon" /> High filtration efficiency for particle control</li>
                <li><FaCheckCircle className="tick-icon" /> Modular design for flexible cleanroom layouts</li>
                <li><FaCheckCircle className="tick-icon" /> Long service life with durable construction</li>
                <li><FaCheckCircle className="tick-icon" /> Suitable for ceiling and wall mounting applications</li>
                <li><FaCheckCircle className="tick-icon" /> Customizable configurations based on industry needs</li>
              </ul>
            </div>
          </div>

          {/* RIGHT: Product Content */}
          <div className="col-lg-6 col-md-12 product-details">
            <h1>Fan Filter Units</h1>

            <h2>Fan Filter Units – Clean Air Systems</h2>
            <p>
              Clean Air Systems designs and manufactures high-performance Fan Filter Units for cleanroom air filtration and contamination control. Our Fan Filter Units are engineered to deliver HEPA-filtered airflow with consistent performance in controlled environments. As trusted Fan Filter Units Manufacturers in Chennai, we provide reliable solutions across Fan Filter Units Chennai and Fan Filter Units India. We also offer competitive Fan Filter Units Price options directly from leading Fan Filter Units Manufacturers in India, ensuring efficiency, safety, and long-lasting performance.
            </p>

            <h2>What are Fan Filter Units?</h2>
            <p>
              Fan Filter Units (FFU) are self-contained air filtration systems that combine a fan and HEPA filter to supply clean, laminar airflow into cleanroom environments. These units help maintain strict air quality standards in sensitive industries. At Clean Air Systems, our Fan Filter Units are designed for uniform airflow distribution and high filtration efficiency. From Fan Filter Units Chennai installations to large-scale Fan Filter Units India projects, we provide dependable cleanroom airflow solutions. We also ensure transparent Fan Filter Units Price structures for different industrial applications.
            </p>

            <h2>Applications of Fan Filter Units</h2>
            <p>
              Fan Filter Units are widely used in pharmaceutical manufacturing, semiconductor industries, biotechnology labs, hospitals, and electronics assembly units. These systems are essential for maintaining contamination-free environments. Our Fan Filter Units ensure consistent clean airflow across controlled spaces. Industries across Fan Filter Units Chennai and Fan Filter Units India rely on our systems for high-performance cleanroom operations. We also supply systems from trusted Fan Filter Units Manufacturers in Chennai and Fan Filter Units Manufacturers in India.
            </p>

            <h2>Self-Contained Cleanroom Airflow</h2>
            <p>
              An FFU pulls in contaminated air from the plenum and filters it through a high-efficiency HEPA or ULPA filter, distributing unidirectional clean air vertically to the cleanroom zone. This is ideal for modular ceilings and custom cleanroom expansions.
            </p>

            <h2>Applications</h2>
            <ul>
              <li>Modular cleanrooms and laminar flow benches</li>
              <li>Micro-electronics and semiconductor assembly lines</li>
              <li>Pharmaceutical compounding and laboratory suites</li>
              <li>Hospital isolation rooms and surgical theaters</li>
            </ul>

            <h2>Why Choose Clean Air India?</h2>
            <p>
              We provide highly reliable, energy-efficient FFUs with customized speed controllers, robust housings, and competitive prices across India.
            </p>
            <p>
              Clean Air Systems is a trusted name among Fan Filter Units Manufacturers in Chennai, delivering advanced cleanroom air solutions. Our Fan Filter Units are designed for reliability, efficiency, and superior air quality control. We serve industries across Fan Filter Units Chennai and Fan Filter Units India with high-quality engineering standards. Our Fan Filter Units Price options are competitive and transparent, making us a preferred choice among Fan Filter Units Manufacturers in India.
            </p>
            <p>
              With strong technical expertise and strict quality control, Clean Air Systems continues to deliver efficient Fan Filter Units for pharmaceutical, biotech, electronics, and healthcare industries across India.
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

export default ProductPage13;

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

