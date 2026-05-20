import React from "react";
import Layout from "../Layout";
import Header from "../Sections/Header/Header";
import StartBuildingComponent from "../Components/StartBuilding/StartBuildingComponent";
import FooterTwo from "../Sections/Footer/FooterTwo";
import Breadcumbs from "../Components/Breadcumbs/Breadcumbs";
import ProductPage12 from "../Sections/OurServices/ServiceList/DownflowBooth";

const Ourproduct12 = () => {
  return (
    <Layout pageTitle="Clean Air System - Our Products">
      <Header variant="main-header" />
      <Breadcumbs title="Downflow Booth" />
      <ProductPage12 />
      <StartBuildingComponent />
      <FooterTwo />
    </Layout>
  );
};

export default Ourproduct12;
