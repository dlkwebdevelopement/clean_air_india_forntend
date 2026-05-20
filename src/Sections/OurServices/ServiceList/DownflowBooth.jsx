import React, { useState } from "react";
import styled from "styled-components";
import { FaCheckCircle } from "react-icons/fa"; // ✅ Tick Icon
import picture1 from "../../../assets/images/about-us/Powder1.webp";
import picture2 from "../../../assets/images/about-us/Powder2.webp";
import { useNavigate } from "react-router-dom"; // ✅ for navigation

const ProductPage12 = () => {
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
              <img src={selectedImage} alt="Downflow Booth" loading="lazy" />
            </div>

            <div className="thumbnail-list">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Downflow Booth ${index + 1}`}
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
                  <strong>Downward Airflow:</strong> Uniform vertical downflow pushes dust down.
                </li>
                <li>
                  <FaCheckCircle className="tick-icon" />
                  <strong>Triple Filtration:</strong> Includes pre-filters, intermediate, and HEPA filters.
                </li>
                <li>
                  <FaCheckCircle className="tick-icon" />
                  <strong>Full Containment:</strong> Prevents airborne dust from entering surrounding areas.
                </li>
                <li>
                  <FaCheckCircle className="tick-icon" />
                  <strong>Hygiene Standard:</strong> Smooth finish stainless steel panels.
                </li>
              </ul>
            </div>
          </div>

          {/* RIGHT: Product Content */}
          <div className="col-lg-6 col-md-12 product-details">
            <h1>Downflow Booth</h1>
            <p>
              Clean Air Systems is a leading Downflow Booth Manufacturer delivering advanced containment solutions for powder handling and dust control applications. Our Downflow Booth systems are engineered to provide safe, clean, and controlled environments during weighing, sampling, and dispensing operations.
            </p>

            <h2>Advanced Containment Systems</h2>
            <p>
              By using high-velocity downward air streams, the Downflow Booth captures airborne dust and powder particles, directing them through intake grilles. This loop isolates active materials and ensures high-performance containment for safe operation.
            </p>

            <h2>Applications</h2>
            <ul>
              <li>Powder sampling, dispensing, and weighing</li>
              <li>Active drug substance (API) processing</li>
              <li>Cosmetic raw ingredient mixing</li>
              <li>Chemical handling and packaging suites</li>
            </ul>

            <h2>Why Choose Clean Air Systems?</h2>
            <p>
              As a trusted manufacturer, we supply high-quality Downflow Booths with custom dimensions, strict quality checks, and optimal containment performance across Chennai and India.
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

        {/* Detailed SEO & Overview Content */}
        <DetailedContentRow>
          <div className="col-12">
            <hr className="section-divider" />
            
            <article className="detailed-info-section">
              <h2 className="main-title">Downflow Booth – Clean Air Systems</h2>
              <p>
                Clean Air Systems is a leading Downflow Booth Manufacturer delivering advanced containment solutions for powder handling and dust control applications. Our Downflow Booth systems are engineered to provide safe, clean, and controlled environments during weighing, sampling, and dispensing operations. As a trusted Downflow Booth Manufacturer, we supply high-quality systems across Downflow Booth Chennai and Downflow Booth India with reliable performance and long service life.
              </p>

              <h3>What is Downflow Booth?</h3>
              <p>
                A Downflow Booth is a controlled air containment system designed to capture airborne dust and powder particles using downward HEPA-filtered laminar airflow. This system protects both operators and the working environment from contamination. At Clean Air Systems, our Downflow Booth Manufacturer solutions are built with precision airflow technology for maximum safety and efficiency. From Downflow Booth Chennai installations to large-scale Downflow Booth India requirements, we ensure high-performance containment systems.
              </p>

              <h3>Applications of Downflow Booth</h3>
              <p>
                Downflow Booth systems are widely used in pharmaceutical industries, chemical processing units, food manufacturing, and research laboratories. These booths are essential for safe powder weighing and dispensing operations. As a reliable Downflow Booth Manufacturer, Clean Air Systems ensures contamination-free handling environments. Industries across Downflow Booth Chennai and Downflow Booth India depend on our systems for safe and compliant operations.
              </p>

              <h3>Features & Technical Advantages</h3>
              <ul className="advantages-list">
                <li><FaCheckCircle className="tick-icon" /> Vertical laminar airflow for effective dust control</li>
                <li><FaCheckCircle className="tick-icon" /> High-efficiency HEPA filtration system</li>
                <li><FaCheckCircle className="tick-icon" /> Stainless steel construction for durability and hygiene</li>
                <li><FaCheckCircle className="tick-icon" /> Negative pressure containment for operator safety</li>
                <li><FaCheckCircle className="tick-icon" /> Transparent panels for clear visibility</li>
                <li><FaCheckCircle className="tick-icon" /> Energy-efficient and low-noise operation</li>
                <li><FaCheckCircle className="tick-icon" /> Easy cleaning and maintenance design</li>
                <li><FaCheckCircle className="tick-icon" /> Uniform airflow distribution system</li>
                <li><FaCheckCircle className="tick-icon" /> Suitable for pharmaceutical and industrial applications</li>
                <li><FaCheckCircle className="tick-icon" /> Customizable design based on process requirements</li>
              </ul>

              <h3>Why Choose Clean Air Systems?</h3>
              <p>
                Clean Air Systems is a trusted Downflow Booth Manufacturer known for delivering high-quality containment solutions. Our Downflow Booth systems are designed for safety, precision, and long-term reliability. We serve industries across Downflow Booth Chennai and Downflow Booth India with advanced engineering standards and strict quality control.
              </p>
              <p>
                With strong expertise in cleanroom technology, Clean Air Systems continues to provide efficient Downflow Booth solutions for pharmaceutical, biotech, and industrial applications across India, ensuring safe and contamination-free working environments.
              </p>
            </article>
          </div>
        </DetailedContentRow>
      </div>
    </ProductSection>
  );
};

export default ProductPage12;

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

const DetailedContentRow = styled.div`
  margin-top: 60px;
  
.section-divider {
    border: 0;
    height: 1px;
    background: linear-gradient(to right, rgba(0, 97, 166, 0), rgba(0, 97, 166, 0.4), rgba(0, 97, 166, 0));
    margin-bottom: 50px;
  }

  .detailed-info-section {
    max-width: 900px;
    margin: 0 auto;
    
    h2.main-title {
      font-size: 32px;
      color: #0061a6;
      margin-bottom: 25px;
      font-weight: 700;
      position: relative;
      padding-bottom: 10px;
      
      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 60px;
        height: 3px;
        background-color: #007bff;
        border-radius: 2px;
      }
    }

    h3 {
      font-size: 22px;
      color: #333;
      margin-top: 35px;
      margin-bottom: 15px;
      font-weight: 600;
    }

    p {
      font-size: 16px;
      line-height: 1.8;
      color: #555;
      margin-bottom: 20px;
      text-align: justify;
    }

    .advantages-list {
      list-style: none;
      padding: 0;
      margin: 25px 0;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 15px 30px;

      @media (max-width: 768px) {
        grid-template-columns: 1fr;
      }

      li {
        display: flex;
        align-items: flex-start;
        font-size: 15px;
        color: #555;
        line-height: 1.5;

        .tick-icon {
          color: #28a745;
          margin-right: 10px;
          margin-top: 3px;
          flex-shrink: 0;
          font-size: 16px;
        }
      }
    }
  }
`;
