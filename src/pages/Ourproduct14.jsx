import React from "react";
import Layout from "../Layout";
import Header from "../Sections/Header/Header";
import StartBuildingComponent from "../Components/StartBuilding/StartBuildingComponent";
import FooterTwo from "../Sections/Footer/FooterTwo";
import Breadcumbs from "../Components/Breadcumbs/Breadcumbs";
import ProductPage14 from "../Sections/OurServices/ServiceList/PowderContainmentBooths";

const Ourproduct14 = () => {
  return (
    <Layout pageTitle="Clean Air System - Our Products">
      <Header variant="main-header" />
      <Breadcumbs title="Powder Containment Booths" />
      <ProductPage14 />
      <StartBuildingComponent />
      <FooterTwo />
    </Layout>
  );
};

export default Ourproduct14;
