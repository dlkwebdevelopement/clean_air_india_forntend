import styled from "styled-components";

const ContactLocationStyle = styled.section`
  padding: 65px 0 130px 0;

  .map-content {
    border-radius: 30px;
    overflow: hidden;
    position: relative;
  }

  .contact-map {
    width: 100%;
    height: 450px;
    iframe {
      width: 100%;
    }
  }

  .map-info-card {
    position: absolute;
    z-index: 1;
    width: 350px;
    height: 490px;
    padding: 10px;
    background-color: ${({ theme }) => theme.colors.whiteColor};
    border-radius: 20px;

    .list {
      padding: 0;
      list-style: none;
      margin: 0;
      height: 100%;
      overflow-y: auto;
      -ms-overflow-style: none;
      /* Internet Explorer 10+ */
      scrollbar-width: none;
      transition: width 0.3s;

      &::-webkit-scrollbar {
        display: none;
        /* Safari and Chrome */
      }
      li {
        &:not(:first-child) {
          margin-top: 10px;
        }
      }

      .list-item {
        display: flex;
        gap: 19px;
        .list-icon {
          flex: 0 0 auto;
        }
        img {
          width: 20px;
          height: 20px;
        }
        h4 {
          font-size: 15px;
          line-height: 45px;
          margin-bottom: 0;
        }
        p {
          margin-bottom: 0;
        }
      }

      .list-icon {
        line-height: 45px;
      }
    }
  }

  /* ✅ Tablet view (max-width: 992px) */
  @media screen and (max-width: 992px) {
    padding: 50px 0 100px 0;

    .map-info-card {
      width: 320px;
      left: 20px;
      top: 20px;
      padding: 15px;
    }

    .contact-map {
      height: 400px;
    }
  }

  /* ✅ Mobile view (max-width: 767px) */
  @media screen and (max-width: 767px) {
    padding: 30px 0 80px 0;

    .map-content {
      display: flex;
      flex-direction: column;
    }

    .map-info-card {
      position: relative;
      top: 0;
      left: 0;
      width: 100%;
      height: auto;
      max-width: 100%;
      margin-bottom: 20px;
      border-radius: 15px;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    }

    .contact-map {
      height: 350px;
    }
  }

  /* ✅ Small mobile view (max-width: 480px) */
  @media screen and (max-width: 480px) {
    padding: 20px 0 60px 0;

    .map-info-card {
      padding: 12px;
    }

    .list-item {
      gap: 10px;

      h4 {
        font-size: 14px;
      }

      p,
      a {
        font-size: 13px;
      }
    }

    .contact-map {
      height: 300px;
    }
  }
`;

export default ContactLocationStyle;
