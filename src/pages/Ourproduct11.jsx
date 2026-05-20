import React from "react";
import Layout from "../Layout";
import Header from "../Sections/Header/Header";
import StartBuildingComponent from "../Components/StartBuilding/StartBuildingComponent";
import FooterTwo from "../Sections/Footer/FooterTwo";
import Breadcumbs from "../Components/Breadcumbs/Breadcumbs";
import ProductPage11 from "../Sections/OurServices/ServiceList/PharmaWeighingBooth";

const Ourproduct11 = () => {
  return (
    <Layout pageTitle="Clean Air System - Our Products">
      <Header variant="main-header" />
      <Breadcumbs title="Pharma Weighing Booths" />
      <ProductPage11 />
      <StartBuildingComponent />
      <FooterTwo />
    </Layout>
  );
};

export default Ourproduct11;
