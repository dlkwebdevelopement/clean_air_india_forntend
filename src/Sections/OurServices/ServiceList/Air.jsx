import React, { useState } from "react";
import styled from "styled-components";
import { FaCheckCircle } from "react-icons/fa"; // ✅ Tick Icon
import picture1 from "../../../assets/images/about-us/Air1.webp";
import picture2 from "../../../assets/images/about-us/Air2.webp";
import { useNavigate } from "react-router-dom"; // ✅ for navigation


const ProductPage4 = () => {
  const images = [ picture2,  picture1];
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const navigate = useNavigate(); // ✅ hook for navigation

  return (
    <ProductSection>
      <div className="container">
        <div className="row">
          {/* LEFT: Product Images + Features */}
          <div className="col-lg-6 col-md-12 product-images">
            <div className="main-image">
              <img src={selectedImage} alt="Cleanroom Air Shower" loading="lazy"/>
            </div>

            <div className="thumbnail-list">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Air Shower ${index + 1}`}
                  className={selectedImage === img ? "active" : ""}
                  onClick={() => setSelectedImage(img)} loading="lazy"/>
              ))}
            </div>

            {/* Key Features */}
            <div className="features-section">
              <h2>Key Features</h2>
              <ul>
                <li>
                  <FaCheckCircle className="tick-icon" />
                  Available in single-person or multiple-person configurations
                </li>
                <li>
                  <FaCheckCircle className="tick-icon" />
                  Entry/exit options: straight-through, L-shaped, or U-shaped layouts
                </li>
                <li>
                  <FaCheckCircle className="tick-icon" />
                  Construction materials: SS 304, SS 316, GI with Powder coating
                </li>
                <li>
                  <FaCheckCircle className="tick-icon" />
                  High-velocity jet nozzles for efficient scrubbing action
                </li>
                <li>
                  <FaCheckCircle className="tick-icon" />
                  Automatic operation with interlocked doors for controlled entry
                </li>
                <li>
                  <FaCheckCircle className="tick-icon" />
                  HEPA filtration system ensuring 99.97% efficiency at 0.3 microns
                </li>
                <li>
                  <FaCheckCircle className="tick-icon" />
                  Microprocessor-based control system with cycle time adjustment
                </li>
                <li>
                  <FaCheckCircle className="tick-icon" />
                  Energy-efficient blowers for consistent airflow
                </li>
              </ul>
            </div>
          </div>

          {/* RIGHT: Product Content */}
          <div className="col-lg-6 col-md-12 product-details">
            <h1>Cleanroom Air Booth Shower System</h1>
            <p>
              At <strong>Clean Air Systems</strong>, we manufacture
              high-performance Cleanroom Air Shower Systems designed to minimize
              contamination when personnel or materials enter a controlled
              environment. By using high-velocity air jets, our air showers
              effectively remove dust, lint, and other particulates from
              clothing and surfaces before entry into cleanrooms, ensuring
              process integrity and product safety.
            </p>

            <h2>What is a Cleanroom Air Shower?</h2>
            <p>
              An air shower system is a self-contained chamber installed at the
              entry point of a cleanroom. As personnel walk through,
              concentrated airflows from strategically placed nozzles dislodge
              particles from garments. The contaminated air is then captured and
              filtered through a two-stage system (pre-filters and final HEPA
              filters), ensuring only clean air circulates back into the
              chamber. This process prevents cross-contamination and helps
              maintain ISO Class cleanroom standards in industries where
              sterility and precision are critical.
            </p>

            <h2>Applications of Cleanroom Air Showers</h2>
            <ul>
              <li>Pharmaceuticals and biotechnology</li>
              <li>Healthcare and hospitals</li>
              <li>Food and beverage processing</li>
              <li>Semiconductor and electronics manufacturing</li>
              <li>Aerospace and defense research facilities</li>
            </ul>

            <h2>Why Choose Clean Air Systems?</h2>
            <p>
              With over 30 years of expertise, Clean Air Systems is one of the
              most trusted air shower system manufacturers in India. Each unit
              is manufactured in compliance with international cleanroom
              standards and undergoes rigorous testing for airflow velocity,
              particle removal efficiency, and durability. Our commitment to
              after-sales support ensures that your cleanroom facility continues
              to operate at peak efficiency with minimal downtime.
            </p>

            <h2>Air Shower Entry System – Clean Air Systems</h2>
            <p>
              Clean Air Systems designs and manufactures advanced Air Shower Entry Systems for controlled environments. Our Air Shower Entry System ensures effective removal of dust particles from personnel and materials before entering cleanroom areas. As trusted Air Shower System Manufacturers in Chennai, we deliver high-quality solutions for industries across Air Shower System Chennai and Air Shower System India. We also offer competitive Air Shower System Price options directly from experienced Air Shower System Manufacturers in India, ensuring reliable and cost-effective cleanroom entry solutions.
            </p>

            <h2>What is the Air Shower System?</h2>
            <p>
              Air Shower System is a specialized cleanroom equipment designed to remove dust and contaminants using high-velocity HEPA-filtered air. The Air Shower Entry system is used as a controlled passage between clean and non-clean areas. Our Air Shower System ensures maximum hygiene and contamination control in sensitive environments. From Air Shower System Chennai to large-scale Air Shower System India installations, Clean Air Systems provides reliable and efficient solutions. We also maintain transparent Air Shower System Price structures for various industrial needs.
            </p>

            <h2>Applications of Air Shower System</h2>
            <p>
              Air Shower Systems are widely used in pharmaceutical industries, electronics manufacturing, food processing, and laboratories. The Air Shower Entry system helps maintain strict cleanliness standards in production areas. Our Air Shower System is designed to improve contamination control and operational safety. Industries across Air Shower System Chennai and Air Shower System India depend on our advanced cleanroom entry solutions. We also support clients with competitive Air Shower System Price options from leading Air Shower System Manufacturers in Chennai and Air Shower System Manufacturers in India.
            </p>

            <h2>Features &amp; Technical Advantages</h2>
            <ul className="advantages-list">
              <li><FaCheckCircle className="tick-icon" /> High-velocity HEPA-filtered air jets for effective dust removal</li>
              <li><FaCheckCircle className="tick-icon" /> Automatic sensor-based operation for hands-free usage</li>
              <li><FaCheckCircle className="tick-icon" /> Stainless steel body construction for durability and hygiene</li>
              <li><FaCheckCircle className="tick-icon" /> Uniform air distribution for complete body coverage</li>
              <li><FaCheckCircle className="tick-icon" /> Low maintenance and energy-efficient system design</li>
              <li><FaCheckCircle className="tick-icon" /> Adjustable air shower timing settings</li>
              <li><FaCheckCircle className="tick-icon" /> Interlocking door system for contamination control</li>
              <li><FaCheckCircle className="tick-icon" /> Suitable for cleanroom entry and exit applications</li>
              <li><FaCheckCircle className="tick-icon" /> Noise-reduction design for comfortable operation</li>
              <li><FaCheckCircle className="tick-icon" /> Customizable models based on industry requirements</li>
            </ul>

            <p>
              Clean Air Systems is a trusted name in cleanroom technology and Air Shower Entry System manufacturing. Our Air Shower System solutions are designed for high performance and reliability. As leading Air Shower System Manufacturers in Chennai, we deliver quality products across Air Shower System Chennai and Air Shower System India. We provide cost-effective Air Shower System Price options while maintaining strict quality standards. Our systems are widely preferred among Air Shower System Manufacturers in India for their durability, safety, and efficiency.
            </p>
            <p>
              Our Air Shower Entry systems are built for precision, hygiene, and long-term performance. With advanced engineering and strong technical support, Clean Air Systems continues to deliver superior Air Shower System solutions for industries across Air Shower System Chennai and Air Shower System India.
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

export default ProductPage4;

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
