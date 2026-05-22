import React, { useState } from "react";
import styled from "styled-components";
import { FaCheckCircle } from "react-icons/fa"; // ✅ Tick Icon
import picture1 from "../../../assets/images/about-us/Powder1.webp";
import picture2 from "../../../assets/images/about-us/Powder2.webp";
import { useNavigate } from "react-router-dom"; // ✅ for navigation

const ProductPage10 = () => {
  const images = [picture2, picture1];
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const navigate = useNavigate(); // ✅ hook for navigation

  return (
    <ProductSection>
      <div className="container">
        <div className="row">
          {/* LEFT: Product Images + Features */}
          <div className="col-lg-6 col-md-12 product-images">
            <div className="main-image">
              <img src={selectedImage} alt="Reverse Flow Booth" loading="lazy" />
            </div>

            <div className="thumbnail-list">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Reverse Flow Booth ${index + 1}`}
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
                  <strong>Advanced Containment:</strong> Prevents powder exposure to operator and environment.
                </li>
                <li>
                  <FaCheckCircle className="tick-icon" />
                  <strong>High-efficiency HEPA:</strong> Multistage filtration system for clean air recirculation.
                </li>
                <li>
                  <FaCheckCircle className="tick-icon" />
                  <strong>Negative Pressure:</strong> Ensures containment integrity by maintaining negative pressure.
                </li>
                <li>
                  <FaCheckCircle className="tick-icon" />
                  <strong>Robust Construction:</strong> Manufactured with SS 304 or SS 316 for hygiene.
                </li>
              </ul>
            </div>
          </div>

          {/* RIGHT: Product Content */}
          <div className="col-lg-6 col-md-12 product-details">
            <h1>Reverse Flow Booth</h1>
            <p>
              At <strong>Clean Air Systems</strong>, we design and manufacture high-performance Reverse Flow Booth systems for advanced powder containment and cleanroom applications. Our Reverse Flow Booth solutions are engineered to provide safe handling of hazardous powders by controlling airflow direction and preventing contamination spread.
            </p>

            <h2>Operator & Product Protection</h2>
            <p>
              By establishing a controlled, negative pressure environment with unidirectional reverse airflow, the booth ensures that fine powder dust generated during weighing and dispensing operations is kept away from the operator's breathing zone and contained safely within the filtration system.
            </p>

            <h2>Applications</h2>
            <ul>
              <li>Pharmaceutical powder dispensing and weighing</li>
              <li>Chemical and biochemical industries</li>
              <li>Food and cosmetic ingredient handling</li>
              <li>Research laboratories and cleanroom suites</li>
            </ul>

            <h2>Why Choose Clean Air Systems?</h2>
            <p>
              We bring over 30 years of cleanroom expertise to design robust containment booths compliance with international safety and quality standards. Our Reverse Flow Booth systems offer durability, ease of maintenance, and reliable after-sales support across India.
            </p>

            <h2>Reverse Flow Booth – Clean Air Systems</h2>
            <p>
              Clean Air Systems designs and manufactures high-performance Reverse Flow Booth systems for advanced powder containment and cleanroom applications. Our Reverse Flow Booth solutions are engineered to provide safe handling of hazardous powders by controlling airflow direction and preventing contamination spread. As a trusted cleanroom equipment provider, we supply reliable systems across Reverse Flow Booth Chennai and Reverse Flow Booth India with strong focus on safety, efficiency, and compliance.
            </p>

            <h2>What is Reverse Flow Booth?</h2>
            <p>
              A Reverse Flow Booth is a specialized containment system where airflow is designed in a reverse direction to capture and control airborne particles effectively. It is commonly used for high-risk powder handling operations where maximum containment is required. At Clean Air Systems, our Reverse Flow Booth systems are built with advanced HEPA filtration and precise airflow control to ensure operator safety and product protection. From Reverse Flow Booth Chennai to large-scale Reverse Flow Booth India installations, we deliver dependable cleanroom solutions.
            </p>

            <h2>Applications of Reverse Flow Booth</h2>
            <p>
              Reverse Flow Booth systems are widely used in pharmaceutical manufacturing, chemical processing, food industries, and research laboratories. These systems are essential for handling potent powders and hazardous materials safely. Our Reverse Flow Booth ensures contamination control during critical processes. Industries across Reverse Flow Booth Chennai and Reverse Flow Booth India rely on our systems for safe and compliant operations.
            </p>

            <h2>Features &amp; Technical Advantages</h2>
            <ul className="advantages-list">
              <li><FaCheckCircle className="tick-icon" /> Advanced reverse airflow containment technology</li>
              <li><FaCheckCircle className="tick-icon" /> High-efficiency HEPA filtration system</li>
              <li><FaCheckCircle className="tick-icon" /> Negative pressure environment for maximum safety</li>
              <li><FaCheckCircle className="tick-icon" /> Stainless steel construction for durability and hygiene</li>
              <li><FaCheckCircle className="tick-icon" /> Transparent panels for operator visibility</li>
              <li><FaCheckCircle className="tick-icon" /> Low noise and energy-efficient operation</li>
              <li><FaCheckCircle className="tick-icon" /> Easy maintenance and cleaning design</li>
              <li><FaCheckCircle className="tick-icon" /> Uniform and controlled airflow system</li>
              <li><FaCheckCircle className="tick-icon" /> Suitable for high-potency powder handling</li>
              <li><FaCheckCircle className="tick-icon" /> Customizable design based on application needs</li>
            </ul>

            <p>
              Clean Air Systems is a trusted provider of Reverse Flow Booth solutions with strong expertise in cleanroom and containment technology. Our systems are designed for maximum safety, precision, and long-term reliability. We serve industries across Reverse Flow Booth Chennai and Reverse Flow Booth India with high-quality engineering standards.
            </p>
            <p>
              With strict manufacturing practices and advanced design capabilities, Clean Air Systems continues to deliver efficient Reverse Flow Booth systems for pharmaceutical, biotech, and industrial applications across India, ensuring safe and contamination-free working environments.
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

export default ProductPage10;

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

