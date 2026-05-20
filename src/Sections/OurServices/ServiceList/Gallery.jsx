// GalleryPage.js
import React, { useState } from "react";
import styled from "styled-components";
import { galleryData } from "./galleryData";

const GalleryPage = () => {
  const [selected, setSelected] = useState(null);

  return (
    <PageSection>
      <div className="container">
        <h1>Our Products Gallery</h1>

        {/* Grid of product cards */}
        <Grid>
          {galleryData.map((item, idx) => (
            <Card key={idx} onClick={() => setSelected(item)}>
              <img src={item.thumbnail} alt={item.name} loading="lazy"/>
              <h3>{item.name}</h3>
            </Card>
          ))}
        </Grid>

        {/* Lightbox / detail gallery */}
        {selected && (
          <Lightbox>
            <div className="overlay" onClick={() => setSelected(null)} />
            <div className="content">
              <h2>{selected.name}</h2>
              <ImageGrid>
                {selected.images.map((img, i) => (
                  <img key={i} src={img} alt={`${selected.name}-${i}`} loading="lazy"/>
                ))}
              </ImageGrid>
              <button onClick={() => setSelected(null)}>Close</button>
            </div>
          </Lightbox>
        )}
      </div>
    </PageSection>
  );
};

export default GalleryPage;


const PageSection = styled.section`
  padding: 40px 20px;
  display: flex;
  justify-content: center;

  .container {
    max-width: 1200px;
    width: 100%;
    text-align: center;

    h1 {
      font-size: 32px;
      margin-bottom: 30px;
      color: #0061a6;
    }
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 25px;

  @media (max-width: 600px) {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    gap: 10px;
  }
`;

const Card = styled.div`
  background: #f9f9f9;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.03);
  }

  img {
    width: 100%;
    height: 220px;
    object-fit: contain;
  }

  h3 {
    font-size: 14px;
    margin: 8px 0;
    color: #333;
  }
`;

const Lightbox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;

  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.6);
  }

  .content {
    position: relative;
    background: white;
    padding: 20px;
    max-width: 90%;
    max-height: 80%;
    overflow-y: auto;
    border-radius: 10px;
    z-index: 1000;

    h2 {
      font-size: 20px;
      margin-bottom: 10px;
    }

    button {
      margin-top: 10px;
      background: #0061a6;
      color: white;
      border: none;
      padding: 8px 12px;
      border-radius: 4px;
      cursor: pointer;
    }
  }
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 30px;

  img {
    width: 700px;
    height: 240px;
    object-fit: contain;
    border-radius: 6px;
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));

    img {
      height: 100px;
    }
  }
`;
