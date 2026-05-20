import AuthenticationStyleWrapper from "./Authentication.style";
import AuthRightSection from "./AuthRightSection";
import AuthFormWrapper from "./AuthFormWrapper";

import GoogleIcon from "../../assets/images/auth-and-utility/google.svg";
import FacebookIcon from "../../assets/images/auth-and-utility/facebook.svg";
import { NavLink } from "react-router-dom";
import ScrollAnimate from "../../Components/ScrollAnimate";

const Signup = () => {
  return (
    <AuthenticationStyleWrapper>
      <AuthFormWrapper>
        <ScrollAnimate delay={200}>
        <h2>Hi there!</h2>
        <h4 className="dm-sans">Get started with your free account 🎯</h4>
        </ScrollAnimate>
        <form action="#" id="commentForm">
          <ScrollAnimate delay={250}>
          <button className="secondary-btn">
            <img height="19" width="18" src={GoogleIcon} alt="icon" loading="lazy"/> Sign up with Google
          </button>
          </ScrollAnimate>
          <ScrollAnimate delay={300}>
          <button className="secondary-btn">
            <img height="18" width="18" src={FacebookIcon} alt="icon" loading="lazy"/> Sign up with Facebook
          </button>
          </ScrollAnimate>

          <ScrollAnimate delay={350}>
          <div className="or-section">
            <p className="mb-0">or</p>
          </div>
          </ScrollAnimate>

          <ScrollAnimate delay={350}>
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

          <ScrollAnimate delay={400}>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="********"
              required
              id="inputPass"
            />
          </div>
          </ScrollAnimate>

          <ScrollAnimate delay={450}>
          <div id="suggestions">
            <p className="suggestion">
              Minimum 8 characters long and containing at least one numeric,
              uppercase, lowercase, and special character.
            </p>
          </div>
          </ScrollAnimate>

          <ScrollAnimate delay={500}>
          <button type="submit" className="form-primary-btn">
            Sign Up
          </button>
          </ScrollAnimate>

          <ScrollAnimate delay={550}>
          <p className="mt-5">
            Already have an account ?&nbsp;
            <NavLink to="/sign-in">Log in now!</NavLink>
          </p>
          <p className="mb-0">
            By signing up, you agree to our <NavLink to="/terms">Terms</NavLink>
            & <NavLink to="/privacy-policy">Privacy Policy.</NavLink>
          </p>
          </ScrollAnimate>
        </form>
      </AuthFormWrapper>

      <AuthRightSection />
    </AuthenticationStyleWrapper>
  );
};

export default Signup;
