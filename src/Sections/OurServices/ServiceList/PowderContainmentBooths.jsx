import React, { useState } from "react";
import styled from "styled-components";
import { FaCheckCircle } from "react-icons/fa"; // ✅ Tick Icon
import picture1 from "../../../assets/images/about-us/Powder1.webp";
import picture2 from "../../../assets/images/about-us/Powder2.webp";
import { useNavigate } from "react-router-dom"; // ✅ for navigation

const ProductPage14 = () => {
  const images = [picture1, picture2];
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const navigate = useNavigate(); // ✅ hook for navigation

  return (
    <ProductSection>
      <div className="container">
        <div className="row">
          {/* LEFT: Product Images + Features */}
          <div className="col-lg-6 col-md-12 product-images">
            <div className="main-image">
              <img src={selectedImage} alt="Powder Containment Booth" loading="lazy" />
            </div>

            <div className="thumbnail-list">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Powder Containment Booth ${index + 1}`}
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
                  <strong>High Containment:</strong> Captures fine dust directly at the source.
                </li>
                <li>
                  <FaCheckCircle className="tick-icon" />
                  <strong>ISO Class 5:</strong> Cleanliness conforms to Class 5 (ISO 14644-1).
                </li>
                <li>
                  <FaCheckCircle className="tick-icon" />
                  <strong>Negative Pressure:</strong> Prevents dust escape to other cleanroom areas.
                </li>
                <li>
                  <FaCheckCircle className="tick-icon" />
                  <strong>Robust Shell:</strong> Heavy-gauge SS 304 or 316 structures.
                </li>
              </ul>
            </div>
          </div>

          {/* RIGHT: Product Content */}
          <div className="col-lg-6 col-md-12 product-details">
            <h1>Powder Containment Booths</h1>
            <p>
              Clean Air Systems designs and manufactures advanced Powder Containment Booths for critical industrial environments. Our Powder Containment Booths are built to provide safe powder handling operations with superior dust control and operator protection.
            </p>

            <h2>Dust Control & Safety Compliance</h2>
            <p>
              By combining a negative pressure environment with unidirectional laminar flow, the booth extracts dust from weighing, dispensing, and sampling activities, protecting operators from hazardous powder inhalation and maintaining cleanroom purity.
            </p>

            <h2>Applications</h2>
            <ul>
              <li>Pharmaceutical powder sampling and weighing</li>
              <li>Chemical packaging and blending suites</li>
              <li>Biotech active material transfer zones</li>
              <li>Food processing and ingredient dispensing</li>
            </ul>

            <h2>Why Choose Clean Air Systems?</h2>
            <p>
              With decades of specialization in cleanroom solutions, we manufacture durable Powder Containment Booths that comply with international safety norms. We serve Chennai and nationwide clients with expert configurations.
            </p>

            <h2>Powder Containment Booths – Clean Air Systems</h2>
            <p>
              Clean Air Systems designs and manufactures advanced Powder Containment Booths for critical industrial environments. Our Powder Containment Booths are built to provide safe powder handling operations with superior dust control and operator protection. As trusted Powder Containment Booths Manufacturers in Chennai, we deliver customized solutions for various industries. Serving clients across Powder Containment Booths Chennai and Powder Containment Booths India, we ensure high-performance systems with reliable containment technology. Clean Air Systems stands as a leading name among Powder Containment Booths Manufacturers in Chennai, offering quality-driven solutions for industries throughout Powder Containment Booths India.
            </p>

            <h2>What are Powder Containment Booths?</h2>
            <p>
              Powder Containment Booths are specially designed systems that control airborne powder particles during manufacturing and processing activities. These systems help maintain a clean and safe working environment while ensuring product integrity. At Clean Air Systems, our Powder Containment Booths are engineered with advanced filtration technology for maximum containment efficiency. As one of the reliable Powder Containment Booths Manufacturers in Chennai, we supply systems for multiple industrial applications. Businesses across Powder Containment Booths Chennai and Powder Containment Booths India trust our solutions for safe and contamination-free operations.
            </p>

            <h2>Applications of Powder Containment Booths</h2>
            <p>
              Powder Containment Booths are widely used in pharmaceutical manufacturing, chemical processing, food production, and research laboratories. These systems ensure effective containment of airborne particles during handling operations. Our Powder Containment Booths are designed to meet stringent industrial standards for safety and efficiency. As leading Powder Containment Booths Manufacturers in Chennai, we support industries across Powder Containment Booths Chennai with advanced containment systems. Demand for high-quality Powder Containment Booths India continues to grow due to strict safety requirements.
            </p>

            <h2>Features &amp; Technical Advantages</h2>
            <ul className="advantages-list">
              <li><FaCheckCircle className="tick-icon" /> High-efficiency HEPA filtration system for superior particle control</li>
              <li><FaCheckCircle className="tick-icon" /> Advanced airflow design for effective powder containment</li>
              <li><FaCheckCircle className="tick-icon" /> Ergonomic structure for safe and comfortable operator usage</li>
              <li><FaCheckCircle className="tick-icon" /> Stainless steel construction for durability and long life</li>
              <li><FaCheckCircle className="tick-icon" /> Low noise operation for better working environment</li>
              <li><FaCheckCircle className="tick-icon" /> Easy maintenance and cleanable interior surfaces</li>
              <li><FaCheckCircle className="tick-icon" /> Uniform air distribution for consistent performance</li>
              <li><FaCheckCircle className="tick-icon" /> Energy-efficient system design to reduce operating cost</li>
              <li><FaCheckCircle className="tick-icon" /> High safety standards suitable for pharmaceutical and industrial use</li>
              <li><FaCheckCircle className="tick-icon" /> Customizable design options based on industry requirements</li>
            </ul>

            <p>
              Clean Air Systems is a trusted provider of Powder Containment Booths with years of expertise in cleanroom and containment solutions. We are known as dependable Powder Containment Booths Manufacturers in Chennai, delivering customized products for specific industrial requirements. Our solutions serve industries throughout Powder Containment Booths Chennai and Powder Containment Booths India with consistent quality and technical excellence. Choosing our Powder Containment Booths ensures better safety, improved operational efficiency, and dependable long-term performance.
            </p>
            <p>
              Our systems are designed for precision, durability, and superior containment efficiency. With strong technical support and strict quality standards, Clean Air Systems continues to deliver advanced Powder Containment Booths for modern industries across Powder Containment Booths Chennai and Powder Containment Booths India.
            </p>

            {/* ✅ BUTTON at the end */}
            <div className="interest-btn-wrap">
              <button
                className="interest-btn"
                onClick={() => navigate("/contact-us")}
              >
                Yes I'm Interested
              </button>
            </div>
          </div>
        </div>
      </div>
    </ProductSection>
  );
};

export default ProductPage14;

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

