// GalleryPage.js
import React, { useState } from "react";
import styled from "styled-components";
import { galleryData } from "./galleryData";
import { useNavigate } from "react-router-dom";
import gif from "../../../assets/images/gallery/gig.gif";

const faqs = [
  {
    q: "What products does Clean Air Systems manufacture?",
    a: "Clean Air Systems designs and manufactures a wide range of cleanroom and laboratory equipment to meet diverse industry needs. Their offerings include Laminar Airflow Units, Biosafety Cabinets certified to EN12469:2000 and EN 61010-1:2010 (cleanairindia.com), Fume Exhaust Hoods, Air Shower Entry Systems, Powder Containment Booths, Pass Boxes, Fan Filter Units, Sterile/Garment Cabinets, and Modular Cleanrooms (cleanairindia.com)."
  },
  {
    q: "What certifications do your biosafety cabinets have?",
    a: "The biosafety cabinets produced by Clean Air Systems are certified under EN12469:2000 and EN 61010-1:2010. cleanairindia.com"
  },
  {
    q: "Since when has Clean Air Systems been in operation?",
    a: "Clean Air Systems has been serving in the science / cleanroom / lab-equipment sector since 1991. cleanairindia.com"
  },
  {
    q: "Do you offer customized solutions, or only standard configurations?",
    a: "Yes, Clean Air Systems specializes in custom designing and manufacturing of equipment such as laminar airflow units, biosafety cabinets, air show-entry systems, etc., tailored to the customer's requirements. cleanairindia.com"
  },
  {
    q: "Where is Clean Air Systems located?",
    a: "The company is based in Chennai, Tamil Nadu, India, specifically at No. 4, Senthil Nagar, 100 Feet Road, Arumbakkam Metro area, Chennai – 600 106. cleanairindia.com"
  },
  {
    q: "What are modular cleanrooms?",
    a: "Modular cleanrooms are prefabricated or constructed-in-sections cleanroom systems that allow for controlled environment rooms (in terms of particles, airflow, contamination). Clean Air Systems manufactures modular cleanrooms to suit applications where clean environments are critical. cleanairindia.com+1"
  },
  {
    q: "What is a “pass box” and why is it used?",
    a: "A Pass Box is a chamber (usually built into the wall) used to transfer materials between two areas of different cleanliness levels without allowing contamination to pass through. It helps maintain cleanroom integrity by reducing openings of doors. Clean Air Systems offers Pass Boxes among their product line. cleanairindia.com"
  },
  {
    q: "How can I contact Clean Air Systems for inquiries or custom orders?",
    a: "You can contact them via phone: +91 98410 74504, +91 95511 30762, +91 95511 19111, or landline 044-4867 9795. You may also email ravi@cleanairindia.com. cleanairindia.com"
  },
  {
    q: "Do you provide installation / after-sales service and support?",
    a: "While the site doesn’t explicitly detail the after-sales or installation process, the fact that they offer “customized” solutions implies they likely provide installation assistance and support. It is best to contact them directly to confirm service coverage. (You could ask: “Will you handle installation, calibration, validation, and maintenance?”)"
  },
  {
    q: "What industries or applications typically use your products?",
    a: "Clients of Clean Air Systems typically come from sectors that require strict environmental control. These include pharmaceutical laboratories, research and development institutions, hospitals, healthcare and diagnostic centers, biotechnology companies, electronics or semiconductor manufacturers, as well as food and cosmetics manufacturers where maintaining the highest standards of hygiene is critical."
  }
];

const PPage = () => {
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState(galleryData[0]); // default first product
  const [openFaq, setOpenFaq] = useState(null);

  // URL mapping
  const urlMap = {
    "Laminar Airflow": "/laminar-airflow",
    "Biosafety Cabinet": "/biosafety-cabinet",
    "Fume Exhaust Hoods": "/fume-exhaust-hood",
    "Air Shower System": "/air-shower-system",
    "Powder Dispensing Booth": "/powder-dispensing-booth",
    "Pass Boxes": "/pass-box",
    "Sterile Storage Cabinet": "/sterile-garment-storage-cabinet",
    "Modular Cleanroom": "/modular-cleanroom",
    "Softwall Cleanrooms": "/softwall-cleanrooms"
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    const url = urlMap[item.name];
    if (url) navigate(url);
  };

  const handleSelectItem = (item) => {
  setSelectedItem(item); // this updates the right-side image/text
};

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <PageSection>
      <div className="container">
        {/* --------- FIRST BLOCK (Products) --------- */}
        <ContentWrapper>
          {/* Left – Quick Products */}
          <LeftMenu>
  <h2>Quick Products</h2>
  <ul>
    {galleryData.map((item, idx) => (
      <li
        key={idx}
        onClick={() => handleSelectItem(item)} // <— only select
        className={selectedItem?.name === item.name ? "active" : ""}
      >
        {item.name}
        <span>›</span>
      </li>
    ))}
  </ul>
</LeftMenu>

          {/* Right – Selected image + summary */}
          <RightContent>
  {selectedItem && (
    <ContentRow>
      <ImageWrapper
        onClick={() => handleItemClick(selectedItem)}
        style={{ cursor: "pointer" }}
      >
        <img
          src={selectedItem.thumbnail}
          alt={selectedItem.name}
        />
      </ImageWrapper>
      <TextContent>
        <h1
          onClick={() => handleItemClick(selectedItem)}
          style={{ cursor: "pointer" }}
        >
          {selectedItem.name}
        </h1>
        <p>
          {selectedItem.summary ||
            "This is the product summary or description area. You can provide details here."}
        </p>
      </TextContent>
    </ContentRow>
  )}
</RightContent>

        </ContentWrapper>

        {/* --------- SECOND BLOCK (Quick Help + FAQ) --------- */}
        <SecondBlock>
          <SecondLeft>
            <QuickHelpBox>
              <img
                style={{objectFit:"contain"}}
                src={gif}
                alt="Quick Help"
              />
              <div className="content">
                <h3>Quick Help</h3>
                <p>(+91) 98410 74504</p>
                <span>Call Us Today!</span>
              </div>
            </QuickHelpBox>

            {/* <DownloadBox>
              <h3>Download</h3>
              <ul>
                <li>
                  Company Details <span>📄</span>
                </li>
                <li>
                  Our Brochures <span>⬇️</span>
                </li>
              </ul>
            </DownloadBox> */}
          </SecondLeft>

          <SecondRight>
            <h2>Frequently Asked Questions</h2>
            <FAQList>
              {faqs.map((item, idx) => (
                <FAQItem key={idx}>
                  <Question onClick={() => toggleFaq(idx)}>
                    {item.q}
                    <span>{openFaq === idx ? "–" : "+"}</span>
                  </Question>
                  <Answer isOpen={openFaq === idx}>
                    <p>{item.a}</p>
                  </Answer>
                </FAQItem>
              ))}
            </FAQList>
          </SecondRight>
        </SecondBlock>
      </div>
    </PageSection>
  );
};

export default PPage;

/* ---------------- Styled Components ---------------- */

const PageSection = styled.section`
  padding: 40px 20px;
  display: flex;
  justify-content: center;

  .container {
    max-width: 1200px;
    width: 100%;
  }
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 30px;
  margin-bottom: 60px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

/* Left Menu */
const LeftMenu = styled.div`
  background: #f5f7f6;
  padding: 20px;
  border-radius: 12px;

  h2 {
    font-size: 22px;
    margin-bottom: 15px;
    color: #0061a6;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #fff;
      padding: 12px 16px;
      border-radius: 8px;
      margin-bottom: 12px;
      cursor: pointer;
      font-size: 15px;
      color: #333;
      transition: background 0.2s;

      span {
        font-weight: bold;
      }

      &:hover,
      &.active {
        background: #e6f3ff;
      }
    }
  }
`;

/* Right Content */
const RightContent = styled.div`
  text-align: left;
`;

const ContentRow = styled.div`
  display: grid;
  grid-template-columns: 400px 1fr;
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const TextContent = styled.div`
  h1 {
    font-size: 28px;
    margin: 20px 0 10px;
    color: #0061a6;
  }

  p {
    font-size: 16px;
    color: #333;
    line-height: 1.6;
    text-align:justify;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: auto;
  border-radius: 8px;
  overflow: hidden;

  img {
    width: 100%;
    height: 400px;
    object-fit: contain;

    @media (max-width: 768px) {
      height: 250px;
    }
  }
`;

/* -------- Second Block (Quick Help + FAQ) -------- */

const SecondBlock = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 30px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SecondLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

/* Quick Help Box */
const QuickHelpBox = styled.div`
  background: #0061a6; /* your green theme */
  border-radius: 12px;
  overflow: hidden;
  color: #fff;
  text-align: center;

  img {
    width: 100%;
    height: 180px;
    object-fit: cover;
  }

  .content {
    padding: 15px;

    h3 {
      font-size: 20px;
      margin-bottom: 5px;
    }

    p {
      font-size: 18px;
      font-weight: bold;
      margin: 5px 0;
    }

    span {
      font-size: 16px;
    }
  }
`;

/* Download Box */
const DownloadBox = styled.div`
  background: #f5f7f6;
  border-radius: 12px;
  padding: 20px;

  h3 {
    font-size: 20px;
    margin-bottom: 10px;
    color: #0061a6;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      background: #fff;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px 16px;
      border-radius: 8px;
      margin-bottom: 12px;
      cursor: pointer;
      font-size: 15px;
      color: #333;
    }
  }
`;

/* Right FAQ section */
const SecondRight = styled.div`
  margin-top: -180px;

  /* when screen width is 768px or below set margin-top to 0 */
  @media (max-width: 768px) {
    margin-top: 0;
  }

  h2 {
    font-size: 26px;
    margin-bottom: 20px;
    color: #000;
  }
`;


/* FAQ Accordion */
const FAQList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const FAQItem = styled.div`
  border-radius: 8px;
  overflow: hidden;
  background: #fff;
  border: 1px solid #ddd;
`;

const Question = styled.div`
  padding: 15px 20px;
  cursor: pointer;
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f9f9f9;
  font-weight: 500;
`;

const Answer = styled.div`
  max-height: ${(props) => (props.isOpen ? "200px" : "0")};
  overflow: hidden;
  transition: max-height 0.4s ease;

  p {
    padding: ${(props) => (props.isOpen ? "15px 20px" : "0 20px")};
    margin: 0;
    font-size: 15px;
    color: #333;
  }
`;
