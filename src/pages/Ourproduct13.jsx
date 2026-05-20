import React from "react";
import Layout from "../Layout";
import Header from "../Sections/Header/Header";
import StartBuildingComponent from "../Components/StartBuilding/StartBuildingComponent";
import FooterTwo from "../Sections/Footer/FooterTwo";
import Breadcumbs from "../Components/Breadcumbs/Breadcumbs";
import ProductPage13 from "../Sections/OurServices/ServiceList/FanFilterUnits";

const Ourproduct13 = () => {
  return (
    <Layout pageTitle="Clean Air System - Our Products">
      <Header variant="main-header" />
      <Breadcumbs title="Fan Filter Units" />
      <ProductPage13 />
      <StartBuildingComponent />
      <FooterTwo />
    </Layout>
  );
};

export default Ourproduct13;
