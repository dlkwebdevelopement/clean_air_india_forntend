import AuthenticationStyleWrapper from "./Authentication.style";
import AuthRightSection from "./AuthRightSection";
import AuthFormWrapper from "./AuthFormWrapper";

import GoogleIcon from "../../assets/images/auth-and-utility/google.svg";
import FacebookIcon from "../../assets/images/auth-and-utility/facebook.svg";
import { NavLink } from "react-router-dom";
import ScrollAnimate from "../../Components/ScrollAnimate";

const Signin = () => {
  return (
    <AuthenticationStyleWrapper>
      <AuthFormWrapper>
        <ScrollAnimate delay={200}>
          <h2>Hi there!</h2>
          <h4 className="dm-sans">Welcome to Staco 👋</h4>
        </ScrollAnimate>
        <form action="/" id="commentForm">
          <ScrollAnimate delay={250}>
            <div className="form-group">
              <label>Email address</label>
              <input
                type="email"
                name="email"
                placeholder="e.g.  example@mail.com"
                required
              />
            </div>
          </ScrollAnimate>

          <ScrollAnimate delay={300}>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="********"
                required
              />
            </div>
          </ScrollAnimate>

          <ScrollAnimate delay={350}>
            <button type="submit" className="form-primary-btn">
              Login
            </button>
          </ScrollAnimate>

          <ScrollAnimate delay={400}>
            <div className="or-section">
              <p className="mb-0">or</p>
            </div>
          </ScrollAnimate>

          <ScrollAnimate delay={450}>
            <button className="secondary-btn">
              <img height="19" width="18" src={GoogleIcon} alt="icon" loading="lazy"/> Log in with Google
            </button>
          </ScrollAnimate>
          <ScrollAnimate delay={500}>
            <button className="secondary-btn">
              <img height="18" width="18" src={FacebookIcon} alt="icon" loading="lazy"/> Log in with Facebook
            </button>
          </ScrollAnimate>

          <ScrollAnimate delay={550}>
            <NavLink to="/forgot-password" className="auth-link">
              Forgot my password
            </NavLink>
            <p className="mt-3">
              Don’t have an account ?{" "}
              <NavLink to="/sign-up">Register now !</NavLink>
            </p>
            <p className="mb-0">
              By signing in, you agree to our{" "}
              <NavLink to="/terms">Terms</NavLink> &{" "}
              <NavLink to="/privacy-policy">Privacy Policy.</NavLink>
            </p>
          </ScrollAnimate>
        </form>
      </AuthFormWrapper>

      <AuthRightSection />
    </AuthenticationStyleWrapper>
  );
};

export default Signin;
