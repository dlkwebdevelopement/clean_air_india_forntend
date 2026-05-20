import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import WhatsAppButton from "./shared/WhatsAppButton";
import CallButton from "./shared/CallButton";

// Lazy loaded page components
const Corporate = lazy(() => import("./pages/corporate"));
const AboutUs = lazy(() => import("./pages/about-us"));
const OurServices = lazy(() => import("./pages/our-services"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const Error = lazy(() => import("./pages/Error"));
const ProductPage2 = lazy(() => import("./Sections/OurServices/ServiceList/Biosafety"));
const OurProduct2 = lazy(() => import("./pages/OurProduct2"));
const Ourproduct1 = lazy(() => import("./pages/Ourproduct1"));
const OurProduct3 = lazy(() => import("./pages/Ourproduct3"));
const Ourrp1 = lazy(() => import("./pages/ourrp1"));
const Ourrp2 = lazy(() => import("./pages/ourrp2"));
const OurProduct4 = lazy(() => import("./pages/Ourproduct4"));
const OurProduct5 = lazy(() => import("./pages/Ourproduct5"));
const OurProduct6 = lazy(() => import("./pages/Ourproduct6"));
const OurProduct7 = lazy(() => import("./pages/Ourproject7"));
const OurProduct8 = lazy(() => import("./pages/Ourproduct8"));
const OurProduct9 = lazy(() => import("./pages/Ourproduct9"));
const Ourproduct10 = lazy(() => import("./pages/Ourproduct10"));
const Ourproduct11 = lazy(() => import("./pages/Ourproduct11"));
const Ourproduct12 = lazy(() => import("./pages/Ourproduct12"));
const Ourproduct13 = lazy(() => import("./pages/Ourproduct13"));
const Ourproduct14 = lazy(() => import("./pages/Ourproduct14"));
const Ourrp3 = lazy(() => import("./pages/Ourrp3"));
const Cer = lazy(() => import("./pages/cer"));
const Gar = lazy(() => import("./pages/gar"));
const Pro = lazy(() => import("./pages/p"));
const SignUpPage = lazy(() => import("./pages/sign-up"));
const SignInPage = lazy(() => import("./pages/sign-in"));
const Dashboard = lazy(() => import("./pages/dashboard"));
const CreateNewBlog = lazy(() => import("./pages/create-new-blog"));
const BlogList = lazy(() => import("./pages/blog-list"));
const CreateChildAdmin = lazy(() => import("./pages/sign-up/CreateAdmin"));
const AdminList = lazy(() => import("./pages/sign-up/AdminList"));
const Blog = lazy(() => import("./pages/blog"));
const BlogDetails = lazy(() => import("./pages/blog-details"));

const PageLoader = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#0e1118' }}>
    <div className="spinner"></div>
    <style>{`
      .spinner {
        width: 50px;
        height: 50px;
        border: 5px solid rgba(255, 255, 255, 0.1);
        border-radius: 50%;
        border-top-color: #0095ff;
        animation: spin 1s ease-in-out infinite;
      }
      @keyframes spin {
        to { transform: rotate(360deg); }
      }
    `}</style>
  </div>
);

const App = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Corporate />} />
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
        <Route path="/reverse-flow-booth" element={<Ourproduct10 />} />
        <Route path="/pharma-weighing-booths" element={<Ourproduct11 />} />
        <Route path="/downflow-booth" element={<Ourproduct12 />} />
        <Route path="/fan-filter-units" element={<Ourproduct13 />} />
        <Route path="/powder-containment-booths" element={<Ourproduct14 />} />
        <Route path="/home" element={<Corporate />} />
        <Route path="/recommended-practices-for-clean-rooms" element={<Ourrp1 />} />
        <Route path="/recommended-practices-for-fume-exhaust-hoods" element={<Ourrp2 />} />
        <Route path="/recommended-practices-for-biosafety-cabinets" element={<Ourrp3 />} />
        <Route path="/accreditation" element={<Cer />} />
        <Route path="/gallery" element={<Gar />} />
        <Route path="/products" element={<Pro />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/our-services" element={<OurServices />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:blogId" element={<BlogDetails />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <WhatsAppButton />
      <CallButton />
    </Suspense>
  );
};

export default App;
