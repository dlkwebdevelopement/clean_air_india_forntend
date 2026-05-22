import React, { useState } from "react";
import styled from "styled-components";
import { FaCheckCircle } from "react-icons/fa"; // ✅ Tick Icon
import picture1 from "../../../assets/images/about-us/Powder1.webp";
import picture2 from "../../../assets/images/about-us/Powder2.webp";
import { useNavigate } from "react-router-dom"; // ✅ for navigation

const ProductPage5 = () => {
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
              <img src={selectedImage} alt="Powder Dispensing Booth" loading="lazy"/>
            </div>

            <div className="thumbnail-list">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Powder Booth ${index + 1}`}
                  className={selectedImage === img ? "active" : ""}
                  onClick={() => setSelectedImage(img)} loading="lazy"/>
              ))}
            </div>

            {/* Technical Specifications */}
            <div className="models-section">
              <h2>Technical Specifications</h2>
              <ul>
                <li>
                  <FaCheckCircle className="tick-icon" />
                  <strong>Air Balancing:</strong> 90% Recirculation and 10% Exhaust
                </li>
                <li>
                  <FaCheckCircle className="tick-icon" />
                  <strong>Cleanliness:</strong> Class 5 as per ISO 14644-1
                </li>
                <li>
                  <FaCheckCircle className="tick-icon" />
                  <strong>Particle Retention:</strong> 0.3 μm & above
                </li>
                <li>
                  <FaCheckCircle className="tick-icon" />
                  <strong>Noise Level:</strong> 65 dB(A) ± 5
                </li>
                <li>
                  <FaCheckCircle className="tick-icon" />
                  <strong>Velocity:</strong> 90 FPM ± 20
                </li>
                <li>
                  <FaCheckCircle className="tick-icon" />
                  <strong>Differential Pressure:</strong> Magnehelic Gauge 0–25 mm
                </li>
                <li>
                  <FaCheckCircle className="tick-icon" />
                  <strong>Illumination:</strong> Diffused LED lights
                </li>
                <li>
                  <FaCheckCircle className="tick-icon" />
                  <strong>Power Supply:</strong> 230V single phase, 50 Hz
                </li>
              </ul>
            </div>

            {/* Special Features */}
            {/* <div className="features-section">
              <h2>Special Features</h2>
              <ul>
                <li>
                  <FaCheckCircle className="tick-icon" />
                  Multi-stage filtration with HEPA filters
                </li>
                <li>
                  <FaCheckCircle className="tick-icon" />
                  Vertical laminar airflow with downward suction
                </li>
                <li>
                  <FaCheckCircle className="tick-icon" />
                  Robust SS 304 / SS 316 construction
                </li>
                <li>
                  <FaCheckCircle className="tick-icon" />
                  Energy-efficient blowers with low noise
                </li>
                <li>
                  <FaCheckCircle className="tick-icon" />
                  Customizable dimensions & airflow configurations
                </li>
                <li>
                  <FaCheckCircle className="tick-icon" />
                  Compliance with international cleanroom standards
                </li>
              </ul>
            </div> */}
          </div>

          {/* RIGHT: Product Content */}
          <div className="col-lg-6 col-md-12 product-details">
            <h1>Powder Dispensing Booth</h1>
            <p>
              At <strong>Clean Air Systems</strong>, we design and manufacture
              high-performance Powder Dispensing Booths that provide a safe and
              controlled environment for handling powders, chemicals, and
              hazardous substances. These booths protect operators, products, and
              the surrounding environment from cross-contamination during powder
              dispensing, product sampling, and bag emptying operations.
            </p>

            <h2>How It Works</h2>
            <p>
              The system uses vertical laminar airflow with a downward suction
              mechanism to capture airborne dust at the operator’s working area,
              ensuring that particles are contained before they reach the
              breathing zone.
            </p>
            <ul>
              <li>
                Airflow is directed vertically downward across the work zone to
                suppress airborne particles.
              </li>
              <li>
                Contaminated air is drawn through low-level exhaust grills and
                passes through a three-stage filtration system (pre-filter,
                intermediate filter, and final HEPA filter).
              </li>
              <li>
                The cleaned air is then recirculated back into the booth while a
                controlled percentage is exhausted, ensuring both efficiency and
                operator safety.
              </li>
            </ul>

            <h2>Applications</h2>
            <ul>
              <li>Pharmaceutical powder handling and sampling</li>
              <li>Chemical and cosmetic industries</li>
              <li>Food and beverage ingredient dispensing</li>
              <li>Research laboratories and R&D facilities</li>
              <li>Any environment requiring safe material transfer</li>
            </ul>

            <h2>Why Choose Clean Air Systems?</h2>
            <p>
              With over 30 years of expertise in cleanroom and containment
              solutions, Clean Air Systems delivers robust and efficient Powder
              Dispensing Booths that meet the highest international standards.
              Each unit is tested for airflow performance, filter integrity, and
              operator safety. Our after-sales support ensures long-term
              reliability and efficiency.
            </p>

            <h2>Powder Dispensing Booths – Clean Air Systems</h2>
            <p>
              Clean Air Systems designs and manufactures advanced Powder Dispensing Booths for safe and controlled powder handling operations. Our Powder Dispensing Booths are engineered to maintain a contamination-free environment during material dispensing processes. As trusted Powder Dispensing Booths Manufacturers in Chennai, we deliver high-quality solutions across industries requiring precision and safety. We also serve clients with competitive Powder Dispensing Booths Price options directly from experienced Powder Dispensing Booths Manufacturers in Chennai, ensuring reliability and affordability.
            </p>

            <h2>What are Powder Dispensing Booths?</h2>
            <p>
              Powder Dispensing Booths are specialized containment systems designed to control airborne powder particles during weighing, sampling, and dispensing operations. These systems ensure operator safety and product purity by maintaining controlled airflow and filtration. At Clean Air Systems, our Powder Dispensing Booths are built with advanced HEPA filtration technology for maximum efficiency. Industries across Powder Dispensing Booths Manufacturers in Chennai rely on our solutions for safe and accurate powder handling operations. We also provide solutions at competitive Powder Dispensing Booths Price for various industrial applications.
            </p>

            <h2>Applications of Powder Dispensing Booths</h2>
            <p>
              Powder Dispensing Booths are widely used in pharmaceutical manufacturing, chemical industries, food processing units, and research laboratories. These systems ensure safe dispensing of powders without contamination or exposure risks. Our Powder Dispensing Booths support precise weighing and material handling operations. Clients across Powder Dispensing Booths Manufacturers in Chennai trust our systems for high safety standards and performance. Demand for reliable Powder Dispensing Booths continues to grow due to strict industry regulations and quality requirements.
            </p>

            <h2>Features &amp; Technical Advantages</h2>
            <ul className="advantages-list">
              <li><FaCheckCircle className="tick-icon" /> High-efficiency HEPA filtration system for clean airflow</li>
              <li><FaCheckCircle className="tick-icon" /> Negative pressure containment for safe powder handling</li>
              <li><FaCheckCircle className="tick-icon" /> Stainless steel construction for durability and hygiene</li>
              <li><FaCheckCircle className="tick-icon" /> Low noise operation for better working environment</li>
              <li><FaCheckCircle className="tick-icon" /> Transparent panels for clear visibility during operations</li>
              <li><FaCheckCircle className="tick-icon" /> Energy-efficient airflow system design</li>
              <li><FaCheckCircle className="tick-icon" /> Easy cleaning and maintenance structure</li>
              <li><FaCheckCircle className="tick-icon" /> Uniform air distribution for maximum safety</li>
              <li><FaCheckCircle className="tick-icon" /> Ergonomic design for operator comfort</li>
              <li><FaCheckCircle className="tick-icon" /> Customizable models based on industry requirements</li>
            </ul>

            <p>
              Clean Air Systems is a trusted name among Powder Dispensing Booths Manufacturers in Chennai, delivering advanced containment solutions for critical industries. Our Powder Dispensing Booths are designed for safety, accuracy, and long-term performance. We provide reliable systems across Powder Dispensing Booths Manufacturers in Chennai with competitive Powder Dispensing Booths Price options. Our solutions are widely used in industries requiring strict contamination control.
            </p>
            <p>
              With strong engineering expertise and quality assurance, Clean Air Systems continues to deliver high-performance Powder Dispensing Booths for pharmaceutical, chemical, and research applications. We are committed to providing safe, efficient, and reliable containment solutions that meet modern industrial standards.
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

export default ProductPage5;

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
