import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CustomerService from "./pages/customer-service";
import TeamCollaboration from "./pages/team-collaboration";
import SassLanding from "./pages/sass-landing";
import Corporate from "./pages/corporate";
import AppLanding from "./pages/app-landing";
import CryptoWalletOne from "./pages/crypto-wallet-one";
import CryptoWalletTwo from "./pages/crypto-wallet-two";
import CryptoToken from "./pages/crypto-token";
import Newsletter from "./pages/newsletter";
import SassLandingTwo from "./pages/sass-landing-two";
import DefiLanding from "./pages/defi-landing";
import Chatbot from "./pages/chatbot";
import Business from "./pages/business";
import Finance from "./pages/finance";
import Accounting from "./pages/accounting";
import Portfolio from "./pages/portfolio";
import SignIn from "./pages/sign-in";
import SignUp from "./pages/sign-up";
import ForgotPassword from "./pages/forgot-password";
import Terms from "./pages/terms";
import PrivacyPolicy from "./pages/privacy-policy";
import Blog from "./pages/blog";
import BlogDetails from "./pages/blog-details";
import AboutUs from "./pages/about-us";
import OurServices from "./pages/our-services";
import ContactUs from "./pages/ContactUs";
import PricingPlan from "./pages/pricing-plan";
import Error from "./pages/Error";
import ScrollToTop from "./ScrollToTop";
import ProductPage2 from "./Sections/OurServices/ServiceList/Biosafety";
import OurProduct2 from "./pages/OurProduct2";
import Ourproduct1 from "./pages/Ourproduct1";
import OurProduct3 from "./pages/Ourproduct3";
import Ourrp1 from "./pages/ourrp1";
import Ourrp2 from "./pages/ourrp2";
import OurProduct4 from "./pages/Ourproduct4";
import OurProduct5 from "./pages/Ourproduct5";
import OurProduct6 from "./pages/Ourproduct6";
import OurProduct7 from "./pages/Ourproject7";
import OurProduct8 from "./pages/Ourproduct8";
import OurProduct9 from "./pages/Ourproduct9";
import Ourrp3 from "./pages/Ourrp3";
import Cer from "./pages/cer";
import Gar from "./pages/gar";
import Pro from "./pages/p";
import SignUpPage from "./pages/sign-up";
import SignInPage from "./pages/sign-in";
import Dashboard from "./pages/dashboard";
import CreateNewBlog from "./pages/create-new-blog";
import BlogList from "./pages/blog-list";
import CreateAdmin from "./pages/sign-up/CreateAdmin";
import CreateChildAdmin from "./pages/sign-up/CreateAdmin";
import AdminList from "./pages/sign-up/AdminList";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Corporate />} />
        {/* <Route path="/customer-service" element={<CustomerService />} />
        <Route path="/team-collaboration" element={<TeamCollaboration />} />
        <Route path="/sass-landing" element={<SassLanding />} /> */}
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/admin" element={<SignInPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create-new-blog" element={<CreateNewBlog />} />
        <Route path="/create-childadmin" element={<CreateChildAdmin />} />
        <Route path="admin-list" element={<AdminList />} />
        <Route path="/blog-list" element={<BlogList />} />
        <Route path="/product2" element={<ProductPage2 />} />
        <Route path="/biosafety-cabinet" element={<OurProduct2 />} />
        <Route path="/laminar-airflow" element={<Ourproduct1 />} />
        <Route path="/fume-exhaust-hood" element={<OurProduct3 />} />
        <Route path="/air-shower-system" element={<OurProduct4 />} />
        <Route path="/powder-dispensing-booth" element={<OurProduct5 />} />
        <Route path="/pass-box" element={<OurProduct6 />} />
        <Route path="/sterile-garment-storage-cabinet" element={<OurProduct7 />} />
        <Route path="/softwall-cleanrooms" element={<OurProduct9 />} />
        <Route path="/modular-cleanroom" element={<OurProduct8 />} />
        {/* <Route path="/sass-landing-two" element={<SassLandingTwo />} /> */}
        {/* <Route path="/app-landing" element={<AppLanding />} /> */}
        <Route path="/home" element={<Corporate />} />
        {/* <Route path="/crypto-wallet-one" element={<CryptoWalletOne />} />
        <Route path="/crypto-wallet-two" element={<CryptoWalletTwo />} />
        <Route path="/crypto-token" element={<CryptoToken />} /> */}
        {/* <Route path="/defi-landing" element={<DefiLanding />} />
        <Route path="/newsletter" element={<Newsletter />} />
        <Route path="/chatbot" element={<Chatbot />} /> */}
        <Route path="/recommended-practices-for-clean-rooms" element={<Ourrp1 />} />
        <Route path="/recommended-practices-for-fume-exhaust-hoods" element={<Ourrp2 />} />
        <Route path="/recommended-practices-for-biosafety-cabinets" element={<Ourrp3 />} />
        <Route path="/accreditation" element={<Cer />} />
        <Route path="/gallery" element={<Gar />} />
        <Route path="/products" element={<Pro />} />
        {/* <Route path="/business" element={<Business />} />
        <Route path="/finance" element={<Finance />} />
        <Route path="/accounting" element={<Accounting />} />
        <Route path="/portfolio" element={<Portfolio />} /> */}
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/our-services" element={<OurServices />} />
        {/* <Route path="/pricing-plan" element={<PricingPlan />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} /> */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:blogId" element={<BlogDetails />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
