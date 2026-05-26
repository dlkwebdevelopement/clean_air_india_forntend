import styled from "styled-components";

const CorporateBannerStyle = styled.section`
  position: relative;
  z-index: 11;
  overflow: hidden;

  /* LCP Poster Image */
  .banner-poster {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 0;
  }

  /* Background Video */
  .video-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
  }

  /* Overlay */
  .overlay {
    background: rgba(29, 41, 61, 0.5);
    padding: 198px 0px;
    height: 100%;
    position: relative;
    z-index: 2; /* above image + video */
  }

  .corporate-banner-text {
    max-width: 613px;
    width: 100%;
    margin: auto;
    padding: 0px 20px;

    h4 {
      font-size: 28px;
      font-weight: 600;
      margin-bottom: 19px;
    }

    h1 {
      font-size: 80px;
      line-height: 125%;
      margin-bottom: 32px;
    }

    p {
      font-size: 18px;
      line-height: 36px;
      margin-bottom: 48px;
    }
  }

  @media screen and (min-width: 991px) and (max-width: 1200px) {
    .overlay {
      padding: 140px 0px;
    }
  }

  @media screen and (max-width: 991px) {
    .overlay {
      padding: 120px 0px;
    }

    .corporate-banner-text h4 {
      font-size: 22px;
    }

    .corporate-banner-text h1 {
      font-size: 55px;
    }
  }

  @media screen and (max-width: 767px) {
    .overlay {
      padding: 120px 0px 80px 0px;
    }

    .corporate-banner-text h4 {
      font-size: 18px;
    }

    .corporate-banner-text h1 {
      font-size: 40px;
    }
  }

  @media screen and (max-width: 575px) {
    .corporate-banner-text h2 {
      font-size: 32px;
    }
  }
`;

export default CorporateBannerStyle;