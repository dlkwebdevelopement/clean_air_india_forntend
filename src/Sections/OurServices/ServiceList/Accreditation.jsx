// CertificatesPage.js
import React, { useState, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";

// logos
import logoBSC from "../../../assets/images/certificates/c1.jpg";
import logoLaminar from "../../../assets/images/certificates/c1.jpg";
import logoUdyam from "../../../assets/images/certificates/c2.png";
import logoCE from "../../../assets/images/certificates/c3.jpg";
import logoISO13485 from "../../../assets/images/certificates/c4.png";
import logoISO9001 from "../../../assets/images/certificates/c4.png";
import Laminarflow from "../../../assets/images/certificates/laminar-air-flow.webp"
import EN from "../../../assets/images/certificates/EN.webp"
import ud from "../../../assets/images/certificates/udyam.webp"
import CE from "../../../assets/images/certificates/CE.webp"
import ISO1 from "../../../assets/images/certificates/ISO1.webp"
import ISO2 from "../../../assets/images/certificates/ISO2.webp"


const certificates = [
  {
    name: "EN Certificate – Biosafety Cabinet",
    logo: logoISO9001,
    image:
      EN,
  },
  {
    name: "EN Certificate – Laminar Airflow",
    logo: logoISO13485,
    image: Laminarflow,
  },
  {
    name: "Udyam Registration",
    logo: logoCE,
    image: ud,
  },
  {
    name: "CE Certificate",
    logo: logoUdyam,
    image:
      CE,
  },
  {
    name: "ISO 13485",
    logo: logoLaminar,
    image:
      ISO1,
  },
  {
    name: "ISO 9001:2015",
    logo: logoLaminar,
    image:
      ISO2,
  },
];

const CertificatesPage = () => {
  const isMobile = window.innerWidth <= 768;
  const circleRadius = isMobile ? 110 : 190;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setSelectedIndex((prev) => (prev + 1) % certificates.length);
    }, 3000); // Increased to 3 seconds

    return () => clearInterval(intervalRef.current);
  }, []);

  const handleCertificateClick = (index) => {
    setSelectedIndex(index);
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setSelectedIndex((prev) => (prev + 1) % certificates.length);
    }, 3000);
  };

  const selected = certificates[selectedIndex];

  return (
    <CertificateSection>
      <div className="container">
        <h1 className="title">Our Certifications</h1>
        <div className="row">
          <div className="col-lg-5 col-md-6 left-circle">
            <div className="circle">
              <div className="circle-ring"></div>
              <div
                className="rotating-indicator"
                style={{
                  transform: `rotate(${(360 / certificates.length) * selectedIndex}deg)`,
                }}
              ></div>

              {certificates.map((item, idx) => (
                <div
                  key={idx}
                  className={`circle-item ${selectedIndex === idx ? "active" : ""}`}
                  style={{
                    transform: `rotate(${(360 / certificates.length) * idx}deg)
                      translate(${circleRadius}px) rotate(-${
                      (360 / certificates.length) * idx
                    }deg)`,
                  }}
                  onClick={() => handleCertificateClick(idx)}
                >
                  <img src={item.logo} alt={item.name} />
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-7 col-md-6 certificate-view">
            <img 
              src={selected.image} 
              alt={selected.name}
              onClick={() => setIsFullscreen(true)} loading="lazy"/>
            <h4>{selected.name}</h4>
          </div>
        </div>
      </div>

      {isFullscreen && (
        <FullscreenModal onClick={() => setIsFullscreen(false)}>
          <ModalContent>
            <img src={selected.image} alt={selected.name} loading="lazy"/>
            <h3>{selected.name}</h3>
            <button onClick={() => setIsFullscreen(false)}>Close</button>
          </ModalContent>
        </FullscreenModal>
      )}
    </CertificateSection>
  );
};

export default CertificatesPage;

const glow = keyframes`
  0% { box-shadow: 0 0 5px #0061a6, 0 0 15px #0061a6; }
  100% { box-shadow: 0 0 20px #0061a6, 0 0 40px #0061a6; }
`;

const CertificateSection = styled.section`
  padding: 60px 20px;

  .title {
    text-align: center;
    font-size: 32px;
    margin-bottom: 40px;
    color: #0061a6;
  }

  .row {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
  }

  .left-circle {
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
  }

  .circle {
    position: relative;
    width: 350px;
    height: 350px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .rotating-indicator {
    position: absolute;
    width: 10px;
    height: 170px;
    background: linear-gradient(180deg, #0061a6, transparent);
    top: 50%;
    left: 50%;
    transform-origin: center top;
    border-radius: 5px;
    transition: transform 1.2s ease-in-out; // Slowed down
  }

  .circle-item {
    position: absolute;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: transform 0.3s ease;
  }

  .circle-item img {
    width: 80px;
    height: 80px;
    object-fit: contain;
    border-radius: 50%;
  }

  .circle-item.active {
    animation: ${glow} 1s alternate infinite;
    transform: scale(1.2) !important;
  }

  .certificate-view {
    text-align: center;
  }

  .certificate-view img {
    width: 100%;
    max-width: 500px;
    border: 2px solid #ddd;
    border-radius: 8px;
    margin-bottom: 15px;
    cursor: pointer;
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.02);
    }
  }

  .certificate-view h4 {
    font-size: 20px;
    color: #333;
  }

  @media (max-width: 768px) {
    .circle {
      width: 220px;
      height: 220px;
    }

    .rotating-indicator {
      height: 100px;
    }

    .circle-item {
      width: 55px;
      height: 55px;
    }

    .circle-item img {
      width: 40px;
      height: 40px;
    }
  }

  .circle-ring {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 4px dotted #717a80ff;
    box-sizing: border-box;
  }

  .circle-ring::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 50%;
    border: 2px solid transparent;
    border-top-color: #0061a6;
    border-right-color: #0061a6;
    animation: spin 4s linear infinite;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const FullscreenModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  cursor: pointer;
`;

const ModalContent = styled.div`
  max-width: 90%;
  max-height: 90%;
  text-align: center;
  color: white;

  img {
    max-width: 100%;
    max-height: 80vh;
    border-radius: 8px;
  }

  h3 {
    margin: 20px 0;
    font-size: 24px;
  }

  button {
    background: #0061a6;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;

    &:hover {
      background: #004d84;
    }
  }
`;