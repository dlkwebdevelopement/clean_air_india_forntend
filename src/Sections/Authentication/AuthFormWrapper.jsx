import { GoArrowLeft } from "react-icons/go";
import LogoDark from "../../assets/images/logo/logo-dark.svg";
import { NavLink } from "react-router-dom";
import ScrollAnimate from "../../Components/ScrollAnimate";

const AuthFormWrapper = ({ children }) => {
  return (
    <section className="auth-form-section">
      <div className="auth-page-header">
        <NavLink to="/" className="logo">
          <ScrollAnimate delay={200}>
            <img height="40" width="136" src={LogoDark} alt="logo" />
          </ScrollAnimate>
        </NavLink>
        <NavLink to="/" className="back-link">
          <ScrollAnimate>
            <GoArrowLeft />
            Go Back
          </ScrollAnimate>
        </NavLink>
      </div>
      <div className="auth-content">{children}</div>
    </section>
  );
};

export default AuthFormWrapper;
