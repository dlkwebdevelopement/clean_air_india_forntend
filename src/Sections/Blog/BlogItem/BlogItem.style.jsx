import styled from "styled-components";

const BlogItemStyleWrapper = styled.article`
  background: ${({ theme }) => theme.colors.whiteColor};
  border-radius: 15px;
  overflow: hidden;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  height: 100%;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  }

  .letest-blog-img {
    height: 240px;
    width: 100%;
    display: block;
    overflow: hidden;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }

    &:hover img {
      transform: scale(1.05);
    }
  }

  .letest-blog-info {
    flex-grow: 1;
    display: flex;
    flex-direction: column;

    .letest-blog-info-inner {
      padding: 25px 30px;
      display: flex;
      flex-direction: column;
      height: 100%;
      flex-grow: 1;

      h5 {
        font-family: ${({ theme }) => theme.fonts.dmSans};
        text-transform: uppercase;
        font-size: 15px;
        font-weight: 500;
        line-height: 30px;
        color: ${({ theme }) => theme.colors.textColor};
        letter-spacing: 0.1em;
        margin-bottom: 10px;

        span {
          color: ${({ theme }) => theme.colors.primary};
        }
      }

      h4 {
        margin-bottom: 12px;
        a {
          font-family: ${({ theme }) => theme.fonts.PlusJakartaSans};
          font-size: 18px;
          font-weight: 700;
          line-height: 30px;
          color: ${({ theme }) => theme.colors.title};
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
          transition: 0.3s;
          &:hover {
            color: ${({ theme }) => theme.colors.primary};
          }
        }
      }

      p {
        margin-bottom: 20px;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        text-align: justify;
        color: ${({ theme }) => theme.colors.textColor};
        font-size: 15px;
        line-height: 26px;
        flex-grow: 1; /* Pushes the 'Read More' link to the bottom */
      }

      .text-link {
        color: ${({ theme }) => theme.colors.primary};
        transition: 0.3s;
        display: flex;
        align-items: center;
        gap: 8px;
        font-weight: 600;
        font-size: 15px;
        margin-top: auto; /* Aligns to bottom */

        svg {
          font-size: 18px;
          transition: transform 0.3s ease;
        }

        &:hover svg {
          transform: translateX(5px);
        }
      }
    }
  }

  .letest-blog-catd-title {
    font-size: 18px;
    line-height: 30px;
    margin-bottom: 20px;
  }
`;

export default BlogItemStyleWrapper;
