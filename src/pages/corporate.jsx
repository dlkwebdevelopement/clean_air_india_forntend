import React, { lazy, Suspense } from "react";
import Layout from "../Layout";
import Header from "../Sections/Header/Header";
import CorporateBanner from "../Sections/Banner/CorporateBanner/CorporateBanner";
import AboutCompany from "./../Sections/Corporate/AboutCompany/AboutCompany";
import BestService from "../Sections/Corporate/BestService/BestService";

// Lazy load below-the-fold components to optimize initial JS bundle size and execution
const CorporateHowWork = lazy(() => import("../Sections/Corporate/CorporateHowWork/CorporateHowWork"));
const CorporateValues = lazy(() => import("../Sections/Corporate/CorporateValues/CorporateValues"));
const CorporateBrandSlider = lazy(() => import("../Sections/Corporate/CorporateBrandSlider/CorporateBrandSlider"));
const FooterTwo = lazy(() => import("../Sections/Footer/FooterTwo"));

const Corporate = () => {
  return (
    <Layout pageTitle={"Clean Air - Home"} scrollVariant={"corporate"}>
      <Header variant={"corporate"} />
      <CorporateBanner />
      <BestService />
      <AboutCompany />

      {/* Local Suspense boundaries prevent page loader spinners and isolate chunk loads */}
      <Suspense fallback={<div style={{ minHeight: "300px", width: "100%" }} />}>
        <CorporateHowWork />
      </Suspense>

      <Suspense fallback={<div style={{ minHeight: "300px", width: "100%" }} />}>
        <CorporateValues />
      </Suspense>

      <Suspense fallback={<div style={{ minHeight: "100px", width: "100%" }} />}>
        <CorporateBrandSlider />
      </Suspense>

      <Suspense fallback={<div style={{ minHeight: "350px", width: "100%" }} />}>
        <FooterTwo />
      </Suspense>
    </Layout>
  );
};

export default Corporate;
