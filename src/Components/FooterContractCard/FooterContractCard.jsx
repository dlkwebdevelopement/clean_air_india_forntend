import React from 'react';
import MailIcon from "../../assets/images/icons/mail.svg";
import CallIcon from "../../assets/images/icons/call.svg";
import FooterContractStyle from './FooterContract.style';

const FooterContractCard = () => {
  return (
    <FooterContractStyle className="footer-contract-card">
      <ul>
        <li><img height="18" width="20" src={MailIcon} alt="mail" loading="lazy"/><a href="mailto:support@domain.com">support@domain.com</a></li>
        <li><img height="20" width="20" src={CallIcon} alt="call" loading="lazy"/><a href="tel:+1 014 256 1447">+1 014 256 1447</a></li>
      </ul>
    </FooterContractStyle>
  );
};

export default FooterContractCard;
