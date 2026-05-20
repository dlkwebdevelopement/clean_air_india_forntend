import React from "react";
import Layout from "../Layout";
import Header from "../Sections/Header/Header";
import StartBuildingComponent from "../Components/StartBuilding/StartBuildingComponent";
import FooterTwo from "../Sections/Footer/FooterTwo";
import Breadcumbs from "../Components/Breadcumbs/Breadcumbs";
import ProductPage10 from "../Sections/OurServices/ServiceList/ReverseFlowBooth";

const Ourproduct10 = () => {
  return (
    <Layout pageTitle="Clean Air System - Our Products">
      <Header variant="main-header" />
      <Breadcumbs title="Reverse Flow Booth" />
      <ProductPage10 />
      <StartBuildingComponent />
      <FooterTwo />
    </Layout>
  );
};

export default Ourproduct10;
