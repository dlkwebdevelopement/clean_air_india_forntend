import { useEffect } from "react";
import { Link } from "react-router-dom";
import FooterStyleWrapper from "./Footer.style";
import Data from "../../assets/data/footer/footer";
import FooterSocialLinks from "../../assets/data/footer/footerSocialLinks";
import Venobox from "venobox/dist/venobox";

import FooterImg from "../../assets/images/footer/footer-2.png";
import FooterLogo from "../../assets/images/logo/Logos.svg";

const FooterTwo = () => {
  useEffect(() => {
    new Venobox({
      selector: ".my-video-links",
    });
  }, []);

  return (
    <FooterStyleWrapper className="footer-section v3">
      {/* Footer top start */}
      <div className="footer-top">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-3 col-md-6">
              <div className="footer-img">
                <img src={FooterLogo} width="700" height="300" alt="footer-img" />
                {/* <a
                  className="my-video-links"
                  href="https://www.youtube.com/embed/_k8RsMr82zM?si=hvUQJcwkuRaEGC3n"
                  data-autoplay="true"
                  data-vbtype="video"
                >
                  <span className="iconify" data-icon="el:play" />
                </a> */}
              </div>
            </div>
            <div className="col-lg-8">
              <div className="row">
                 {Data?.map((item) => (
                  <div key={item.title} className="col-md-3 col-6">
                    <aside className="footer-widget">
                      <div className="widget-title">
                        <h6>{item.title}</h6>
                      </div>
                      <div className="widget-body">
                        <ul className="widget-list">
                          {item.menuList?.map((menuItem) => (
                            <li key={menuItem.url}>
                              <Link to={menuItem.url.startsWith("/") ? menuItem.url : `/${menuItem.url}`}>
                                {menuItem.title}
                                {menuItem.badgeTitle && (
                                  <span className="template-badge">Hiring</span>
                                )}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </aside>
                  </div>
                ))}
<div className="footer-bottom">
  <div className="container">
    <div className="row footer-bottom-row">
      <div className="col-lg-6">
        <ul className="social-link">
          {FooterSocialLinks?.map((item, i) => (
            <li key={i}>
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                <span className="social-icon">
                  <img src={item.imgV2} alt={item.title} loading="lazy"/>
                  <img src={item.imgV2} alt={item.title} loading="lazy"/>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="col-lg-6 text-lg-end">
        <div className="footer-copyright">
          <p className="mb-0">
            2025 <Link to="/">Clean Air</Link>. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer top end */}
      {/* Footer bottom start */}
      
      {/* Footer bottom end */}
    </FooterStyleWrapper>
  );
};

export default FooterTwo;
