import CryptoTwoBannerStyle from "./CryptoTwoBanner.style";

import andriodIcon from "../../../assets/images/crypto2/andriod-icon.svg";
import appleIcon from "../../../assets/images/crypto2/apple-icon.svg";
import mobileImg from "../../../assets/images/crypto2/mobile-img.webp";
import ethCoin from "../../../assets/images/crypto2/eth-coin.png";
import btcCoin from "../../../assets/images/crypto2/btc-coin.png";
import usdtCoin from "../../../assets/images/crypto2/usdt-coin.png";
import ScrollAnimate from './../../../Components/ScrollAnimate';

const CryptoTwoBanner = () => {
  return (
    <CryptoTwoBannerStyle className="crypto2-hero-section">
      <div className="container">
        <div className="row flex-row-reverse">
          <div className="col-md-7">
           <ScrollAnimate delay={200}>
           <div className="crypto2-hero-text">
              <h1>
                Crypto wallet <br /> For digital assets
              </h1>
              <p>
                Staco is the dedicated platform for human management that helps
                to grow your startup business quickly
              </p>
              <div className="crypto2-banner-links">
                <div className="crypto2-btn">
                  <a href="#" className="crypto2-banner-btn">
                    <span className="btn-inner">
                      <span className="btn-normal-text">Create a Wallet</span>
                      <span className="btn-hover-text">Create a Wallet</span>
                    </span>
                  </a>
                </div>
                <a href="#" className="os-link">
                  <img height="26" width="46" src={andriodIcon} alt="icon" />
                </a>
                <a href="#" className="os-link">
                  <img height="36" width="30" src={appleIcon} alt="icon" />
                </a>
              </div>
            </div>
           </ScrollAnimate>
          </div>
          <div className="col-md-5">
            <div className="crypto2-hero-left">
              <ScrollAnimate delay={300}>
              <div className="crypto2-hero-img">
                <img height="550" width="393" src={mobileImg} alt="icon" />
                <img height="60" width="63" src={ethCoin} alt="icon" className="coin1" />
                <img height="70" width="90" src={btcCoin} alt="icon" className="coin2" />
                <img height="30" width="49" src={usdtCoin} alt="icon" className="coin3" />
              </div>
              </ScrollAnimate>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="bottom-overlay" /> */}
    </CryptoTwoBannerStyle>
  );
};

export default CryptoTwoBanner;
