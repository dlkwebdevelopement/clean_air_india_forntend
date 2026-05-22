import React, { useState } from "react";
import styled from "styled-components";
import { FaCheckCircle } from "react-icons/fa"; // ✅ Tick Icon
import picture1 from "../../../assets/images/about-us/Powder1.webp";
import picture2 from "../../../assets/images/about-us/Powder2.webp";
import { useNavigate } from "react-router-dom"; // ✅ for navigation

const ProductPage11 = () => {
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
              <img src={selectedImage} alt="Pharma Weighing Booth" loading="lazy" />
            </div>

            <div className="thumbnail-list">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Pharma Weighing Booth ${index + 1}`}
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
                  <strong>Laminar Airflow:</strong> Vertical downflow HEPA filtration for a clean zone.
                </li>
                <li>
                  <FaCheckCircle className="tick-icon" />
                  <strong>Operator Protection:</strong> Directs dust away from the breathing zone.
                </li>
                <li>
                  <FaCheckCircle className="tick-icon" />
                  <strong>Cross Contamination Control:</strong> Maintains cleanroom zone isolation.
                </li>
                <li>
                  <FaCheckCircle className="tick-icon" />
                  <strong>Compliance:</strong> Designed in compliance with GMP and ISO guidelines.
                </li>
              </ul>
            </div>
          </div>

          {/* RIGHT: Product Content */}
          <div className="col-lg-6 col-md-12 product-details">
            <h1>Pharma Weighing Booths</h1>
            <p>
              Clean Air Systems designs and manufactures high-performance Pharma Weighing Booths for safe and precise powder handling in pharmaceutical environments. Our Pharma Weighing Booths are engineered to provide controlled airflow, dust containment, and operator protection during weighing and dispensing processes.
            </p>

            <h2>Controlled Containment & Safety</h2>
            <p>
              Our weighing booths generate a HEPA-filtered vertical downflow environment that suppresses dust particles during material weighing, preventing biological or active ingredients from escaping. This ensures both operator safety and high-level product protection.
            </p>

            <h2>Applications</h2>
            <ul>
              <li>Weighing of active pharmaceutical ingredients (APIs)</li>
              <li>Material dispensing and batch formulation</li>
              <li>Cosmetic and biochemical powder processing</li>
              <li>Food processing and research laboratory suites</li>
            </ul>

            <h2>Why Choose Clean Air Systems?</h2>
            <p>
              With more than 30 years of manufacturing excellence, Clean Air Systems delivers robust containment booths optimized for pharmaceutical compliance, operator safety, and long-term durability. We serve clients across Chennai and India with reliable support.
            </p>

            <h2>Pharma Weighing Booths – Clean Air Systems</h2>
            <p>
              Clean Air Systems designs and manufactures high-performance Pharma Weighing Booths for safe and precise powder handling in pharmaceutical environments. Our Pharma Weighing Booths are engineered to provide controlled airflow, dust containment, and operator protection during weighing and dispensing processes. As a trusted cleanroom equipment provider, we deliver reliable solutions across Pharma Weighing Booths Chennai and Pharma Weighing Booths India with strict quality and compliance standards.
            </p>

            <h2>What are Pharma Weighing Booths?</h2>
            <p>
              Pharma Weighing Booths are specialized containment systems designed to control airborne particles generated during powder weighing operations. These booths maintain a clean and safe environment using HEPA-filtered laminar airflow. At Clean Air Systems, our Pharma Weighing Booths are built to ensure high accuracy, contamination control, and operator safety. From Pharma Weighing Booths Chennai installations to large-scale Pharma Weighing Booths India requirements, we provide dependable cleanroom solutions.
            </p>

            <h2>Applications of Pharma Weighing Booths</h2>
            <p>
              Pharma Weighing Booths are widely used in pharmaceutical manufacturing, chemical industries, food processing units, and research laboratories. These systems are essential for weighing active pharmaceutical ingredients (APIs) and sensitive powders. Our Pharma Weighing Booths help maintain strict hygiene and regulatory compliance. Industries across Pharma Weighing Booths Chennai and Pharma Weighing Booths India rely on our systems for safe and precise operations.
            </p>

            <h2>Features &amp; Technical Advantages</h2>
            <ul className="advantages-list">
              <li><FaCheckCircle className="tick-icon" /> HEPA-filtered vertical laminar airflow system</li>
              <li><FaCheckCircle className="tick-icon" /> Negative pressure containment for dust control</li>
              <li><FaCheckCircle className="tick-icon" /> Stainless steel construction for hygiene and durability</li>
              <li><FaCheckCircle className="tick-icon" /> High-efficiency particle capture system</li>
              <li><FaCheckCircle className="tick-icon" /> Transparent panels for clear visibility</li>
              <li><FaCheckCircle className="tick-icon" /> Energy-efficient and low-noise operation</li>
              <li><FaCheckCircle className="tick-icon" /> Easy cleaning and maintenance design</li>
              <li><FaCheckCircle className="tick-icon" /> Uniform airflow distribution for operator safety</li>
              <li><FaCheckCircle className="tick-icon" /> Suitable for pharmaceutical weighing operations</li>
              <li><FaCheckCircle className="tick-icon" /> Customizable design based on industry requirements</li>
            </ul>

            <p>
              Clean Air Systems is a trusted provider of Pharma Weighing Booths with strong expertise in cleanroom and containment solutions. Our Pharma Weighing Booths are designed for precision, safety, and long-term performance. We serve clients across Pharma Weighing Booths Chennai and Pharma Weighing Booths India with high-quality engineering and reliable support.
            </p>
            <p>
              With strict quality control and advanced manufacturing standards, Clean Air Systems continues to deliver efficient Pharma Weighing Booths for pharmaceutical and industrial applications across India, ensuring safe, accurate, and contamination-free weighing operations.
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

export default ProductPage11;

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

