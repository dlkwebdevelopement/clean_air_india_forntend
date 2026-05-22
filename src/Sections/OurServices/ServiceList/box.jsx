// ProductPage.js
import React, { useState } from "react";
import styled from "styled-components";
import { FaCheckCircle } from "react-icons/fa"; // ✅ Tick Icon
import picture1 from "../../../assets/images/about-us/box1.webp";
import picture2 from "../../../assets/images/about-us/box2.webp";
import picture3 from "../../../assets/images/about-us/box3.webp";
import picture4 from "../../../assets/images/about-us/box4.webp";
import picture5 from "../../../assets/images/about-us/box5.webp";

// import picture3 from "../../../assets/images/about-us/laminar8.webp";
// import picture4 from "../../../assets/images/about-us/laminar9.webp";
import { useNavigate } from "react-router-dom"; // ✅ for navigation

const ProductPage6 = () => {
  const images = [picture5,picture4,picture3, picture2, picture1];
  const [selectedImage, setSelectedImage] = useState(images[0]);
   const navigate = useNavigate(); // ✅ hook for navigation

  return (
    <ProductSection>
      <div className="container">
        <div className="row">
          {/* LEFT: Product Images + Features */}
          <div className="col-lg-6 col-md-12 product-images">
            <div className="main-image">
              <img src={selectedImage} alt="Pass Box" loading="lazy"/>
            </div>

            <div className="thumbnail-list">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Pass Box ${index + 1}`}
                  className={selectedImage === img ? "active" : ""}
                  onClick={() => setSelectedImage(img)} loading="lazy"/>
              ))}
            </div>

            {/* Types of Pass Boxes */}
            <div className="models-section">
              <h2>Types of Pass Boxes</h2>
              <ul>
                <li>
                  <FaCheckCircle className="tick-icon" />
                  <strong>Static Pass Box:</strong> Used when material transfer
                  is required between two clean environments of equal
                  cleanliness levels. No air circulation is involved.
                </li>
                <li>
                  <FaCheckCircle className="tick-icon" />
                  <strong>Dynamic Pass Box:</strong> Equipped with HEPA filters
                  and motor blowers to ensure clean air circulation. Designed
                  for material transfer between areas of different cleanliness
                  levels to prevent contamination migration.
                </li>
              </ul>
            </div>

           
          </div>

          {/* RIGHT: Product Content */}
          <div className="col-lg-6 col-md-12 product-details">
            <h1>Static and Dynamic Pass Box</h1>
            <p>
              <strong>Clean Air Systems</strong> manufactures Static and Dynamic
              Pass Boxes that are designed to facilitate the safe transfer of
              materials into and out of cleanrooms without compromising
              cleanliness levels. By acting as an airlock system, our pass boxes
              minimize personnel movement, reduce cross-contamination, and
              maintain controlled environments during material transfer.
            </p>

            <h2>Applications of Pass Boxes</h2>
            <ul>
              <li>Pharmaceutical and biotechnology cleanrooms</li>
              <li>Hospitals and research laboratories</li>
              <li>Food and beverage production units</li>
              <li>Semiconductor and electronics industries</li>
              <li>Any environment requiring strict cross-contamination control</li>
            </ul>

            <h2>Why Choose Clean Air Systems Pass Boxes?</h2>
            <p>
              Our pass boxes are precision-engineered for reliability and
              compliance with <strong>ISO 14644 cleanroom standards</strong>.
              With robust construction, low-maintenance design, and flexible
              customization in size, finish, and filtration options, Clean Air
              Systems is a trusted manufacturer across pharma, healthcare, and
              research facilities PAN India.
            </p>

            <h2>Cleanroom Pass Box – Clean Air Systems</h2>
            <p>
              Clean Air Systems designs and manufactures high-performance Cleanroom Pass Boxes for contamination-free material transfer. Our Pass Boxes act as airlock systems to prevent cross-contamination between different cleanliness zones. As leading Pass Boxes Manufacturers in Chennai, we offer premium Static Pass Boxes and Dynamic Pass Boxes across Pass Boxes Chennai and Pass Boxes India. We also provide competitive Pass Boxes Price options directly from trusted Pass Boxes Manufacturers in India, ensuring safety and compliance in every installation.
            </p>

            <h2>What is a Cleanroom Pass Box?</h2>
            <p>
              A Cleanroom Pass Box is a specialized containment enclosure installed on cleanroom walls to transfer materials safely between two areas. It acts as an airlock with interlocking doors that prevent both doors from opening simultaneously. Our Pass Boxes are available in Static Pass Box models for same-class areas and Dynamic Pass Box models for areas with different cleanliness levels. At Clean Air Systems, we build durable systems for Pass Boxes Chennai and Pass Boxes India projects. We offer reliable systems at competitive Pass Boxes Price from trusted Pass Boxes Manufacturers in Chennai.
            </p>

            <h2>Applications of Pass Boxes</h2>
            <p>
              Pass Boxes are widely used in pharmaceutical production units, laboratories, electronics manufacturing cleanrooms, and hospitals. Static Pass Boxes are suitable for transferring materials between environments of similar cleanliness. Dynamic Pass Boxes are used for material transfer between clean and non-clean areas, featuring HEPA filtration for continuous cleaning. Industries across Pass Boxes Chennai and Pass Boxes India rely on our systems to maintain ISO class standards. We provide customizable models from reputed Pass Boxes Manufacturers in Chennai and Pass Boxes Manufacturers in India.
            </p>

            <h2>Features &amp; Technical Advantages</h2>
            <ul className="advantages-list">
              <li><FaCheckCircle className="tick-icon" /> Mechanical or electromagnetic door interlocking system</li>
              <li><FaCheckCircle className="tick-icon" /> Stainless steel construction (SS 304 or SS 316) for easy sanitization</li>
              <li><FaCheckCircle className="tick-icon" /> Double-skin body design with a smooth internal finish</li>
              <li><FaCheckCircle className="tick-icon" /> Dynamic models equipped with HEPA filters and blowers</li>
              <li><FaCheckCircle className="tick-icon" /> Static models for simple, non-ventilated transfer</li>
              <li><FaCheckCircle className="tick-icon" /> UV light integration for surface sterilization</li>
              <li><FaCheckCircle className="tick-icon" /> LED indicators for door status signaling</li>
              <li><FaCheckCircle className="tick-icon" /> Low noise operation in dynamic models</li>
              <li><FaCheckCircle className="tick-icon" /> Acrylic or toughened glass view panels</li>
              <li><FaCheckCircle className="tick-icon" /> Customizable dimensions for specific laboratory layouts</li>
            </ul>

            <p>
              Clean Air Systems is a trusted name among Pass Boxes Manufacturers in Chennai, offering high-performance containment systems for critical industries. Our Static Pass Boxes and Dynamic Pass Boxes are designed for durability, safety, and compliance. We provide cost-effective Pass Boxes Price options across Pass Boxes Chennai and Pass Boxes India. Our systems are widely preferred among leading Pass Boxes Manufacturers in India for their engineering standards and after-sales support.
            </p>
            <p>
              Our Cleanroom Pass Boxes are built for precision, durability, and maximum safety. With advanced interlocking technology and quality construction, Clean Air Systems continues to deliver superior Pass Box solutions for laboratories and industries across India.
            </p>

             {/* Key Features */}
            <div className="features-section">
              <h2>Key Features</h2>
              <ul>
                <li>
                  {/* <FaCheckCircle className="tick-icon" /> */}
                  Available in SS 304, SS 316
                </li>
                <li>
                  {/* <FaCheckCircle className="tick-icon" /> */}
                  Double-skin design for durability and smooth finish
                </li>
                <li>
                  {/* <FaCheckCircle className="tick-icon" /> */}
                  Mechanical or electromagnetic interlocking system
                </li>
                <li>
                  {/* <FaCheckCircle className="tick-icon" /> */}
                  Doors with clear view panels for easy monitoring
                </li>
                <li>
                  {/* <FaCheckCircle className="tick-icon" /> */}
                  Stainless steel internal platform for easy cleaning
                </li>
                <li>
                  {/* <FaCheckCircle className="tick-icon" /> */}
                  Energy-efficient blower and HEPA filter (Dynamic model)
                </li>
                <li>
                  {/* <FaCheckCircle className="tick-icon" /> */}
                  Optional UV germicidal light for sterilization
                </li>
              </ul>
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
      </div>
    </ProductSection>
  );
};

export default ProductPage6;

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
          align-items: flex-start;
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
      font-size: 38px;
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

