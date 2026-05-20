// ProductPage.js
import React, { useState } from "react";
import styled from "styled-components";
import { FaCheckCircle } from "react-icons/fa"; // ✅ Tick Icon
import picture1 from "../../../assets/images/about-us/laminar2.webp";
import picture2 from "../../../assets/images/about-us/laminar6n.webp"
import picture3 from "../../../assets/images/about-us/laminar8.webp"
import picture4 from "../../../assets/images/about-us/laminar9.webp"

const ProductPage = () => {
  const images = [picture4, picture2, picture3, picture1];
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <ProductSection>
      <div className="container">
        <div className="row">
          {/* LEFT: Product Images + Features */}
          <div className="col-lg-6 col-md-12 product-images">
            <div className="main-image">
              <img src={selectedImage} alt="Laminar Airflow" loading="lazy"/>
            </div>

            <div className="thumbnail-list">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Laminar ${index + 1}`}
                  className={selectedImage === img ? "active" : ""}
                  onClick={() => setSelectedImage(img)} loading="lazy"/>
              ))}
            </div>

            {/* Available Models and Sizes */}
            <div className="models-section">
              <h2>Available Models and Sizes</h2>
              <ul>
                <li>
                  <FaCheckCircle className="tick-icon" />
                  <strong>Horizontal:</strong> CAH 600, CAH 900, CAH 1200, CAH
                  1800
                </li>
                <li>
                  <FaCheckCircle className="tick-icon" />
                  <strong>Vertical:</strong> CAV 600, CAV 900, CAV 1200, CAV
                  1800
                </li>
                <li>
                  <FaCheckCircle className="tick-icon" />
                  <strong>Working Size:</strong> 2x2x2, 3x2x2, 4x2x2, 6x2x2
                </li>
              </ul>
            </div>

            {/* Special Features */}
            <div className="features-section">
              <h2>Special Features</h2>
              <ul>
                <li>
                  <FaCheckCircle className="tick-icon" />
                  International standard Mini Pleat HEPA filters
                </li>
                <li>
                  <FaCheckCircle className="tick-icon" />
                  High-efficiency, washable primary filters
                </li>
                <li>
                  <FaCheckCircle className="tick-icon" />
                  Magnahelic gauges for accurate pressure monitoring
                </li>
                <li>
                  <FaCheckCircle className="tick-icon" />
                  Spring-suspended DIDW blower assembly
                </li>
                <li>
                  <FaCheckCircle className="tick-icon" />
                  Stainless steel working surface with ergonomic design
                </li>
                <li>
                  <FaCheckCircle className="tick-icon" />
                  Rigid or flexible clear side screens
                </li>
                <li>
                  <FaCheckCircle className="tick-icon" />
                  Available in self-standing or ceiling-suspended types
                </li>
              </ul>
            </div>
          </div>

          {/* RIGHT: Product Content */}
          <div className="col-lg-6 col-md-12 product-details">
            <h1>Laminar Airflow Clean Benches – Manufacturers in India</h1>
            <p>
              At <strong>Clean Air Systems</strong>, we design and manufacture
              high-performance Laminar Airflow Clean Benches that provide a
              contamination-free working environment for laboratories,
              pharmaceutical companies, research facilities, and industries
              requiring sterile operations.
            </p>

            <h2>What is a Laminar Airflow Clean Bench?</h2>
            <p>
              A Laminar Airflow Clean Bench is a self-contained workstation that
              delivers unidirectional airflow filtered through high-efficiency
              HEPA filters. The constant flow of clean air at a velocity of 90 ±
              20 FPM prevents particle intrusion from the external environment,
              achieving ISO Class 5 cleanliness (as per ISO 14644-1) and US FED
              STD 209E standards.
            </p>

            <h2>Applications</h2>
            <ul>
              <li>Pharmaceutical production, filling & packaging</li>
              <li>Microelectronics assembly & inspection</li>
              <li>Biotechnology & life science research</li>
              <li>Food & beverage quality control labs</li>
              <li>Aerospace & ultra-clean environments</li>
            </ul>

            <h2>Why Choose Clean Air Systems?</h2>
            <p>
              With over 30 years of experience, Clean Air Systems is a trusted
              laminar airflow manufacturer in Chennai and across India. Every
              unit is tested for airflow uniformity, filter integrity, and noise
              levels before delivery. Our commitment to after-sales support
              ensures your cleanroom operations continue without disruption.
            </p>
          </div>
        </div>
      </div>
    </ProductSection>
  );
};

export default ProductPage;

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
      font-size: 48px;
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
    }

    ul {
      padding-left: 20px;
      margin-bottom: 15px;

      li {
        margin-bottom: 8px;
        color: ${({ theme }) => theme.colors.textColor || "#555"};
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
