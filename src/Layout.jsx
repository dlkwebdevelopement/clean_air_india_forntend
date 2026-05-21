import { Helmet, HelmetProvider } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import ScrollTop from "./Components/ScrollTop/ScrollTop";

const metaDataMap = {
  "/": {
    title: "Clean Air Systems Chennai | Modular Cleanroom Solutions",
    description: "Clean Air Systems offers laminar airflow, biosafety cabinets, air showers and modular cleanroom solutions in Chennai with ISO standards and trusted support."
  },
  "/home": {
    title: "Clean Air Systems Chennai | Modular Cleanroom Solutions",
    description: "Clean Air Systems offers laminar airflow, biosafety cabinets, air showers and modular cleanroom solutions in Chennai with ISO standards and trusted support."
  },
  "/about-us": {
    title: "About Clean Air Systems | Cleanroom Equipment Chennai",
    description: "Learn about Clean Air Systems, Chennai’s trusted cleanroom equipment manufacturer offering laminar airflow, biosafety cabinets and modular cleanrooms since 1991."
  },
  "/products": {
    title: "Cleanroom Products Manufacturers Chennai | Clean Air Systems",
    description: "Explore laminar airflow, biosafety cabinets, air showers, pass boxes and modular cleanroom products from Clean Air Systems Chennai."
  },
  "/laminar-airflow": {
    title: "Laminar Airflow Manufacturers Chennai | Clean Air Systems",
    description: "Clean Air Systems manufactures laminar airflow workstations and clean benches in Chennai with HEPA filtration and ISO Class 5 standards."
  },
  "/biosafety-cabinet": {
    title: "Biosafety Cabinet Manufacturers Chennai | Clean Air Systems",
    description: "Clean Air Systems offers Class II biosafety cabinets in Chennai with HEPA filtration, ISO Class 5 standards and EN certified safety performance."
  },
  "/fume-exhaust-hood": {
    title: "Fume Exhaust Hood Manufacturers Chennai | Clean Air Systems",
    description: "Clean Air Systems manufactures laboratory fume exhaust hoods in Chennai with ducted and ductless designs for safe chemical fume extraction."
  },
  "/air-shower-system": {
    title: "Air Shower System Manufacturers Chennai | Clean Air Systems",
    description: "Clean Air Systems provides air shower entry systems in Chennai for cleanrooms with high velocity airflow and advanced contamination control."
  },
  "/powder-dispensing-booth": {
    title: "Powder Dispensing Booth Manufacturers Chennai | Clean Air",
    description: "Clean Air Systems manufactures powder dispensing booths in Chennai for safe powder handling with HEPA filtration and contamination control."
  },
  "/pass-box": {
    title: "Pass Box Manufacturers Chennai | Clean Air Systems",
    description: "Clean Air Systems manufactures static and dynamic pass boxes in Chennai for cleanroom material transfer with contamination control solutions."
  },
  "/sterile-garment-storage-cabinet": {
    title: "Sterile Garment Storage Cabinet Chennai | Clean Air Systems",
    description: "Clean Air Systems manufactures sterile garment storage cabinets in Chennai with HEPA filtration for cleanroom garment protection and hygiene."
  },
  "/modular-cleanroom": {
    title: "Modular Cleanroom Manufacturers Chennai | Clean Air Systems",
    description: "Clean Air Systems designs modular cleanrooms in Chennai with ISO standards, HEPA filtration and contamination control for industrial applications."
  },
  "/softwall-cleanrooms": {
    title: "Softwall Cleanrooms Manufacturers Chennai | Clean Air Systems",
    description: "Clean Air Systems designs softwall cleanrooms in Chennai with flexible modular structures, HEPA filtration and ISO standard contamination control."
  },
  "/reverse-flow-booth": {
    title: "Reverse Flow Booth Manufacturers Chennai | Clean Air Systems",
    description: "Clean Air Systems manufactures high-performance reverse flow booths in Chennai for advanced powder containment and safe chemical handling."
  },
  "/pharma-weighing-booths": {
    title: "Pharma Weighing Booths Chennai | Clean Air Systems",
    description: "Clean Air Systems designs and manufactures high-performance Pharma Weighing Booths for safe and precise powder handling in Chennai."
  },
  "/downflow-booth": {
    title: "Downflow Booth Manufacturer Chennai | Clean Air Systems",
    description: "Clean Air Systems is a leading Downflow Booth Manufacturer delivering advanced containment solutions for powder handling and dust control in Chennai."
  },
  "/fan-filter-units": {
    title: "Fan Filter Units Manufacturers Chennai | Clean Air Systems",
    description: "Clean Air Systems manufactures high-performance Fan Filter Units in Chennai for cleanroom air filtration and contamination control."
  },
  "/powder-containment-booths": {
    title: "Powder Containment Booths Manufacturers Chennai | Clean Air Systems",
    description: "Clean Air Systems designs and manufactures advanced Powder Containment Booths in Chennai for critical industrial environments."
  },
  "/recommended-practices-for-clean-rooms": {
    title: "Clean Room Recommended Practices | Clean Air Systems",
    description: "Explore recommended clean room practices by Clean Air Systems for contamination control, hygiene standards and ISO compliant cleanroom operations."
  },
  "/recommended-practices-for-fume-exhaust-hoods": {
    title: "Recommended Practices for Fume Exhaust Hoods | Clean Air",
    description: "Learn recommended practices for fume exhaust hoods by Clean Air Systems to ensure safe chemical handling, airflow efficiency and lab safety standards."
  },
  "/recommended-practices-for-biosafety-cabinets": {
    title: "Recommended Practices for Biosafety Cabinets | Clean Air",
    description: "Explore recommended practices for biosafety cabinets by Clean Air Systems to ensure contamination control, operator safety and lab compliance."
  },
  "/accreditation": {
    title: "Cleanroom Certifications & Accreditation | Clean Air Systems",
    description: "Explore Clean Air Systems accreditations including ISO certifications, CE approvals and EN standards for cleanroom equipment manufacturing."
  },
  "/gallery": {
    title: "Cleanroom Equipment Gallery Chennai | Clean Air Systems",
    description: "Explore Clean Air Systems gallery featuring cleanroom equipment, laminar airflow units, biosafety cabinets and modular cleanroom installations."
  },
  "/blog": {
    title: "Cleanroom Blog & Articles | Clean Air Systems Chennai",
    description: "Read Clean Air Systems blogs on cleanroom solutions, biosafety cabinets, laminar airflow and contamination control technologies."
  },
  "/contact-us": {
    title: "Contact Clean Air Systems Chennai | Cleanroom Experts",
    description: "Contact Clean Air Systems in Chennai for cleanroom equipment, laminar airflow, biosafety cabinets and modular cleanroom solutions."
  }
};

const Layout = ({ pageTitle, scrollVariant, children }) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const matchedMeta = metaDataMap[currentPath] || {};

  const title = matchedMeta.title || pageTitle || "Clean Air Systems India | Cleanroom Solutions & Equipment";
  const description = matchedMeta.description || "Premier manufacturer of cleanroom systems, laminar air flow systems, biosafety cabinets, fume hoods, and pass boxes with 30+ years of excellence.";
  const canonicalUrl = `https://www.cleanairindia.com${currentPath === "/" ? "" : currentPath}`;

  return (
    <HelmetProvider>
      <Helmet>
        {/* title tag */}
        <title>{title}</title>

        {/* description tag */}
        <meta name="description" content={description} />

        {/* Canonical URL */}
        <link rel="canonical" href={canonicalUrl} />

        {/* Open Graph / Facebook Meta Tags */}
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:url" content={canonicalUrl} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />

        {/* favicon included here  */}
        <link rel="shortcut icon" href="/logo-blue-svg.svg" type="image/x-icon" />

        {/* apple touch icon included here */}
        <link rel="apple-touch-icon" href="/favicon.png" />

        {/* Fonts loaded in index.html <head> for optimal performance — not here */}
      </Helmet>
      {/* overlay while mobile menu open */}
      <div className="staco-overly-bg"></div>

      {/* content */}
      {children}

      {/* scroll top component */}
      {/* <ScrollTop variant={scrollVariant} /> */}
    </HelmetProvider>
  );
};

export default Layout;
