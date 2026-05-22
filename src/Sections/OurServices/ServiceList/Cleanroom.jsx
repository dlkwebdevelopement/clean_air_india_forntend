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
import { useNavigate } from "react-router-dom"; // ✅ for navigation

const ProductPage8 = () => {
  const images = [picture3,picture4,picture5,picture6,picture7, picture2, picture1];
  const [selectedImage, setSelectedImage] = useState(images[0]);
   const navigate = useNavigate(); // ✅ hook for navigation

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

            {/* Our Approach */}
            <div className="features-section">
              <h2>Our Approach</h2>
              <ul>
                <li>
                  <FaCheckCircle className="tick-icon" />
                  HVAC and air distribution systems
                </li>
                <li>
                  <FaCheckCircle className="tick-icon" />
                  HEPA filter terminals and return air risers
                </li>
                <li>
                  <FaCheckCircle className="tick-icon" />
                  Modular wall and ceiling panels
                </li>
                <li>
                  <FaCheckCircle className="tick-icon" />
                  Double-glazed view panels and cleanroom doors
                </li>
                <li>
                  <FaCheckCircle className="tick-icon" />
                  Corner covings and epoxy flooring
                </li>
                <li>
                  <FaCheckCircle className="tick-icon" />
                  Lighting and other critical accessories
                </li>
              </ul>
            </div>
          </div>

          {/* RIGHT: Product Content */}
          <div className="col-lg-6 col-md-12 product-details">
            <h1>Modular Cleanroom</h1>
            <p>
              At <strong>Clean Air Systems</strong>, we design and deliver
              Modular Cleanrooms that meet ISO Class 5, ISO Class 6, ISO Class
              7, and ISO Class 8 requirements. Our cleanroom solutions are
              engineered to provide contamination-free environments for
              pharmaceuticals, biotechnology, healthcare, electronics, and food
              processing industries.
            </p>

            <h2>Applications</h2>
            <ul>
              <li>Pharmaceutical manufacturing & packaging areas</li>
              <li>Biotechnology research and production</li>
              <li>Hospital operating theaters & isolation rooms</li>
              <li>Semiconductor & microelectronics production</li>
              <li>Food & beverage sterile processing zones</li>
            </ul>

            <h2>Why Choose Clean Air Systems Modular Cleanrooms?</h2>
            <p>
              With over three decades of expertise in cleanroom solutions, we
              provide custom-engineered modular cleanrooms designed to meet
              international standards. Our solutions ensure flexibility,
              durability, and contamination-free operations, with proven
              reliability across PAN India installations.
            </p>
            <ul>
              <li>Over three decades of cleanroom expertise</li>
              <li>
                Custom-engineered solutions based on site and process
                requirements
              </li>
              <li>Compliance with ISO 14644 international standards</li>
              <li>Wide range of construction options for cost-effectiveness</li>
              <li>Trusted PAN India installations</li>
            </ul>

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

            <h2>Features &amp; Technical Advantages</h2>
            <ul className="advantages-list">
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

            <p>
              Clean Air Systems is a respected brand among Modular Cleanroom Manufacturers in Chennai, offering complete turn-key solutions. Our Modular Cleanrooms are designed for flexibility, scalability, and high performance. We provide cost-effective Modular Cleanroom Price options across Modular Cleanroom Chennai and Modular Cleanroom India. Our systems are preferred among Modular Cleanroom Manufacturers in India for their robust engineering and expert execution.
            </p>
            <p>
              Our Modular Cleanrooms are built to ensure process control and environmental stability. Clean Air Systems continues to deliver superior cleanroom solutions for pharmaceutical, scientific, and industrial applications across India.
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

